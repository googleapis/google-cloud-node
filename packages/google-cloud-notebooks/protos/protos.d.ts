// Copyright 2021 Google LLC
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

        /** Namespace notebooks. */
        namespace notebooks {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an Environment. */
                interface IEnvironment {

                    /** Environment name */
                    name?: (string|null);

                    /** Environment displayName */
                    displayName?: (string|null);

                    /** Environment description */
                    description?: (string|null);

                    /** Environment vmImage */
                    vmImage?: (google.cloud.notebooks.v1.IVmImage|null);

                    /** Environment containerImage */
                    containerImage?: (google.cloud.notebooks.v1.IContainerImage|null);

                    /** Environment postStartupScript */
                    postStartupScript?: (string|null);

                    /** Environment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Environment. */
                class Environment implements IEnvironment {

                    /**
                     * Constructs a new Environment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IEnvironment);

                    /** Environment name. */
                    public name: string;

                    /** Environment displayName. */
                    public displayName: string;

                    /** Environment description. */
                    public description: string;

                    /** Environment vmImage. */
                    public vmImage?: (google.cloud.notebooks.v1.IVmImage|null);

                    /** Environment containerImage. */
                    public containerImage?: (google.cloud.notebooks.v1.IContainerImage|null);

                    /** Environment postStartupScript. */
                    public postStartupScript: string;

                    /** Environment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Environment imageType. */
                    public imageType?: ("vmImage"|"containerImage");

                    /**
                     * Creates a new Environment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Environment instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IEnvironment): google.cloud.notebooks.v1.Environment;

                    /**
                     * Encodes the specified Environment message. Does not implicitly {@link google.cloud.notebooks.v1.Environment.verify|verify} messages.
                     * @param message Environment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Environment message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Environment.verify|verify} messages.
                     * @param message Environment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Environment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Environment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Environment;

                    /**
                     * Decodes an Environment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Environment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Environment;

                    /**
                     * Verifies an Environment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Environment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Environment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Environment;

                    /**
                     * Creates a plain object from an Environment message. Also converts values to other types if specified.
                     * @param message Environment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.Environment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Environment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VmImage. */
                interface IVmImage {

                    /** VmImage project */
                    project?: (string|null);

                    /** VmImage imageName */
                    imageName?: (string|null);

                    /** VmImage imageFamily */
                    imageFamily?: (string|null);
                }

                /** Represents a VmImage. */
                class VmImage implements IVmImage {

                    /**
                     * Constructs a new VmImage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IVmImage);

                    /** VmImage project. */
                    public project: string;

                    /** VmImage imageName. */
                    public imageName?: (string|null);

                    /** VmImage imageFamily. */
                    public imageFamily?: (string|null);

                    /** VmImage image. */
                    public image?: ("imageName"|"imageFamily");

                    /**
                     * Creates a new VmImage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmImage instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IVmImage): google.cloud.notebooks.v1.VmImage;

                    /**
                     * Encodes the specified VmImage message. Does not implicitly {@link google.cloud.notebooks.v1.VmImage.verify|verify} messages.
                     * @param message VmImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IVmImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmImage message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.VmImage.verify|verify} messages.
                     * @param message VmImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IVmImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmImage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.VmImage;

                    /**
                     * Decodes a VmImage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.VmImage;

                    /**
                     * Verifies a VmImage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmImage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmImage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.VmImage;

                    /**
                     * Creates a plain object from a VmImage message. Also converts values to other types if specified.
                     * @param message VmImage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.VmImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmImage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ContainerImage. */
                interface IContainerImage {

                    /** ContainerImage repository */
                    repository?: (string|null);

                    /** ContainerImage tag */
                    tag?: (string|null);
                }

                /** Represents a ContainerImage. */
                class ContainerImage implements IContainerImage {

                    /**
                     * Constructs a new ContainerImage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IContainerImage);

                    /** ContainerImage repository. */
                    public repository: string;

                    /** ContainerImage tag. */
                    public tag: string;

                    /**
                     * Creates a new ContainerImage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContainerImage instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IContainerImage): google.cloud.notebooks.v1.ContainerImage;

                    /**
                     * Encodes the specified ContainerImage message. Does not implicitly {@link google.cloud.notebooks.v1.ContainerImage.verify|verify} messages.
                     * @param message ContainerImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IContainerImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContainerImage message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ContainerImage.verify|verify} messages.
                     * @param message ContainerImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IContainerImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContainerImage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContainerImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ContainerImage;

                    /**
                     * Decodes a ContainerImage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContainerImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ContainerImage;

                    /**
                     * Verifies a ContainerImage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContainerImage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContainerImage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ContainerImage;

                    /**
                     * Creates a plain object from a ContainerImage message. Also converts values to other types if specified.
                     * @param message ContainerImage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ContainerImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContainerImage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Event. */
                interface IEvent {

                    /** Event reportTime */
                    reportTime?: (google.protobuf.ITimestamp|null);

                    /** Event type */
                    type?: (google.cloud.notebooks.v1.Event.EventType|keyof typeof google.cloud.notebooks.v1.Event.EventType|null);
                }

                /** Represents an Event. */
                class Event implements IEvent {

                    /**
                     * Constructs a new Event.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IEvent);

                    /** Event reportTime. */
                    public reportTime?: (google.protobuf.ITimestamp|null);

                    /** Event type. */
                    public type: (google.cloud.notebooks.v1.Event.EventType|keyof typeof google.cloud.notebooks.v1.Event.EventType);

                    /**
                     * Creates a new Event instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Event instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IEvent): google.cloud.notebooks.v1.Event;

                    /**
                     * Encodes the specified Event message. Does not implicitly {@link google.cloud.notebooks.v1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Event message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Event message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Event;

                    /**
                     * Decodes an Event message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Event;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Event;

                    /**
                     * Creates a plain object from an Event message. Also converts values to other types if specified.
                     * @param message Event
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        IDLE = 1
                    }
                }

                /** Properties of an ExecutionTemplate. */
                interface IExecutionTemplate {

                    /** ExecutionTemplate scaleTier */
                    scaleTier?: (google.cloud.notebooks.v1.ExecutionTemplate.ScaleTier|keyof typeof google.cloud.notebooks.v1.ExecutionTemplate.ScaleTier|null);

                    /** ExecutionTemplate masterType */
                    masterType?: (string|null);

                    /** ExecutionTemplate acceleratorConfig */
                    acceleratorConfig?: (google.cloud.notebooks.v1.ExecutionTemplate.ISchedulerAcceleratorConfig|null);

                    /** ExecutionTemplate labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ExecutionTemplate inputNotebookFile */
                    inputNotebookFile?: (string|null);

                    /** ExecutionTemplate containerImageUri */
                    containerImageUri?: (string|null);

                    /** ExecutionTemplate outputNotebookFolder */
                    outputNotebookFolder?: (string|null);

                    /** ExecutionTemplate paramsYamlFile */
                    paramsYamlFile?: (string|null);

                    /** ExecutionTemplate parameters */
                    parameters?: (string|null);

                    /** ExecutionTemplate serviceAccount */
                    serviceAccount?: (string|null);

                    /** ExecutionTemplate jobType */
                    jobType?: (google.cloud.notebooks.v1.ExecutionTemplate.JobType|keyof typeof google.cloud.notebooks.v1.ExecutionTemplate.JobType|null);

                    /** ExecutionTemplate dataprocParameters */
                    dataprocParameters?: (google.cloud.notebooks.v1.ExecutionTemplate.IDataprocParameters|null);
                }

                /** Represents an ExecutionTemplate. */
                class ExecutionTemplate implements IExecutionTemplate {

                    /**
                     * Constructs a new ExecutionTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IExecutionTemplate);

                    /** ExecutionTemplate scaleTier. */
                    public scaleTier: (google.cloud.notebooks.v1.ExecutionTemplate.ScaleTier|keyof typeof google.cloud.notebooks.v1.ExecutionTemplate.ScaleTier);

                    /** ExecutionTemplate masterType. */
                    public masterType: string;

                    /** ExecutionTemplate acceleratorConfig. */
                    public acceleratorConfig?: (google.cloud.notebooks.v1.ExecutionTemplate.ISchedulerAcceleratorConfig|null);

                    /** ExecutionTemplate labels. */
                    public labels: { [k: string]: string };

                    /** ExecutionTemplate inputNotebookFile. */
                    public inputNotebookFile: string;

                    /** ExecutionTemplate containerImageUri. */
                    public containerImageUri: string;

                    /** ExecutionTemplate outputNotebookFolder. */
                    public outputNotebookFolder: string;

                    /** ExecutionTemplate paramsYamlFile. */
                    public paramsYamlFile: string;

                    /** ExecutionTemplate parameters. */
                    public parameters: string;

                    /** ExecutionTemplate serviceAccount. */
                    public serviceAccount: string;

                    /** ExecutionTemplate jobType. */
                    public jobType: (google.cloud.notebooks.v1.ExecutionTemplate.JobType|keyof typeof google.cloud.notebooks.v1.ExecutionTemplate.JobType);

                    /** ExecutionTemplate dataprocParameters. */
                    public dataprocParameters?: (google.cloud.notebooks.v1.ExecutionTemplate.IDataprocParameters|null);

                    /** ExecutionTemplate jobParameters. */
                    public jobParameters?: "dataprocParameters";

                    /**
                     * Creates a new ExecutionTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecutionTemplate instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IExecutionTemplate): google.cloud.notebooks.v1.ExecutionTemplate;

                    /**
                     * Encodes the specified ExecutionTemplate message. Does not implicitly {@link google.cloud.notebooks.v1.ExecutionTemplate.verify|verify} messages.
                     * @param message ExecutionTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IExecutionTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecutionTemplate message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ExecutionTemplate.verify|verify} messages.
                     * @param message ExecutionTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IExecutionTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecutionTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecutionTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ExecutionTemplate;

                    /**
                     * Decodes an ExecutionTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecutionTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ExecutionTemplate;

                    /**
                     * Verifies an ExecutionTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecutionTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecutionTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ExecutionTemplate;

                    /**
                     * Creates a plain object from an ExecutionTemplate message. Also converts values to other types if specified.
                     * @param message ExecutionTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ExecutionTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecutionTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ExecutionTemplate {

                    /** Properties of a SchedulerAcceleratorConfig. */
                    interface ISchedulerAcceleratorConfig {

                        /** SchedulerAcceleratorConfig type */
                        type?: (google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorType|keyof typeof google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorType|null);

                        /** SchedulerAcceleratorConfig coreCount */
                        coreCount?: (number|Long|string|null);
                    }

                    /** Represents a SchedulerAcceleratorConfig. */
                    class SchedulerAcceleratorConfig implements ISchedulerAcceleratorConfig {

                        /**
                         * Constructs a new SchedulerAcceleratorConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.notebooks.v1.ExecutionTemplate.ISchedulerAcceleratorConfig);

                        /** SchedulerAcceleratorConfig type. */
                        public type: (google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorType|keyof typeof google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorType);

                        /** SchedulerAcceleratorConfig coreCount. */
                        public coreCount: (number|Long|string);

                        /**
                         * Creates a new SchedulerAcceleratorConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SchedulerAcceleratorConfig instance
                         */
                        public static create(properties?: google.cloud.notebooks.v1.ExecutionTemplate.ISchedulerAcceleratorConfig): google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorConfig;

                        /**
                         * Encodes the specified SchedulerAcceleratorConfig message. Does not implicitly {@link google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorConfig.verify|verify} messages.
                         * @param message SchedulerAcceleratorConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.notebooks.v1.ExecutionTemplate.ISchedulerAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SchedulerAcceleratorConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorConfig.verify|verify} messages.
                         * @param message SchedulerAcceleratorConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.notebooks.v1.ExecutionTemplate.ISchedulerAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SchedulerAcceleratorConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SchedulerAcceleratorConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorConfig;

                        /**
                         * Decodes a SchedulerAcceleratorConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SchedulerAcceleratorConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorConfig;

                        /**
                         * Verifies a SchedulerAcceleratorConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SchedulerAcceleratorConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SchedulerAcceleratorConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorConfig;

                        /**
                         * Creates a plain object from a SchedulerAcceleratorConfig message. Also converts values to other types if specified.
                         * @param message SchedulerAcceleratorConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.notebooks.v1.ExecutionTemplate.SchedulerAcceleratorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SchedulerAcceleratorConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DataprocParameters. */
                    interface IDataprocParameters {

                        /** DataprocParameters cluster */
                        cluster?: (string|null);
                    }

                    /** Represents a DataprocParameters. */
                    class DataprocParameters implements IDataprocParameters {

                        /**
                         * Constructs a new DataprocParameters.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.notebooks.v1.ExecutionTemplate.IDataprocParameters);

                        /** DataprocParameters cluster. */
                        public cluster: string;

                        /**
                         * Creates a new DataprocParameters instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DataprocParameters instance
                         */
                        public static create(properties?: google.cloud.notebooks.v1.ExecutionTemplate.IDataprocParameters): google.cloud.notebooks.v1.ExecutionTemplate.DataprocParameters;

                        /**
                         * Encodes the specified DataprocParameters message. Does not implicitly {@link google.cloud.notebooks.v1.ExecutionTemplate.DataprocParameters.verify|verify} messages.
                         * @param message DataprocParameters message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.notebooks.v1.ExecutionTemplate.IDataprocParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DataprocParameters message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ExecutionTemplate.DataprocParameters.verify|verify} messages.
                         * @param message DataprocParameters message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.notebooks.v1.ExecutionTemplate.IDataprocParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DataprocParameters message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DataprocParameters
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ExecutionTemplate.DataprocParameters;

                        /**
                         * Decodes a DataprocParameters message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DataprocParameters
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ExecutionTemplate.DataprocParameters;

                        /**
                         * Verifies a DataprocParameters message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DataprocParameters message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DataprocParameters
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ExecutionTemplate.DataprocParameters;

                        /**
                         * Creates a plain object from a DataprocParameters message. Also converts values to other types if specified.
                         * @param message DataprocParameters
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.notebooks.v1.ExecutionTemplate.DataprocParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DataprocParameters to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** ScaleTier enum. */
                    enum ScaleTier {
                        SCALE_TIER_UNSPECIFIED = 0,
                        BASIC = 1,
                        STANDARD_1 = 2,
                        PREMIUM_1 = 3,
                        BASIC_GPU = 4,
                        BASIC_TPU = 5,
                        CUSTOM = 6
                    }

                    /** SchedulerAcceleratorType enum. */
                    enum SchedulerAcceleratorType {
                        SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED = 0,
                        NVIDIA_TESLA_K80 = 1,
                        NVIDIA_TESLA_P100 = 2,
                        NVIDIA_TESLA_V100 = 3,
                        NVIDIA_TESLA_P4 = 4,
                        NVIDIA_TESLA_T4 = 5,
                        TPU_V2 = 6,
                        TPU_V3 = 7
                    }

                    /** JobType enum. */
                    enum JobType {
                        JOB_TYPE_UNSPECIFIED = 0,
                        VERTEX_AI = 1,
                        DATAPROC = 2
                    }
                }

                /** Properties of an Execution. */
                interface IExecution {

                    /** Execution executionTemplate */
                    executionTemplate?: (google.cloud.notebooks.v1.IExecutionTemplate|null);

                    /** Execution name */
                    name?: (string|null);

                    /** Execution displayName */
                    displayName?: (string|null);

                    /** Execution description */
                    description?: (string|null);

                    /** Execution createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Execution updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Execution state */
                    state?: (google.cloud.notebooks.v1.Execution.State|keyof typeof google.cloud.notebooks.v1.Execution.State|null);

                    /** Execution outputNotebookFile */
                    outputNotebookFile?: (string|null);

                    /** Execution jobUri */
                    jobUri?: (string|null);
                }

                /** Represents an Execution. */
                class Execution implements IExecution {

                    /**
                     * Constructs a new Execution.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IExecution);

                    /** Execution executionTemplate. */
                    public executionTemplate?: (google.cloud.notebooks.v1.IExecutionTemplate|null);

                    /** Execution name. */
                    public name: string;

                    /** Execution displayName. */
                    public displayName: string;

                    /** Execution description. */
                    public description: string;

                    /** Execution createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Execution updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Execution state. */
                    public state: (google.cloud.notebooks.v1.Execution.State|keyof typeof google.cloud.notebooks.v1.Execution.State);

                    /** Execution outputNotebookFile. */
                    public outputNotebookFile: string;

                    /** Execution jobUri. */
                    public jobUri: string;

                    /**
                     * Creates a new Execution instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Execution instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IExecution): google.cloud.notebooks.v1.Execution;

                    /**
                     * Encodes the specified Execution message. Does not implicitly {@link google.cloud.notebooks.v1.Execution.verify|verify} messages.
                     * @param message Execution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IExecution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Execution message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Execution.verify|verify} messages.
                     * @param message Execution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IExecution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Execution message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Execution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Execution;

                    /**
                     * Decodes an Execution message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Execution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Execution;

                    /**
                     * Verifies an Execution message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Execution message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Execution
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Execution;

                    /**
                     * Creates a plain object from an Execution message. Also converts values to other types if specified.
                     * @param message Execution
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.Execution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Execution to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Execution {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        QUEUED = 1,
                        PREPARING = 2,
                        RUNNING = 3,
                        SUCCEEDED = 4,
                        FAILED = 5,
                        CANCELLING = 6,
                        CANCELLED = 7,
                        EXPIRED = 9,
                        INITIALIZING = 10
                    }
                }

                /** Properties of a ReservationAffinity. */
                interface IReservationAffinity {

                    /** ReservationAffinity consumeReservationType */
                    consumeReservationType?: (google.cloud.notebooks.v1.ReservationAffinity.Type|keyof typeof google.cloud.notebooks.v1.ReservationAffinity.Type|null);

                    /** ReservationAffinity key */
                    key?: (string|null);

                    /** ReservationAffinity values */
                    values?: (string[]|null);
                }

                /** Represents a ReservationAffinity. */
                class ReservationAffinity implements IReservationAffinity {

                    /**
                     * Constructs a new ReservationAffinity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IReservationAffinity);

                    /** ReservationAffinity consumeReservationType. */
                    public consumeReservationType: (google.cloud.notebooks.v1.ReservationAffinity.Type|keyof typeof google.cloud.notebooks.v1.ReservationAffinity.Type);

                    /** ReservationAffinity key. */
                    public key: string;

                    /** ReservationAffinity values. */
                    public values: string[];

                    /**
                     * Creates a new ReservationAffinity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReservationAffinity instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IReservationAffinity): google.cloud.notebooks.v1.ReservationAffinity;

                    /**
                     * Encodes the specified ReservationAffinity message. Does not implicitly {@link google.cloud.notebooks.v1.ReservationAffinity.verify|verify} messages.
                     * @param message ReservationAffinity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IReservationAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReservationAffinity message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ReservationAffinity.verify|verify} messages.
                     * @param message ReservationAffinity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IReservationAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReservationAffinity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReservationAffinity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ReservationAffinity;

                    /**
                     * Decodes a ReservationAffinity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReservationAffinity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ReservationAffinity;

                    /**
                     * Verifies a ReservationAffinity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReservationAffinity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReservationAffinity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ReservationAffinity;

                    /**
                     * Creates a plain object from a ReservationAffinity message. Also converts values to other types if specified.
                     * @param message ReservationAffinity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ReservationAffinity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReservationAffinity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ReservationAffinity {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        NO_RESERVATION = 1,
                        ANY_RESERVATION = 2,
                        SPECIFIC_RESERVATION = 3
                    }
                }

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);

                    /** Instance vmImage */
                    vmImage?: (google.cloud.notebooks.v1.IVmImage|null);

                    /** Instance containerImage */
                    containerImage?: (google.cloud.notebooks.v1.IContainerImage|null);

                    /** Instance postStartupScript */
                    postStartupScript?: (string|null);

                    /** Instance proxyUri */
                    proxyUri?: (string|null);

                    /** Instance instanceOwners */
                    instanceOwners?: (string[]|null);

                    /** Instance serviceAccount */
                    serviceAccount?: (string|null);

                    /** Instance serviceAccountScopes */
                    serviceAccountScopes?: (string[]|null);

                    /** Instance machineType */
                    machineType?: (string|null);

                    /** Instance acceleratorConfig */
                    acceleratorConfig?: (google.cloud.notebooks.v1.Instance.IAcceleratorConfig|null);

                    /** Instance state */
                    state?: (google.cloud.notebooks.v1.Instance.State|keyof typeof google.cloud.notebooks.v1.Instance.State|null);

                    /** Instance installGpuDriver */
                    installGpuDriver?: (boolean|null);

                    /** Instance customGpuDriverPath */
                    customGpuDriverPath?: (string|null);

                    /** Instance bootDiskType */
                    bootDiskType?: (google.cloud.notebooks.v1.Instance.DiskType|keyof typeof google.cloud.notebooks.v1.Instance.DiskType|null);

                    /** Instance bootDiskSizeGb */
                    bootDiskSizeGb?: (number|Long|string|null);

                    /** Instance dataDiskType */
                    dataDiskType?: (google.cloud.notebooks.v1.Instance.DiskType|keyof typeof google.cloud.notebooks.v1.Instance.DiskType|null);

                    /** Instance dataDiskSizeGb */
                    dataDiskSizeGb?: (number|Long|string|null);

                    /** Instance noRemoveDataDisk */
                    noRemoveDataDisk?: (boolean|null);

                    /** Instance diskEncryption */
                    diskEncryption?: (google.cloud.notebooks.v1.Instance.DiskEncryption|keyof typeof google.cloud.notebooks.v1.Instance.DiskEncryption|null);

                    /** Instance kmsKey */
                    kmsKey?: (string|null);

                    /** Instance disks */
                    disks?: (google.cloud.notebooks.v1.Instance.IDisk[]|null);

                    /** Instance shieldedInstanceConfig */
                    shieldedInstanceConfig?: (google.cloud.notebooks.v1.Instance.IShieldedInstanceConfig|null);

                    /** Instance noPublicIp */
                    noPublicIp?: (boolean|null);

                    /** Instance noProxyAccess */
                    noProxyAccess?: (boolean|null);

                    /** Instance network */
                    network?: (string|null);

                    /** Instance subnet */
                    subnet?: (string|null);

                    /** Instance labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Instance metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Instance tags */
                    tags?: (string[]|null);

                    /** Instance upgradeHistory */
                    upgradeHistory?: (google.cloud.notebooks.v1.Instance.IUpgradeHistoryEntry[]|null);

                    /** Instance nicType */
                    nicType?: (google.cloud.notebooks.v1.Instance.NicType|keyof typeof google.cloud.notebooks.v1.Instance.NicType|null);

                    /** Instance reservationAffinity */
                    reservationAffinity?: (google.cloud.notebooks.v1.IReservationAffinity|null);

                    /** Instance createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IInstance);

                    /** Instance name. */
                    public name: string;

                    /** Instance vmImage. */
                    public vmImage?: (google.cloud.notebooks.v1.IVmImage|null);

                    /** Instance containerImage. */
                    public containerImage?: (google.cloud.notebooks.v1.IContainerImage|null);

                    /** Instance postStartupScript. */
                    public postStartupScript: string;

                    /** Instance proxyUri. */
                    public proxyUri: string;

                    /** Instance instanceOwners. */
                    public instanceOwners: string[];

                    /** Instance serviceAccount. */
                    public serviceAccount: string;

                    /** Instance serviceAccountScopes. */
                    public serviceAccountScopes: string[];

                    /** Instance machineType. */
                    public machineType: string;

                    /** Instance acceleratorConfig. */
                    public acceleratorConfig?: (google.cloud.notebooks.v1.Instance.IAcceleratorConfig|null);

                    /** Instance state. */
                    public state: (google.cloud.notebooks.v1.Instance.State|keyof typeof google.cloud.notebooks.v1.Instance.State);

                    /** Instance installGpuDriver. */
                    public installGpuDriver: boolean;

                    /** Instance customGpuDriverPath. */
                    public customGpuDriverPath: string;

                    /** Instance bootDiskType. */
                    public bootDiskType: (google.cloud.notebooks.v1.Instance.DiskType|keyof typeof google.cloud.notebooks.v1.Instance.DiskType);

                    /** Instance bootDiskSizeGb. */
                    public bootDiskSizeGb: (number|Long|string);

                    /** Instance dataDiskType. */
                    public dataDiskType: (google.cloud.notebooks.v1.Instance.DiskType|keyof typeof google.cloud.notebooks.v1.Instance.DiskType);

                    /** Instance dataDiskSizeGb. */
                    public dataDiskSizeGb: (number|Long|string);

                    /** Instance noRemoveDataDisk. */
                    public noRemoveDataDisk: boolean;

                    /** Instance diskEncryption. */
                    public diskEncryption: (google.cloud.notebooks.v1.Instance.DiskEncryption|keyof typeof google.cloud.notebooks.v1.Instance.DiskEncryption);

                    /** Instance kmsKey. */
                    public kmsKey: string;

                    /** Instance disks. */
                    public disks: google.cloud.notebooks.v1.Instance.IDisk[];

                    /** Instance shieldedInstanceConfig. */
                    public shieldedInstanceConfig?: (google.cloud.notebooks.v1.Instance.IShieldedInstanceConfig|null);

                    /** Instance noPublicIp. */
                    public noPublicIp: boolean;

                    /** Instance noProxyAccess. */
                    public noProxyAccess: boolean;

                    /** Instance network. */
                    public network: string;

                    /** Instance subnet. */
                    public subnet: string;

                    /** Instance labels. */
                    public labels: { [k: string]: string };

                    /** Instance metadata. */
                    public metadata: { [k: string]: string };

                    /** Instance tags. */
                    public tags: string[];

                    /** Instance upgradeHistory. */
                    public upgradeHistory: google.cloud.notebooks.v1.Instance.IUpgradeHistoryEntry[];

                    /** Instance nicType. */
                    public nicType: (google.cloud.notebooks.v1.Instance.NicType|keyof typeof google.cloud.notebooks.v1.Instance.NicType);

                    /** Instance reservationAffinity. */
                    public reservationAffinity?: (google.cloud.notebooks.v1.IReservationAffinity|null);

                    /** Instance createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance environment. */
                    public environment?: ("vmImage"|"containerImage");

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IInstance): google.cloud.notebooks.v1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.notebooks.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Instance;

                    /**
                     * Verifies an Instance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Instance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Instance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Instance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Instance {

                    /** Properties of an AcceleratorConfig. */
                    interface IAcceleratorConfig {

                        /** AcceleratorConfig type */
                        type?: (google.cloud.notebooks.v1.Instance.AcceleratorType|keyof typeof google.cloud.notebooks.v1.Instance.AcceleratorType|null);

                        /** AcceleratorConfig coreCount */
                        coreCount?: (number|Long|string|null);
                    }

                    /** Represents an AcceleratorConfig. */
                    class AcceleratorConfig implements IAcceleratorConfig {

                        /**
                         * Constructs a new AcceleratorConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.notebooks.v1.Instance.IAcceleratorConfig);

                        /** AcceleratorConfig type. */
                        public type: (google.cloud.notebooks.v1.Instance.AcceleratorType|keyof typeof google.cloud.notebooks.v1.Instance.AcceleratorType);

                        /** AcceleratorConfig coreCount. */
                        public coreCount: (number|Long|string);

                        /**
                         * Creates a new AcceleratorConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AcceleratorConfig instance
                         */
                        public static create(properties?: google.cloud.notebooks.v1.Instance.IAcceleratorConfig): google.cloud.notebooks.v1.Instance.AcceleratorConfig;

                        /**
                         * Encodes the specified AcceleratorConfig message. Does not implicitly {@link google.cloud.notebooks.v1.Instance.AcceleratorConfig.verify|verify} messages.
                         * @param message AcceleratorConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.notebooks.v1.Instance.IAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AcceleratorConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Instance.AcceleratorConfig.verify|verify} messages.
                         * @param message AcceleratorConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.notebooks.v1.Instance.IAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AcceleratorConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AcceleratorConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Instance.AcceleratorConfig;

                        /**
                         * Decodes an AcceleratorConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AcceleratorConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Instance.AcceleratorConfig;

                        /**
                         * Verifies an AcceleratorConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AcceleratorConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AcceleratorConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Instance.AcceleratorConfig;

                        /**
                         * Creates a plain object from an AcceleratorConfig message. Also converts values to other types if specified.
                         * @param message AcceleratorConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.notebooks.v1.Instance.AcceleratorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AcceleratorConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Disk. */
                    interface IDisk {

                        /** Disk autoDelete */
                        autoDelete?: (boolean|null);

                        /** Disk boot */
                        boot?: (boolean|null);

                        /** Disk deviceName */
                        deviceName?: (string|null);

                        /** Disk diskSizeGb */
                        diskSizeGb?: (number|Long|string|null);

                        /** Disk guestOsFeatures */
                        guestOsFeatures?: (google.cloud.notebooks.v1.Instance.Disk.IGuestOsFeature[]|null);

                        /** Disk index */
                        index?: (number|Long|string|null);

                        /** Disk interface */
                        "interface"?: (string|null);

                        /** Disk kind */
                        kind?: (string|null);

                        /** Disk licenses */
                        licenses?: (string[]|null);

                        /** Disk mode */
                        mode?: (string|null);

                        /** Disk source */
                        source?: (string|null);

                        /** Disk type */
                        type?: (string|null);
                    }

                    /** Represents a Disk. */
                    class Disk implements IDisk {

                        /**
                         * Constructs a new Disk.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.notebooks.v1.Instance.IDisk);

                        /** Disk autoDelete. */
                        public autoDelete: boolean;

                        /** Disk boot. */
                        public boot: boolean;

                        /** Disk deviceName. */
                        public deviceName: string;

                        /** Disk diskSizeGb. */
                        public diskSizeGb: (number|Long|string);

                        /** Disk guestOsFeatures. */
                        public guestOsFeatures: google.cloud.notebooks.v1.Instance.Disk.IGuestOsFeature[];

                        /** Disk index. */
                        public index: (number|Long|string);

                        /** Disk interface. */
                        public interface: string;

                        /** Disk kind. */
                        public kind: string;

                        /** Disk licenses. */
                        public licenses: string[];

                        /** Disk mode. */
                        public mode: string;

                        /** Disk source. */
                        public source: string;

                        /** Disk type. */
                        public type: string;

                        /**
                         * Creates a new Disk instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Disk instance
                         */
                        public static create(properties?: google.cloud.notebooks.v1.Instance.IDisk): google.cloud.notebooks.v1.Instance.Disk;

                        /**
                         * Encodes the specified Disk message. Does not implicitly {@link google.cloud.notebooks.v1.Instance.Disk.verify|verify} messages.
                         * @param message Disk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.notebooks.v1.Instance.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Disk message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Instance.Disk.verify|verify} messages.
                         * @param message Disk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.notebooks.v1.Instance.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Disk message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Disk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Instance.Disk;

                        /**
                         * Decodes a Disk message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Disk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Instance.Disk;

                        /**
                         * Verifies a Disk message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Disk message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Disk
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Instance.Disk;

                        /**
                         * Creates a plain object from a Disk message. Also converts values to other types if specified.
                         * @param message Disk
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.notebooks.v1.Instance.Disk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Disk to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Disk {

                        /** Properties of a GuestOsFeature. */
                        interface IGuestOsFeature {

                            /** GuestOsFeature type */
                            type?: (string|null);
                        }

                        /** Represents a GuestOsFeature. */
                        class GuestOsFeature implements IGuestOsFeature {

                            /**
                             * Constructs a new GuestOsFeature.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.notebooks.v1.Instance.Disk.IGuestOsFeature);

                            /** GuestOsFeature type. */
                            public type: string;

                            /**
                             * Creates a new GuestOsFeature instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GuestOsFeature instance
                             */
                            public static create(properties?: google.cloud.notebooks.v1.Instance.Disk.IGuestOsFeature): google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature;

                            /**
                             * Encodes the specified GuestOsFeature message. Does not implicitly {@link google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature.verify|verify} messages.
                             * @param message GuestOsFeature message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.notebooks.v1.Instance.Disk.IGuestOsFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GuestOsFeature message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature.verify|verify} messages.
                             * @param message GuestOsFeature message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.notebooks.v1.Instance.Disk.IGuestOsFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GuestOsFeature message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GuestOsFeature
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature;

                            /**
                             * Decodes a GuestOsFeature message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GuestOsFeature
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature;

                            /**
                             * Verifies a GuestOsFeature message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GuestOsFeature message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GuestOsFeature
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature;

                            /**
                             * Creates a plain object from a GuestOsFeature message. Also converts values to other types if specified.
                             * @param message GuestOsFeature
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.notebooks.v1.Instance.Disk.GuestOsFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GuestOsFeature to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a ShieldedInstanceConfig. */
                    interface IShieldedInstanceConfig {

                        /** ShieldedInstanceConfig enableSecureBoot */
                        enableSecureBoot?: (boolean|null);

                        /** ShieldedInstanceConfig enableVtpm */
                        enableVtpm?: (boolean|null);

                        /** ShieldedInstanceConfig enableIntegrityMonitoring */
                        enableIntegrityMonitoring?: (boolean|null);
                    }

                    /** Represents a ShieldedInstanceConfig. */
                    class ShieldedInstanceConfig implements IShieldedInstanceConfig {

                        /**
                         * Constructs a new ShieldedInstanceConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.notebooks.v1.Instance.IShieldedInstanceConfig);

                        /** ShieldedInstanceConfig enableSecureBoot. */
                        public enableSecureBoot: boolean;

                        /** ShieldedInstanceConfig enableVtpm. */
                        public enableVtpm: boolean;

                        /** ShieldedInstanceConfig enableIntegrityMonitoring. */
                        public enableIntegrityMonitoring: boolean;

                        /**
                         * Creates a new ShieldedInstanceConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ShieldedInstanceConfig instance
                         */
                        public static create(properties?: google.cloud.notebooks.v1.Instance.IShieldedInstanceConfig): google.cloud.notebooks.v1.Instance.ShieldedInstanceConfig;

                        /**
                         * Encodes the specified ShieldedInstanceConfig message. Does not implicitly {@link google.cloud.notebooks.v1.Instance.ShieldedInstanceConfig.verify|verify} messages.
                         * @param message ShieldedInstanceConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.notebooks.v1.Instance.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ShieldedInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Instance.ShieldedInstanceConfig.verify|verify} messages.
                         * @param message ShieldedInstanceConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.notebooks.v1.Instance.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ShieldedInstanceConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ShieldedInstanceConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Instance.ShieldedInstanceConfig;

                        /**
                         * Decodes a ShieldedInstanceConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ShieldedInstanceConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Instance.ShieldedInstanceConfig;

                        /**
                         * Verifies a ShieldedInstanceConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ShieldedInstanceConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ShieldedInstanceConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Instance.ShieldedInstanceConfig;

                        /**
                         * Creates a plain object from a ShieldedInstanceConfig message. Also converts values to other types if specified.
                         * @param message ShieldedInstanceConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.notebooks.v1.Instance.ShieldedInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ShieldedInstanceConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpgradeHistoryEntry. */
                    interface IUpgradeHistoryEntry {

                        /** UpgradeHistoryEntry snapshot */
                        snapshot?: (string|null);

                        /** UpgradeHistoryEntry vmImage */
                        vmImage?: (string|null);

                        /** UpgradeHistoryEntry containerImage */
                        containerImage?: (string|null);

                        /** UpgradeHistoryEntry framework */
                        framework?: (string|null);

                        /** UpgradeHistoryEntry version */
                        version?: (string|null);

                        /** UpgradeHistoryEntry state */
                        state?: (google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.State|keyof typeof google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.State|null);

                        /** UpgradeHistoryEntry createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** UpgradeHistoryEntry targetImage */
                        targetImage?: (string|null);

                        /** UpgradeHistoryEntry action */
                        action?: (google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.Action|keyof typeof google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.Action|null);

                        /** UpgradeHistoryEntry targetVersion */
                        targetVersion?: (string|null);
                    }

                    /** Represents an UpgradeHistoryEntry. */
                    class UpgradeHistoryEntry implements IUpgradeHistoryEntry {

                        /**
                         * Constructs a new UpgradeHistoryEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.notebooks.v1.Instance.IUpgradeHistoryEntry);

                        /** UpgradeHistoryEntry snapshot. */
                        public snapshot: string;

                        /** UpgradeHistoryEntry vmImage. */
                        public vmImage: string;

                        /** UpgradeHistoryEntry containerImage. */
                        public containerImage: string;

                        /** UpgradeHistoryEntry framework. */
                        public framework: string;

                        /** UpgradeHistoryEntry version. */
                        public version: string;

                        /** UpgradeHistoryEntry state. */
                        public state: (google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.State|keyof typeof google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.State);

                        /** UpgradeHistoryEntry createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** UpgradeHistoryEntry targetImage. */
                        public targetImage: string;

                        /** UpgradeHistoryEntry action. */
                        public action: (google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.Action|keyof typeof google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.Action);

                        /** UpgradeHistoryEntry targetVersion. */
                        public targetVersion: string;

                        /**
                         * Creates a new UpgradeHistoryEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpgradeHistoryEntry instance
                         */
                        public static create(properties?: google.cloud.notebooks.v1.Instance.IUpgradeHistoryEntry): google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry;

                        /**
                         * Encodes the specified UpgradeHistoryEntry message. Does not implicitly {@link google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.verify|verify} messages.
                         * @param message UpgradeHistoryEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.notebooks.v1.Instance.IUpgradeHistoryEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpgradeHistoryEntry message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry.verify|verify} messages.
                         * @param message UpgradeHistoryEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.notebooks.v1.Instance.IUpgradeHistoryEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpgradeHistoryEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpgradeHistoryEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry;

                        /**
                         * Decodes an UpgradeHistoryEntry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpgradeHistoryEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry;

                        /**
                         * Verifies an UpgradeHistoryEntry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpgradeHistoryEntry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpgradeHistoryEntry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry;

                        /**
                         * Creates a plain object from an UpgradeHistoryEntry message. Also converts values to other types if specified.
                         * @param message UpgradeHistoryEntry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.notebooks.v1.Instance.UpgradeHistoryEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpgradeHistoryEntry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace UpgradeHistoryEntry {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            STARTED = 1,
                            SUCCEEDED = 2,
                            FAILED = 3
                        }

                        /** Action enum. */
                        enum Action {
                            ACTION_UNSPECIFIED = 0,
                            UPGRADE = 1,
                            ROLLBACK = 2
                        }
                    }

                    /** AcceleratorType enum. */
                    enum AcceleratorType {
                        ACCELERATOR_TYPE_UNSPECIFIED = 0,
                        NVIDIA_TESLA_K80 = 1,
                        NVIDIA_TESLA_P100 = 2,
                        NVIDIA_TESLA_V100 = 3,
                        NVIDIA_TESLA_P4 = 4,
                        NVIDIA_TESLA_T4 = 5,
                        NVIDIA_TESLA_A100 = 11,
                        NVIDIA_TESLA_T4_VWS = 8,
                        NVIDIA_TESLA_P100_VWS = 9,
                        NVIDIA_TESLA_P4_VWS = 10,
                        TPU_V2 = 6,
                        TPU_V3 = 7
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STARTING = 1,
                        PROVISIONING = 2,
                        ACTIVE = 3,
                        STOPPING = 4,
                        STOPPED = 5,
                        DELETED = 6,
                        UPGRADING = 7,
                        INITIALIZING = 8,
                        REGISTERING = 9
                    }

                    /** DiskType enum. */
                    enum DiskType {
                        DISK_TYPE_UNSPECIFIED = 0,
                        PD_STANDARD = 1,
                        PD_SSD = 2,
                        PD_BALANCED = 3
                    }

                    /** DiskEncryption enum. */
                    enum DiskEncryption {
                        DISK_ENCRYPTION_UNSPECIFIED = 0,
                        GMEK = 1,
                        CMEK = 2
                    }

                    /** NicType enum. */
                    enum NicType {
                        UNSPECIFIED_NIC_TYPE = 0,
                        VIRTIO_NET = 1,
                        GVNIC = 2
                    }
                }

                /** Properties of an InstanceConfig. */
                interface IInstanceConfig {

                    /** InstanceConfig notebookUpgradeSchedule */
                    notebookUpgradeSchedule?: (string|null);

                    /** InstanceConfig enableHealthMonitoring */
                    enableHealthMonitoring?: (boolean|null);
                }

                /** Represents an InstanceConfig. */
                class InstanceConfig implements IInstanceConfig {

                    /**
                     * Constructs a new InstanceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IInstanceConfig);

                    /** InstanceConfig notebookUpgradeSchedule. */
                    public notebookUpgradeSchedule: string;

                    /** InstanceConfig enableHealthMonitoring. */
                    public enableHealthMonitoring: boolean;

                    /**
                     * Creates a new InstanceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstanceConfig instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IInstanceConfig): google.cloud.notebooks.v1.InstanceConfig;

                    /**
                     * Encodes the specified InstanceConfig message. Does not implicitly {@link google.cloud.notebooks.v1.InstanceConfig.verify|verify} messages.
                     * @param message InstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstanceConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.InstanceConfig.verify|verify} messages.
                     * @param message InstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstanceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.InstanceConfig;

                    /**
                     * Decodes an InstanceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.InstanceConfig;

                    /**
                     * Verifies an InstanceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstanceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstanceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.InstanceConfig;

                    /**
                     * Creates a plain object from an InstanceConfig message. Also converts values to other types if specified.
                     * @param message InstanceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.InstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstanceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a ManagedNotebookService */
                class ManagedNotebookService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ManagedNotebookService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ManagedNotebookService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ManagedNotebookService;

                    /**
                     * Calls ListRuntimes.
                     * @param request ListRuntimesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuntimesResponse
                     */
                    public listRuntimes(request: google.cloud.notebooks.v1.IListRuntimesRequest, callback: google.cloud.notebooks.v1.ManagedNotebookService.ListRuntimesCallback): void;

                    /**
                     * Calls ListRuntimes.
                     * @param request ListRuntimesRequest message or plain object
                     * @returns Promise
                     */
                    public listRuntimes(request: google.cloud.notebooks.v1.IListRuntimesRequest): Promise<google.cloud.notebooks.v1.ListRuntimesResponse>;

                    /**
                     * Calls GetRuntime.
                     * @param request GetRuntimeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Runtime
                     */
                    public getRuntime(request: google.cloud.notebooks.v1.IGetRuntimeRequest, callback: google.cloud.notebooks.v1.ManagedNotebookService.GetRuntimeCallback): void;

                    /**
                     * Calls GetRuntime.
                     * @param request GetRuntimeRequest message or plain object
                     * @returns Promise
                     */
                    public getRuntime(request: google.cloud.notebooks.v1.IGetRuntimeRequest): Promise<google.cloud.notebooks.v1.Runtime>;

                    /**
                     * Calls CreateRuntime.
                     * @param request CreateRuntimeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRuntime(request: google.cloud.notebooks.v1.ICreateRuntimeRequest, callback: google.cloud.notebooks.v1.ManagedNotebookService.CreateRuntimeCallback): void;

                    /**
                     * Calls CreateRuntime.
                     * @param request CreateRuntimeRequest message or plain object
                     * @returns Promise
                     */
                    public createRuntime(request: google.cloud.notebooks.v1.ICreateRuntimeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteRuntime.
                     * @param request DeleteRuntimeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRuntime(request: google.cloud.notebooks.v1.IDeleteRuntimeRequest, callback: google.cloud.notebooks.v1.ManagedNotebookService.DeleteRuntimeCallback): void;

                    /**
                     * Calls DeleteRuntime.
                     * @param request DeleteRuntimeRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRuntime(request: google.cloud.notebooks.v1.IDeleteRuntimeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartRuntime.
                     * @param request StartRuntimeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startRuntime(request: google.cloud.notebooks.v1.IStartRuntimeRequest, callback: google.cloud.notebooks.v1.ManagedNotebookService.StartRuntimeCallback): void;

                    /**
                     * Calls StartRuntime.
                     * @param request StartRuntimeRequest message or plain object
                     * @returns Promise
                     */
                    public startRuntime(request: google.cloud.notebooks.v1.IStartRuntimeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopRuntime.
                     * @param request StopRuntimeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopRuntime(request: google.cloud.notebooks.v1.IStopRuntimeRequest, callback: google.cloud.notebooks.v1.ManagedNotebookService.StopRuntimeCallback): void;

                    /**
                     * Calls StopRuntime.
                     * @param request StopRuntimeRequest message or plain object
                     * @returns Promise
                     */
                    public stopRuntime(request: google.cloud.notebooks.v1.IStopRuntimeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SwitchRuntime.
                     * @param request SwitchRuntimeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public switchRuntime(request: google.cloud.notebooks.v1.ISwitchRuntimeRequest, callback: google.cloud.notebooks.v1.ManagedNotebookService.SwitchRuntimeCallback): void;

                    /**
                     * Calls SwitchRuntime.
                     * @param request SwitchRuntimeRequest message or plain object
                     * @returns Promise
                     */
                    public switchRuntime(request: google.cloud.notebooks.v1.ISwitchRuntimeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ResetRuntime.
                     * @param request ResetRuntimeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resetRuntime(request: google.cloud.notebooks.v1.IResetRuntimeRequest, callback: google.cloud.notebooks.v1.ManagedNotebookService.ResetRuntimeCallback): void;

                    /**
                     * Calls ResetRuntime.
                     * @param request ResetRuntimeRequest message or plain object
                     * @returns Promise
                     */
                    public resetRuntime(request: google.cloud.notebooks.v1.IResetRuntimeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ReportRuntimeEvent.
                     * @param request ReportRuntimeEventRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public reportRuntimeEvent(request: google.cloud.notebooks.v1.IReportRuntimeEventRequest, callback: google.cloud.notebooks.v1.ManagedNotebookService.ReportRuntimeEventCallback): void;

                    /**
                     * Calls ReportRuntimeEvent.
                     * @param request ReportRuntimeEventRequest message or plain object
                     * @returns Promise
                     */
                    public reportRuntimeEvent(request: google.cloud.notebooks.v1.IReportRuntimeEventRequest): Promise<google.longrunning.Operation>;
                }

                namespace ManagedNotebookService {

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.ManagedNotebookService#listRuntimes}.
                     * @param error Error, if any
                     * @param [response] ListRuntimesResponse
                     */
                    type ListRuntimesCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.ListRuntimesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.ManagedNotebookService#getRuntime}.
                     * @param error Error, if any
                     * @param [response] Runtime
                     */
                    type GetRuntimeCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.Runtime) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.ManagedNotebookService#createRuntime}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRuntimeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.ManagedNotebookService#deleteRuntime}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRuntimeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.ManagedNotebookService#startRuntime}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartRuntimeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.ManagedNotebookService#stopRuntime}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopRuntimeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.ManagedNotebookService#switchRuntime}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SwitchRuntimeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.ManagedNotebookService#resetRuntime}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResetRuntimeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.ManagedNotebookService#reportRuntimeEvent}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ReportRuntimeEventCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListRuntimesRequest. */
                interface IListRuntimesRequest {

                    /** ListRuntimesRequest parent */
                    parent?: (string|null);

                    /** ListRuntimesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRuntimesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListRuntimesRequest. */
                class ListRuntimesRequest implements IListRuntimesRequest {

                    /**
                     * Constructs a new ListRuntimesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListRuntimesRequest);

                    /** ListRuntimesRequest parent. */
                    public parent: string;

                    /** ListRuntimesRequest pageSize. */
                    public pageSize: number;

                    /** ListRuntimesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListRuntimesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimesRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListRuntimesRequest): google.cloud.notebooks.v1.ListRuntimesRequest;

                    /**
                     * Encodes the specified ListRuntimesRequest message. Does not implicitly {@link google.cloud.notebooks.v1.ListRuntimesRequest.verify|verify} messages.
                     * @param message ListRuntimesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListRuntimesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimesRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListRuntimesRequest.verify|verify} messages.
                     * @param message ListRuntimesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListRuntimesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListRuntimesRequest;

                    /**
                     * Decodes a ListRuntimesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListRuntimesRequest;

                    /**
                     * Verifies a ListRuntimesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListRuntimesRequest;

                    /**
                     * Creates a plain object from a ListRuntimesRequest message. Also converts values to other types if specified.
                     * @param message ListRuntimesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListRuntimesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRuntimesResponse. */
                interface IListRuntimesResponse {

                    /** ListRuntimesResponse runtimes */
                    runtimes?: (google.cloud.notebooks.v1.IRuntime[]|null);

                    /** ListRuntimesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRuntimesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRuntimesResponse. */
                class ListRuntimesResponse implements IListRuntimesResponse {

                    /**
                     * Constructs a new ListRuntimesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListRuntimesResponse);

                    /** ListRuntimesResponse runtimes. */
                    public runtimes: google.cloud.notebooks.v1.IRuntime[];

                    /** ListRuntimesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRuntimesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRuntimesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimesResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListRuntimesResponse): google.cloud.notebooks.v1.ListRuntimesResponse;

                    /**
                     * Encodes the specified ListRuntimesResponse message. Does not implicitly {@link google.cloud.notebooks.v1.ListRuntimesResponse.verify|verify} messages.
                     * @param message ListRuntimesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListRuntimesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimesResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListRuntimesResponse.verify|verify} messages.
                     * @param message ListRuntimesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListRuntimesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListRuntimesResponse;

                    /**
                     * Decodes a ListRuntimesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListRuntimesResponse;

                    /**
                     * Verifies a ListRuntimesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListRuntimesResponse;

                    /**
                     * Creates a plain object from a ListRuntimesResponse message. Also converts values to other types if specified.
                     * @param message ListRuntimesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListRuntimesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRuntimeRequest. */
                interface IGetRuntimeRequest {

                    /** GetRuntimeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRuntimeRequest. */
                class GetRuntimeRequest implements IGetRuntimeRequest {

                    /**
                     * Constructs a new GetRuntimeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IGetRuntimeRequest);

                    /** GetRuntimeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRuntimeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRuntimeRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IGetRuntimeRequest): google.cloud.notebooks.v1.GetRuntimeRequest;

                    /**
                     * Encodes the specified GetRuntimeRequest message. Does not implicitly {@link google.cloud.notebooks.v1.GetRuntimeRequest.verify|verify} messages.
                     * @param message GetRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IGetRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRuntimeRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.GetRuntimeRequest.verify|verify} messages.
                     * @param message GetRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IGetRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRuntimeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.GetRuntimeRequest;

                    /**
                     * Decodes a GetRuntimeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.GetRuntimeRequest;

                    /**
                     * Verifies a GetRuntimeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRuntimeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRuntimeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.GetRuntimeRequest;

                    /**
                     * Creates a plain object from a GetRuntimeRequest message. Also converts values to other types if specified.
                     * @param message GetRuntimeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.GetRuntimeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRuntimeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateRuntimeRequest. */
                interface ICreateRuntimeRequest {

                    /** CreateRuntimeRequest parent */
                    parent?: (string|null);

                    /** CreateRuntimeRequest runtimeId */
                    runtimeId?: (string|null);

                    /** CreateRuntimeRequest runtime */
                    runtime?: (google.cloud.notebooks.v1.IRuntime|null);
                }

                /** Represents a CreateRuntimeRequest. */
                class CreateRuntimeRequest implements ICreateRuntimeRequest {

                    /**
                     * Constructs a new CreateRuntimeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ICreateRuntimeRequest);

                    /** CreateRuntimeRequest parent. */
                    public parent: string;

                    /** CreateRuntimeRequest runtimeId. */
                    public runtimeId: string;

                    /** CreateRuntimeRequest runtime. */
                    public runtime?: (google.cloud.notebooks.v1.IRuntime|null);

                    /**
                     * Creates a new CreateRuntimeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRuntimeRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ICreateRuntimeRequest): google.cloud.notebooks.v1.CreateRuntimeRequest;

                    /**
                     * Encodes the specified CreateRuntimeRequest message. Does not implicitly {@link google.cloud.notebooks.v1.CreateRuntimeRequest.verify|verify} messages.
                     * @param message CreateRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ICreateRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRuntimeRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.CreateRuntimeRequest.verify|verify} messages.
                     * @param message CreateRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ICreateRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRuntimeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.CreateRuntimeRequest;

                    /**
                     * Decodes a CreateRuntimeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.CreateRuntimeRequest;

                    /**
                     * Verifies a CreateRuntimeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRuntimeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRuntimeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.CreateRuntimeRequest;

                    /**
                     * Creates a plain object from a CreateRuntimeRequest message. Also converts values to other types if specified.
                     * @param message CreateRuntimeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.CreateRuntimeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRuntimeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteRuntimeRequest. */
                interface IDeleteRuntimeRequest {

                    /** DeleteRuntimeRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteRuntimeRequest. */
                class DeleteRuntimeRequest implements IDeleteRuntimeRequest {

                    /**
                     * Constructs a new DeleteRuntimeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IDeleteRuntimeRequest);

                    /** DeleteRuntimeRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteRuntimeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRuntimeRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IDeleteRuntimeRequest): google.cloud.notebooks.v1.DeleteRuntimeRequest;

                    /**
                     * Encodes the specified DeleteRuntimeRequest message. Does not implicitly {@link google.cloud.notebooks.v1.DeleteRuntimeRequest.verify|verify} messages.
                     * @param message DeleteRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IDeleteRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRuntimeRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.DeleteRuntimeRequest.verify|verify} messages.
                     * @param message DeleteRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IDeleteRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRuntimeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.DeleteRuntimeRequest;

                    /**
                     * Decodes a DeleteRuntimeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.DeleteRuntimeRequest;

                    /**
                     * Verifies a DeleteRuntimeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRuntimeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRuntimeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.DeleteRuntimeRequest;

                    /**
                     * Creates a plain object from a DeleteRuntimeRequest message. Also converts values to other types if specified.
                     * @param message DeleteRuntimeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.DeleteRuntimeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRuntimeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartRuntimeRequest. */
                interface IStartRuntimeRequest {

                    /** StartRuntimeRequest name */
                    name?: (string|null);
                }

                /** Represents a StartRuntimeRequest. */
                class StartRuntimeRequest implements IStartRuntimeRequest {

                    /**
                     * Constructs a new StartRuntimeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IStartRuntimeRequest);

                    /** StartRuntimeRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartRuntimeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartRuntimeRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IStartRuntimeRequest): google.cloud.notebooks.v1.StartRuntimeRequest;

                    /**
                     * Encodes the specified StartRuntimeRequest message. Does not implicitly {@link google.cloud.notebooks.v1.StartRuntimeRequest.verify|verify} messages.
                     * @param message StartRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IStartRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartRuntimeRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.StartRuntimeRequest.verify|verify} messages.
                     * @param message StartRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IStartRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartRuntimeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.StartRuntimeRequest;

                    /**
                     * Decodes a StartRuntimeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.StartRuntimeRequest;

                    /**
                     * Verifies a StartRuntimeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartRuntimeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartRuntimeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.StartRuntimeRequest;

                    /**
                     * Creates a plain object from a StartRuntimeRequest message. Also converts values to other types if specified.
                     * @param message StartRuntimeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.StartRuntimeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartRuntimeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StopRuntimeRequest. */
                interface IStopRuntimeRequest {

                    /** StopRuntimeRequest name */
                    name?: (string|null);
                }

                /** Represents a StopRuntimeRequest. */
                class StopRuntimeRequest implements IStopRuntimeRequest {

                    /**
                     * Constructs a new StopRuntimeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IStopRuntimeRequest);

                    /** StopRuntimeRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopRuntimeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopRuntimeRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IStopRuntimeRequest): google.cloud.notebooks.v1.StopRuntimeRequest;

                    /**
                     * Encodes the specified StopRuntimeRequest message. Does not implicitly {@link google.cloud.notebooks.v1.StopRuntimeRequest.verify|verify} messages.
                     * @param message StopRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IStopRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopRuntimeRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.StopRuntimeRequest.verify|verify} messages.
                     * @param message StopRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IStopRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopRuntimeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.StopRuntimeRequest;

                    /**
                     * Decodes a StopRuntimeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.StopRuntimeRequest;

                    /**
                     * Verifies a StopRuntimeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopRuntimeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopRuntimeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.StopRuntimeRequest;

                    /**
                     * Creates a plain object from a StopRuntimeRequest message. Also converts values to other types if specified.
                     * @param message StopRuntimeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.StopRuntimeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopRuntimeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SwitchRuntimeRequest. */
                interface ISwitchRuntimeRequest {

                    /** SwitchRuntimeRequest name */
                    name?: (string|null);

                    /** SwitchRuntimeRequest machineType */
                    machineType?: (string|null);

                    /** SwitchRuntimeRequest acceleratorConfig */
                    acceleratorConfig?: (google.cloud.notebooks.v1.IRuntimeAcceleratorConfig|null);
                }

                /** Represents a SwitchRuntimeRequest. */
                class SwitchRuntimeRequest implements ISwitchRuntimeRequest {

                    /**
                     * Constructs a new SwitchRuntimeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ISwitchRuntimeRequest);

                    /** SwitchRuntimeRequest name. */
                    public name: string;

                    /** SwitchRuntimeRequest machineType. */
                    public machineType: string;

                    /** SwitchRuntimeRequest acceleratorConfig. */
                    public acceleratorConfig?: (google.cloud.notebooks.v1.IRuntimeAcceleratorConfig|null);

                    /**
                     * Creates a new SwitchRuntimeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SwitchRuntimeRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ISwitchRuntimeRequest): google.cloud.notebooks.v1.SwitchRuntimeRequest;

                    /**
                     * Encodes the specified SwitchRuntimeRequest message. Does not implicitly {@link google.cloud.notebooks.v1.SwitchRuntimeRequest.verify|verify} messages.
                     * @param message SwitchRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ISwitchRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SwitchRuntimeRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.SwitchRuntimeRequest.verify|verify} messages.
                     * @param message SwitchRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ISwitchRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SwitchRuntimeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SwitchRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.SwitchRuntimeRequest;

                    /**
                     * Decodes a SwitchRuntimeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SwitchRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.SwitchRuntimeRequest;

                    /**
                     * Verifies a SwitchRuntimeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SwitchRuntimeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SwitchRuntimeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.SwitchRuntimeRequest;

                    /**
                     * Creates a plain object from a SwitchRuntimeRequest message. Also converts values to other types if specified.
                     * @param message SwitchRuntimeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.SwitchRuntimeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SwitchRuntimeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResetRuntimeRequest. */
                interface IResetRuntimeRequest {

                    /** ResetRuntimeRequest name */
                    name?: (string|null);
                }

                /** Represents a ResetRuntimeRequest. */
                class ResetRuntimeRequest implements IResetRuntimeRequest {

                    /**
                     * Constructs a new ResetRuntimeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IResetRuntimeRequest);

                    /** ResetRuntimeRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResetRuntimeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetRuntimeRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IResetRuntimeRequest): google.cloud.notebooks.v1.ResetRuntimeRequest;

                    /**
                     * Encodes the specified ResetRuntimeRequest message. Does not implicitly {@link google.cloud.notebooks.v1.ResetRuntimeRequest.verify|verify} messages.
                     * @param message ResetRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IResetRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetRuntimeRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ResetRuntimeRequest.verify|verify} messages.
                     * @param message ResetRuntimeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IResetRuntimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetRuntimeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ResetRuntimeRequest;

                    /**
                     * Decodes a ResetRuntimeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetRuntimeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ResetRuntimeRequest;

                    /**
                     * Verifies a ResetRuntimeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetRuntimeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetRuntimeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ResetRuntimeRequest;

                    /**
                     * Creates a plain object from a ResetRuntimeRequest message. Also converts values to other types if specified.
                     * @param message ResetRuntimeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ResetRuntimeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetRuntimeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReportRuntimeEventRequest. */
                interface IReportRuntimeEventRequest {

                    /** ReportRuntimeEventRequest name */
                    name?: (string|null);

                    /** ReportRuntimeEventRequest vmId */
                    vmId?: (string|null);

                    /** ReportRuntimeEventRequest event */
                    event?: (google.cloud.notebooks.v1.IEvent|null);
                }

                /** Represents a ReportRuntimeEventRequest. */
                class ReportRuntimeEventRequest implements IReportRuntimeEventRequest {

                    /**
                     * Constructs a new ReportRuntimeEventRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IReportRuntimeEventRequest);

                    /** ReportRuntimeEventRequest name. */
                    public name: string;

                    /** ReportRuntimeEventRequest vmId. */
                    public vmId: string;

                    /** ReportRuntimeEventRequest event. */
                    public event?: (google.cloud.notebooks.v1.IEvent|null);

                    /**
                     * Creates a new ReportRuntimeEventRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReportRuntimeEventRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IReportRuntimeEventRequest): google.cloud.notebooks.v1.ReportRuntimeEventRequest;

                    /**
                     * Encodes the specified ReportRuntimeEventRequest message. Does not implicitly {@link google.cloud.notebooks.v1.ReportRuntimeEventRequest.verify|verify} messages.
                     * @param message ReportRuntimeEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IReportRuntimeEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReportRuntimeEventRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ReportRuntimeEventRequest.verify|verify} messages.
                     * @param message ReportRuntimeEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IReportRuntimeEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReportRuntimeEventRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReportRuntimeEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ReportRuntimeEventRequest;

                    /**
                     * Decodes a ReportRuntimeEventRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReportRuntimeEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ReportRuntimeEventRequest;

                    /**
                     * Verifies a ReportRuntimeEventRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReportRuntimeEventRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReportRuntimeEventRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ReportRuntimeEventRequest;

                    /**
                     * Creates a plain object from a ReportRuntimeEventRequest message. Also converts values to other types if specified.
                     * @param message ReportRuntimeEventRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ReportRuntimeEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReportRuntimeEventRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Runtime. */
                interface IRuntime {

                    /** Runtime name */
                    name?: (string|null);

                    /** Runtime virtualMachine */
                    virtualMachine?: (google.cloud.notebooks.v1.IVirtualMachine|null);

                    /** Runtime state */
                    state?: (google.cloud.notebooks.v1.Runtime.State|keyof typeof google.cloud.notebooks.v1.Runtime.State|null);

                    /** Runtime healthState */
                    healthState?: (google.cloud.notebooks.v1.Runtime.HealthState|keyof typeof google.cloud.notebooks.v1.Runtime.HealthState|null);

                    /** Runtime accessConfig */
                    accessConfig?: (google.cloud.notebooks.v1.IRuntimeAccessConfig|null);

                    /** Runtime softwareConfig */
                    softwareConfig?: (google.cloud.notebooks.v1.IRuntimeSoftwareConfig|null);

                    /** Runtime metrics */
                    metrics?: (google.cloud.notebooks.v1.IRuntimeMetrics|null);

                    /** Runtime createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Runtime updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Runtime. */
                class Runtime implements IRuntime {

                    /**
                     * Constructs a new Runtime.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IRuntime);

                    /** Runtime name. */
                    public name: string;

                    /** Runtime virtualMachine. */
                    public virtualMachine?: (google.cloud.notebooks.v1.IVirtualMachine|null);

                    /** Runtime state. */
                    public state: (google.cloud.notebooks.v1.Runtime.State|keyof typeof google.cloud.notebooks.v1.Runtime.State);

                    /** Runtime healthState. */
                    public healthState: (google.cloud.notebooks.v1.Runtime.HealthState|keyof typeof google.cloud.notebooks.v1.Runtime.HealthState);

                    /** Runtime accessConfig. */
                    public accessConfig?: (google.cloud.notebooks.v1.IRuntimeAccessConfig|null);

                    /** Runtime softwareConfig. */
                    public softwareConfig?: (google.cloud.notebooks.v1.IRuntimeSoftwareConfig|null);

                    /** Runtime metrics. */
                    public metrics?: (google.cloud.notebooks.v1.IRuntimeMetrics|null);

                    /** Runtime createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Runtime updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Runtime runtimeType. */
                    public runtimeType?: "virtualMachine";

                    /**
                     * Creates a new Runtime instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Runtime instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IRuntime): google.cloud.notebooks.v1.Runtime;

                    /**
                     * Encodes the specified Runtime message. Does not implicitly {@link google.cloud.notebooks.v1.Runtime.verify|verify} messages.
                     * @param message Runtime message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Runtime message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Runtime.verify|verify} messages.
                     * @param message Runtime message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Runtime message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Runtime
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Runtime;

                    /**
                     * Decodes a Runtime message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Runtime
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Runtime;

                    /**
                     * Verifies a Runtime message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Runtime message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Runtime
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Runtime;

                    /**
                     * Creates a plain object from a Runtime message. Also converts values to other types if specified.
                     * @param message Runtime
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.Runtime, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Runtime to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Runtime {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STARTING = 1,
                        PROVISIONING = 2,
                        ACTIVE = 3,
                        STOPPING = 4,
                        STOPPED = 5,
                        DELETING = 6,
                        UPGRADING = 7,
                        INITIALIZING = 8
                    }

                    /** HealthState enum. */
                    enum HealthState {
                        HEALTH_STATE_UNSPECIFIED = 0,
                        HEALTHY = 1,
                        UNHEALTHY = 2
                    }
                }

                /** Properties of a RuntimeAcceleratorConfig. */
                interface IRuntimeAcceleratorConfig {

                    /** RuntimeAcceleratorConfig type */
                    type?: (google.cloud.notebooks.v1.RuntimeAcceleratorConfig.AcceleratorType|keyof typeof google.cloud.notebooks.v1.RuntimeAcceleratorConfig.AcceleratorType|null);

                    /** RuntimeAcceleratorConfig coreCount */
                    coreCount?: (number|Long|string|null);
                }

                /** Represents a RuntimeAcceleratorConfig. */
                class RuntimeAcceleratorConfig implements IRuntimeAcceleratorConfig {

                    /**
                     * Constructs a new RuntimeAcceleratorConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IRuntimeAcceleratorConfig);

                    /** RuntimeAcceleratorConfig type. */
                    public type: (google.cloud.notebooks.v1.RuntimeAcceleratorConfig.AcceleratorType|keyof typeof google.cloud.notebooks.v1.RuntimeAcceleratorConfig.AcceleratorType);

                    /** RuntimeAcceleratorConfig coreCount. */
                    public coreCount: (number|Long|string);

                    /**
                     * Creates a new RuntimeAcceleratorConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeAcceleratorConfig instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IRuntimeAcceleratorConfig): google.cloud.notebooks.v1.RuntimeAcceleratorConfig;

                    /**
                     * Encodes the specified RuntimeAcceleratorConfig message. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeAcceleratorConfig.verify|verify} messages.
                     * @param message RuntimeAcceleratorConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IRuntimeAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeAcceleratorConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeAcceleratorConfig.verify|verify} messages.
                     * @param message RuntimeAcceleratorConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IRuntimeAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeAcceleratorConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeAcceleratorConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.RuntimeAcceleratorConfig;

                    /**
                     * Decodes a RuntimeAcceleratorConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeAcceleratorConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.RuntimeAcceleratorConfig;

                    /**
                     * Verifies a RuntimeAcceleratorConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeAcceleratorConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeAcceleratorConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.RuntimeAcceleratorConfig;

                    /**
                     * Creates a plain object from a RuntimeAcceleratorConfig message. Also converts values to other types if specified.
                     * @param message RuntimeAcceleratorConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.RuntimeAcceleratorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeAcceleratorConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RuntimeAcceleratorConfig {

                    /** AcceleratorType enum. */
                    enum AcceleratorType {
                        ACCELERATOR_TYPE_UNSPECIFIED = 0,
                        NVIDIA_TESLA_K80 = 1,
                        NVIDIA_TESLA_P100 = 2,
                        NVIDIA_TESLA_V100 = 3,
                        NVIDIA_TESLA_P4 = 4,
                        NVIDIA_TESLA_T4 = 5,
                        NVIDIA_TESLA_A100 = 6,
                        TPU_V2 = 7,
                        TPU_V3 = 8,
                        NVIDIA_TESLA_T4_VWS = 9,
                        NVIDIA_TESLA_P100_VWS = 10,
                        NVIDIA_TESLA_P4_VWS = 11
                    }
                }

                /** Properties of an EncryptionConfig. */
                interface IEncryptionConfig {

                    /** EncryptionConfig kmsKey */
                    kmsKey?: (string|null);
                }

                /** Represents an EncryptionConfig. */
                class EncryptionConfig implements IEncryptionConfig {

                    /**
                     * Constructs a new EncryptionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IEncryptionConfig);

                    /** EncryptionConfig kmsKey. */
                    public kmsKey: string;

                    /**
                     * Creates a new EncryptionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EncryptionConfig instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IEncryptionConfig): google.cloud.notebooks.v1.EncryptionConfig;

                    /**
                     * Encodes the specified EncryptionConfig message. Does not implicitly {@link google.cloud.notebooks.v1.EncryptionConfig.verify|verify} messages.
                     * @param message EncryptionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EncryptionConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.EncryptionConfig.verify|verify} messages.
                     * @param message EncryptionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EncryptionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EncryptionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.EncryptionConfig;

                    /**
                     * Decodes an EncryptionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EncryptionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.EncryptionConfig;

                    /**
                     * Verifies an EncryptionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EncryptionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EncryptionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.EncryptionConfig;

                    /**
                     * Creates a plain object from an EncryptionConfig message. Also converts values to other types if specified.
                     * @param message EncryptionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.EncryptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EncryptionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LocalDisk. */
                interface ILocalDisk {

                    /** LocalDisk autoDelete */
                    autoDelete?: (boolean|null);

                    /** LocalDisk boot */
                    boot?: (boolean|null);

                    /** LocalDisk deviceName */
                    deviceName?: (string|null);

                    /** LocalDisk guestOsFeatures */
                    guestOsFeatures?: (google.cloud.notebooks.v1.LocalDisk.IRuntimeGuestOsFeature[]|null);

                    /** LocalDisk index */
                    index?: (number|null);

                    /** LocalDisk initializeParams */
                    initializeParams?: (google.cloud.notebooks.v1.ILocalDiskInitializeParams|null);

                    /** LocalDisk interface */
                    "interface"?: (string|null);

                    /** LocalDisk kind */
                    kind?: (string|null);

                    /** LocalDisk licenses */
                    licenses?: (string[]|null);

                    /** LocalDisk mode */
                    mode?: (string|null);

                    /** LocalDisk source */
                    source?: (string|null);

                    /** LocalDisk type */
                    type?: (string|null);
                }

                /** Represents a LocalDisk. */
                class LocalDisk implements ILocalDisk {

                    /**
                     * Constructs a new LocalDisk.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ILocalDisk);

                    /** LocalDisk autoDelete. */
                    public autoDelete: boolean;

                    /** LocalDisk boot. */
                    public boot: boolean;

                    /** LocalDisk deviceName. */
                    public deviceName: string;

                    /** LocalDisk guestOsFeatures. */
                    public guestOsFeatures: google.cloud.notebooks.v1.LocalDisk.IRuntimeGuestOsFeature[];

                    /** LocalDisk index. */
                    public index: number;

                    /** LocalDisk initializeParams. */
                    public initializeParams?: (google.cloud.notebooks.v1.ILocalDiskInitializeParams|null);

                    /** LocalDisk interface. */
                    public interface: string;

                    /** LocalDisk kind. */
                    public kind: string;

                    /** LocalDisk licenses. */
                    public licenses: string[];

                    /** LocalDisk mode. */
                    public mode: string;

                    /** LocalDisk source. */
                    public source: string;

                    /** LocalDisk type. */
                    public type: string;

                    /**
                     * Creates a new LocalDisk instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocalDisk instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ILocalDisk): google.cloud.notebooks.v1.LocalDisk;

                    /**
                     * Encodes the specified LocalDisk message. Does not implicitly {@link google.cloud.notebooks.v1.LocalDisk.verify|verify} messages.
                     * @param message LocalDisk message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ILocalDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocalDisk message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.LocalDisk.verify|verify} messages.
                     * @param message LocalDisk message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ILocalDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocalDisk message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocalDisk
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.LocalDisk;

                    /**
                     * Decodes a LocalDisk message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocalDisk
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.LocalDisk;

                    /**
                     * Verifies a LocalDisk message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocalDisk message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocalDisk
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.LocalDisk;

                    /**
                     * Creates a plain object from a LocalDisk message. Also converts values to other types if specified.
                     * @param message LocalDisk
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.LocalDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocalDisk to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LocalDisk {

                    /** Properties of a RuntimeGuestOsFeature. */
                    interface IRuntimeGuestOsFeature {

                        /** RuntimeGuestOsFeature type */
                        type?: (string|null);
                    }

                    /** Represents a RuntimeGuestOsFeature. */
                    class RuntimeGuestOsFeature implements IRuntimeGuestOsFeature {

                        /**
                         * Constructs a new RuntimeGuestOsFeature.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.notebooks.v1.LocalDisk.IRuntimeGuestOsFeature);

                        /** RuntimeGuestOsFeature type. */
                        public type: string;

                        /**
                         * Creates a new RuntimeGuestOsFeature instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RuntimeGuestOsFeature instance
                         */
                        public static create(properties?: google.cloud.notebooks.v1.LocalDisk.IRuntimeGuestOsFeature): google.cloud.notebooks.v1.LocalDisk.RuntimeGuestOsFeature;

                        /**
                         * Encodes the specified RuntimeGuestOsFeature message. Does not implicitly {@link google.cloud.notebooks.v1.LocalDisk.RuntimeGuestOsFeature.verify|verify} messages.
                         * @param message RuntimeGuestOsFeature message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.notebooks.v1.LocalDisk.IRuntimeGuestOsFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RuntimeGuestOsFeature message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.LocalDisk.RuntimeGuestOsFeature.verify|verify} messages.
                         * @param message RuntimeGuestOsFeature message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.notebooks.v1.LocalDisk.IRuntimeGuestOsFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RuntimeGuestOsFeature message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RuntimeGuestOsFeature
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.LocalDisk.RuntimeGuestOsFeature;

                        /**
                         * Decodes a RuntimeGuestOsFeature message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RuntimeGuestOsFeature
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.LocalDisk.RuntimeGuestOsFeature;

                        /**
                         * Verifies a RuntimeGuestOsFeature message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RuntimeGuestOsFeature message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RuntimeGuestOsFeature
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.LocalDisk.RuntimeGuestOsFeature;

                        /**
                         * Creates a plain object from a RuntimeGuestOsFeature message. Also converts values to other types if specified.
                         * @param message RuntimeGuestOsFeature
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.notebooks.v1.LocalDisk.RuntimeGuestOsFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RuntimeGuestOsFeature to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a LocalDiskInitializeParams. */
                interface ILocalDiskInitializeParams {

                    /** LocalDiskInitializeParams description */
                    description?: (string|null);

                    /** LocalDiskInitializeParams diskName */
                    diskName?: (string|null);

                    /** LocalDiskInitializeParams diskSizeGb */
                    diskSizeGb?: (number|Long|string|null);

                    /** LocalDiskInitializeParams diskType */
                    diskType?: (google.cloud.notebooks.v1.LocalDiskInitializeParams.DiskType|keyof typeof google.cloud.notebooks.v1.LocalDiskInitializeParams.DiskType|null);

                    /** LocalDiskInitializeParams labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a LocalDiskInitializeParams. */
                class LocalDiskInitializeParams implements ILocalDiskInitializeParams {

                    /**
                     * Constructs a new LocalDiskInitializeParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ILocalDiskInitializeParams);

                    /** LocalDiskInitializeParams description. */
                    public description: string;

                    /** LocalDiskInitializeParams diskName. */
                    public diskName: string;

                    /** LocalDiskInitializeParams diskSizeGb. */
                    public diskSizeGb: (number|Long|string);

                    /** LocalDiskInitializeParams diskType. */
                    public diskType: (google.cloud.notebooks.v1.LocalDiskInitializeParams.DiskType|keyof typeof google.cloud.notebooks.v1.LocalDiskInitializeParams.DiskType);

                    /** LocalDiskInitializeParams labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new LocalDiskInitializeParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocalDiskInitializeParams instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ILocalDiskInitializeParams): google.cloud.notebooks.v1.LocalDiskInitializeParams;

                    /**
                     * Encodes the specified LocalDiskInitializeParams message. Does not implicitly {@link google.cloud.notebooks.v1.LocalDiskInitializeParams.verify|verify} messages.
                     * @param message LocalDiskInitializeParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ILocalDiskInitializeParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocalDiskInitializeParams message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.LocalDiskInitializeParams.verify|verify} messages.
                     * @param message LocalDiskInitializeParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ILocalDiskInitializeParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocalDiskInitializeParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocalDiskInitializeParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.LocalDiskInitializeParams;

                    /**
                     * Decodes a LocalDiskInitializeParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocalDiskInitializeParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.LocalDiskInitializeParams;

                    /**
                     * Verifies a LocalDiskInitializeParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocalDiskInitializeParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocalDiskInitializeParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.LocalDiskInitializeParams;

                    /**
                     * Creates a plain object from a LocalDiskInitializeParams message. Also converts values to other types if specified.
                     * @param message LocalDiskInitializeParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.LocalDiskInitializeParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocalDiskInitializeParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LocalDiskInitializeParams {

                    /** DiskType enum. */
                    enum DiskType {
                        DISK_TYPE_UNSPECIFIED = 0,
                        PD_STANDARD = 1,
                        PD_SSD = 2,
                        PD_BALANCED = 3
                    }
                }

                /** Properties of a RuntimeAccessConfig. */
                interface IRuntimeAccessConfig {

                    /** RuntimeAccessConfig accessType */
                    accessType?: (google.cloud.notebooks.v1.RuntimeAccessConfig.RuntimeAccessType|keyof typeof google.cloud.notebooks.v1.RuntimeAccessConfig.RuntimeAccessType|null);

                    /** RuntimeAccessConfig runtimeOwner */
                    runtimeOwner?: (string|null);

                    /** RuntimeAccessConfig proxyUri */
                    proxyUri?: (string|null);
                }

                /** Represents a RuntimeAccessConfig. */
                class RuntimeAccessConfig implements IRuntimeAccessConfig {

                    /**
                     * Constructs a new RuntimeAccessConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IRuntimeAccessConfig);

                    /** RuntimeAccessConfig accessType. */
                    public accessType: (google.cloud.notebooks.v1.RuntimeAccessConfig.RuntimeAccessType|keyof typeof google.cloud.notebooks.v1.RuntimeAccessConfig.RuntimeAccessType);

                    /** RuntimeAccessConfig runtimeOwner. */
                    public runtimeOwner: string;

                    /** RuntimeAccessConfig proxyUri. */
                    public proxyUri: string;

                    /**
                     * Creates a new RuntimeAccessConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeAccessConfig instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IRuntimeAccessConfig): google.cloud.notebooks.v1.RuntimeAccessConfig;

                    /**
                     * Encodes the specified RuntimeAccessConfig message. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeAccessConfig.verify|verify} messages.
                     * @param message RuntimeAccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IRuntimeAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeAccessConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeAccessConfig.verify|verify} messages.
                     * @param message RuntimeAccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IRuntimeAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeAccessConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeAccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.RuntimeAccessConfig;

                    /**
                     * Decodes a RuntimeAccessConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeAccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.RuntimeAccessConfig;

                    /**
                     * Verifies a RuntimeAccessConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeAccessConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeAccessConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.RuntimeAccessConfig;

                    /**
                     * Creates a plain object from a RuntimeAccessConfig message. Also converts values to other types if specified.
                     * @param message RuntimeAccessConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.RuntimeAccessConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeAccessConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RuntimeAccessConfig {

                    /** RuntimeAccessType enum. */
                    enum RuntimeAccessType {
                        RUNTIME_ACCESS_TYPE_UNSPECIFIED = 0,
                        SINGLE_USER = 1
                    }
                }

                /** Properties of a RuntimeSoftwareConfig. */
                interface IRuntimeSoftwareConfig {

                    /** RuntimeSoftwareConfig notebookUpgradeSchedule */
                    notebookUpgradeSchedule?: (string|null);

                    /** RuntimeSoftwareConfig enableHealthMonitoring */
                    enableHealthMonitoring?: (boolean|null);

                    /** RuntimeSoftwareConfig idleShutdown */
                    idleShutdown?: (boolean|null);

                    /** RuntimeSoftwareConfig idleShutdownTimeout */
                    idleShutdownTimeout?: (number|null);

                    /** RuntimeSoftwareConfig installGpuDriver */
                    installGpuDriver?: (boolean|null);

                    /** RuntimeSoftwareConfig customGpuDriverPath */
                    customGpuDriverPath?: (string|null);

                    /** RuntimeSoftwareConfig postStartupScript */
                    postStartupScript?: (string|null);
                }

                /** Represents a RuntimeSoftwareConfig. */
                class RuntimeSoftwareConfig implements IRuntimeSoftwareConfig {

                    /**
                     * Constructs a new RuntimeSoftwareConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IRuntimeSoftwareConfig);

                    /** RuntimeSoftwareConfig notebookUpgradeSchedule. */
                    public notebookUpgradeSchedule: string;

                    /** RuntimeSoftwareConfig enableHealthMonitoring. */
                    public enableHealthMonitoring?: (boolean|null);

                    /** RuntimeSoftwareConfig idleShutdown. */
                    public idleShutdown?: (boolean|null);

                    /** RuntimeSoftwareConfig idleShutdownTimeout. */
                    public idleShutdownTimeout: number;

                    /** RuntimeSoftwareConfig installGpuDriver. */
                    public installGpuDriver: boolean;

                    /** RuntimeSoftwareConfig customGpuDriverPath. */
                    public customGpuDriverPath: string;

                    /** RuntimeSoftwareConfig postStartupScript. */
                    public postStartupScript: string;

                    /** RuntimeSoftwareConfig _enableHealthMonitoring. */
                    public _enableHealthMonitoring?: "enableHealthMonitoring";

                    /** RuntimeSoftwareConfig _idleShutdown. */
                    public _idleShutdown?: "idleShutdown";

                    /**
                     * Creates a new RuntimeSoftwareConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeSoftwareConfig instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IRuntimeSoftwareConfig): google.cloud.notebooks.v1.RuntimeSoftwareConfig;

                    /**
                     * Encodes the specified RuntimeSoftwareConfig message. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeSoftwareConfig.verify|verify} messages.
                     * @param message RuntimeSoftwareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IRuntimeSoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeSoftwareConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeSoftwareConfig.verify|verify} messages.
                     * @param message RuntimeSoftwareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IRuntimeSoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeSoftwareConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeSoftwareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.RuntimeSoftwareConfig;

                    /**
                     * Decodes a RuntimeSoftwareConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeSoftwareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.RuntimeSoftwareConfig;

                    /**
                     * Verifies a RuntimeSoftwareConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeSoftwareConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeSoftwareConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.RuntimeSoftwareConfig;

                    /**
                     * Creates a plain object from a RuntimeSoftwareConfig message. Also converts values to other types if specified.
                     * @param message RuntimeSoftwareConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.RuntimeSoftwareConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeSoftwareConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RuntimeMetrics. */
                interface IRuntimeMetrics {

                    /** RuntimeMetrics systemMetrics */
                    systemMetrics?: ({ [k: string]: string }|null);
                }

                /** Represents a RuntimeMetrics. */
                class RuntimeMetrics implements IRuntimeMetrics {

                    /**
                     * Constructs a new RuntimeMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IRuntimeMetrics);

                    /** RuntimeMetrics systemMetrics. */
                    public systemMetrics: { [k: string]: string };

                    /**
                     * Creates a new RuntimeMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeMetrics instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IRuntimeMetrics): google.cloud.notebooks.v1.RuntimeMetrics;

                    /**
                     * Encodes the specified RuntimeMetrics message. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeMetrics.verify|verify} messages.
                     * @param message RuntimeMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IRuntimeMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeMetrics message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeMetrics.verify|verify} messages.
                     * @param message RuntimeMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IRuntimeMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.RuntimeMetrics;

                    /**
                     * Decodes a RuntimeMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.RuntimeMetrics;

                    /**
                     * Verifies a RuntimeMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.RuntimeMetrics;

                    /**
                     * Creates a plain object from a RuntimeMetrics message. Also converts values to other types if specified.
                     * @param message RuntimeMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.RuntimeMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RuntimeShieldedInstanceConfig. */
                interface IRuntimeShieldedInstanceConfig {

                    /** RuntimeShieldedInstanceConfig enableSecureBoot */
                    enableSecureBoot?: (boolean|null);

                    /** RuntimeShieldedInstanceConfig enableVtpm */
                    enableVtpm?: (boolean|null);

                    /** RuntimeShieldedInstanceConfig enableIntegrityMonitoring */
                    enableIntegrityMonitoring?: (boolean|null);
                }

                /** Represents a RuntimeShieldedInstanceConfig. */
                class RuntimeShieldedInstanceConfig implements IRuntimeShieldedInstanceConfig {

                    /**
                     * Constructs a new RuntimeShieldedInstanceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IRuntimeShieldedInstanceConfig);

                    /** RuntimeShieldedInstanceConfig enableSecureBoot. */
                    public enableSecureBoot: boolean;

                    /** RuntimeShieldedInstanceConfig enableVtpm. */
                    public enableVtpm: boolean;

                    /** RuntimeShieldedInstanceConfig enableIntegrityMonitoring. */
                    public enableIntegrityMonitoring: boolean;

                    /**
                     * Creates a new RuntimeShieldedInstanceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeShieldedInstanceConfig instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IRuntimeShieldedInstanceConfig): google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig;

                    /**
                     * Encodes the specified RuntimeShieldedInstanceConfig message. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig.verify|verify} messages.
                     * @param message RuntimeShieldedInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IRuntimeShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeShieldedInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig.verify|verify} messages.
                     * @param message RuntimeShieldedInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IRuntimeShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeShieldedInstanceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeShieldedInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig;

                    /**
                     * Decodes a RuntimeShieldedInstanceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeShieldedInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig;

                    /**
                     * Verifies a RuntimeShieldedInstanceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeShieldedInstanceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeShieldedInstanceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig;

                    /**
                     * Creates a plain object from a RuntimeShieldedInstanceConfig message. Also converts values to other types if specified.
                     * @param message RuntimeShieldedInstanceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.RuntimeShieldedInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeShieldedInstanceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VirtualMachine. */
                interface IVirtualMachine {

                    /** VirtualMachine instanceName */
                    instanceName?: (string|null);

                    /** VirtualMachine instanceId */
                    instanceId?: (string|null);

                    /** VirtualMachine virtualMachineConfig */
                    virtualMachineConfig?: (google.cloud.notebooks.v1.IVirtualMachineConfig|null);
                }

                /** Represents a VirtualMachine. */
                class VirtualMachine implements IVirtualMachine {

                    /**
                     * Constructs a new VirtualMachine.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IVirtualMachine);

                    /** VirtualMachine instanceName. */
                    public instanceName: string;

                    /** VirtualMachine instanceId. */
                    public instanceId: string;

                    /** VirtualMachine virtualMachineConfig. */
                    public virtualMachineConfig?: (google.cloud.notebooks.v1.IVirtualMachineConfig|null);

                    /**
                     * Creates a new VirtualMachine instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VirtualMachine instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IVirtualMachine): google.cloud.notebooks.v1.VirtualMachine;

                    /**
                     * Encodes the specified VirtualMachine message. Does not implicitly {@link google.cloud.notebooks.v1.VirtualMachine.verify|verify} messages.
                     * @param message VirtualMachine message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IVirtualMachine, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VirtualMachine message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.VirtualMachine.verify|verify} messages.
                     * @param message VirtualMachine message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IVirtualMachine, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VirtualMachine message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VirtualMachine
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.VirtualMachine;

                    /**
                     * Decodes a VirtualMachine message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VirtualMachine
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.VirtualMachine;

                    /**
                     * Verifies a VirtualMachine message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VirtualMachine message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VirtualMachine
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.VirtualMachine;

                    /**
                     * Creates a plain object from a VirtualMachine message. Also converts values to other types if specified.
                     * @param message VirtualMachine
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.VirtualMachine, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VirtualMachine to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VirtualMachineConfig. */
                interface IVirtualMachineConfig {

                    /** VirtualMachineConfig zone */
                    zone?: (string|null);

                    /** VirtualMachineConfig machineType */
                    machineType?: (string|null);

                    /** VirtualMachineConfig containerImages */
                    containerImages?: (google.cloud.notebooks.v1.IContainerImage[]|null);

                    /** VirtualMachineConfig dataDisk */
                    dataDisk?: (google.cloud.notebooks.v1.ILocalDisk|null);

                    /** VirtualMachineConfig encryptionConfig */
                    encryptionConfig?: (google.cloud.notebooks.v1.IEncryptionConfig|null);

                    /** VirtualMachineConfig shieldedInstanceConfig */
                    shieldedInstanceConfig?: (google.cloud.notebooks.v1.IRuntimeShieldedInstanceConfig|null);

                    /** VirtualMachineConfig acceleratorConfig */
                    acceleratorConfig?: (google.cloud.notebooks.v1.IRuntimeAcceleratorConfig|null);

                    /** VirtualMachineConfig network */
                    network?: (string|null);

                    /** VirtualMachineConfig subnet */
                    subnet?: (string|null);

                    /** VirtualMachineConfig internalIpOnly */
                    internalIpOnly?: (boolean|null);

                    /** VirtualMachineConfig tags */
                    tags?: (string[]|null);

                    /** VirtualMachineConfig guestAttributes */
                    guestAttributes?: ({ [k: string]: string }|null);

                    /** VirtualMachineConfig metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** VirtualMachineConfig labels */
                    labels?: ({ [k: string]: string }|null);

                    /** VirtualMachineConfig nicType */
                    nicType?: (google.cloud.notebooks.v1.VirtualMachineConfig.NicType|keyof typeof google.cloud.notebooks.v1.VirtualMachineConfig.NicType|null);
                }

                /** Represents a VirtualMachineConfig. */
                class VirtualMachineConfig implements IVirtualMachineConfig {

                    /**
                     * Constructs a new VirtualMachineConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IVirtualMachineConfig);

                    /** VirtualMachineConfig zone. */
                    public zone: string;

                    /** VirtualMachineConfig machineType. */
                    public machineType: string;

                    /** VirtualMachineConfig containerImages. */
                    public containerImages: google.cloud.notebooks.v1.IContainerImage[];

                    /** VirtualMachineConfig dataDisk. */
                    public dataDisk?: (google.cloud.notebooks.v1.ILocalDisk|null);

                    /** VirtualMachineConfig encryptionConfig. */
                    public encryptionConfig?: (google.cloud.notebooks.v1.IEncryptionConfig|null);

                    /** VirtualMachineConfig shieldedInstanceConfig. */
                    public shieldedInstanceConfig?: (google.cloud.notebooks.v1.IRuntimeShieldedInstanceConfig|null);

                    /** VirtualMachineConfig acceleratorConfig. */
                    public acceleratorConfig?: (google.cloud.notebooks.v1.IRuntimeAcceleratorConfig|null);

                    /** VirtualMachineConfig network. */
                    public network: string;

                    /** VirtualMachineConfig subnet. */
                    public subnet: string;

                    /** VirtualMachineConfig internalIpOnly. */
                    public internalIpOnly: boolean;

                    /** VirtualMachineConfig tags. */
                    public tags: string[];

                    /** VirtualMachineConfig guestAttributes. */
                    public guestAttributes: { [k: string]: string };

                    /** VirtualMachineConfig metadata. */
                    public metadata: { [k: string]: string };

                    /** VirtualMachineConfig labels. */
                    public labels: { [k: string]: string };

                    /** VirtualMachineConfig nicType. */
                    public nicType: (google.cloud.notebooks.v1.VirtualMachineConfig.NicType|keyof typeof google.cloud.notebooks.v1.VirtualMachineConfig.NicType);

                    /**
                     * Creates a new VirtualMachineConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VirtualMachineConfig instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IVirtualMachineConfig): google.cloud.notebooks.v1.VirtualMachineConfig;

                    /**
                     * Encodes the specified VirtualMachineConfig message. Does not implicitly {@link google.cloud.notebooks.v1.VirtualMachineConfig.verify|verify} messages.
                     * @param message VirtualMachineConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IVirtualMachineConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VirtualMachineConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.VirtualMachineConfig.verify|verify} messages.
                     * @param message VirtualMachineConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IVirtualMachineConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VirtualMachineConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VirtualMachineConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.VirtualMachineConfig;

                    /**
                     * Decodes a VirtualMachineConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VirtualMachineConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.VirtualMachineConfig;

                    /**
                     * Verifies a VirtualMachineConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VirtualMachineConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VirtualMachineConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.VirtualMachineConfig;

                    /**
                     * Creates a plain object from a VirtualMachineConfig message. Also converts values to other types if specified.
                     * @param message VirtualMachineConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.VirtualMachineConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VirtualMachineConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace VirtualMachineConfig {

                    /** NicType enum. */
                    enum NicType {
                        UNSPECIFIED_NIC_TYPE = 0,
                        VIRTIO_NET = 1,
                        GVNIC = 2
                    }
                }

                /** Properties of a Schedule. */
                interface ISchedule {

                    /** Schedule name */
                    name?: (string|null);

                    /** Schedule displayName */
                    displayName?: (string|null);

                    /** Schedule description */
                    description?: (string|null);

                    /** Schedule state */
                    state?: (google.cloud.notebooks.v1.Schedule.State|keyof typeof google.cloud.notebooks.v1.Schedule.State|null);

                    /** Schedule cronSchedule */
                    cronSchedule?: (string|null);

                    /** Schedule timeZone */
                    timeZone?: (string|null);

                    /** Schedule createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Schedule updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Schedule executionTemplate */
                    executionTemplate?: (google.cloud.notebooks.v1.IExecutionTemplate|null);

                    /** Schedule recentExecutions */
                    recentExecutions?: (google.cloud.notebooks.v1.IExecution[]|null);
                }

                /** Represents a Schedule. */
                class Schedule implements ISchedule {

                    /**
                     * Constructs a new Schedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ISchedule);

                    /** Schedule name. */
                    public name: string;

                    /** Schedule displayName. */
                    public displayName: string;

                    /** Schedule description. */
                    public description: string;

                    /** Schedule state. */
                    public state: (google.cloud.notebooks.v1.Schedule.State|keyof typeof google.cloud.notebooks.v1.Schedule.State);

                    /** Schedule cronSchedule. */
                    public cronSchedule: string;

                    /** Schedule timeZone. */
                    public timeZone: string;

                    /** Schedule createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Schedule updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Schedule executionTemplate. */
                    public executionTemplate?: (google.cloud.notebooks.v1.IExecutionTemplate|null);

                    /** Schedule recentExecutions. */
                    public recentExecutions: google.cloud.notebooks.v1.IExecution[];

                    /**
                     * Creates a new Schedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Schedule instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ISchedule): google.cloud.notebooks.v1.Schedule;

                    /**
                     * Encodes the specified Schedule message. Does not implicitly {@link google.cloud.notebooks.v1.Schedule.verify|verify} messages.
                     * @param message Schedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Schedule message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.Schedule.verify|verify} messages.
                     * @param message Schedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Schedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Schedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.Schedule;

                    /**
                     * Decodes a Schedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Schedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.Schedule;

                    /**
                     * Verifies a Schedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Schedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Schedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.Schedule;

                    /**
                     * Creates a plain object from a Schedule message. Also converts values to other types if specified.
                     * @param message Schedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.Schedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Schedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Schedule {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        PAUSED = 2,
                        DISABLED = 3,
                        UPDATE_FAILED = 4,
                        INITIALIZING = 5,
                        DELETING = 6
                    }
                }

                /** Represents a NotebookService */
                class NotebookService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new NotebookService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new NotebookService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NotebookService;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstancesResponse
                     */
                    public listInstances(request: google.cloud.notebooks.v1.IListInstancesRequest, callback: google.cloud.notebooks.v1.NotebookService.ListInstancesCallback): void;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @returns Promise
                     */
                    public listInstances(request: google.cloud.notebooks.v1.IListInstancesRequest): Promise<google.cloud.notebooks.v1.ListInstancesResponse>;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.notebooks.v1.IGetInstanceRequest, callback: google.cloud.notebooks.v1.NotebookService.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.notebooks.v1.IGetInstanceRequest): Promise<google.cloud.notebooks.v1.Instance>;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInstance(request: google.cloud.notebooks.v1.ICreateInstanceRequest, callback: google.cloud.notebooks.v1.NotebookService.CreateInstanceCallback): void;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public createInstance(request: google.cloud.notebooks.v1.ICreateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RegisterInstance.
                     * @param request RegisterInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public registerInstance(request: google.cloud.notebooks.v1.IRegisterInstanceRequest, callback: google.cloud.notebooks.v1.NotebookService.RegisterInstanceCallback): void;

                    /**
                     * Calls RegisterInstance.
                     * @param request RegisterInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public registerInstance(request: google.cloud.notebooks.v1.IRegisterInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SetInstanceAccelerator.
                     * @param request SetInstanceAcceleratorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public setInstanceAccelerator(request: google.cloud.notebooks.v1.ISetInstanceAcceleratorRequest, callback: google.cloud.notebooks.v1.NotebookService.SetInstanceAcceleratorCallback): void;

                    /**
                     * Calls SetInstanceAccelerator.
                     * @param request SetInstanceAcceleratorRequest message or plain object
                     * @returns Promise
                     */
                    public setInstanceAccelerator(request: google.cloud.notebooks.v1.ISetInstanceAcceleratorRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SetInstanceMachineType.
                     * @param request SetInstanceMachineTypeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public setInstanceMachineType(request: google.cloud.notebooks.v1.ISetInstanceMachineTypeRequest, callback: google.cloud.notebooks.v1.NotebookService.SetInstanceMachineTypeCallback): void;

                    /**
                     * Calls SetInstanceMachineType.
                     * @param request SetInstanceMachineTypeRequest message or plain object
                     * @returns Promise
                     */
                    public setInstanceMachineType(request: google.cloud.notebooks.v1.ISetInstanceMachineTypeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateInstanceConfig.
                     * @param request UpdateInstanceConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateInstanceConfig(request: google.cloud.notebooks.v1.IUpdateInstanceConfigRequest, callback: google.cloud.notebooks.v1.NotebookService.UpdateInstanceConfigCallback): void;

                    /**
                     * Calls UpdateInstanceConfig.
                     * @param request UpdateInstanceConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateInstanceConfig(request: google.cloud.notebooks.v1.IUpdateInstanceConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateShieldedInstanceConfig.
                     * @param request UpdateShieldedInstanceConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateShieldedInstanceConfig(request: google.cloud.notebooks.v1.IUpdateShieldedInstanceConfigRequest, callback: google.cloud.notebooks.v1.NotebookService.UpdateShieldedInstanceConfigCallback): void;

                    /**
                     * Calls UpdateShieldedInstanceConfig.
                     * @param request UpdateShieldedInstanceConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateShieldedInstanceConfig(request: google.cloud.notebooks.v1.IUpdateShieldedInstanceConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SetInstanceLabels.
                     * @param request SetInstanceLabelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public setInstanceLabels(request: google.cloud.notebooks.v1.ISetInstanceLabelsRequest, callback: google.cloud.notebooks.v1.NotebookService.SetInstanceLabelsCallback): void;

                    /**
                     * Calls SetInstanceLabels.
                     * @param request SetInstanceLabelsRequest message or plain object
                     * @returns Promise
                     */
                    public setInstanceLabels(request: google.cloud.notebooks.v1.ISetInstanceLabelsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteInstance(request: google.cloud.notebooks.v1.IDeleteInstanceRequest, callback: google.cloud.notebooks.v1.NotebookService.DeleteInstanceCallback): void;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInstance(request: google.cloud.notebooks.v1.IDeleteInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartInstance.
                     * @param request StartInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startInstance(request: google.cloud.notebooks.v1.IStartInstanceRequest, callback: google.cloud.notebooks.v1.NotebookService.StartInstanceCallback): void;

                    /**
                     * Calls StartInstance.
                     * @param request StartInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public startInstance(request: google.cloud.notebooks.v1.IStartInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopInstance.
                     * @param request StopInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopInstance(request: google.cloud.notebooks.v1.IStopInstanceRequest, callback: google.cloud.notebooks.v1.NotebookService.StopInstanceCallback): void;

                    /**
                     * Calls StopInstance.
                     * @param request StopInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public stopInstance(request: google.cloud.notebooks.v1.IStopInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ResetInstance.
                     * @param request ResetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resetInstance(request: google.cloud.notebooks.v1.IResetInstanceRequest, callback: google.cloud.notebooks.v1.NotebookService.ResetInstanceCallback): void;

                    /**
                     * Calls ResetInstance.
                     * @param request ResetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public resetInstance(request: google.cloud.notebooks.v1.IResetInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ReportInstanceInfo.
                     * @param request ReportInstanceInfoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public reportInstanceInfo(request: google.cloud.notebooks.v1.IReportInstanceInfoRequest, callback: google.cloud.notebooks.v1.NotebookService.ReportInstanceInfoCallback): void;

                    /**
                     * Calls ReportInstanceInfo.
                     * @param request ReportInstanceInfoRequest message or plain object
                     * @returns Promise
                     */
                    public reportInstanceInfo(request: google.cloud.notebooks.v1.IReportInstanceInfoRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls IsInstanceUpgradeable.
                     * @param request IsInstanceUpgradeableRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IsInstanceUpgradeableResponse
                     */
                    public isInstanceUpgradeable(request: google.cloud.notebooks.v1.IIsInstanceUpgradeableRequest, callback: google.cloud.notebooks.v1.NotebookService.IsInstanceUpgradeableCallback): void;

                    /**
                     * Calls IsInstanceUpgradeable.
                     * @param request IsInstanceUpgradeableRequest message or plain object
                     * @returns Promise
                     */
                    public isInstanceUpgradeable(request: google.cloud.notebooks.v1.IIsInstanceUpgradeableRequest): Promise<google.cloud.notebooks.v1.IsInstanceUpgradeableResponse>;

                    /**
                     * Calls GetInstanceHealth.
                     * @param request GetInstanceHealthRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GetInstanceHealthResponse
                     */
                    public getInstanceHealth(request: google.cloud.notebooks.v1.IGetInstanceHealthRequest, callback: google.cloud.notebooks.v1.NotebookService.GetInstanceHealthCallback): void;

                    /**
                     * Calls GetInstanceHealth.
                     * @param request GetInstanceHealthRequest message or plain object
                     * @returns Promise
                     */
                    public getInstanceHealth(request: google.cloud.notebooks.v1.IGetInstanceHealthRequest): Promise<google.cloud.notebooks.v1.GetInstanceHealthResponse>;

                    /**
                     * Calls UpgradeInstance.
                     * @param request UpgradeInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public upgradeInstance(request: google.cloud.notebooks.v1.IUpgradeInstanceRequest, callback: google.cloud.notebooks.v1.NotebookService.UpgradeInstanceCallback): void;

                    /**
                     * Calls UpgradeInstance.
                     * @param request UpgradeInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public upgradeInstance(request: google.cloud.notebooks.v1.IUpgradeInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RollbackInstance.
                     * @param request RollbackInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public rollbackInstance(request: google.cloud.notebooks.v1.IRollbackInstanceRequest, callback: google.cloud.notebooks.v1.NotebookService.RollbackInstanceCallback): void;

                    /**
                     * Calls RollbackInstance.
                     * @param request RollbackInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public rollbackInstance(request: google.cloud.notebooks.v1.IRollbackInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpgradeInstanceInternal.
                     * @param request UpgradeInstanceInternalRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public upgradeInstanceInternal(request: google.cloud.notebooks.v1.IUpgradeInstanceInternalRequest, callback: google.cloud.notebooks.v1.NotebookService.UpgradeInstanceInternalCallback): void;

                    /**
                     * Calls UpgradeInstanceInternal.
                     * @param request UpgradeInstanceInternalRequest message or plain object
                     * @returns Promise
                     */
                    public upgradeInstanceInternal(request: google.cloud.notebooks.v1.IUpgradeInstanceInternalRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListEnvironments.
                     * @param request ListEnvironmentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEnvironmentsResponse
                     */
                    public listEnvironments(request: google.cloud.notebooks.v1.IListEnvironmentsRequest, callback: google.cloud.notebooks.v1.NotebookService.ListEnvironmentsCallback): void;

                    /**
                     * Calls ListEnvironments.
                     * @param request ListEnvironmentsRequest message or plain object
                     * @returns Promise
                     */
                    public listEnvironments(request: google.cloud.notebooks.v1.IListEnvironmentsRequest): Promise<google.cloud.notebooks.v1.ListEnvironmentsResponse>;

                    /**
                     * Calls GetEnvironment.
                     * @param request GetEnvironmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Environment
                     */
                    public getEnvironment(request: google.cloud.notebooks.v1.IGetEnvironmentRequest, callback: google.cloud.notebooks.v1.NotebookService.GetEnvironmentCallback): void;

                    /**
                     * Calls GetEnvironment.
                     * @param request GetEnvironmentRequest message or plain object
                     * @returns Promise
                     */
                    public getEnvironment(request: google.cloud.notebooks.v1.IGetEnvironmentRequest): Promise<google.cloud.notebooks.v1.Environment>;

                    /**
                     * Calls CreateEnvironment.
                     * @param request CreateEnvironmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createEnvironment(request: google.cloud.notebooks.v1.ICreateEnvironmentRequest, callback: google.cloud.notebooks.v1.NotebookService.CreateEnvironmentCallback): void;

                    /**
                     * Calls CreateEnvironment.
                     * @param request CreateEnvironmentRequest message or plain object
                     * @returns Promise
                     */
                    public createEnvironment(request: google.cloud.notebooks.v1.ICreateEnvironmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteEnvironment.
                     * @param request DeleteEnvironmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteEnvironment(request: google.cloud.notebooks.v1.IDeleteEnvironmentRequest, callback: google.cloud.notebooks.v1.NotebookService.DeleteEnvironmentCallback): void;

                    /**
                     * Calls DeleteEnvironment.
                     * @param request DeleteEnvironmentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEnvironment(request: google.cloud.notebooks.v1.IDeleteEnvironmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListSchedules.
                     * @param request ListSchedulesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSchedulesResponse
                     */
                    public listSchedules(request: google.cloud.notebooks.v1.IListSchedulesRequest, callback: google.cloud.notebooks.v1.NotebookService.ListSchedulesCallback): void;

                    /**
                     * Calls ListSchedules.
                     * @param request ListSchedulesRequest message or plain object
                     * @returns Promise
                     */
                    public listSchedules(request: google.cloud.notebooks.v1.IListSchedulesRequest): Promise<google.cloud.notebooks.v1.ListSchedulesResponse>;

                    /**
                     * Calls GetSchedule.
                     * @param request GetScheduleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Schedule
                     */
                    public getSchedule(request: google.cloud.notebooks.v1.IGetScheduleRequest, callback: google.cloud.notebooks.v1.NotebookService.GetScheduleCallback): void;

                    /**
                     * Calls GetSchedule.
                     * @param request GetScheduleRequest message or plain object
                     * @returns Promise
                     */
                    public getSchedule(request: google.cloud.notebooks.v1.IGetScheduleRequest): Promise<google.cloud.notebooks.v1.Schedule>;

                    /**
                     * Calls DeleteSchedule.
                     * @param request DeleteScheduleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteSchedule(request: google.cloud.notebooks.v1.IDeleteScheduleRequest, callback: google.cloud.notebooks.v1.NotebookService.DeleteScheduleCallback): void;

                    /**
                     * Calls DeleteSchedule.
                     * @param request DeleteScheduleRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSchedule(request: google.cloud.notebooks.v1.IDeleteScheduleRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateSchedule.
                     * @param request CreateScheduleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createSchedule(request: google.cloud.notebooks.v1.ICreateScheduleRequest, callback: google.cloud.notebooks.v1.NotebookService.CreateScheduleCallback): void;

                    /**
                     * Calls CreateSchedule.
                     * @param request CreateScheduleRequest message or plain object
                     * @returns Promise
                     */
                    public createSchedule(request: google.cloud.notebooks.v1.ICreateScheduleRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls TriggerSchedule.
                     * @param request TriggerScheduleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public triggerSchedule(request: google.cloud.notebooks.v1.ITriggerScheduleRequest, callback: google.cloud.notebooks.v1.NotebookService.TriggerScheduleCallback): void;

                    /**
                     * Calls TriggerSchedule.
                     * @param request TriggerScheduleRequest message or plain object
                     * @returns Promise
                     */
                    public triggerSchedule(request: google.cloud.notebooks.v1.ITriggerScheduleRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListExecutions.
                     * @param request ListExecutionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListExecutionsResponse
                     */
                    public listExecutions(request: google.cloud.notebooks.v1.IListExecutionsRequest, callback: google.cloud.notebooks.v1.NotebookService.ListExecutionsCallback): void;

                    /**
                     * Calls ListExecutions.
                     * @param request ListExecutionsRequest message or plain object
                     * @returns Promise
                     */
                    public listExecutions(request: google.cloud.notebooks.v1.IListExecutionsRequest): Promise<google.cloud.notebooks.v1.ListExecutionsResponse>;

                    /**
                     * Calls GetExecution.
                     * @param request GetExecutionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Execution
                     */
                    public getExecution(request: google.cloud.notebooks.v1.IGetExecutionRequest, callback: google.cloud.notebooks.v1.NotebookService.GetExecutionCallback): void;

                    /**
                     * Calls GetExecution.
                     * @param request GetExecutionRequest message or plain object
                     * @returns Promise
                     */
                    public getExecution(request: google.cloud.notebooks.v1.IGetExecutionRequest): Promise<google.cloud.notebooks.v1.Execution>;

                    /**
                     * Calls DeleteExecution.
                     * @param request DeleteExecutionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteExecution(request: google.cloud.notebooks.v1.IDeleteExecutionRequest, callback: google.cloud.notebooks.v1.NotebookService.DeleteExecutionCallback): void;

                    /**
                     * Calls DeleteExecution.
                     * @param request DeleteExecutionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteExecution(request: google.cloud.notebooks.v1.IDeleteExecutionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateExecution.
                     * @param request CreateExecutionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createExecution(request: google.cloud.notebooks.v1.ICreateExecutionRequest, callback: google.cloud.notebooks.v1.NotebookService.CreateExecutionCallback): void;

                    /**
                     * Calls CreateExecution.
                     * @param request CreateExecutionRequest message or plain object
                     * @returns Promise
                     */
                    public createExecution(request: google.cloud.notebooks.v1.ICreateExecutionRequest): Promise<google.longrunning.Operation>;
                }

                namespace NotebookService {

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#listInstances}.
                     * @param error Error, if any
                     * @param [response] ListInstancesResponse
                     */
                    type ListInstancesCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.ListInstancesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.Instance) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#createInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#registerInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RegisterInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#setInstanceAccelerator}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SetInstanceAcceleratorCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#setInstanceMachineType}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SetInstanceMachineTypeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#updateInstanceConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateInstanceConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#updateShieldedInstanceConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateShieldedInstanceConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#setInstanceLabels}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SetInstanceLabelsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#deleteInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#startInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#stopInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#resetInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResetInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#reportInstanceInfo}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ReportInstanceInfoCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#isInstanceUpgradeable}.
                     * @param error Error, if any
                     * @param [response] IsInstanceUpgradeableResponse
                     */
                    type IsInstanceUpgradeableCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.IsInstanceUpgradeableResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#getInstanceHealth}.
                     * @param error Error, if any
                     * @param [response] GetInstanceHealthResponse
                     */
                    type GetInstanceHealthCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.GetInstanceHealthResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#upgradeInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpgradeInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#rollbackInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RollbackInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#upgradeInstanceInternal}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpgradeInstanceInternalCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#listEnvironments}.
                     * @param error Error, if any
                     * @param [response] ListEnvironmentsResponse
                     */
                    type ListEnvironmentsCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.ListEnvironmentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#getEnvironment}.
                     * @param error Error, if any
                     * @param [response] Environment
                     */
                    type GetEnvironmentCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.Environment) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#createEnvironment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#deleteEnvironment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#listSchedules}.
                     * @param error Error, if any
                     * @param [response] ListSchedulesResponse
                     */
                    type ListSchedulesCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.ListSchedulesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#getSchedule}.
                     * @param error Error, if any
                     * @param [response] Schedule
                     */
                    type GetScheduleCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.Schedule) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#deleteSchedule}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteScheduleCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#createSchedule}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateScheduleCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#triggerSchedule}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type TriggerScheduleCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#listExecutions}.
                     * @param error Error, if any
                     * @param [response] ListExecutionsResponse
                     */
                    type ListExecutionsCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.ListExecutionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#getExecution}.
                     * @param error Error, if any
                     * @param [response] Execution
                     */
                    type GetExecutionCallback = (error: (Error|null), response?: google.cloud.notebooks.v1.Execution) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#deleteExecution}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteExecutionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1.NotebookService#createExecution}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateExecutionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusMessage */
                    statusMessage?: (string|null);

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata endpoint */
                    endpoint?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusMessage. */
                    public statusMessage: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /** OperationMetadata endpoint. */
                    public endpoint: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IOperationMetadata): google.cloud.notebooks.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.notebooks.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListInstancesRequest. */
                interface IListInstancesRequest {

                    /** ListInstancesRequest parent */
                    parent?: (string|null);

                    /** ListInstancesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInstancesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListInstancesRequest. */
                class ListInstancesRequest implements IListInstancesRequest {

                    /**
                     * Constructs a new ListInstancesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListInstancesRequest);

                    /** ListInstancesRequest parent. */
                    public parent: string;

                    /** ListInstancesRequest pageSize. */
                    public pageSize: number;

                    /** ListInstancesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListInstancesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListInstancesRequest): google.cloud.notebooks.v1.ListInstancesRequest;

                    /**
                     * Encodes the specified ListInstancesRequest message. Does not implicitly {@link google.cloud.notebooks.v1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListInstancesRequest;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListInstancesRequest;

                    /**
                     * Verifies a ListInstancesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstancesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstancesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListInstancesRequest;

                    /**
                     * Creates a plain object from a ListInstancesRequest message. Also converts values to other types if specified.
                     * @param message ListInstancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListInstancesResponse. */
                interface IListInstancesResponse {

                    /** ListInstancesResponse instances */
                    instances?: (google.cloud.notebooks.v1.IInstance[]|null);

                    /** ListInstancesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListInstancesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListInstancesResponse. */
                class ListInstancesResponse implements IListInstancesResponse {

                    /**
                     * Constructs a new ListInstancesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListInstancesResponse);

                    /** ListInstancesResponse instances. */
                    public instances: google.cloud.notebooks.v1.IInstance[];

                    /** ListInstancesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInstancesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListInstancesResponse): google.cloud.notebooks.v1.ListInstancesResponse;

                    /**
                     * Encodes the specified ListInstancesResponse message. Does not implicitly {@link google.cloud.notebooks.v1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListInstancesResponse;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListInstancesResponse;

                    /**
                     * Verifies a ListInstancesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstancesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListInstancesResponse;

                    /**
                     * Creates a plain object from a ListInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetInstanceRequest. */
                interface IGetInstanceRequest {

                    /** GetInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInstanceRequest. */
                class GetInstanceRequest implements IGetInstanceRequest {

                    /**
                     * Constructs a new GetInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IGetInstanceRequest): google.cloud.notebooks.v1.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.GetInstanceRequest;

                    /**
                     * Verifies a GetInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateInstanceRequest. */
                interface ICreateInstanceRequest {

                    /** CreateInstanceRequest parent */
                    parent?: (string|null);

                    /** CreateInstanceRequest instanceId */
                    instanceId?: (string|null);

                    /** CreateInstanceRequest instance */
                    instance?: (google.cloud.notebooks.v1.IInstance|null);
                }

                /** Represents a CreateInstanceRequest. */
                class CreateInstanceRequest implements ICreateInstanceRequest {

                    /**
                     * Constructs a new CreateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ICreateInstanceRequest);

                    /** CreateInstanceRequest parent. */
                    public parent: string;

                    /** CreateInstanceRequest instanceId. */
                    public instanceId: string;

                    /** CreateInstanceRequest instance. */
                    public instance?: (google.cloud.notebooks.v1.IInstance|null);

                    /**
                     * Creates a new CreateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ICreateInstanceRequest): google.cloud.notebooks.v1.CreateInstanceRequest;

                    /**
                     * Encodes the specified CreateInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.CreateInstanceRequest;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.CreateInstanceRequest;

                    /**
                     * Verifies a CreateInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.CreateInstanceRequest;

                    /**
                     * Creates a plain object from a CreateInstanceRequest message. Also converts values to other types if specified.
                     * @param message CreateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.CreateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RegisterInstanceRequest. */
                interface IRegisterInstanceRequest {

                    /** RegisterInstanceRequest parent */
                    parent?: (string|null);

                    /** RegisterInstanceRequest instanceId */
                    instanceId?: (string|null);
                }

                /** Represents a RegisterInstanceRequest. */
                class RegisterInstanceRequest implements IRegisterInstanceRequest {

                    /**
                     * Constructs a new RegisterInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IRegisterInstanceRequest);

                    /** RegisterInstanceRequest parent. */
                    public parent: string;

                    /** RegisterInstanceRequest instanceId. */
                    public instanceId: string;

                    /**
                     * Creates a new RegisterInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegisterInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IRegisterInstanceRequest): google.cloud.notebooks.v1.RegisterInstanceRequest;

                    /**
                     * Encodes the specified RegisterInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1.RegisterInstanceRequest.verify|verify} messages.
                     * @param message RegisterInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IRegisterInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegisterInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.RegisterInstanceRequest.verify|verify} messages.
                     * @param message RegisterInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IRegisterInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegisterInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegisterInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.RegisterInstanceRequest;

                    /**
                     * Decodes a RegisterInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegisterInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.RegisterInstanceRequest;

                    /**
                     * Verifies a RegisterInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegisterInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegisterInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.RegisterInstanceRequest;

                    /**
                     * Creates a plain object from a RegisterInstanceRequest message. Also converts values to other types if specified.
                     * @param message RegisterInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.RegisterInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegisterInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SetInstanceAcceleratorRequest. */
                interface ISetInstanceAcceleratorRequest {

                    /** SetInstanceAcceleratorRequest name */
                    name?: (string|null);

                    /** SetInstanceAcceleratorRequest type */
                    type?: (google.cloud.notebooks.v1.Instance.AcceleratorType|keyof typeof google.cloud.notebooks.v1.Instance.AcceleratorType|null);

                    /** SetInstanceAcceleratorRequest coreCount */
                    coreCount?: (number|Long|string|null);
                }

                /** Represents a SetInstanceAcceleratorRequest. */
                class SetInstanceAcceleratorRequest implements ISetInstanceAcceleratorRequest {

                    /**
                     * Constructs a new SetInstanceAcceleratorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ISetInstanceAcceleratorRequest);

                    /** SetInstanceAcceleratorRequest name. */
                    public name: string;

                    /** SetInstanceAcceleratorRequest type. */
                    public type: (google.cloud.notebooks.v1.Instance.AcceleratorType|keyof typeof google.cloud.notebooks.v1.Instance.AcceleratorType);

                    /** SetInstanceAcceleratorRequest coreCount. */
                    public coreCount: (number|Long|string);

                    /**
                     * Creates a new SetInstanceAcceleratorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetInstanceAcceleratorRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ISetInstanceAcceleratorRequest): google.cloud.notebooks.v1.SetInstanceAcceleratorRequest;

                    /**
                     * Encodes the specified SetInstanceAcceleratorRequest message. Does not implicitly {@link google.cloud.notebooks.v1.SetInstanceAcceleratorRequest.verify|verify} messages.
                     * @param message SetInstanceAcceleratorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ISetInstanceAcceleratorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetInstanceAcceleratorRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.SetInstanceAcceleratorRequest.verify|verify} messages.
                     * @param message SetInstanceAcceleratorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ISetInstanceAcceleratorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetInstanceAcceleratorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetInstanceAcceleratorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.SetInstanceAcceleratorRequest;

                    /**
                     * Decodes a SetInstanceAcceleratorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetInstanceAcceleratorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.SetInstanceAcceleratorRequest;

                    /**
                     * Verifies a SetInstanceAcceleratorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetInstanceAcceleratorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetInstanceAcceleratorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.SetInstanceAcceleratorRequest;

                    /**
                     * Creates a plain object from a SetInstanceAcceleratorRequest message. Also converts values to other types if specified.
                     * @param message SetInstanceAcceleratorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.SetInstanceAcceleratorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetInstanceAcceleratorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SetInstanceMachineTypeRequest. */
                interface ISetInstanceMachineTypeRequest {

                    /** SetInstanceMachineTypeRequest name */
                    name?: (string|null);

                    /** SetInstanceMachineTypeRequest machineType */
                    machineType?: (string|null);
                }

                /** Represents a SetInstanceMachineTypeRequest. */
                class SetInstanceMachineTypeRequest implements ISetInstanceMachineTypeRequest {

                    /**
                     * Constructs a new SetInstanceMachineTypeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ISetInstanceMachineTypeRequest);

                    /** SetInstanceMachineTypeRequest name. */
                    public name: string;

                    /** SetInstanceMachineTypeRequest machineType. */
                    public machineType: string;

                    /**
                     * Creates a new SetInstanceMachineTypeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetInstanceMachineTypeRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ISetInstanceMachineTypeRequest): google.cloud.notebooks.v1.SetInstanceMachineTypeRequest;

                    /**
                     * Encodes the specified SetInstanceMachineTypeRequest message. Does not implicitly {@link google.cloud.notebooks.v1.SetInstanceMachineTypeRequest.verify|verify} messages.
                     * @param message SetInstanceMachineTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ISetInstanceMachineTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetInstanceMachineTypeRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.SetInstanceMachineTypeRequest.verify|verify} messages.
                     * @param message SetInstanceMachineTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ISetInstanceMachineTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetInstanceMachineTypeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetInstanceMachineTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.SetInstanceMachineTypeRequest;

                    /**
                     * Decodes a SetInstanceMachineTypeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetInstanceMachineTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.SetInstanceMachineTypeRequest;

                    /**
                     * Verifies a SetInstanceMachineTypeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetInstanceMachineTypeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetInstanceMachineTypeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.SetInstanceMachineTypeRequest;

                    /**
                     * Creates a plain object from a SetInstanceMachineTypeRequest message. Also converts values to other types if specified.
                     * @param message SetInstanceMachineTypeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.SetInstanceMachineTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetInstanceMachineTypeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateInstanceConfigRequest. */
                interface IUpdateInstanceConfigRequest {

                    /** UpdateInstanceConfigRequest name */
                    name?: (string|null);

                    /** UpdateInstanceConfigRequest config */
                    config?: (google.cloud.notebooks.v1.IInstanceConfig|null);
                }

                /** Represents an UpdateInstanceConfigRequest. */
                class UpdateInstanceConfigRequest implements IUpdateInstanceConfigRequest {

                    /**
                     * Constructs a new UpdateInstanceConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IUpdateInstanceConfigRequest);

                    /** UpdateInstanceConfigRequest name. */
                    public name: string;

                    /** UpdateInstanceConfigRequest config. */
                    public config?: (google.cloud.notebooks.v1.IInstanceConfig|null);

                    /**
                     * Creates a new UpdateInstanceConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateInstanceConfigRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IUpdateInstanceConfigRequest): google.cloud.notebooks.v1.UpdateInstanceConfigRequest;

                    /**
                     * Encodes the specified UpdateInstanceConfigRequest message. Does not implicitly {@link google.cloud.notebooks.v1.UpdateInstanceConfigRequest.verify|verify} messages.
                     * @param message UpdateInstanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IUpdateInstanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateInstanceConfigRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.UpdateInstanceConfigRequest.verify|verify} messages.
                     * @param message UpdateInstanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IUpdateInstanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateInstanceConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateInstanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.UpdateInstanceConfigRequest;

                    /**
                     * Decodes an UpdateInstanceConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateInstanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.UpdateInstanceConfigRequest;

                    /**
                     * Verifies an UpdateInstanceConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateInstanceConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateInstanceConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.UpdateInstanceConfigRequest;

                    /**
                     * Creates a plain object from an UpdateInstanceConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateInstanceConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.UpdateInstanceConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateInstanceConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SetInstanceLabelsRequest. */
                interface ISetInstanceLabelsRequest {

                    /** SetInstanceLabelsRequest name */
                    name?: (string|null);

                    /** SetInstanceLabelsRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a SetInstanceLabelsRequest. */
                class SetInstanceLabelsRequest implements ISetInstanceLabelsRequest {

                    /**
                     * Constructs a new SetInstanceLabelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ISetInstanceLabelsRequest);

                    /** SetInstanceLabelsRequest name. */
                    public name: string;

                    /** SetInstanceLabelsRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new SetInstanceLabelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetInstanceLabelsRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ISetInstanceLabelsRequest): google.cloud.notebooks.v1.SetInstanceLabelsRequest;

                    /**
                     * Encodes the specified SetInstanceLabelsRequest message. Does not implicitly {@link google.cloud.notebooks.v1.SetInstanceLabelsRequest.verify|verify} messages.
                     * @param message SetInstanceLabelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ISetInstanceLabelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetInstanceLabelsRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.SetInstanceLabelsRequest.verify|verify} messages.
                     * @param message SetInstanceLabelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ISetInstanceLabelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetInstanceLabelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetInstanceLabelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.SetInstanceLabelsRequest;

                    /**
                     * Decodes a SetInstanceLabelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetInstanceLabelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.SetInstanceLabelsRequest;

                    /**
                     * Verifies a SetInstanceLabelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetInstanceLabelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetInstanceLabelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.SetInstanceLabelsRequest;

                    /**
                     * Creates a plain object from a SetInstanceLabelsRequest message. Also converts values to other types if specified.
                     * @param message SetInstanceLabelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.SetInstanceLabelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetInstanceLabelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateShieldedInstanceConfigRequest. */
                interface IUpdateShieldedInstanceConfigRequest {

                    /** UpdateShieldedInstanceConfigRequest name */
                    name?: (string|null);

                    /** UpdateShieldedInstanceConfigRequest shieldedInstanceConfig */
                    shieldedInstanceConfig?: (google.cloud.notebooks.v1.Instance.IShieldedInstanceConfig|null);
                }

                /** Represents an UpdateShieldedInstanceConfigRequest. */
                class UpdateShieldedInstanceConfigRequest implements IUpdateShieldedInstanceConfigRequest {

                    /**
                     * Constructs a new UpdateShieldedInstanceConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IUpdateShieldedInstanceConfigRequest);

                    /** UpdateShieldedInstanceConfigRequest name. */
                    public name: string;

                    /** UpdateShieldedInstanceConfigRequest shieldedInstanceConfig. */
                    public shieldedInstanceConfig?: (google.cloud.notebooks.v1.Instance.IShieldedInstanceConfig|null);

                    /**
                     * Creates a new UpdateShieldedInstanceConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateShieldedInstanceConfigRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IUpdateShieldedInstanceConfigRequest): google.cloud.notebooks.v1.UpdateShieldedInstanceConfigRequest;

                    /**
                     * Encodes the specified UpdateShieldedInstanceConfigRequest message. Does not implicitly {@link google.cloud.notebooks.v1.UpdateShieldedInstanceConfigRequest.verify|verify} messages.
                     * @param message UpdateShieldedInstanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IUpdateShieldedInstanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateShieldedInstanceConfigRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.UpdateShieldedInstanceConfigRequest.verify|verify} messages.
                     * @param message UpdateShieldedInstanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IUpdateShieldedInstanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateShieldedInstanceConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateShieldedInstanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.UpdateShieldedInstanceConfigRequest;

                    /**
                     * Decodes an UpdateShieldedInstanceConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateShieldedInstanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.UpdateShieldedInstanceConfigRequest;

                    /**
                     * Verifies an UpdateShieldedInstanceConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateShieldedInstanceConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateShieldedInstanceConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.UpdateShieldedInstanceConfigRequest;

                    /**
                     * Creates a plain object from an UpdateShieldedInstanceConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateShieldedInstanceConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.UpdateShieldedInstanceConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateShieldedInstanceConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteInstanceRequest. */
                interface IDeleteInstanceRequest {

                    /** DeleteInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteInstanceRequest. */
                class DeleteInstanceRequest implements IDeleteInstanceRequest {

                    /**
                     * Constructs a new DeleteInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IDeleteInstanceRequest);

                    /** DeleteInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IDeleteInstanceRequest): google.cloud.notebooks.v1.DeleteInstanceRequest;

                    /**
                     * Encodes the specified DeleteInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.DeleteInstanceRequest;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.DeleteInstanceRequest;

                    /**
                     * Verifies a DeleteInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.DeleteInstanceRequest;

                    /**
                     * Creates a plain object from a DeleteInstanceRequest message. Also converts values to other types if specified.
                     * @param message DeleteInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.DeleteInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartInstanceRequest. */
                interface IStartInstanceRequest {

                    /** StartInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a StartInstanceRequest. */
                class StartInstanceRequest implements IStartInstanceRequest {

                    /**
                     * Constructs a new StartInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IStartInstanceRequest);

                    /** StartInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IStartInstanceRequest): google.cloud.notebooks.v1.StartInstanceRequest;

                    /**
                     * Encodes the specified StartInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1.StartInstanceRequest.verify|verify} messages.
                     * @param message StartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IStartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.StartInstanceRequest.verify|verify} messages.
                     * @param message StartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IStartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.StartInstanceRequest;

                    /**
                     * Decodes a StartInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.StartInstanceRequest;

                    /**
                     * Verifies a StartInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.StartInstanceRequest;

                    /**
                     * Creates a plain object from a StartInstanceRequest message. Also converts values to other types if specified.
                     * @param message StartInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.StartInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StopInstanceRequest. */
                interface IStopInstanceRequest {

                    /** StopInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a StopInstanceRequest. */
                class StopInstanceRequest implements IStopInstanceRequest {

                    /**
                     * Constructs a new StopInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IStopInstanceRequest);

                    /** StopInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IStopInstanceRequest): google.cloud.notebooks.v1.StopInstanceRequest;

                    /**
                     * Encodes the specified StopInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1.StopInstanceRequest.verify|verify} messages.
                     * @param message StopInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IStopInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.StopInstanceRequest.verify|verify} messages.
                     * @param message StopInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IStopInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.StopInstanceRequest;

                    /**
                     * Decodes a StopInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.StopInstanceRequest;

                    /**
                     * Verifies a StopInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.StopInstanceRequest;

                    /**
                     * Creates a plain object from a StopInstanceRequest message. Also converts values to other types if specified.
                     * @param message StopInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.StopInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResetInstanceRequest. */
                interface IResetInstanceRequest {

                    /** ResetInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a ResetInstanceRequest. */
                class ResetInstanceRequest implements IResetInstanceRequest {

                    /**
                     * Constructs a new ResetInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IResetInstanceRequest);

                    /** ResetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IResetInstanceRequest): google.cloud.notebooks.v1.ResetInstanceRequest;

                    /**
                     * Encodes the specified ResetInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1.ResetInstanceRequest.verify|verify} messages.
                     * @param message ResetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IResetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ResetInstanceRequest.verify|verify} messages.
                     * @param message ResetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IResetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ResetInstanceRequest;

                    /**
                     * Decodes a ResetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ResetInstanceRequest;

                    /**
                     * Verifies a ResetInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ResetInstanceRequest;

                    /**
                     * Creates a plain object from a ResetInstanceRequest message. Also converts values to other types if specified.
                     * @param message ResetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ResetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReportInstanceInfoRequest. */
                interface IReportInstanceInfoRequest {

                    /** ReportInstanceInfoRequest name */
                    name?: (string|null);

                    /** ReportInstanceInfoRequest vmId */
                    vmId?: (string|null);

                    /** ReportInstanceInfoRequest metadata */
                    metadata?: ({ [k: string]: string }|null);
                }

                /** Represents a ReportInstanceInfoRequest. */
                class ReportInstanceInfoRequest implements IReportInstanceInfoRequest {

                    /**
                     * Constructs a new ReportInstanceInfoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IReportInstanceInfoRequest);

                    /** ReportInstanceInfoRequest name. */
                    public name: string;

                    /** ReportInstanceInfoRequest vmId. */
                    public vmId: string;

                    /** ReportInstanceInfoRequest metadata. */
                    public metadata: { [k: string]: string };

                    /**
                     * Creates a new ReportInstanceInfoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReportInstanceInfoRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IReportInstanceInfoRequest): google.cloud.notebooks.v1.ReportInstanceInfoRequest;

                    /**
                     * Encodes the specified ReportInstanceInfoRequest message. Does not implicitly {@link google.cloud.notebooks.v1.ReportInstanceInfoRequest.verify|verify} messages.
                     * @param message ReportInstanceInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IReportInstanceInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReportInstanceInfoRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ReportInstanceInfoRequest.verify|verify} messages.
                     * @param message ReportInstanceInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IReportInstanceInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReportInstanceInfoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReportInstanceInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ReportInstanceInfoRequest;

                    /**
                     * Decodes a ReportInstanceInfoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReportInstanceInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ReportInstanceInfoRequest;

                    /**
                     * Verifies a ReportInstanceInfoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReportInstanceInfoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReportInstanceInfoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ReportInstanceInfoRequest;

                    /**
                     * Creates a plain object from a ReportInstanceInfoRequest message. Also converts values to other types if specified.
                     * @param message ReportInstanceInfoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ReportInstanceInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReportInstanceInfoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IsInstanceUpgradeableRequest. */
                interface IIsInstanceUpgradeableRequest {

                    /** IsInstanceUpgradeableRequest notebookInstance */
                    notebookInstance?: (string|null);
                }

                /** Represents an IsInstanceUpgradeableRequest. */
                class IsInstanceUpgradeableRequest implements IIsInstanceUpgradeableRequest {

                    /**
                     * Constructs a new IsInstanceUpgradeableRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IIsInstanceUpgradeableRequest);

                    /** IsInstanceUpgradeableRequest notebookInstance. */
                    public notebookInstance: string;

                    /**
                     * Creates a new IsInstanceUpgradeableRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IsInstanceUpgradeableRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IIsInstanceUpgradeableRequest): google.cloud.notebooks.v1.IsInstanceUpgradeableRequest;

                    /**
                     * Encodes the specified IsInstanceUpgradeableRequest message. Does not implicitly {@link google.cloud.notebooks.v1.IsInstanceUpgradeableRequest.verify|verify} messages.
                     * @param message IsInstanceUpgradeableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IIsInstanceUpgradeableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IsInstanceUpgradeableRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.IsInstanceUpgradeableRequest.verify|verify} messages.
                     * @param message IsInstanceUpgradeableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IIsInstanceUpgradeableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IsInstanceUpgradeableRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IsInstanceUpgradeableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.IsInstanceUpgradeableRequest;

                    /**
                     * Decodes an IsInstanceUpgradeableRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IsInstanceUpgradeableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.IsInstanceUpgradeableRequest;

                    /**
                     * Verifies an IsInstanceUpgradeableRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IsInstanceUpgradeableRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IsInstanceUpgradeableRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.IsInstanceUpgradeableRequest;

                    /**
                     * Creates a plain object from an IsInstanceUpgradeableRequest message. Also converts values to other types if specified.
                     * @param message IsInstanceUpgradeableRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.IsInstanceUpgradeableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IsInstanceUpgradeableRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IsInstanceUpgradeableResponse. */
                interface IIsInstanceUpgradeableResponse {

                    /** IsInstanceUpgradeableResponse upgradeable */
                    upgradeable?: (boolean|null);

                    /** IsInstanceUpgradeableResponse upgradeVersion */
                    upgradeVersion?: (string|null);

                    /** IsInstanceUpgradeableResponse upgradeInfo */
                    upgradeInfo?: (string|null);

                    /** IsInstanceUpgradeableResponse upgradeImage */
                    upgradeImage?: (string|null);
                }

                /** Represents an IsInstanceUpgradeableResponse. */
                class IsInstanceUpgradeableResponse implements IIsInstanceUpgradeableResponse {

                    /**
                     * Constructs a new IsInstanceUpgradeableResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IIsInstanceUpgradeableResponse);

                    /** IsInstanceUpgradeableResponse upgradeable. */
                    public upgradeable: boolean;

                    /** IsInstanceUpgradeableResponse upgradeVersion. */
                    public upgradeVersion: string;

                    /** IsInstanceUpgradeableResponse upgradeInfo. */
                    public upgradeInfo: string;

                    /** IsInstanceUpgradeableResponse upgradeImage. */
                    public upgradeImage: string;

                    /**
                     * Creates a new IsInstanceUpgradeableResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IsInstanceUpgradeableResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IIsInstanceUpgradeableResponse): google.cloud.notebooks.v1.IsInstanceUpgradeableResponse;

                    /**
                     * Encodes the specified IsInstanceUpgradeableResponse message. Does not implicitly {@link google.cloud.notebooks.v1.IsInstanceUpgradeableResponse.verify|verify} messages.
                     * @param message IsInstanceUpgradeableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IIsInstanceUpgradeableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IsInstanceUpgradeableResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.IsInstanceUpgradeableResponse.verify|verify} messages.
                     * @param message IsInstanceUpgradeableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IIsInstanceUpgradeableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IsInstanceUpgradeableResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IsInstanceUpgradeableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.IsInstanceUpgradeableResponse;

                    /**
                     * Decodes an IsInstanceUpgradeableResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IsInstanceUpgradeableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.IsInstanceUpgradeableResponse;

                    /**
                     * Verifies an IsInstanceUpgradeableResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IsInstanceUpgradeableResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IsInstanceUpgradeableResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.IsInstanceUpgradeableResponse;

                    /**
                     * Creates a plain object from an IsInstanceUpgradeableResponse message. Also converts values to other types if specified.
                     * @param message IsInstanceUpgradeableResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.IsInstanceUpgradeableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IsInstanceUpgradeableResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetInstanceHealthRequest. */
                interface IGetInstanceHealthRequest {

                    /** GetInstanceHealthRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInstanceHealthRequest. */
                class GetInstanceHealthRequest implements IGetInstanceHealthRequest {

                    /**
                     * Constructs a new GetInstanceHealthRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IGetInstanceHealthRequest);

                    /** GetInstanceHealthRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceHealthRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceHealthRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IGetInstanceHealthRequest): google.cloud.notebooks.v1.GetInstanceHealthRequest;

                    /**
                     * Encodes the specified GetInstanceHealthRequest message. Does not implicitly {@link google.cloud.notebooks.v1.GetInstanceHealthRequest.verify|verify} messages.
                     * @param message GetInstanceHealthRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IGetInstanceHealthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceHealthRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.GetInstanceHealthRequest.verify|verify} messages.
                     * @param message GetInstanceHealthRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IGetInstanceHealthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceHealthRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceHealthRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.GetInstanceHealthRequest;

                    /**
                     * Decodes a GetInstanceHealthRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceHealthRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.GetInstanceHealthRequest;

                    /**
                     * Verifies a GetInstanceHealthRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstanceHealthRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstanceHealthRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.GetInstanceHealthRequest;

                    /**
                     * Creates a plain object from a GetInstanceHealthRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceHealthRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.GetInstanceHealthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstanceHealthRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetInstanceHealthResponse. */
                interface IGetInstanceHealthResponse {

                    /** GetInstanceHealthResponse healthState */
                    healthState?: (google.cloud.notebooks.v1.GetInstanceHealthResponse.HealthState|keyof typeof google.cloud.notebooks.v1.GetInstanceHealthResponse.HealthState|null);

                    /** GetInstanceHealthResponse healthInfo */
                    healthInfo?: ({ [k: string]: string }|null);
                }

                /** Represents a GetInstanceHealthResponse. */
                class GetInstanceHealthResponse implements IGetInstanceHealthResponse {

                    /**
                     * Constructs a new GetInstanceHealthResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IGetInstanceHealthResponse);

                    /** GetInstanceHealthResponse healthState. */
                    public healthState: (google.cloud.notebooks.v1.GetInstanceHealthResponse.HealthState|keyof typeof google.cloud.notebooks.v1.GetInstanceHealthResponse.HealthState);

                    /** GetInstanceHealthResponse healthInfo. */
                    public healthInfo: { [k: string]: string };

                    /**
                     * Creates a new GetInstanceHealthResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceHealthResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IGetInstanceHealthResponse): google.cloud.notebooks.v1.GetInstanceHealthResponse;

                    /**
                     * Encodes the specified GetInstanceHealthResponse message. Does not implicitly {@link google.cloud.notebooks.v1.GetInstanceHealthResponse.verify|verify} messages.
                     * @param message GetInstanceHealthResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IGetInstanceHealthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceHealthResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.GetInstanceHealthResponse.verify|verify} messages.
                     * @param message GetInstanceHealthResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IGetInstanceHealthResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceHealthResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceHealthResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.GetInstanceHealthResponse;

                    /**
                     * Decodes a GetInstanceHealthResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceHealthResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.GetInstanceHealthResponse;

                    /**
                     * Verifies a GetInstanceHealthResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstanceHealthResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstanceHealthResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.GetInstanceHealthResponse;

                    /**
                     * Creates a plain object from a GetInstanceHealthResponse message. Also converts values to other types if specified.
                     * @param message GetInstanceHealthResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.GetInstanceHealthResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstanceHealthResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace GetInstanceHealthResponse {

                    /** HealthState enum. */
                    enum HealthState {
                        HEALTH_STATE_UNSPECIFIED = 0,
                        HEALTHY = 1,
                        UNHEALTHY = 2,
                        AGENT_NOT_INSTALLED = 3,
                        AGENT_NOT_RUNNING = 4
                    }
                }

                /** Properties of an UpgradeInstanceRequest. */
                interface IUpgradeInstanceRequest {

                    /** UpgradeInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents an UpgradeInstanceRequest. */
                class UpgradeInstanceRequest implements IUpgradeInstanceRequest {

                    /**
                     * Constructs a new UpgradeInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IUpgradeInstanceRequest);

                    /** UpgradeInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new UpgradeInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpgradeInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IUpgradeInstanceRequest): google.cloud.notebooks.v1.UpgradeInstanceRequest;

                    /**
                     * Encodes the specified UpgradeInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1.UpgradeInstanceRequest.verify|verify} messages.
                     * @param message UpgradeInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IUpgradeInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpgradeInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.UpgradeInstanceRequest.verify|verify} messages.
                     * @param message UpgradeInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IUpgradeInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpgradeInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpgradeInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.UpgradeInstanceRequest;

                    /**
                     * Decodes an UpgradeInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpgradeInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.UpgradeInstanceRequest;

                    /**
                     * Verifies an UpgradeInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpgradeInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpgradeInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.UpgradeInstanceRequest;

                    /**
                     * Creates a plain object from an UpgradeInstanceRequest message. Also converts values to other types if specified.
                     * @param message UpgradeInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.UpgradeInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpgradeInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RollbackInstanceRequest. */
                interface IRollbackInstanceRequest {

                    /** RollbackInstanceRequest name */
                    name?: (string|null);

                    /** RollbackInstanceRequest targetSnapshot */
                    targetSnapshot?: (string|null);
                }

                /** Represents a RollbackInstanceRequest. */
                class RollbackInstanceRequest implements IRollbackInstanceRequest {

                    /**
                     * Constructs a new RollbackInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IRollbackInstanceRequest);

                    /** RollbackInstanceRequest name. */
                    public name: string;

                    /** RollbackInstanceRequest targetSnapshot. */
                    public targetSnapshot: string;

                    /**
                     * Creates a new RollbackInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RollbackInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IRollbackInstanceRequest): google.cloud.notebooks.v1.RollbackInstanceRequest;

                    /**
                     * Encodes the specified RollbackInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1.RollbackInstanceRequest.verify|verify} messages.
                     * @param message RollbackInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IRollbackInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RollbackInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.RollbackInstanceRequest.verify|verify} messages.
                     * @param message RollbackInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IRollbackInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RollbackInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RollbackInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.RollbackInstanceRequest;

                    /**
                     * Decodes a RollbackInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RollbackInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.RollbackInstanceRequest;

                    /**
                     * Verifies a RollbackInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RollbackInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RollbackInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.RollbackInstanceRequest;

                    /**
                     * Creates a plain object from a RollbackInstanceRequest message. Also converts values to other types if specified.
                     * @param message RollbackInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.RollbackInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RollbackInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpgradeInstanceInternalRequest. */
                interface IUpgradeInstanceInternalRequest {

                    /** UpgradeInstanceInternalRequest name */
                    name?: (string|null);

                    /** UpgradeInstanceInternalRequest vmId */
                    vmId?: (string|null);
                }

                /** Represents an UpgradeInstanceInternalRequest. */
                class UpgradeInstanceInternalRequest implements IUpgradeInstanceInternalRequest {

                    /**
                     * Constructs a new UpgradeInstanceInternalRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IUpgradeInstanceInternalRequest);

                    /** UpgradeInstanceInternalRequest name. */
                    public name: string;

                    /** UpgradeInstanceInternalRequest vmId. */
                    public vmId: string;

                    /**
                     * Creates a new UpgradeInstanceInternalRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpgradeInstanceInternalRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IUpgradeInstanceInternalRequest): google.cloud.notebooks.v1.UpgradeInstanceInternalRequest;

                    /**
                     * Encodes the specified UpgradeInstanceInternalRequest message. Does not implicitly {@link google.cloud.notebooks.v1.UpgradeInstanceInternalRequest.verify|verify} messages.
                     * @param message UpgradeInstanceInternalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IUpgradeInstanceInternalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpgradeInstanceInternalRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.UpgradeInstanceInternalRequest.verify|verify} messages.
                     * @param message UpgradeInstanceInternalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IUpgradeInstanceInternalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpgradeInstanceInternalRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpgradeInstanceInternalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.UpgradeInstanceInternalRequest;

                    /**
                     * Decodes an UpgradeInstanceInternalRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpgradeInstanceInternalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.UpgradeInstanceInternalRequest;

                    /**
                     * Verifies an UpgradeInstanceInternalRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpgradeInstanceInternalRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpgradeInstanceInternalRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.UpgradeInstanceInternalRequest;

                    /**
                     * Creates a plain object from an UpgradeInstanceInternalRequest message. Also converts values to other types if specified.
                     * @param message UpgradeInstanceInternalRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.UpgradeInstanceInternalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpgradeInstanceInternalRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListEnvironmentsRequest. */
                interface IListEnvironmentsRequest {

                    /** ListEnvironmentsRequest parent */
                    parent?: (string|null);

                    /** ListEnvironmentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEnvironmentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEnvironmentsRequest. */
                class ListEnvironmentsRequest implements IListEnvironmentsRequest {

                    /**
                     * Constructs a new ListEnvironmentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListEnvironmentsRequest);

                    /** ListEnvironmentsRequest parent. */
                    public parent: string;

                    /** ListEnvironmentsRequest pageSize. */
                    public pageSize: number;

                    /** ListEnvironmentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEnvironmentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEnvironmentsRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListEnvironmentsRequest): google.cloud.notebooks.v1.ListEnvironmentsRequest;

                    /**
                     * Encodes the specified ListEnvironmentsRequest message. Does not implicitly {@link google.cloud.notebooks.v1.ListEnvironmentsRequest.verify|verify} messages.
                     * @param message ListEnvironmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListEnvironmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEnvironmentsRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListEnvironmentsRequest.verify|verify} messages.
                     * @param message ListEnvironmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListEnvironmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEnvironmentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEnvironmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListEnvironmentsRequest;

                    /**
                     * Decodes a ListEnvironmentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEnvironmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListEnvironmentsRequest;

                    /**
                     * Verifies a ListEnvironmentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEnvironmentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEnvironmentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListEnvironmentsRequest;

                    /**
                     * Creates a plain object from a ListEnvironmentsRequest message. Also converts values to other types if specified.
                     * @param message ListEnvironmentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListEnvironmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEnvironmentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListEnvironmentsResponse. */
                interface IListEnvironmentsResponse {

                    /** ListEnvironmentsResponse environments */
                    environments?: (google.cloud.notebooks.v1.IEnvironment[]|null);

                    /** ListEnvironmentsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListEnvironmentsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListEnvironmentsResponse. */
                class ListEnvironmentsResponse implements IListEnvironmentsResponse {

                    /**
                     * Constructs a new ListEnvironmentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListEnvironmentsResponse);

                    /** ListEnvironmentsResponse environments. */
                    public environments: google.cloud.notebooks.v1.IEnvironment[];

                    /** ListEnvironmentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListEnvironmentsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListEnvironmentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEnvironmentsResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListEnvironmentsResponse): google.cloud.notebooks.v1.ListEnvironmentsResponse;

                    /**
                     * Encodes the specified ListEnvironmentsResponse message. Does not implicitly {@link google.cloud.notebooks.v1.ListEnvironmentsResponse.verify|verify} messages.
                     * @param message ListEnvironmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListEnvironmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEnvironmentsResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListEnvironmentsResponse.verify|verify} messages.
                     * @param message ListEnvironmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListEnvironmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEnvironmentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEnvironmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListEnvironmentsResponse;

                    /**
                     * Decodes a ListEnvironmentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEnvironmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListEnvironmentsResponse;

                    /**
                     * Verifies a ListEnvironmentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEnvironmentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEnvironmentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListEnvironmentsResponse;

                    /**
                     * Creates a plain object from a ListEnvironmentsResponse message. Also converts values to other types if specified.
                     * @param message ListEnvironmentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListEnvironmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEnvironmentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetEnvironmentRequest. */
                interface IGetEnvironmentRequest {

                    /** GetEnvironmentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEnvironmentRequest. */
                class GetEnvironmentRequest implements IGetEnvironmentRequest {

                    /**
                     * Constructs a new GetEnvironmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IGetEnvironmentRequest);

                    /** GetEnvironmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEnvironmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEnvironmentRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IGetEnvironmentRequest): google.cloud.notebooks.v1.GetEnvironmentRequest;

                    /**
                     * Encodes the specified GetEnvironmentRequest message. Does not implicitly {@link google.cloud.notebooks.v1.GetEnvironmentRequest.verify|verify} messages.
                     * @param message GetEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IGetEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.GetEnvironmentRequest.verify|verify} messages.
                     * @param message GetEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IGetEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEnvironmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.GetEnvironmentRequest;

                    /**
                     * Decodes a GetEnvironmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.GetEnvironmentRequest;

                    /**
                     * Verifies a GetEnvironmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEnvironmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.GetEnvironmentRequest;

                    /**
                     * Creates a plain object from a GetEnvironmentRequest message. Also converts values to other types if specified.
                     * @param message GetEnvironmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.GetEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEnvironmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateEnvironmentRequest. */
                interface ICreateEnvironmentRequest {

                    /** CreateEnvironmentRequest parent */
                    parent?: (string|null);

                    /** CreateEnvironmentRequest environmentId */
                    environmentId?: (string|null);

                    /** CreateEnvironmentRequest environment */
                    environment?: (google.cloud.notebooks.v1.IEnvironment|null);
                }

                /** Represents a CreateEnvironmentRequest. */
                class CreateEnvironmentRequest implements ICreateEnvironmentRequest {

                    /**
                     * Constructs a new CreateEnvironmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ICreateEnvironmentRequest);

                    /** CreateEnvironmentRequest parent. */
                    public parent: string;

                    /** CreateEnvironmentRequest environmentId. */
                    public environmentId: string;

                    /** CreateEnvironmentRequest environment. */
                    public environment?: (google.cloud.notebooks.v1.IEnvironment|null);

                    /**
                     * Creates a new CreateEnvironmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEnvironmentRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ICreateEnvironmentRequest): google.cloud.notebooks.v1.CreateEnvironmentRequest;

                    /**
                     * Encodes the specified CreateEnvironmentRequest message. Does not implicitly {@link google.cloud.notebooks.v1.CreateEnvironmentRequest.verify|verify} messages.
                     * @param message CreateEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ICreateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.CreateEnvironmentRequest.verify|verify} messages.
                     * @param message CreateEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ICreateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEnvironmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.CreateEnvironmentRequest;

                    /**
                     * Decodes a CreateEnvironmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.CreateEnvironmentRequest;

                    /**
                     * Verifies a CreateEnvironmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEnvironmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.CreateEnvironmentRequest;

                    /**
                     * Creates a plain object from a CreateEnvironmentRequest message. Also converts values to other types if specified.
                     * @param message CreateEnvironmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.CreateEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEnvironmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteEnvironmentRequest. */
                interface IDeleteEnvironmentRequest {

                    /** DeleteEnvironmentRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteEnvironmentRequest. */
                class DeleteEnvironmentRequest implements IDeleteEnvironmentRequest {

                    /**
                     * Constructs a new DeleteEnvironmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IDeleteEnvironmentRequest);

                    /** DeleteEnvironmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteEnvironmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEnvironmentRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IDeleteEnvironmentRequest): google.cloud.notebooks.v1.DeleteEnvironmentRequest;

                    /**
                     * Encodes the specified DeleteEnvironmentRequest message. Does not implicitly {@link google.cloud.notebooks.v1.DeleteEnvironmentRequest.verify|verify} messages.
                     * @param message DeleteEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IDeleteEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.DeleteEnvironmentRequest.verify|verify} messages.
                     * @param message DeleteEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IDeleteEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEnvironmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.DeleteEnvironmentRequest;

                    /**
                     * Decodes a DeleteEnvironmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.DeleteEnvironmentRequest;

                    /**
                     * Verifies a DeleteEnvironmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEnvironmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.DeleteEnvironmentRequest;

                    /**
                     * Creates a plain object from a DeleteEnvironmentRequest message. Also converts values to other types if specified.
                     * @param message DeleteEnvironmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.DeleteEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEnvironmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSchedulesRequest. */
                interface IListSchedulesRequest {

                    /** ListSchedulesRequest parent */
                    parent?: (string|null);

                    /** ListSchedulesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSchedulesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSchedulesRequest filter */
                    filter?: (string|null);

                    /** ListSchedulesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListSchedulesRequest. */
                class ListSchedulesRequest implements IListSchedulesRequest {

                    /**
                     * Constructs a new ListSchedulesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListSchedulesRequest);

                    /** ListSchedulesRequest parent. */
                    public parent: string;

                    /** ListSchedulesRequest pageSize. */
                    public pageSize: number;

                    /** ListSchedulesRequest pageToken. */
                    public pageToken: string;

                    /** ListSchedulesRequest filter. */
                    public filter: string;

                    /** ListSchedulesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListSchedulesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSchedulesRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListSchedulesRequest): google.cloud.notebooks.v1.ListSchedulesRequest;

                    /**
                     * Encodes the specified ListSchedulesRequest message. Does not implicitly {@link google.cloud.notebooks.v1.ListSchedulesRequest.verify|verify} messages.
                     * @param message ListSchedulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListSchedulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSchedulesRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListSchedulesRequest.verify|verify} messages.
                     * @param message ListSchedulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListSchedulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSchedulesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSchedulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListSchedulesRequest;

                    /**
                     * Decodes a ListSchedulesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSchedulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListSchedulesRequest;

                    /**
                     * Verifies a ListSchedulesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSchedulesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSchedulesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListSchedulesRequest;

                    /**
                     * Creates a plain object from a ListSchedulesRequest message. Also converts values to other types if specified.
                     * @param message ListSchedulesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListSchedulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSchedulesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSchedulesResponse. */
                interface IListSchedulesResponse {

                    /** ListSchedulesResponse schedules */
                    schedules?: (google.cloud.notebooks.v1.ISchedule[]|null);

                    /** ListSchedulesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListSchedulesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListSchedulesResponse. */
                class ListSchedulesResponse implements IListSchedulesResponse {

                    /**
                     * Constructs a new ListSchedulesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListSchedulesResponse);

                    /** ListSchedulesResponse schedules. */
                    public schedules: google.cloud.notebooks.v1.ISchedule[];

                    /** ListSchedulesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListSchedulesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListSchedulesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSchedulesResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListSchedulesResponse): google.cloud.notebooks.v1.ListSchedulesResponse;

                    /**
                     * Encodes the specified ListSchedulesResponse message. Does not implicitly {@link google.cloud.notebooks.v1.ListSchedulesResponse.verify|verify} messages.
                     * @param message ListSchedulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListSchedulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSchedulesResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListSchedulesResponse.verify|verify} messages.
                     * @param message ListSchedulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListSchedulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSchedulesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSchedulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListSchedulesResponse;

                    /**
                     * Decodes a ListSchedulesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSchedulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListSchedulesResponse;

                    /**
                     * Verifies a ListSchedulesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSchedulesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSchedulesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListSchedulesResponse;

                    /**
                     * Creates a plain object from a ListSchedulesResponse message. Also converts values to other types if specified.
                     * @param message ListSchedulesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListSchedulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSchedulesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetScheduleRequest. */
                interface IGetScheduleRequest {

                    /** GetScheduleRequest name */
                    name?: (string|null);
                }

                /** Represents a GetScheduleRequest. */
                class GetScheduleRequest implements IGetScheduleRequest {

                    /**
                     * Constructs a new GetScheduleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IGetScheduleRequest);

                    /** GetScheduleRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetScheduleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetScheduleRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IGetScheduleRequest): google.cloud.notebooks.v1.GetScheduleRequest;

                    /**
                     * Encodes the specified GetScheduleRequest message. Does not implicitly {@link google.cloud.notebooks.v1.GetScheduleRequest.verify|verify} messages.
                     * @param message GetScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IGetScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetScheduleRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.GetScheduleRequest.verify|verify} messages.
                     * @param message GetScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IGetScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetScheduleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.GetScheduleRequest;

                    /**
                     * Decodes a GetScheduleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.GetScheduleRequest;

                    /**
                     * Verifies a GetScheduleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetScheduleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetScheduleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.GetScheduleRequest;

                    /**
                     * Creates a plain object from a GetScheduleRequest message. Also converts values to other types if specified.
                     * @param message GetScheduleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.GetScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetScheduleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteScheduleRequest. */
                interface IDeleteScheduleRequest {

                    /** DeleteScheduleRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteScheduleRequest. */
                class DeleteScheduleRequest implements IDeleteScheduleRequest {

                    /**
                     * Constructs a new DeleteScheduleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IDeleteScheduleRequest);

                    /** DeleteScheduleRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteScheduleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteScheduleRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IDeleteScheduleRequest): google.cloud.notebooks.v1.DeleteScheduleRequest;

                    /**
                     * Encodes the specified DeleteScheduleRequest message. Does not implicitly {@link google.cloud.notebooks.v1.DeleteScheduleRequest.verify|verify} messages.
                     * @param message DeleteScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IDeleteScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteScheduleRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.DeleteScheduleRequest.verify|verify} messages.
                     * @param message DeleteScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IDeleteScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteScheduleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.DeleteScheduleRequest;

                    /**
                     * Decodes a DeleteScheduleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.DeleteScheduleRequest;

                    /**
                     * Verifies a DeleteScheduleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteScheduleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteScheduleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.DeleteScheduleRequest;

                    /**
                     * Creates a plain object from a DeleteScheduleRequest message. Also converts values to other types if specified.
                     * @param message DeleteScheduleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.DeleteScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteScheduleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateScheduleRequest. */
                interface ICreateScheduleRequest {

                    /** CreateScheduleRequest parent */
                    parent?: (string|null);

                    /** CreateScheduleRequest scheduleId */
                    scheduleId?: (string|null);

                    /** CreateScheduleRequest schedule */
                    schedule?: (google.cloud.notebooks.v1.ISchedule|null);
                }

                /** Represents a CreateScheduleRequest. */
                class CreateScheduleRequest implements ICreateScheduleRequest {

                    /**
                     * Constructs a new CreateScheduleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ICreateScheduleRequest);

                    /** CreateScheduleRequest parent. */
                    public parent: string;

                    /** CreateScheduleRequest scheduleId. */
                    public scheduleId: string;

                    /** CreateScheduleRequest schedule. */
                    public schedule?: (google.cloud.notebooks.v1.ISchedule|null);

                    /**
                     * Creates a new CreateScheduleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateScheduleRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ICreateScheduleRequest): google.cloud.notebooks.v1.CreateScheduleRequest;

                    /**
                     * Encodes the specified CreateScheduleRequest message. Does not implicitly {@link google.cloud.notebooks.v1.CreateScheduleRequest.verify|verify} messages.
                     * @param message CreateScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ICreateScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateScheduleRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.CreateScheduleRequest.verify|verify} messages.
                     * @param message CreateScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ICreateScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateScheduleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.CreateScheduleRequest;

                    /**
                     * Decodes a CreateScheduleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.CreateScheduleRequest;

                    /**
                     * Verifies a CreateScheduleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateScheduleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateScheduleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.CreateScheduleRequest;

                    /**
                     * Creates a plain object from a CreateScheduleRequest message. Also converts values to other types if specified.
                     * @param message CreateScheduleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.CreateScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateScheduleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TriggerScheduleRequest. */
                interface ITriggerScheduleRequest {

                    /** TriggerScheduleRequest name */
                    name?: (string|null);
                }

                /** Represents a TriggerScheduleRequest. */
                class TriggerScheduleRequest implements ITriggerScheduleRequest {

                    /**
                     * Constructs a new TriggerScheduleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ITriggerScheduleRequest);

                    /** TriggerScheduleRequest name. */
                    public name: string;

                    /**
                     * Creates a new TriggerScheduleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TriggerScheduleRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ITriggerScheduleRequest): google.cloud.notebooks.v1.TriggerScheduleRequest;

                    /**
                     * Encodes the specified TriggerScheduleRequest message. Does not implicitly {@link google.cloud.notebooks.v1.TriggerScheduleRequest.verify|verify} messages.
                     * @param message TriggerScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ITriggerScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TriggerScheduleRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.TriggerScheduleRequest.verify|verify} messages.
                     * @param message TriggerScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ITriggerScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TriggerScheduleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TriggerScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.TriggerScheduleRequest;

                    /**
                     * Decodes a TriggerScheduleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TriggerScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.TriggerScheduleRequest;

                    /**
                     * Verifies a TriggerScheduleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TriggerScheduleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TriggerScheduleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.TriggerScheduleRequest;

                    /**
                     * Creates a plain object from a TriggerScheduleRequest message. Also converts values to other types if specified.
                     * @param message TriggerScheduleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.TriggerScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TriggerScheduleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListExecutionsRequest. */
                interface IListExecutionsRequest {

                    /** ListExecutionsRequest parent */
                    parent?: (string|null);

                    /** ListExecutionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListExecutionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListExecutionsRequest filter */
                    filter?: (string|null);

                    /** ListExecutionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListExecutionsRequest. */
                class ListExecutionsRequest implements IListExecutionsRequest {

                    /**
                     * Constructs a new ListExecutionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListExecutionsRequest);

                    /** ListExecutionsRequest parent. */
                    public parent: string;

                    /** ListExecutionsRequest pageSize. */
                    public pageSize: number;

                    /** ListExecutionsRequest pageToken. */
                    public pageToken: string;

                    /** ListExecutionsRequest filter. */
                    public filter: string;

                    /** ListExecutionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListExecutionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListExecutionsRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListExecutionsRequest): google.cloud.notebooks.v1.ListExecutionsRequest;

                    /**
                     * Encodes the specified ListExecutionsRequest message. Does not implicitly {@link google.cloud.notebooks.v1.ListExecutionsRequest.verify|verify} messages.
                     * @param message ListExecutionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListExecutionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListExecutionsRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListExecutionsRequest.verify|verify} messages.
                     * @param message ListExecutionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListExecutionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListExecutionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListExecutionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListExecutionsRequest;

                    /**
                     * Decodes a ListExecutionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListExecutionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListExecutionsRequest;

                    /**
                     * Verifies a ListExecutionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListExecutionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListExecutionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListExecutionsRequest;

                    /**
                     * Creates a plain object from a ListExecutionsRequest message. Also converts values to other types if specified.
                     * @param message ListExecutionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListExecutionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListExecutionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListExecutionsResponse. */
                interface IListExecutionsResponse {

                    /** ListExecutionsResponse executions */
                    executions?: (google.cloud.notebooks.v1.IExecution[]|null);

                    /** ListExecutionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListExecutionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListExecutionsResponse. */
                class ListExecutionsResponse implements IListExecutionsResponse {

                    /**
                     * Constructs a new ListExecutionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IListExecutionsResponse);

                    /** ListExecutionsResponse executions. */
                    public executions: google.cloud.notebooks.v1.IExecution[];

                    /** ListExecutionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListExecutionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListExecutionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListExecutionsResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IListExecutionsResponse): google.cloud.notebooks.v1.ListExecutionsResponse;

                    /**
                     * Encodes the specified ListExecutionsResponse message. Does not implicitly {@link google.cloud.notebooks.v1.ListExecutionsResponse.verify|verify} messages.
                     * @param message ListExecutionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IListExecutionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListExecutionsResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.ListExecutionsResponse.verify|verify} messages.
                     * @param message ListExecutionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IListExecutionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListExecutionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListExecutionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.ListExecutionsResponse;

                    /**
                     * Decodes a ListExecutionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListExecutionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.ListExecutionsResponse;

                    /**
                     * Verifies a ListExecutionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListExecutionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListExecutionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.ListExecutionsResponse;

                    /**
                     * Creates a plain object from a ListExecutionsResponse message. Also converts values to other types if specified.
                     * @param message ListExecutionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.ListExecutionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListExecutionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetExecutionRequest. */
                interface IGetExecutionRequest {

                    /** GetExecutionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetExecutionRequest. */
                class GetExecutionRequest implements IGetExecutionRequest {

                    /**
                     * Constructs a new GetExecutionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IGetExecutionRequest);

                    /** GetExecutionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetExecutionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetExecutionRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IGetExecutionRequest): google.cloud.notebooks.v1.GetExecutionRequest;

                    /**
                     * Encodes the specified GetExecutionRequest message. Does not implicitly {@link google.cloud.notebooks.v1.GetExecutionRequest.verify|verify} messages.
                     * @param message GetExecutionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IGetExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetExecutionRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.GetExecutionRequest.verify|verify} messages.
                     * @param message GetExecutionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IGetExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetExecutionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetExecutionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.GetExecutionRequest;

                    /**
                     * Decodes a GetExecutionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetExecutionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.GetExecutionRequest;

                    /**
                     * Verifies a GetExecutionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetExecutionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetExecutionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.GetExecutionRequest;

                    /**
                     * Creates a plain object from a GetExecutionRequest message. Also converts values to other types if specified.
                     * @param message GetExecutionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.GetExecutionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetExecutionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteExecutionRequest. */
                interface IDeleteExecutionRequest {

                    /** DeleteExecutionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteExecutionRequest. */
                class DeleteExecutionRequest implements IDeleteExecutionRequest {

                    /**
                     * Constructs a new DeleteExecutionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.IDeleteExecutionRequest);

                    /** DeleteExecutionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteExecutionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteExecutionRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.IDeleteExecutionRequest): google.cloud.notebooks.v1.DeleteExecutionRequest;

                    /**
                     * Encodes the specified DeleteExecutionRequest message. Does not implicitly {@link google.cloud.notebooks.v1.DeleteExecutionRequest.verify|verify} messages.
                     * @param message DeleteExecutionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.IDeleteExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteExecutionRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.DeleteExecutionRequest.verify|verify} messages.
                     * @param message DeleteExecutionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.IDeleteExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteExecutionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteExecutionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.DeleteExecutionRequest;

                    /**
                     * Decodes a DeleteExecutionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteExecutionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.DeleteExecutionRequest;

                    /**
                     * Verifies a DeleteExecutionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteExecutionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteExecutionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.DeleteExecutionRequest;

                    /**
                     * Creates a plain object from a DeleteExecutionRequest message. Also converts values to other types if specified.
                     * @param message DeleteExecutionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.DeleteExecutionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteExecutionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateExecutionRequest. */
                interface ICreateExecutionRequest {

                    /** CreateExecutionRequest parent */
                    parent?: (string|null);

                    /** CreateExecutionRequest executionId */
                    executionId?: (string|null);

                    /** CreateExecutionRequest execution */
                    execution?: (google.cloud.notebooks.v1.IExecution|null);
                }

                /** Represents a CreateExecutionRequest. */
                class CreateExecutionRequest implements ICreateExecutionRequest {

                    /**
                     * Constructs a new CreateExecutionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1.ICreateExecutionRequest);

                    /** CreateExecutionRequest parent. */
                    public parent: string;

                    /** CreateExecutionRequest executionId. */
                    public executionId: string;

                    /** CreateExecutionRequest execution. */
                    public execution?: (google.cloud.notebooks.v1.IExecution|null);

                    /**
                     * Creates a new CreateExecutionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateExecutionRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1.ICreateExecutionRequest): google.cloud.notebooks.v1.CreateExecutionRequest;

                    /**
                     * Encodes the specified CreateExecutionRequest message. Does not implicitly {@link google.cloud.notebooks.v1.CreateExecutionRequest.verify|verify} messages.
                     * @param message CreateExecutionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1.ICreateExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateExecutionRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1.CreateExecutionRequest.verify|verify} messages.
                     * @param message CreateExecutionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1.ICreateExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateExecutionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateExecutionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1.CreateExecutionRequest;

                    /**
                     * Decodes a CreateExecutionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateExecutionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1.CreateExecutionRequest;

                    /**
                     * Verifies a CreateExecutionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateExecutionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateExecutionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1.CreateExecutionRequest;

                    /**
                     * Creates a plain object from a CreateExecutionRequest message. Also converts values to other types if specified.
                     * @param message CreateExecutionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1.CreateExecutionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateExecutionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of an Environment. */
                interface IEnvironment {

                    /** Environment name */
                    name?: (string|null);

                    /** Environment displayName */
                    displayName?: (string|null);

                    /** Environment description */
                    description?: (string|null);

                    /** Environment vmImage */
                    vmImage?: (google.cloud.notebooks.v1beta1.IVmImage|null);

                    /** Environment containerImage */
                    containerImage?: (google.cloud.notebooks.v1beta1.IContainerImage|null);

                    /** Environment postStartupScript */
                    postStartupScript?: (string|null);

                    /** Environment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Environment. */
                class Environment implements IEnvironment {

                    /**
                     * Constructs a new Environment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IEnvironment);

                    /** Environment name. */
                    public name: string;

                    /** Environment displayName. */
                    public displayName: string;

                    /** Environment description. */
                    public description: string;

                    /** Environment vmImage. */
                    public vmImage?: (google.cloud.notebooks.v1beta1.IVmImage|null);

                    /** Environment containerImage. */
                    public containerImage?: (google.cloud.notebooks.v1beta1.IContainerImage|null);

                    /** Environment postStartupScript. */
                    public postStartupScript: string;

                    /** Environment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Environment imageType. */
                    public imageType?: ("vmImage"|"containerImage");

                    /**
                     * Creates a new Environment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Environment instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IEnvironment): google.cloud.notebooks.v1beta1.Environment;

                    /**
                     * Encodes the specified Environment message. Does not implicitly {@link google.cloud.notebooks.v1beta1.Environment.verify|verify} messages.
                     * @param message Environment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Environment message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.Environment.verify|verify} messages.
                     * @param message Environment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Environment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Environment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.Environment;

                    /**
                     * Decodes an Environment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Environment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.Environment;

                    /**
                     * Verifies an Environment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Environment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Environment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.Environment;

                    /**
                     * Creates a plain object from an Environment message. Also converts values to other types if specified.
                     * @param message Environment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.Environment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Environment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VmImage. */
                interface IVmImage {

                    /** VmImage project */
                    project?: (string|null);

                    /** VmImage imageName */
                    imageName?: (string|null);

                    /** VmImage imageFamily */
                    imageFamily?: (string|null);
                }

                /** Represents a VmImage. */
                class VmImage implements IVmImage {

                    /**
                     * Constructs a new VmImage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IVmImage);

                    /** VmImage project. */
                    public project: string;

                    /** VmImage imageName. */
                    public imageName?: (string|null);

                    /** VmImage imageFamily. */
                    public imageFamily?: (string|null);

                    /** VmImage image. */
                    public image?: ("imageName"|"imageFamily");

                    /**
                     * Creates a new VmImage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmImage instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IVmImage): google.cloud.notebooks.v1beta1.VmImage;

                    /**
                     * Encodes the specified VmImage message. Does not implicitly {@link google.cloud.notebooks.v1beta1.VmImage.verify|verify} messages.
                     * @param message VmImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IVmImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmImage message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.VmImage.verify|verify} messages.
                     * @param message VmImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IVmImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmImage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.VmImage;

                    /**
                     * Decodes a VmImage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.VmImage;

                    /**
                     * Verifies a VmImage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmImage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmImage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.VmImage;

                    /**
                     * Creates a plain object from a VmImage message. Also converts values to other types if specified.
                     * @param message VmImage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.VmImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmImage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ContainerImage. */
                interface IContainerImage {

                    /** ContainerImage repository */
                    repository?: (string|null);

                    /** ContainerImage tag */
                    tag?: (string|null);
                }

                /** Represents a ContainerImage. */
                class ContainerImage implements IContainerImage {

                    /**
                     * Constructs a new ContainerImage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IContainerImage);

                    /** ContainerImage repository. */
                    public repository: string;

                    /** ContainerImage tag. */
                    public tag: string;

                    /**
                     * Creates a new ContainerImage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContainerImage instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IContainerImage): google.cloud.notebooks.v1beta1.ContainerImage;

                    /**
                     * Encodes the specified ContainerImage message. Does not implicitly {@link google.cloud.notebooks.v1beta1.ContainerImage.verify|verify} messages.
                     * @param message ContainerImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IContainerImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContainerImage message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.ContainerImage.verify|verify} messages.
                     * @param message ContainerImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IContainerImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContainerImage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContainerImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.ContainerImage;

                    /**
                     * Decodes a ContainerImage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContainerImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.ContainerImage;

                    /**
                     * Verifies a ContainerImage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContainerImage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContainerImage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.ContainerImage;

                    /**
                     * Creates a plain object from a ContainerImage message. Also converts values to other types if specified.
                     * @param message ContainerImage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.ContainerImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContainerImage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);

                    /** Instance vmImage */
                    vmImage?: (google.cloud.notebooks.v1beta1.IVmImage|null);

                    /** Instance containerImage */
                    containerImage?: (google.cloud.notebooks.v1beta1.IContainerImage|null);

                    /** Instance postStartupScript */
                    postStartupScript?: (string|null);

                    /** Instance proxyUri */
                    proxyUri?: (string|null);

                    /** Instance instanceOwners */
                    instanceOwners?: (string[]|null);

                    /** Instance serviceAccount */
                    serviceAccount?: (string|null);

                    /** Instance machineType */
                    machineType?: (string|null);

                    /** Instance acceleratorConfig */
                    acceleratorConfig?: (google.cloud.notebooks.v1beta1.Instance.IAcceleratorConfig|null);

                    /** Instance state */
                    state?: (google.cloud.notebooks.v1beta1.Instance.State|keyof typeof google.cloud.notebooks.v1beta1.Instance.State|null);

                    /** Instance installGpuDriver */
                    installGpuDriver?: (boolean|null);

                    /** Instance customGpuDriverPath */
                    customGpuDriverPath?: (string|null);

                    /** Instance bootDiskType */
                    bootDiskType?: (google.cloud.notebooks.v1beta1.Instance.DiskType|keyof typeof google.cloud.notebooks.v1beta1.Instance.DiskType|null);

                    /** Instance bootDiskSizeGb */
                    bootDiskSizeGb?: (number|Long|string|null);

                    /** Instance dataDiskType */
                    dataDiskType?: (google.cloud.notebooks.v1beta1.Instance.DiskType|keyof typeof google.cloud.notebooks.v1beta1.Instance.DiskType|null);

                    /** Instance dataDiskSizeGb */
                    dataDiskSizeGb?: (number|Long|string|null);

                    /** Instance noRemoveDataDisk */
                    noRemoveDataDisk?: (boolean|null);

                    /** Instance diskEncryption */
                    diskEncryption?: (google.cloud.notebooks.v1beta1.Instance.DiskEncryption|keyof typeof google.cloud.notebooks.v1beta1.Instance.DiskEncryption|null);

                    /** Instance kmsKey */
                    kmsKey?: (string|null);

                    /** Instance noPublicIp */
                    noPublicIp?: (boolean|null);

                    /** Instance noProxyAccess */
                    noProxyAccess?: (boolean|null);

                    /** Instance network */
                    network?: (string|null);

                    /** Instance subnet */
                    subnet?: (string|null);

                    /** Instance labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Instance metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Instance createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IInstance);

                    /** Instance name. */
                    public name: string;

                    /** Instance vmImage. */
                    public vmImage?: (google.cloud.notebooks.v1beta1.IVmImage|null);

                    /** Instance containerImage. */
                    public containerImage?: (google.cloud.notebooks.v1beta1.IContainerImage|null);

                    /** Instance postStartupScript. */
                    public postStartupScript: string;

                    /** Instance proxyUri. */
                    public proxyUri: string;

                    /** Instance instanceOwners. */
                    public instanceOwners: string[];

                    /** Instance serviceAccount. */
                    public serviceAccount: string;

                    /** Instance machineType. */
                    public machineType: string;

                    /** Instance acceleratorConfig. */
                    public acceleratorConfig?: (google.cloud.notebooks.v1beta1.Instance.IAcceleratorConfig|null);

                    /** Instance state. */
                    public state: (google.cloud.notebooks.v1beta1.Instance.State|keyof typeof google.cloud.notebooks.v1beta1.Instance.State);

                    /** Instance installGpuDriver. */
                    public installGpuDriver: boolean;

                    /** Instance customGpuDriverPath. */
                    public customGpuDriverPath: string;

                    /** Instance bootDiskType. */
                    public bootDiskType: (google.cloud.notebooks.v1beta1.Instance.DiskType|keyof typeof google.cloud.notebooks.v1beta1.Instance.DiskType);

                    /** Instance bootDiskSizeGb. */
                    public bootDiskSizeGb: (number|Long|string);

                    /** Instance dataDiskType. */
                    public dataDiskType: (google.cloud.notebooks.v1beta1.Instance.DiskType|keyof typeof google.cloud.notebooks.v1beta1.Instance.DiskType);

                    /** Instance dataDiskSizeGb. */
                    public dataDiskSizeGb: (number|Long|string);

                    /** Instance noRemoveDataDisk. */
                    public noRemoveDataDisk: boolean;

                    /** Instance diskEncryption. */
                    public diskEncryption: (google.cloud.notebooks.v1beta1.Instance.DiskEncryption|keyof typeof google.cloud.notebooks.v1beta1.Instance.DiskEncryption);

                    /** Instance kmsKey. */
                    public kmsKey: string;

                    /** Instance noPublicIp. */
                    public noPublicIp: boolean;

                    /** Instance noProxyAccess. */
                    public noProxyAccess: boolean;

                    /** Instance network. */
                    public network: string;

                    /** Instance subnet. */
                    public subnet: string;

                    /** Instance labels. */
                    public labels: { [k: string]: string };

                    /** Instance metadata. */
                    public metadata: { [k: string]: string };

                    /** Instance createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance environment. */
                    public environment?: ("vmImage"|"containerImage");

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IInstance): google.cloud.notebooks.v1beta1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.notebooks.v1beta1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.Instance;

                    /**
                     * Verifies an Instance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Instance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Instance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Instance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Instance {

                    /** Properties of an AcceleratorConfig. */
                    interface IAcceleratorConfig {

                        /** AcceleratorConfig type */
                        type?: (google.cloud.notebooks.v1beta1.Instance.AcceleratorType|keyof typeof google.cloud.notebooks.v1beta1.Instance.AcceleratorType|null);

                        /** AcceleratorConfig coreCount */
                        coreCount?: (number|Long|string|null);
                    }

                    /** Represents an AcceleratorConfig. */
                    class AcceleratorConfig implements IAcceleratorConfig {

                        /**
                         * Constructs a new AcceleratorConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.notebooks.v1beta1.Instance.IAcceleratorConfig);

                        /** AcceleratorConfig type. */
                        public type: (google.cloud.notebooks.v1beta1.Instance.AcceleratorType|keyof typeof google.cloud.notebooks.v1beta1.Instance.AcceleratorType);

                        /** AcceleratorConfig coreCount. */
                        public coreCount: (number|Long|string);

                        /**
                         * Creates a new AcceleratorConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AcceleratorConfig instance
                         */
                        public static create(properties?: google.cloud.notebooks.v1beta1.Instance.IAcceleratorConfig): google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig;

                        /**
                         * Encodes the specified AcceleratorConfig message. Does not implicitly {@link google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig.verify|verify} messages.
                         * @param message AcceleratorConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.notebooks.v1beta1.Instance.IAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AcceleratorConfig message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig.verify|verify} messages.
                         * @param message AcceleratorConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.notebooks.v1beta1.Instance.IAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AcceleratorConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AcceleratorConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig;

                        /**
                         * Decodes an AcceleratorConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AcceleratorConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig;

                        /**
                         * Verifies an AcceleratorConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AcceleratorConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AcceleratorConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig;

                        /**
                         * Creates a plain object from an AcceleratorConfig message. Also converts values to other types if specified.
                         * @param message AcceleratorConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.notebooks.v1beta1.Instance.AcceleratorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AcceleratorConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** AcceleratorType enum. */
                    enum AcceleratorType {
                        ACCELERATOR_TYPE_UNSPECIFIED = 0,
                        NVIDIA_TESLA_K80 = 1,
                        NVIDIA_TESLA_P100 = 2,
                        NVIDIA_TESLA_V100 = 3,
                        NVIDIA_TESLA_P4 = 4,
                        NVIDIA_TESLA_T4 = 5,
                        NVIDIA_TESLA_T4_VWS = 8,
                        NVIDIA_TESLA_P100_VWS = 9,
                        NVIDIA_TESLA_P4_VWS = 10,
                        TPU_V2 = 6,
                        TPU_V3 = 7
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STARTING = 1,
                        PROVISIONING = 2,
                        ACTIVE = 3,
                        STOPPING = 4,
                        STOPPED = 5,
                        DELETED = 6,
                        UPGRADING = 7,
                        INITIALIZING = 8,
                        REGISTERING = 9
                    }

                    /** DiskType enum. */
                    enum DiskType {
                        DISK_TYPE_UNSPECIFIED = 0,
                        PD_STANDARD = 1,
                        PD_SSD = 2,
                        PD_BALANCED = 3
                    }

                    /** DiskEncryption enum. */
                    enum DiskEncryption {
                        DISK_ENCRYPTION_UNSPECIFIED = 0,
                        GMEK = 1,
                        CMEK = 2
                    }
                }

                /** Represents a NotebookService */
                class NotebookService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new NotebookService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new NotebookService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NotebookService;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstancesResponse
                     */
                    public listInstances(request: google.cloud.notebooks.v1beta1.IListInstancesRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.ListInstancesCallback): void;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @returns Promise
                     */
                    public listInstances(request: google.cloud.notebooks.v1beta1.IListInstancesRequest): Promise<google.cloud.notebooks.v1beta1.ListInstancesResponse>;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.notebooks.v1beta1.IGetInstanceRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.notebooks.v1beta1.IGetInstanceRequest): Promise<google.cloud.notebooks.v1beta1.Instance>;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInstance(request: google.cloud.notebooks.v1beta1.ICreateInstanceRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.CreateInstanceCallback): void;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public createInstance(request: google.cloud.notebooks.v1beta1.ICreateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RegisterInstance.
                     * @param request RegisterInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public registerInstance(request: google.cloud.notebooks.v1beta1.IRegisterInstanceRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.RegisterInstanceCallback): void;

                    /**
                     * Calls RegisterInstance.
                     * @param request RegisterInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public registerInstance(request: google.cloud.notebooks.v1beta1.IRegisterInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SetInstanceAccelerator.
                     * @param request SetInstanceAcceleratorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public setInstanceAccelerator(request: google.cloud.notebooks.v1beta1.ISetInstanceAcceleratorRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.SetInstanceAcceleratorCallback): void;

                    /**
                     * Calls SetInstanceAccelerator.
                     * @param request SetInstanceAcceleratorRequest message or plain object
                     * @returns Promise
                     */
                    public setInstanceAccelerator(request: google.cloud.notebooks.v1beta1.ISetInstanceAcceleratorRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SetInstanceMachineType.
                     * @param request SetInstanceMachineTypeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public setInstanceMachineType(request: google.cloud.notebooks.v1beta1.ISetInstanceMachineTypeRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.SetInstanceMachineTypeCallback): void;

                    /**
                     * Calls SetInstanceMachineType.
                     * @param request SetInstanceMachineTypeRequest message or plain object
                     * @returns Promise
                     */
                    public setInstanceMachineType(request: google.cloud.notebooks.v1beta1.ISetInstanceMachineTypeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SetInstanceLabels.
                     * @param request SetInstanceLabelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public setInstanceLabels(request: google.cloud.notebooks.v1beta1.ISetInstanceLabelsRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.SetInstanceLabelsCallback): void;

                    /**
                     * Calls SetInstanceLabels.
                     * @param request SetInstanceLabelsRequest message or plain object
                     * @returns Promise
                     */
                    public setInstanceLabels(request: google.cloud.notebooks.v1beta1.ISetInstanceLabelsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteInstance(request: google.cloud.notebooks.v1beta1.IDeleteInstanceRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.DeleteInstanceCallback): void;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInstance(request: google.cloud.notebooks.v1beta1.IDeleteInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartInstance.
                     * @param request StartInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startInstance(request: google.cloud.notebooks.v1beta1.IStartInstanceRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.StartInstanceCallback): void;

                    /**
                     * Calls StartInstance.
                     * @param request StartInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public startInstance(request: google.cloud.notebooks.v1beta1.IStartInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopInstance.
                     * @param request StopInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopInstance(request: google.cloud.notebooks.v1beta1.IStopInstanceRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.StopInstanceCallback): void;

                    /**
                     * Calls StopInstance.
                     * @param request StopInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public stopInstance(request: google.cloud.notebooks.v1beta1.IStopInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ResetInstance.
                     * @param request ResetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resetInstance(request: google.cloud.notebooks.v1beta1.IResetInstanceRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.ResetInstanceCallback): void;

                    /**
                     * Calls ResetInstance.
                     * @param request ResetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public resetInstance(request: google.cloud.notebooks.v1beta1.IResetInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ReportInstanceInfo.
                     * @param request ReportInstanceInfoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public reportInstanceInfo(request: google.cloud.notebooks.v1beta1.IReportInstanceInfoRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.ReportInstanceInfoCallback): void;

                    /**
                     * Calls ReportInstanceInfo.
                     * @param request ReportInstanceInfoRequest message or plain object
                     * @returns Promise
                     */
                    public reportInstanceInfo(request: google.cloud.notebooks.v1beta1.IReportInstanceInfoRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls IsInstanceUpgradeable.
                     * @param request IsInstanceUpgradeableRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IsInstanceUpgradeableResponse
                     */
                    public isInstanceUpgradeable(request: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.IsInstanceUpgradeableCallback): void;

                    /**
                     * Calls IsInstanceUpgradeable.
                     * @param request IsInstanceUpgradeableRequest message or plain object
                     * @returns Promise
                     */
                    public isInstanceUpgradeable(request: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableRequest): Promise<google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse>;

                    /**
                     * Calls UpgradeInstance.
                     * @param request UpgradeInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public upgradeInstance(request: google.cloud.notebooks.v1beta1.IUpgradeInstanceRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.UpgradeInstanceCallback): void;

                    /**
                     * Calls UpgradeInstance.
                     * @param request UpgradeInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public upgradeInstance(request: google.cloud.notebooks.v1beta1.IUpgradeInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpgradeInstanceInternal.
                     * @param request UpgradeInstanceInternalRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public upgradeInstanceInternal(request: google.cloud.notebooks.v1beta1.IUpgradeInstanceInternalRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.UpgradeInstanceInternalCallback): void;

                    /**
                     * Calls UpgradeInstanceInternal.
                     * @param request UpgradeInstanceInternalRequest message or plain object
                     * @returns Promise
                     */
                    public upgradeInstanceInternal(request: google.cloud.notebooks.v1beta1.IUpgradeInstanceInternalRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListEnvironments.
                     * @param request ListEnvironmentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEnvironmentsResponse
                     */
                    public listEnvironments(request: google.cloud.notebooks.v1beta1.IListEnvironmentsRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.ListEnvironmentsCallback): void;

                    /**
                     * Calls ListEnvironments.
                     * @param request ListEnvironmentsRequest message or plain object
                     * @returns Promise
                     */
                    public listEnvironments(request: google.cloud.notebooks.v1beta1.IListEnvironmentsRequest): Promise<google.cloud.notebooks.v1beta1.ListEnvironmentsResponse>;

                    /**
                     * Calls GetEnvironment.
                     * @param request GetEnvironmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Environment
                     */
                    public getEnvironment(request: google.cloud.notebooks.v1beta1.IGetEnvironmentRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.GetEnvironmentCallback): void;

                    /**
                     * Calls GetEnvironment.
                     * @param request GetEnvironmentRequest message or plain object
                     * @returns Promise
                     */
                    public getEnvironment(request: google.cloud.notebooks.v1beta1.IGetEnvironmentRequest): Promise<google.cloud.notebooks.v1beta1.Environment>;

                    /**
                     * Calls CreateEnvironment.
                     * @param request CreateEnvironmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createEnvironment(request: google.cloud.notebooks.v1beta1.ICreateEnvironmentRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.CreateEnvironmentCallback): void;

                    /**
                     * Calls CreateEnvironment.
                     * @param request CreateEnvironmentRequest message or plain object
                     * @returns Promise
                     */
                    public createEnvironment(request: google.cloud.notebooks.v1beta1.ICreateEnvironmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteEnvironment.
                     * @param request DeleteEnvironmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteEnvironment(request: google.cloud.notebooks.v1beta1.IDeleteEnvironmentRequest, callback: google.cloud.notebooks.v1beta1.NotebookService.DeleteEnvironmentCallback): void;

                    /**
                     * Calls DeleteEnvironment.
                     * @param request DeleteEnvironmentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEnvironment(request: google.cloud.notebooks.v1beta1.IDeleteEnvironmentRequest): Promise<google.longrunning.Operation>;
                }

                namespace NotebookService {

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#listInstances}.
                     * @param error Error, if any
                     * @param [response] ListInstancesResponse
                     */
                    type ListInstancesCallback = (error: (Error|null), response?: google.cloud.notebooks.v1beta1.ListInstancesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.notebooks.v1beta1.Instance) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#createInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#registerInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RegisterInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#setInstanceAccelerator}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SetInstanceAcceleratorCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#setInstanceMachineType}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SetInstanceMachineTypeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#setInstanceLabels}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SetInstanceLabelsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#deleteInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#startInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#stopInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#resetInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResetInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#reportInstanceInfo}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ReportInstanceInfoCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#isInstanceUpgradeable}.
                     * @param error Error, if any
                     * @param [response] IsInstanceUpgradeableResponse
                     */
                    type IsInstanceUpgradeableCallback = (error: (Error|null), response?: google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#upgradeInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpgradeInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#upgradeInstanceInternal}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpgradeInstanceInternalCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#listEnvironments}.
                     * @param error Error, if any
                     * @param [response] ListEnvironmentsResponse
                     */
                    type ListEnvironmentsCallback = (error: (Error|null), response?: google.cloud.notebooks.v1beta1.ListEnvironmentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#getEnvironment}.
                     * @param error Error, if any
                     * @param [response] Environment
                     */
                    type GetEnvironmentCallback = (error: (Error|null), response?: google.cloud.notebooks.v1beta1.Environment) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#createEnvironment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.notebooks.v1beta1.NotebookService#deleteEnvironment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusMessage */
                    statusMessage?: (string|null);

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata endpoint */
                    endpoint?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusMessage. */
                    public statusMessage: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /** OperationMetadata endpoint. */
                    public endpoint: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IOperationMetadata): google.cloud.notebooks.v1beta1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.notebooks.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListInstancesRequest. */
                interface IListInstancesRequest {

                    /** ListInstancesRequest parent */
                    parent?: (string|null);

                    /** ListInstancesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInstancesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListInstancesRequest. */
                class ListInstancesRequest implements IListInstancesRequest {

                    /**
                     * Constructs a new ListInstancesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IListInstancesRequest);

                    /** ListInstancesRequest parent. */
                    public parent: string;

                    /** ListInstancesRequest pageSize. */
                    public pageSize: number;

                    /** ListInstancesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListInstancesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IListInstancesRequest): google.cloud.notebooks.v1beta1.ListInstancesRequest;

                    /**
                     * Encodes the specified ListInstancesRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.ListInstancesRequest;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.ListInstancesRequest;

                    /**
                     * Verifies a ListInstancesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstancesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstancesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.ListInstancesRequest;

                    /**
                     * Creates a plain object from a ListInstancesRequest message. Also converts values to other types if specified.
                     * @param message ListInstancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.ListInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListInstancesResponse. */
                interface IListInstancesResponse {

                    /** ListInstancesResponse instances */
                    instances?: (google.cloud.notebooks.v1beta1.IInstance[]|null);

                    /** ListInstancesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListInstancesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListInstancesResponse. */
                class ListInstancesResponse implements IListInstancesResponse {

                    /**
                     * Constructs a new ListInstancesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IListInstancesResponse);

                    /** ListInstancesResponse instances. */
                    public instances: google.cloud.notebooks.v1beta1.IInstance[];

                    /** ListInstancesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInstancesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IListInstancesResponse): google.cloud.notebooks.v1beta1.ListInstancesResponse;

                    /**
                     * Encodes the specified ListInstancesResponse message. Does not implicitly {@link google.cloud.notebooks.v1beta1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.ListInstancesResponse;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.ListInstancesResponse;

                    /**
                     * Verifies a ListInstancesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstancesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.ListInstancesResponse;

                    /**
                     * Creates a plain object from a ListInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.ListInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetInstanceRequest. */
                interface IGetInstanceRequest {

                    /** GetInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInstanceRequest. */
                class GetInstanceRequest implements IGetInstanceRequest {

                    /**
                     * Constructs a new GetInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IGetInstanceRequest): google.cloud.notebooks.v1beta1.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.GetInstanceRequest;

                    /**
                     * Verifies a GetInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateInstanceRequest. */
                interface ICreateInstanceRequest {

                    /** CreateInstanceRequest parent */
                    parent?: (string|null);

                    /** CreateInstanceRequest instanceId */
                    instanceId?: (string|null);

                    /** CreateInstanceRequest instance */
                    instance?: (google.cloud.notebooks.v1beta1.IInstance|null);
                }

                /** Represents a CreateInstanceRequest. */
                class CreateInstanceRequest implements ICreateInstanceRequest {

                    /**
                     * Constructs a new CreateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.ICreateInstanceRequest);

                    /** CreateInstanceRequest parent. */
                    public parent: string;

                    /** CreateInstanceRequest instanceId. */
                    public instanceId: string;

                    /** CreateInstanceRequest instance. */
                    public instance?: (google.cloud.notebooks.v1beta1.IInstance|null);

                    /**
                     * Creates a new CreateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.ICreateInstanceRequest): google.cloud.notebooks.v1beta1.CreateInstanceRequest;

                    /**
                     * Encodes the specified CreateInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.CreateInstanceRequest;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.CreateInstanceRequest;

                    /**
                     * Verifies a CreateInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.CreateInstanceRequest;

                    /**
                     * Creates a plain object from a CreateInstanceRequest message. Also converts values to other types if specified.
                     * @param message CreateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.CreateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RegisterInstanceRequest. */
                interface IRegisterInstanceRequest {

                    /** RegisterInstanceRequest parent */
                    parent?: (string|null);

                    /** RegisterInstanceRequest instanceId */
                    instanceId?: (string|null);
                }

                /** Represents a RegisterInstanceRequest. */
                class RegisterInstanceRequest implements IRegisterInstanceRequest {

                    /**
                     * Constructs a new RegisterInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IRegisterInstanceRequest);

                    /** RegisterInstanceRequest parent. */
                    public parent: string;

                    /** RegisterInstanceRequest instanceId. */
                    public instanceId: string;

                    /**
                     * Creates a new RegisterInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegisterInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IRegisterInstanceRequest): google.cloud.notebooks.v1beta1.RegisterInstanceRequest;

                    /**
                     * Encodes the specified RegisterInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.RegisterInstanceRequest.verify|verify} messages.
                     * @param message RegisterInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IRegisterInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegisterInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.RegisterInstanceRequest.verify|verify} messages.
                     * @param message RegisterInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IRegisterInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegisterInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegisterInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.RegisterInstanceRequest;

                    /**
                     * Decodes a RegisterInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegisterInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.RegisterInstanceRequest;

                    /**
                     * Verifies a RegisterInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegisterInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegisterInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.RegisterInstanceRequest;

                    /**
                     * Creates a plain object from a RegisterInstanceRequest message. Also converts values to other types if specified.
                     * @param message RegisterInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.RegisterInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegisterInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SetInstanceAcceleratorRequest. */
                interface ISetInstanceAcceleratorRequest {

                    /** SetInstanceAcceleratorRequest name */
                    name?: (string|null);

                    /** SetInstanceAcceleratorRequest type */
                    type?: (google.cloud.notebooks.v1beta1.Instance.AcceleratorType|keyof typeof google.cloud.notebooks.v1beta1.Instance.AcceleratorType|null);

                    /** SetInstanceAcceleratorRequest coreCount */
                    coreCount?: (number|Long|string|null);
                }

                /** Represents a SetInstanceAcceleratorRequest. */
                class SetInstanceAcceleratorRequest implements ISetInstanceAcceleratorRequest {

                    /**
                     * Constructs a new SetInstanceAcceleratorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.ISetInstanceAcceleratorRequest);

                    /** SetInstanceAcceleratorRequest name. */
                    public name: string;

                    /** SetInstanceAcceleratorRequest type. */
                    public type: (google.cloud.notebooks.v1beta1.Instance.AcceleratorType|keyof typeof google.cloud.notebooks.v1beta1.Instance.AcceleratorType);

                    /** SetInstanceAcceleratorRequest coreCount. */
                    public coreCount: (number|Long|string);

                    /**
                     * Creates a new SetInstanceAcceleratorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetInstanceAcceleratorRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.ISetInstanceAcceleratorRequest): google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest;

                    /**
                     * Encodes the specified SetInstanceAcceleratorRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest.verify|verify} messages.
                     * @param message SetInstanceAcceleratorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.ISetInstanceAcceleratorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetInstanceAcceleratorRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest.verify|verify} messages.
                     * @param message SetInstanceAcceleratorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.ISetInstanceAcceleratorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetInstanceAcceleratorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetInstanceAcceleratorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest;

                    /**
                     * Decodes a SetInstanceAcceleratorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetInstanceAcceleratorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest;

                    /**
                     * Verifies a SetInstanceAcceleratorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetInstanceAcceleratorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetInstanceAcceleratorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest;

                    /**
                     * Creates a plain object from a SetInstanceAcceleratorRequest message. Also converts values to other types if specified.
                     * @param message SetInstanceAcceleratorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.SetInstanceAcceleratorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetInstanceAcceleratorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SetInstanceMachineTypeRequest. */
                interface ISetInstanceMachineTypeRequest {

                    /** SetInstanceMachineTypeRequest name */
                    name?: (string|null);

                    /** SetInstanceMachineTypeRequest machineType */
                    machineType?: (string|null);
                }

                /** Represents a SetInstanceMachineTypeRequest. */
                class SetInstanceMachineTypeRequest implements ISetInstanceMachineTypeRequest {

                    /**
                     * Constructs a new SetInstanceMachineTypeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.ISetInstanceMachineTypeRequest);

                    /** SetInstanceMachineTypeRequest name. */
                    public name: string;

                    /** SetInstanceMachineTypeRequest machineType. */
                    public machineType: string;

                    /**
                     * Creates a new SetInstanceMachineTypeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetInstanceMachineTypeRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.ISetInstanceMachineTypeRequest): google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest;

                    /**
                     * Encodes the specified SetInstanceMachineTypeRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest.verify|verify} messages.
                     * @param message SetInstanceMachineTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.ISetInstanceMachineTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetInstanceMachineTypeRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest.verify|verify} messages.
                     * @param message SetInstanceMachineTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.ISetInstanceMachineTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetInstanceMachineTypeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetInstanceMachineTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest;

                    /**
                     * Decodes a SetInstanceMachineTypeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetInstanceMachineTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest;

                    /**
                     * Verifies a SetInstanceMachineTypeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetInstanceMachineTypeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetInstanceMachineTypeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest;

                    /**
                     * Creates a plain object from a SetInstanceMachineTypeRequest message. Also converts values to other types if specified.
                     * @param message SetInstanceMachineTypeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.SetInstanceMachineTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetInstanceMachineTypeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SetInstanceLabelsRequest. */
                interface ISetInstanceLabelsRequest {

                    /** SetInstanceLabelsRequest name */
                    name?: (string|null);

                    /** SetInstanceLabelsRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a SetInstanceLabelsRequest. */
                class SetInstanceLabelsRequest implements ISetInstanceLabelsRequest {

                    /**
                     * Constructs a new SetInstanceLabelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.ISetInstanceLabelsRequest);

                    /** SetInstanceLabelsRequest name. */
                    public name: string;

                    /** SetInstanceLabelsRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new SetInstanceLabelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetInstanceLabelsRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.ISetInstanceLabelsRequest): google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest;

                    /**
                     * Encodes the specified SetInstanceLabelsRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest.verify|verify} messages.
                     * @param message SetInstanceLabelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.ISetInstanceLabelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetInstanceLabelsRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest.verify|verify} messages.
                     * @param message SetInstanceLabelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.ISetInstanceLabelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetInstanceLabelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetInstanceLabelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest;

                    /**
                     * Decodes a SetInstanceLabelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetInstanceLabelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest;

                    /**
                     * Verifies a SetInstanceLabelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetInstanceLabelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetInstanceLabelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest;

                    /**
                     * Creates a plain object from a SetInstanceLabelsRequest message. Also converts values to other types if specified.
                     * @param message SetInstanceLabelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.SetInstanceLabelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetInstanceLabelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteInstanceRequest. */
                interface IDeleteInstanceRequest {

                    /** DeleteInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteInstanceRequest. */
                class DeleteInstanceRequest implements IDeleteInstanceRequest {

                    /**
                     * Constructs a new DeleteInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IDeleteInstanceRequest);

                    /** DeleteInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IDeleteInstanceRequest): google.cloud.notebooks.v1beta1.DeleteInstanceRequest;

                    /**
                     * Encodes the specified DeleteInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.DeleteInstanceRequest;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.DeleteInstanceRequest;

                    /**
                     * Verifies a DeleteInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.DeleteInstanceRequest;

                    /**
                     * Creates a plain object from a DeleteInstanceRequest message. Also converts values to other types if specified.
                     * @param message DeleteInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.DeleteInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartInstanceRequest. */
                interface IStartInstanceRequest {

                    /** StartInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a StartInstanceRequest. */
                class StartInstanceRequest implements IStartInstanceRequest {

                    /**
                     * Constructs a new StartInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IStartInstanceRequest);

                    /** StartInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IStartInstanceRequest): google.cloud.notebooks.v1beta1.StartInstanceRequest;

                    /**
                     * Encodes the specified StartInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.StartInstanceRequest.verify|verify} messages.
                     * @param message StartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IStartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.StartInstanceRequest.verify|verify} messages.
                     * @param message StartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IStartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.StartInstanceRequest;

                    /**
                     * Decodes a StartInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.StartInstanceRequest;

                    /**
                     * Verifies a StartInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.StartInstanceRequest;

                    /**
                     * Creates a plain object from a StartInstanceRequest message. Also converts values to other types if specified.
                     * @param message StartInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.StartInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StopInstanceRequest. */
                interface IStopInstanceRequest {

                    /** StopInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a StopInstanceRequest. */
                class StopInstanceRequest implements IStopInstanceRequest {

                    /**
                     * Constructs a new StopInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IStopInstanceRequest);

                    /** StopInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IStopInstanceRequest): google.cloud.notebooks.v1beta1.StopInstanceRequest;

                    /**
                     * Encodes the specified StopInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.StopInstanceRequest.verify|verify} messages.
                     * @param message StopInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IStopInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.StopInstanceRequest.verify|verify} messages.
                     * @param message StopInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IStopInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.StopInstanceRequest;

                    /**
                     * Decodes a StopInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.StopInstanceRequest;

                    /**
                     * Verifies a StopInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.StopInstanceRequest;

                    /**
                     * Creates a plain object from a StopInstanceRequest message. Also converts values to other types if specified.
                     * @param message StopInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.StopInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResetInstanceRequest. */
                interface IResetInstanceRequest {

                    /** ResetInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a ResetInstanceRequest. */
                class ResetInstanceRequest implements IResetInstanceRequest {

                    /**
                     * Constructs a new ResetInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IResetInstanceRequest);

                    /** ResetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IResetInstanceRequest): google.cloud.notebooks.v1beta1.ResetInstanceRequest;

                    /**
                     * Encodes the specified ResetInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.ResetInstanceRequest.verify|verify} messages.
                     * @param message ResetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IResetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.ResetInstanceRequest.verify|verify} messages.
                     * @param message ResetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IResetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.ResetInstanceRequest;

                    /**
                     * Decodes a ResetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.ResetInstanceRequest;

                    /**
                     * Verifies a ResetInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.ResetInstanceRequest;

                    /**
                     * Creates a plain object from a ResetInstanceRequest message. Also converts values to other types if specified.
                     * @param message ResetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.ResetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReportInstanceInfoRequest. */
                interface IReportInstanceInfoRequest {

                    /** ReportInstanceInfoRequest name */
                    name?: (string|null);

                    /** ReportInstanceInfoRequest vmId */
                    vmId?: (string|null);

                    /** ReportInstanceInfoRequest metadata */
                    metadata?: ({ [k: string]: string }|null);
                }

                /** Represents a ReportInstanceInfoRequest. */
                class ReportInstanceInfoRequest implements IReportInstanceInfoRequest {

                    /**
                     * Constructs a new ReportInstanceInfoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IReportInstanceInfoRequest);

                    /** ReportInstanceInfoRequest name. */
                    public name: string;

                    /** ReportInstanceInfoRequest vmId. */
                    public vmId: string;

                    /** ReportInstanceInfoRequest metadata. */
                    public metadata: { [k: string]: string };

                    /**
                     * Creates a new ReportInstanceInfoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReportInstanceInfoRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IReportInstanceInfoRequest): google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest;

                    /**
                     * Encodes the specified ReportInstanceInfoRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest.verify|verify} messages.
                     * @param message ReportInstanceInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IReportInstanceInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReportInstanceInfoRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest.verify|verify} messages.
                     * @param message ReportInstanceInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IReportInstanceInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReportInstanceInfoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReportInstanceInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest;

                    /**
                     * Decodes a ReportInstanceInfoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReportInstanceInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest;

                    /**
                     * Verifies a ReportInstanceInfoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReportInstanceInfoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReportInstanceInfoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest;

                    /**
                     * Creates a plain object from a ReportInstanceInfoRequest message. Also converts values to other types if specified.
                     * @param message ReportInstanceInfoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.ReportInstanceInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReportInstanceInfoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IsInstanceUpgradeableRequest. */
                interface IIsInstanceUpgradeableRequest {

                    /** IsInstanceUpgradeableRequest notebookInstance */
                    notebookInstance?: (string|null);
                }

                /** Represents an IsInstanceUpgradeableRequest. */
                class IsInstanceUpgradeableRequest implements IIsInstanceUpgradeableRequest {

                    /**
                     * Constructs a new IsInstanceUpgradeableRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableRequest);

                    /** IsInstanceUpgradeableRequest notebookInstance. */
                    public notebookInstance: string;

                    /**
                     * Creates a new IsInstanceUpgradeableRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IsInstanceUpgradeableRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableRequest): google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest;

                    /**
                     * Encodes the specified IsInstanceUpgradeableRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest.verify|verify} messages.
                     * @param message IsInstanceUpgradeableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IsInstanceUpgradeableRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest.verify|verify} messages.
                     * @param message IsInstanceUpgradeableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IsInstanceUpgradeableRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IsInstanceUpgradeableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest;

                    /**
                     * Decodes an IsInstanceUpgradeableRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IsInstanceUpgradeableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest;

                    /**
                     * Verifies an IsInstanceUpgradeableRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IsInstanceUpgradeableRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IsInstanceUpgradeableRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest;

                    /**
                     * Creates a plain object from an IsInstanceUpgradeableRequest message. Also converts values to other types if specified.
                     * @param message IsInstanceUpgradeableRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.IsInstanceUpgradeableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IsInstanceUpgradeableRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IsInstanceUpgradeableResponse. */
                interface IIsInstanceUpgradeableResponse {

                    /** IsInstanceUpgradeableResponse upgradeable */
                    upgradeable?: (boolean|null);

                    /** IsInstanceUpgradeableResponse upgradeVersion */
                    upgradeVersion?: (string|null);

                    /** IsInstanceUpgradeableResponse upgradeInfo */
                    upgradeInfo?: (string|null);
                }

                /** Represents an IsInstanceUpgradeableResponse. */
                class IsInstanceUpgradeableResponse implements IIsInstanceUpgradeableResponse {

                    /**
                     * Constructs a new IsInstanceUpgradeableResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableResponse);

                    /** IsInstanceUpgradeableResponse upgradeable. */
                    public upgradeable: boolean;

                    /** IsInstanceUpgradeableResponse upgradeVersion. */
                    public upgradeVersion: string;

                    /** IsInstanceUpgradeableResponse upgradeInfo. */
                    public upgradeInfo: string;

                    /**
                     * Creates a new IsInstanceUpgradeableResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IsInstanceUpgradeableResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableResponse): google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse;

                    /**
                     * Encodes the specified IsInstanceUpgradeableResponse message. Does not implicitly {@link google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse.verify|verify} messages.
                     * @param message IsInstanceUpgradeableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IsInstanceUpgradeableResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse.verify|verify} messages.
                     * @param message IsInstanceUpgradeableResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IIsInstanceUpgradeableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IsInstanceUpgradeableResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IsInstanceUpgradeableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse;

                    /**
                     * Decodes an IsInstanceUpgradeableResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IsInstanceUpgradeableResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse;

                    /**
                     * Verifies an IsInstanceUpgradeableResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IsInstanceUpgradeableResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IsInstanceUpgradeableResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse;

                    /**
                     * Creates a plain object from an IsInstanceUpgradeableResponse message. Also converts values to other types if specified.
                     * @param message IsInstanceUpgradeableResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.IsInstanceUpgradeableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IsInstanceUpgradeableResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpgradeInstanceRequest. */
                interface IUpgradeInstanceRequest {

                    /** UpgradeInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents an UpgradeInstanceRequest. */
                class UpgradeInstanceRequest implements IUpgradeInstanceRequest {

                    /**
                     * Constructs a new UpgradeInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IUpgradeInstanceRequest);

                    /** UpgradeInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new UpgradeInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpgradeInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IUpgradeInstanceRequest): google.cloud.notebooks.v1beta1.UpgradeInstanceRequest;

                    /**
                     * Encodes the specified UpgradeInstanceRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.UpgradeInstanceRequest.verify|verify} messages.
                     * @param message UpgradeInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IUpgradeInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpgradeInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.UpgradeInstanceRequest.verify|verify} messages.
                     * @param message UpgradeInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IUpgradeInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpgradeInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpgradeInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.UpgradeInstanceRequest;

                    /**
                     * Decodes an UpgradeInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpgradeInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.UpgradeInstanceRequest;

                    /**
                     * Verifies an UpgradeInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpgradeInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpgradeInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.UpgradeInstanceRequest;

                    /**
                     * Creates a plain object from an UpgradeInstanceRequest message. Also converts values to other types if specified.
                     * @param message UpgradeInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.UpgradeInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpgradeInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpgradeInstanceInternalRequest. */
                interface IUpgradeInstanceInternalRequest {

                    /** UpgradeInstanceInternalRequest name */
                    name?: (string|null);

                    /** UpgradeInstanceInternalRequest vmId */
                    vmId?: (string|null);
                }

                /** Represents an UpgradeInstanceInternalRequest. */
                class UpgradeInstanceInternalRequest implements IUpgradeInstanceInternalRequest {

                    /**
                     * Constructs a new UpgradeInstanceInternalRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IUpgradeInstanceInternalRequest);

                    /** UpgradeInstanceInternalRequest name. */
                    public name: string;

                    /** UpgradeInstanceInternalRequest vmId. */
                    public vmId: string;

                    /**
                     * Creates a new UpgradeInstanceInternalRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpgradeInstanceInternalRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IUpgradeInstanceInternalRequest): google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest;

                    /**
                     * Encodes the specified UpgradeInstanceInternalRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest.verify|verify} messages.
                     * @param message UpgradeInstanceInternalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IUpgradeInstanceInternalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpgradeInstanceInternalRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest.verify|verify} messages.
                     * @param message UpgradeInstanceInternalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IUpgradeInstanceInternalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpgradeInstanceInternalRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpgradeInstanceInternalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest;

                    /**
                     * Decodes an UpgradeInstanceInternalRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpgradeInstanceInternalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest;

                    /**
                     * Verifies an UpgradeInstanceInternalRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpgradeInstanceInternalRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpgradeInstanceInternalRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest;

                    /**
                     * Creates a plain object from an UpgradeInstanceInternalRequest message. Also converts values to other types if specified.
                     * @param message UpgradeInstanceInternalRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.UpgradeInstanceInternalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpgradeInstanceInternalRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListEnvironmentsRequest. */
                interface IListEnvironmentsRequest {

                    /** ListEnvironmentsRequest parent */
                    parent?: (string|null);

                    /** ListEnvironmentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEnvironmentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEnvironmentsRequest. */
                class ListEnvironmentsRequest implements IListEnvironmentsRequest {

                    /**
                     * Constructs a new ListEnvironmentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IListEnvironmentsRequest);

                    /** ListEnvironmentsRequest parent. */
                    public parent: string;

                    /** ListEnvironmentsRequest pageSize. */
                    public pageSize: number;

                    /** ListEnvironmentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEnvironmentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEnvironmentsRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IListEnvironmentsRequest): google.cloud.notebooks.v1beta1.ListEnvironmentsRequest;

                    /**
                     * Encodes the specified ListEnvironmentsRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.ListEnvironmentsRequest.verify|verify} messages.
                     * @param message ListEnvironmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IListEnvironmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEnvironmentsRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.ListEnvironmentsRequest.verify|verify} messages.
                     * @param message ListEnvironmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IListEnvironmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEnvironmentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEnvironmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.ListEnvironmentsRequest;

                    /**
                     * Decodes a ListEnvironmentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEnvironmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.ListEnvironmentsRequest;

                    /**
                     * Verifies a ListEnvironmentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEnvironmentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEnvironmentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.ListEnvironmentsRequest;

                    /**
                     * Creates a plain object from a ListEnvironmentsRequest message. Also converts values to other types if specified.
                     * @param message ListEnvironmentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.ListEnvironmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEnvironmentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListEnvironmentsResponse. */
                interface IListEnvironmentsResponse {

                    /** ListEnvironmentsResponse environments */
                    environments?: (google.cloud.notebooks.v1beta1.IEnvironment[]|null);

                    /** ListEnvironmentsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListEnvironmentsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListEnvironmentsResponse. */
                class ListEnvironmentsResponse implements IListEnvironmentsResponse {

                    /**
                     * Constructs a new ListEnvironmentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IListEnvironmentsResponse);

                    /** ListEnvironmentsResponse environments. */
                    public environments: google.cloud.notebooks.v1beta1.IEnvironment[];

                    /** ListEnvironmentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListEnvironmentsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListEnvironmentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEnvironmentsResponse instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IListEnvironmentsResponse): google.cloud.notebooks.v1beta1.ListEnvironmentsResponse;

                    /**
                     * Encodes the specified ListEnvironmentsResponse message. Does not implicitly {@link google.cloud.notebooks.v1beta1.ListEnvironmentsResponse.verify|verify} messages.
                     * @param message ListEnvironmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IListEnvironmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEnvironmentsResponse message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.ListEnvironmentsResponse.verify|verify} messages.
                     * @param message ListEnvironmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IListEnvironmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEnvironmentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEnvironmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.ListEnvironmentsResponse;

                    /**
                     * Decodes a ListEnvironmentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEnvironmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.ListEnvironmentsResponse;

                    /**
                     * Verifies a ListEnvironmentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEnvironmentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEnvironmentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.ListEnvironmentsResponse;

                    /**
                     * Creates a plain object from a ListEnvironmentsResponse message. Also converts values to other types if specified.
                     * @param message ListEnvironmentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.ListEnvironmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEnvironmentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetEnvironmentRequest. */
                interface IGetEnvironmentRequest {

                    /** GetEnvironmentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEnvironmentRequest. */
                class GetEnvironmentRequest implements IGetEnvironmentRequest {

                    /**
                     * Constructs a new GetEnvironmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IGetEnvironmentRequest);

                    /** GetEnvironmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEnvironmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEnvironmentRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IGetEnvironmentRequest): google.cloud.notebooks.v1beta1.GetEnvironmentRequest;

                    /**
                     * Encodes the specified GetEnvironmentRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.GetEnvironmentRequest.verify|verify} messages.
                     * @param message GetEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IGetEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.GetEnvironmentRequest.verify|verify} messages.
                     * @param message GetEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IGetEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEnvironmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.GetEnvironmentRequest;

                    /**
                     * Decodes a GetEnvironmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.GetEnvironmentRequest;

                    /**
                     * Verifies a GetEnvironmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEnvironmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.GetEnvironmentRequest;

                    /**
                     * Creates a plain object from a GetEnvironmentRequest message. Also converts values to other types if specified.
                     * @param message GetEnvironmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.GetEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEnvironmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateEnvironmentRequest. */
                interface ICreateEnvironmentRequest {

                    /** CreateEnvironmentRequest parent */
                    parent?: (string|null);

                    /** CreateEnvironmentRequest environmentId */
                    environmentId?: (string|null);

                    /** CreateEnvironmentRequest environment */
                    environment?: (google.cloud.notebooks.v1beta1.IEnvironment|null);
                }

                /** Represents a CreateEnvironmentRequest. */
                class CreateEnvironmentRequest implements ICreateEnvironmentRequest {

                    /**
                     * Constructs a new CreateEnvironmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.ICreateEnvironmentRequest);

                    /** CreateEnvironmentRequest parent. */
                    public parent: string;

                    /** CreateEnvironmentRequest environmentId. */
                    public environmentId: string;

                    /** CreateEnvironmentRequest environment. */
                    public environment?: (google.cloud.notebooks.v1beta1.IEnvironment|null);

                    /**
                     * Creates a new CreateEnvironmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEnvironmentRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.ICreateEnvironmentRequest): google.cloud.notebooks.v1beta1.CreateEnvironmentRequest;

                    /**
                     * Encodes the specified CreateEnvironmentRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.CreateEnvironmentRequest.verify|verify} messages.
                     * @param message CreateEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.ICreateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.CreateEnvironmentRequest.verify|verify} messages.
                     * @param message CreateEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.ICreateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEnvironmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.CreateEnvironmentRequest;

                    /**
                     * Decodes a CreateEnvironmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.CreateEnvironmentRequest;

                    /**
                     * Verifies a CreateEnvironmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEnvironmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.CreateEnvironmentRequest;

                    /**
                     * Creates a plain object from a CreateEnvironmentRequest message. Also converts values to other types if specified.
                     * @param message CreateEnvironmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.CreateEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEnvironmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteEnvironmentRequest. */
                interface IDeleteEnvironmentRequest {

                    /** DeleteEnvironmentRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteEnvironmentRequest. */
                class DeleteEnvironmentRequest implements IDeleteEnvironmentRequest {

                    /**
                     * Constructs a new DeleteEnvironmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.notebooks.v1beta1.IDeleteEnvironmentRequest);

                    /** DeleteEnvironmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteEnvironmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEnvironmentRequest instance
                     */
                    public static create(properties?: google.cloud.notebooks.v1beta1.IDeleteEnvironmentRequest): google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest;

                    /**
                     * Encodes the specified DeleteEnvironmentRequest message. Does not implicitly {@link google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest.verify|verify} messages.
                     * @param message DeleteEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.notebooks.v1beta1.IDeleteEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest.verify|verify} messages.
                     * @param message DeleteEnvironmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.notebooks.v1beta1.IDeleteEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEnvironmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest;

                    /**
                     * Decodes a DeleteEnvironmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEnvironmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest;

                    /**
                     * Verifies a DeleteEnvironmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEnvironmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest;

                    /**
                     * Creates a plain object from a DeleteEnvironmentRequest message. Also converts values to other types if specified.
                     * @param message DeleteEnvironmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.notebooks.v1beta1.DeleteEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEnvironmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
            UNORDERED_LIST = 6
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

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
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
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
