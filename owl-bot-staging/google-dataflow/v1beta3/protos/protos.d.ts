// Copyright 2025 Google LLC
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

    /** Namespace dataflow. */
    namespace dataflow {

        /** Namespace v1beta3. */
        namespace v1beta3 {

            /** Properties of an Environment. */
            interface IEnvironment {

                /** Environment tempStoragePrefix */
                tempStoragePrefix?: (string|null);

                /** Environment clusterManagerApiService */
                clusterManagerApiService?: (string|null);

                /** Environment experiments */
                experiments?: (string[]|null);

                /** Environment serviceOptions */
                serviceOptions?: (string[]|null);

                /** Environment serviceKmsKeyName */
                serviceKmsKeyName?: (string|null);

                /** Environment workerPools */
                workerPools?: (google.dataflow.v1beta3.IWorkerPool[]|null);

                /** Environment userAgent */
                userAgent?: (google.protobuf.IStruct|null);

                /** Environment version */
                version?: (google.protobuf.IStruct|null);

                /** Environment dataset */
                dataset?: (string|null);

                /** Environment sdkPipelineOptions */
                sdkPipelineOptions?: (google.protobuf.IStruct|null);

                /** Environment internalExperiments */
                internalExperiments?: (google.protobuf.IAny|null);

                /** Environment serviceAccountEmail */
                serviceAccountEmail?: (string|null);

                /** Environment flexResourceSchedulingGoal */
                flexResourceSchedulingGoal?: (google.dataflow.v1beta3.FlexResourceSchedulingGoal|keyof typeof google.dataflow.v1beta3.FlexResourceSchedulingGoal|null);

                /** Environment workerRegion */
                workerRegion?: (string|null);

                /** Environment workerZone */
                workerZone?: (string|null);

                /** Environment shuffleMode */
                shuffleMode?: (google.dataflow.v1beta3.ShuffleMode|keyof typeof google.dataflow.v1beta3.ShuffleMode|null);

                /** Environment debugOptions */
                debugOptions?: (google.dataflow.v1beta3.IDebugOptions|null);

                /** Environment useStreamingEngineResourceBasedBilling */
                useStreamingEngineResourceBasedBilling?: (boolean|null);

                /** Environment streamingMode */
                streamingMode?: (google.dataflow.v1beta3.StreamingMode|keyof typeof google.dataflow.v1beta3.StreamingMode|null);
            }

            /** Represents an Environment. */
            class Environment implements IEnvironment {

                /**
                 * Constructs a new Environment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IEnvironment);

                /** Environment tempStoragePrefix. */
                public tempStoragePrefix: string;

                /** Environment clusterManagerApiService. */
                public clusterManagerApiService: string;

                /** Environment experiments. */
                public experiments: string[];

                /** Environment serviceOptions. */
                public serviceOptions: string[];

                /** Environment serviceKmsKeyName. */
                public serviceKmsKeyName: string;

                /** Environment workerPools. */
                public workerPools: google.dataflow.v1beta3.IWorkerPool[];

                /** Environment userAgent. */
                public userAgent?: (google.protobuf.IStruct|null);

                /** Environment version. */
                public version?: (google.protobuf.IStruct|null);

                /** Environment dataset. */
                public dataset: string;

                /** Environment sdkPipelineOptions. */
                public sdkPipelineOptions?: (google.protobuf.IStruct|null);

                /** Environment internalExperiments. */
                public internalExperiments?: (google.protobuf.IAny|null);

                /** Environment serviceAccountEmail. */
                public serviceAccountEmail: string;

                /** Environment flexResourceSchedulingGoal. */
                public flexResourceSchedulingGoal: (google.dataflow.v1beta3.FlexResourceSchedulingGoal|keyof typeof google.dataflow.v1beta3.FlexResourceSchedulingGoal);

                /** Environment workerRegion. */
                public workerRegion: string;

                /** Environment workerZone. */
                public workerZone: string;

                /** Environment shuffleMode. */
                public shuffleMode: (google.dataflow.v1beta3.ShuffleMode|keyof typeof google.dataflow.v1beta3.ShuffleMode);

                /** Environment debugOptions. */
                public debugOptions?: (google.dataflow.v1beta3.IDebugOptions|null);

                /** Environment useStreamingEngineResourceBasedBilling. */
                public useStreamingEngineResourceBasedBilling: boolean;

                /** Environment streamingMode. */
                public streamingMode: (google.dataflow.v1beta3.StreamingMode|keyof typeof google.dataflow.v1beta3.StreamingMode);

                /**
                 * Creates a new Environment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Environment instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IEnvironment): google.dataflow.v1beta3.Environment;

                /**
                 * Encodes the specified Environment message. Does not implicitly {@link google.dataflow.v1beta3.Environment.verify|verify} messages.
                 * @param message Environment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Environment message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.Environment.verify|verify} messages.
                 * @param message Environment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Environment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Environment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.Environment;

                /**
                 * Decodes an Environment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Environment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.Environment;

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
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.Environment;

                /**
                 * Creates a plain object from an Environment message. Also converts values to other types if specified.
                 * @param message Environment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.Environment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Environment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Environment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Package. */
            interface IPackage {

                /** Package name */
                name?: (string|null);

                /** Package location */
                location?: (string|null);
            }

            /** Represents a Package. */
            class Package implements IPackage {

                /**
                 * Constructs a new Package.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IPackage);

                /** Package name. */
                public name: string;

                /** Package location. */
                public location: string;

                /**
                 * Creates a new Package instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Package instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IPackage): google.dataflow.v1beta3.Package;

                /**
                 * Encodes the specified Package message. Does not implicitly {@link google.dataflow.v1beta3.Package.verify|verify} messages.
                 * @param message Package message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Package message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.Package.verify|verify} messages.
                 * @param message Package message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Package message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Package
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.Package;

                /**
                 * Decodes a Package message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Package
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.Package;

                /**
                 * Verifies a Package message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Package message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Package
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.Package;

                /**
                 * Creates a plain object from a Package message. Also converts values to other types if specified.
                 * @param message Package
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Package to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Package
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** JobType enum. */
            enum JobType {
                JOB_TYPE_UNKNOWN = 0,
                JOB_TYPE_BATCH = 1,
                JOB_TYPE_STREAMING = 2
            }

            /** FlexResourceSchedulingGoal enum. */
            enum FlexResourceSchedulingGoal {
                FLEXRS_UNSPECIFIED = 0,
                FLEXRS_SPEED_OPTIMIZED = 1,
                FLEXRS_COST_OPTIMIZED = 2
            }

            /** Properties of a Disk. */
            interface IDisk {

                /** Disk sizeGb */
                sizeGb?: (number|null);

                /** Disk diskType */
                diskType?: (string|null);

                /** Disk mountPoint */
                mountPoint?: (string|null);
            }

            /** Represents a Disk. */
            class Disk implements IDisk {

                /**
                 * Constructs a new Disk.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IDisk);

                /** Disk sizeGb. */
                public sizeGb: number;

                /** Disk diskType. */
                public diskType: string;

                /** Disk mountPoint. */
                public mountPoint: string;

                /**
                 * Creates a new Disk instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Disk instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IDisk): google.dataflow.v1beta3.Disk;

                /**
                 * Encodes the specified Disk message. Does not implicitly {@link google.dataflow.v1beta3.Disk.verify|verify} messages.
                 * @param message Disk message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Disk message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.Disk.verify|verify} messages.
                 * @param message Disk message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Disk message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Disk
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.Disk;

                /**
                 * Decodes a Disk message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Disk
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.Disk;

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
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.Disk;

                /**
                 * Creates a plain object from a Disk message. Also converts values to other types if specified.
                 * @param message Disk
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.Disk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Disk to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Disk
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WorkerSettings. */
            interface IWorkerSettings {

                /** WorkerSettings baseUrl */
                baseUrl?: (string|null);

                /** WorkerSettings reportingEnabled */
                reportingEnabled?: (boolean|null);

                /** WorkerSettings servicePath */
                servicePath?: (string|null);

                /** WorkerSettings shuffleServicePath */
                shuffleServicePath?: (string|null);

                /** WorkerSettings workerId */
                workerId?: (string|null);

                /** WorkerSettings tempStoragePrefix */
                tempStoragePrefix?: (string|null);
            }

            /** Represents a WorkerSettings. */
            class WorkerSettings implements IWorkerSettings {

                /**
                 * Constructs a new WorkerSettings.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IWorkerSettings);

                /** WorkerSettings baseUrl. */
                public baseUrl: string;

                /** WorkerSettings reportingEnabled. */
                public reportingEnabled: boolean;

                /** WorkerSettings servicePath. */
                public servicePath: string;

                /** WorkerSettings shuffleServicePath. */
                public shuffleServicePath: string;

                /** WorkerSettings workerId. */
                public workerId: string;

                /** WorkerSettings tempStoragePrefix. */
                public tempStoragePrefix: string;

                /**
                 * Creates a new WorkerSettings instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkerSettings instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IWorkerSettings): google.dataflow.v1beta3.WorkerSettings;

                /**
                 * Encodes the specified WorkerSettings message. Does not implicitly {@link google.dataflow.v1beta3.WorkerSettings.verify|verify} messages.
                 * @param message WorkerSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IWorkerSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkerSettings message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.WorkerSettings.verify|verify} messages.
                 * @param message WorkerSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IWorkerSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkerSettings message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkerSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.WorkerSettings;

                /**
                 * Decodes a WorkerSettings message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkerSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.WorkerSettings;

                /**
                 * Verifies a WorkerSettings message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkerSettings message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkerSettings
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.WorkerSettings;

                /**
                 * Creates a plain object from a WorkerSettings message. Also converts values to other types if specified.
                 * @param message WorkerSettings
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.WorkerSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkerSettings to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WorkerSettings
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TaskRunnerSettings. */
            interface ITaskRunnerSettings {

                /** TaskRunnerSettings taskUser */
                taskUser?: (string|null);

                /** TaskRunnerSettings taskGroup */
                taskGroup?: (string|null);

                /** TaskRunnerSettings oauthScopes */
                oauthScopes?: (string[]|null);

                /** TaskRunnerSettings baseUrl */
                baseUrl?: (string|null);

                /** TaskRunnerSettings dataflowApiVersion */
                dataflowApiVersion?: (string|null);

                /** TaskRunnerSettings parallelWorkerSettings */
                parallelWorkerSettings?: (google.dataflow.v1beta3.IWorkerSettings|null);

                /** TaskRunnerSettings baseTaskDir */
                baseTaskDir?: (string|null);

                /** TaskRunnerSettings continueOnException */
                continueOnException?: (boolean|null);

                /** TaskRunnerSettings logToSerialconsole */
                logToSerialconsole?: (boolean|null);

                /** TaskRunnerSettings alsologtostderr */
                alsologtostderr?: (boolean|null);

                /** TaskRunnerSettings logUploadLocation */
                logUploadLocation?: (string|null);

                /** TaskRunnerSettings logDir */
                logDir?: (string|null);

                /** TaskRunnerSettings tempStoragePrefix */
                tempStoragePrefix?: (string|null);

                /** TaskRunnerSettings harnessCommand */
                harnessCommand?: (string|null);

                /** TaskRunnerSettings workflowFileName */
                workflowFileName?: (string|null);

                /** TaskRunnerSettings commandlinesFileName */
                commandlinesFileName?: (string|null);

                /** TaskRunnerSettings vmId */
                vmId?: (string|null);

                /** TaskRunnerSettings languageHint */
                languageHint?: (string|null);

                /** TaskRunnerSettings streamingWorkerMainClass */
                streamingWorkerMainClass?: (string|null);
            }

            /** Represents a TaskRunnerSettings. */
            class TaskRunnerSettings implements ITaskRunnerSettings {

                /**
                 * Constructs a new TaskRunnerSettings.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ITaskRunnerSettings);

                /** TaskRunnerSettings taskUser. */
                public taskUser: string;

                /** TaskRunnerSettings taskGroup. */
                public taskGroup: string;

                /** TaskRunnerSettings oauthScopes. */
                public oauthScopes: string[];

                /** TaskRunnerSettings baseUrl. */
                public baseUrl: string;

                /** TaskRunnerSettings dataflowApiVersion. */
                public dataflowApiVersion: string;

                /** TaskRunnerSettings parallelWorkerSettings. */
                public parallelWorkerSettings?: (google.dataflow.v1beta3.IWorkerSettings|null);

                /** TaskRunnerSettings baseTaskDir. */
                public baseTaskDir: string;

                /** TaskRunnerSettings continueOnException. */
                public continueOnException: boolean;

                /** TaskRunnerSettings logToSerialconsole. */
                public logToSerialconsole: boolean;

                /** TaskRunnerSettings alsologtostderr. */
                public alsologtostderr: boolean;

                /** TaskRunnerSettings logUploadLocation. */
                public logUploadLocation: string;

                /** TaskRunnerSettings logDir. */
                public logDir: string;

                /** TaskRunnerSettings tempStoragePrefix. */
                public tempStoragePrefix: string;

                /** TaskRunnerSettings harnessCommand. */
                public harnessCommand: string;

                /** TaskRunnerSettings workflowFileName. */
                public workflowFileName: string;

                /** TaskRunnerSettings commandlinesFileName. */
                public commandlinesFileName: string;

                /** TaskRunnerSettings vmId. */
                public vmId: string;

                /** TaskRunnerSettings languageHint. */
                public languageHint: string;

                /** TaskRunnerSettings streamingWorkerMainClass. */
                public streamingWorkerMainClass: string;

                /**
                 * Creates a new TaskRunnerSettings instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TaskRunnerSettings instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ITaskRunnerSettings): google.dataflow.v1beta3.TaskRunnerSettings;

                /**
                 * Encodes the specified TaskRunnerSettings message. Does not implicitly {@link google.dataflow.v1beta3.TaskRunnerSettings.verify|verify} messages.
                 * @param message TaskRunnerSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ITaskRunnerSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TaskRunnerSettings message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.TaskRunnerSettings.verify|verify} messages.
                 * @param message TaskRunnerSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ITaskRunnerSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TaskRunnerSettings message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TaskRunnerSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.TaskRunnerSettings;

                /**
                 * Decodes a TaskRunnerSettings message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TaskRunnerSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.TaskRunnerSettings;

                /**
                 * Verifies a TaskRunnerSettings message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TaskRunnerSettings message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TaskRunnerSettings
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.TaskRunnerSettings;

                /**
                 * Creates a plain object from a TaskRunnerSettings message. Also converts values to other types if specified.
                 * @param message TaskRunnerSettings
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.TaskRunnerSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TaskRunnerSettings to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TaskRunnerSettings
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** TeardownPolicy enum. */
            enum TeardownPolicy {
                TEARDOWN_POLICY_UNKNOWN = 0,
                TEARDOWN_ALWAYS = 1,
                TEARDOWN_ON_SUCCESS = 2,
                TEARDOWN_NEVER = 3
            }

            /** DefaultPackageSet enum. */
            enum DefaultPackageSet {
                DEFAULT_PACKAGE_SET_UNKNOWN = 0,
                DEFAULT_PACKAGE_SET_NONE = 1,
                DEFAULT_PACKAGE_SET_JAVA = 2,
                DEFAULT_PACKAGE_SET_PYTHON = 3
            }

            /** AutoscalingAlgorithm enum. */
            enum AutoscalingAlgorithm {
                AUTOSCALING_ALGORITHM_UNKNOWN = 0,
                AUTOSCALING_ALGORITHM_NONE = 1,
                AUTOSCALING_ALGORITHM_BASIC = 2
            }

            /** Properties of an AutoscalingSettings. */
            interface IAutoscalingSettings {

                /** AutoscalingSettings algorithm */
                algorithm?: (google.dataflow.v1beta3.AutoscalingAlgorithm|keyof typeof google.dataflow.v1beta3.AutoscalingAlgorithm|null);

                /** AutoscalingSettings maxNumWorkers */
                maxNumWorkers?: (number|null);
            }

            /** Represents an AutoscalingSettings. */
            class AutoscalingSettings implements IAutoscalingSettings {

                /**
                 * Constructs a new AutoscalingSettings.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IAutoscalingSettings);

                /** AutoscalingSettings algorithm. */
                public algorithm: (google.dataflow.v1beta3.AutoscalingAlgorithm|keyof typeof google.dataflow.v1beta3.AutoscalingAlgorithm);

                /** AutoscalingSettings maxNumWorkers. */
                public maxNumWorkers: number;

                /**
                 * Creates a new AutoscalingSettings instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AutoscalingSettings instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IAutoscalingSettings): google.dataflow.v1beta3.AutoscalingSettings;

                /**
                 * Encodes the specified AutoscalingSettings message. Does not implicitly {@link google.dataflow.v1beta3.AutoscalingSettings.verify|verify} messages.
                 * @param message AutoscalingSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IAutoscalingSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AutoscalingSettings message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.AutoscalingSettings.verify|verify} messages.
                 * @param message AutoscalingSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IAutoscalingSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AutoscalingSettings message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AutoscalingSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.AutoscalingSettings;

                /**
                 * Decodes an AutoscalingSettings message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AutoscalingSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.AutoscalingSettings;

                /**
                 * Verifies an AutoscalingSettings message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AutoscalingSettings message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AutoscalingSettings
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.AutoscalingSettings;

                /**
                 * Creates a plain object from an AutoscalingSettings message. Also converts values to other types if specified.
                 * @param message AutoscalingSettings
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.AutoscalingSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AutoscalingSettings to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AutoscalingSettings
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** WorkerIPAddressConfiguration enum. */
            enum WorkerIPAddressConfiguration {
                WORKER_IP_UNSPECIFIED = 0,
                WORKER_IP_PUBLIC = 1,
                WORKER_IP_PRIVATE = 2
            }

            /** Properties of a SdkHarnessContainerImage. */
            interface ISdkHarnessContainerImage {

                /** SdkHarnessContainerImage containerImage */
                containerImage?: (string|null);

                /** SdkHarnessContainerImage useSingleCorePerContainer */
                useSingleCorePerContainer?: (boolean|null);

                /** SdkHarnessContainerImage environmentId */
                environmentId?: (string|null);

                /** SdkHarnessContainerImage capabilities */
                capabilities?: (string[]|null);
            }

            /** Represents a SdkHarnessContainerImage. */
            class SdkHarnessContainerImage implements ISdkHarnessContainerImage {

                /**
                 * Constructs a new SdkHarnessContainerImage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ISdkHarnessContainerImage);

                /** SdkHarnessContainerImage containerImage. */
                public containerImage: string;

                /** SdkHarnessContainerImage useSingleCorePerContainer. */
                public useSingleCorePerContainer: boolean;

                /** SdkHarnessContainerImage environmentId. */
                public environmentId: string;

                /** SdkHarnessContainerImage capabilities. */
                public capabilities: string[];

                /**
                 * Creates a new SdkHarnessContainerImage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SdkHarnessContainerImage instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ISdkHarnessContainerImage): google.dataflow.v1beta3.SdkHarnessContainerImage;

                /**
                 * Encodes the specified SdkHarnessContainerImage message. Does not implicitly {@link google.dataflow.v1beta3.SdkHarnessContainerImage.verify|verify} messages.
                 * @param message SdkHarnessContainerImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ISdkHarnessContainerImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SdkHarnessContainerImage message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.SdkHarnessContainerImage.verify|verify} messages.
                 * @param message SdkHarnessContainerImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ISdkHarnessContainerImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SdkHarnessContainerImage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SdkHarnessContainerImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.SdkHarnessContainerImage;

                /**
                 * Decodes a SdkHarnessContainerImage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SdkHarnessContainerImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.SdkHarnessContainerImage;

                /**
                 * Verifies a SdkHarnessContainerImage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SdkHarnessContainerImage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SdkHarnessContainerImage
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.SdkHarnessContainerImage;

                /**
                 * Creates a plain object from a SdkHarnessContainerImage message. Also converts values to other types if specified.
                 * @param message SdkHarnessContainerImage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.SdkHarnessContainerImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SdkHarnessContainerImage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SdkHarnessContainerImage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WorkerPool. */
            interface IWorkerPool {

                /** WorkerPool kind */
                kind?: (string|null);

                /** WorkerPool numWorkers */
                numWorkers?: (number|null);

                /** WorkerPool packages */
                packages?: (google.dataflow.v1beta3.IPackage[]|null);

                /** WorkerPool defaultPackageSet */
                defaultPackageSet?: (google.dataflow.v1beta3.DefaultPackageSet|keyof typeof google.dataflow.v1beta3.DefaultPackageSet|null);

                /** WorkerPool machineType */
                machineType?: (string|null);

                /** WorkerPool teardownPolicy */
                teardownPolicy?: (google.dataflow.v1beta3.TeardownPolicy|keyof typeof google.dataflow.v1beta3.TeardownPolicy|null);

                /** WorkerPool diskSizeGb */
                diskSizeGb?: (number|null);

                /** WorkerPool diskType */
                diskType?: (string|null);

                /** WorkerPool diskSourceImage */
                diskSourceImage?: (string|null);

                /** WorkerPool zone */
                zone?: (string|null);

                /** WorkerPool taskrunnerSettings */
                taskrunnerSettings?: (google.dataflow.v1beta3.ITaskRunnerSettings|null);

                /** WorkerPool onHostMaintenance */
                onHostMaintenance?: (string|null);

                /** WorkerPool dataDisks */
                dataDisks?: (google.dataflow.v1beta3.IDisk[]|null);

                /** WorkerPool metadata */
                metadata?: ({ [k: string]: string }|null);

                /** WorkerPool autoscalingSettings */
                autoscalingSettings?: (google.dataflow.v1beta3.IAutoscalingSettings|null);

                /** WorkerPool poolArgs */
                poolArgs?: (google.protobuf.IAny|null);

                /** WorkerPool network */
                network?: (string|null);

                /** WorkerPool subnetwork */
                subnetwork?: (string|null);

                /** WorkerPool workerHarnessContainerImage */
                workerHarnessContainerImage?: (string|null);

                /** WorkerPool numThreadsPerWorker */
                numThreadsPerWorker?: (number|null);

                /** WorkerPool ipConfiguration */
                ipConfiguration?: (google.dataflow.v1beta3.WorkerIPAddressConfiguration|keyof typeof google.dataflow.v1beta3.WorkerIPAddressConfiguration|null);

                /** WorkerPool sdkHarnessContainerImages */
                sdkHarnessContainerImages?: (google.dataflow.v1beta3.ISdkHarnessContainerImage[]|null);
            }

            /** Represents a WorkerPool. */
            class WorkerPool implements IWorkerPool {

                /**
                 * Constructs a new WorkerPool.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IWorkerPool);

                /** WorkerPool kind. */
                public kind: string;

                /** WorkerPool numWorkers. */
                public numWorkers: number;

                /** WorkerPool packages. */
                public packages: google.dataflow.v1beta3.IPackage[];

                /** WorkerPool defaultPackageSet. */
                public defaultPackageSet: (google.dataflow.v1beta3.DefaultPackageSet|keyof typeof google.dataflow.v1beta3.DefaultPackageSet);

                /** WorkerPool machineType. */
                public machineType: string;

                /** WorkerPool teardownPolicy. */
                public teardownPolicy: (google.dataflow.v1beta3.TeardownPolicy|keyof typeof google.dataflow.v1beta3.TeardownPolicy);

                /** WorkerPool diskSizeGb. */
                public diskSizeGb: number;

                /** WorkerPool diskType. */
                public diskType: string;

                /** WorkerPool diskSourceImage. */
                public diskSourceImage: string;

                /** WorkerPool zone. */
                public zone: string;

                /** WorkerPool taskrunnerSettings. */
                public taskrunnerSettings?: (google.dataflow.v1beta3.ITaskRunnerSettings|null);

                /** WorkerPool onHostMaintenance. */
                public onHostMaintenance: string;

                /** WorkerPool dataDisks. */
                public dataDisks: google.dataflow.v1beta3.IDisk[];

                /** WorkerPool metadata. */
                public metadata: { [k: string]: string };

                /** WorkerPool autoscalingSettings. */
                public autoscalingSettings?: (google.dataflow.v1beta3.IAutoscalingSettings|null);

                /** WorkerPool poolArgs. */
                public poolArgs?: (google.protobuf.IAny|null);

                /** WorkerPool network. */
                public network: string;

                /** WorkerPool subnetwork. */
                public subnetwork: string;

                /** WorkerPool workerHarnessContainerImage. */
                public workerHarnessContainerImage: string;

                /** WorkerPool numThreadsPerWorker. */
                public numThreadsPerWorker: number;

                /** WorkerPool ipConfiguration. */
                public ipConfiguration: (google.dataflow.v1beta3.WorkerIPAddressConfiguration|keyof typeof google.dataflow.v1beta3.WorkerIPAddressConfiguration);

                /** WorkerPool sdkHarnessContainerImages. */
                public sdkHarnessContainerImages: google.dataflow.v1beta3.ISdkHarnessContainerImage[];

                /**
                 * Creates a new WorkerPool instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkerPool instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IWorkerPool): google.dataflow.v1beta3.WorkerPool;

                /**
                 * Encodes the specified WorkerPool message. Does not implicitly {@link google.dataflow.v1beta3.WorkerPool.verify|verify} messages.
                 * @param message WorkerPool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IWorkerPool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkerPool message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.WorkerPool.verify|verify} messages.
                 * @param message WorkerPool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IWorkerPool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkerPool message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkerPool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.WorkerPool;

                /**
                 * Decodes a WorkerPool message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkerPool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.WorkerPool;

                /**
                 * Verifies a WorkerPool message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkerPool message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkerPool
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.WorkerPool;

                /**
                 * Creates a plain object from a WorkerPool message. Also converts values to other types if specified.
                 * @param message WorkerPool
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.WorkerPool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkerPool to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WorkerPool
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** ShuffleMode enum. */
            enum ShuffleMode {
                SHUFFLE_MODE_UNSPECIFIED = 0,
                VM_BASED = 1,
                SERVICE_BASED = 2
            }

            /** Properties of a DataSamplingConfig. */
            interface IDataSamplingConfig {

                /** DataSamplingConfig behaviors */
                behaviors?: (google.dataflow.v1beta3.DataSamplingConfig.DataSamplingBehavior[]|null);
            }

            /** Represents a DataSamplingConfig. */
            class DataSamplingConfig implements IDataSamplingConfig {

                /**
                 * Constructs a new DataSamplingConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IDataSamplingConfig);

                /** DataSamplingConfig behaviors. */
                public behaviors: google.dataflow.v1beta3.DataSamplingConfig.DataSamplingBehavior[];

                /**
                 * Creates a new DataSamplingConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DataSamplingConfig instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IDataSamplingConfig): google.dataflow.v1beta3.DataSamplingConfig;

                /**
                 * Encodes the specified DataSamplingConfig message. Does not implicitly {@link google.dataflow.v1beta3.DataSamplingConfig.verify|verify} messages.
                 * @param message DataSamplingConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IDataSamplingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DataSamplingConfig message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.DataSamplingConfig.verify|verify} messages.
                 * @param message DataSamplingConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IDataSamplingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DataSamplingConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DataSamplingConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.DataSamplingConfig;

                /**
                 * Decodes a DataSamplingConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DataSamplingConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.DataSamplingConfig;

                /**
                 * Verifies a DataSamplingConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DataSamplingConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DataSamplingConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.DataSamplingConfig;

                /**
                 * Creates a plain object from a DataSamplingConfig message. Also converts values to other types if specified.
                 * @param message DataSamplingConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.DataSamplingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DataSamplingConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DataSamplingConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace DataSamplingConfig {

                /** DataSamplingBehavior enum. */
                enum DataSamplingBehavior {
                    DATA_SAMPLING_BEHAVIOR_UNSPECIFIED = 0,
                    DISABLED = 1,
                    ALWAYS_ON = 2,
                    EXCEPTIONS = 3
                }
            }

            /** Properties of a DebugOptions. */
            interface IDebugOptions {

                /** DebugOptions enableHotKeyLogging */
                enableHotKeyLogging?: (boolean|null);

                /** DebugOptions dataSampling */
                dataSampling?: (google.dataflow.v1beta3.IDataSamplingConfig|null);
            }

            /** Represents a DebugOptions. */
            class DebugOptions implements IDebugOptions {

                /**
                 * Constructs a new DebugOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IDebugOptions);

                /** DebugOptions enableHotKeyLogging. */
                public enableHotKeyLogging: boolean;

                /** DebugOptions dataSampling. */
                public dataSampling?: (google.dataflow.v1beta3.IDataSamplingConfig|null);

                /**
                 * Creates a new DebugOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DebugOptions instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IDebugOptions): google.dataflow.v1beta3.DebugOptions;

                /**
                 * Encodes the specified DebugOptions message. Does not implicitly {@link google.dataflow.v1beta3.DebugOptions.verify|verify} messages.
                 * @param message DebugOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IDebugOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DebugOptions message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.DebugOptions.verify|verify} messages.
                 * @param message DebugOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IDebugOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DebugOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DebugOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.DebugOptions;

                /**
                 * Decodes a DebugOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DebugOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.DebugOptions;

                /**
                 * Verifies a DebugOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DebugOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DebugOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.DebugOptions;

                /**
                 * Creates a plain object from a DebugOptions message. Also converts values to other types if specified.
                 * @param message DebugOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.DebugOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DebugOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DebugOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** StreamingMode enum. */
            enum StreamingMode {
                STREAMING_MODE_UNSPECIFIED = 0,
                STREAMING_MODE_EXACTLY_ONCE = 1,
                STREAMING_MODE_AT_LEAST_ONCE = 2
            }

            /** Represents a JobsV1Beta3 */
            class JobsV1Beta3 extends $protobuf.rpc.Service {

                /**
                 * Constructs a new JobsV1Beta3 service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new JobsV1Beta3 service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): JobsV1Beta3;

                /**
                 * Calls CreateJob.
                 * @param request CreateJobRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Job
                 */
                public createJob(request: google.dataflow.v1beta3.ICreateJobRequest, callback: google.dataflow.v1beta3.JobsV1Beta3.CreateJobCallback): void;

                /**
                 * Calls CreateJob.
                 * @param request CreateJobRequest message or plain object
                 * @returns Promise
                 */
                public createJob(request: google.dataflow.v1beta3.ICreateJobRequest): Promise<google.dataflow.v1beta3.Job>;

                /**
                 * Calls GetJob.
                 * @param request GetJobRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Job
                 */
                public getJob(request: google.dataflow.v1beta3.IGetJobRequest, callback: google.dataflow.v1beta3.JobsV1Beta3.GetJobCallback): void;

                /**
                 * Calls GetJob.
                 * @param request GetJobRequest message or plain object
                 * @returns Promise
                 */
                public getJob(request: google.dataflow.v1beta3.IGetJobRequest): Promise<google.dataflow.v1beta3.Job>;

                /**
                 * Calls UpdateJob.
                 * @param request UpdateJobRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Job
                 */
                public updateJob(request: google.dataflow.v1beta3.IUpdateJobRequest, callback: google.dataflow.v1beta3.JobsV1Beta3.UpdateJobCallback): void;

                /**
                 * Calls UpdateJob.
                 * @param request UpdateJobRequest message or plain object
                 * @returns Promise
                 */
                public updateJob(request: google.dataflow.v1beta3.IUpdateJobRequest): Promise<google.dataflow.v1beta3.Job>;

                /**
                 * Calls ListJobs.
                 * @param request ListJobsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                 */
                public listJobs(request: google.dataflow.v1beta3.IListJobsRequest, callback: google.dataflow.v1beta3.JobsV1Beta3.ListJobsCallback): void;

                /**
                 * Calls ListJobs.
                 * @param request ListJobsRequest message or plain object
                 * @returns Promise
                 */
                public listJobs(request: google.dataflow.v1beta3.IListJobsRequest): Promise<google.dataflow.v1beta3.ListJobsResponse>;

                /**
                 * Calls AggregatedListJobs.
                 * @param request ListJobsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                 */
                public aggregatedListJobs(request: google.dataflow.v1beta3.IListJobsRequest, callback: google.dataflow.v1beta3.JobsV1Beta3.AggregatedListJobsCallback): void;

                /**
                 * Calls AggregatedListJobs.
                 * @param request ListJobsRequest message or plain object
                 * @returns Promise
                 */
                public aggregatedListJobs(request: google.dataflow.v1beta3.IListJobsRequest): Promise<google.dataflow.v1beta3.ListJobsResponse>;

                /**
                 * Calls CheckActiveJobs.
                 * @param request CheckActiveJobsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CheckActiveJobsResponse
                 */
                public checkActiveJobs(request: google.dataflow.v1beta3.ICheckActiveJobsRequest, callback: google.dataflow.v1beta3.JobsV1Beta3.CheckActiveJobsCallback): void;

                /**
                 * Calls CheckActiveJobs.
                 * @param request CheckActiveJobsRequest message or plain object
                 * @returns Promise
                 */
                public checkActiveJobs(request: google.dataflow.v1beta3.ICheckActiveJobsRequest): Promise<google.dataflow.v1beta3.CheckActiveJobsResponse>;

                /**
                 * Calls SnapshotJob.
                 * @param request SnapshotJobRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Snapshot
                 */
                public snapshotJob(request: google.dataflow.v1beta3.ISnapshotJobRequest, callback: google.dataflow.v1beta3.JobsV1Beta3.SnapshotJobCallback): void;

                /**
                 * Calls SnapshotJob.
                 * @param request SnapshotJobRequest message or plain object
                 * @returns Promise
                 */
                public snapshotJob(request: google.dataflow.v1beta3.ISnapshotJobRequest): Promise<google.dataflow.v1beta3.Snapshot>;
            }

            namespace JobsV1Beta3 {

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.JobsV1Beta3|createJob}.
                 * @param error Error, if any
                 * @param [response] Job
                 */
                type CreateJobCallback = (error: (Error|null), response?: google.dataflow.v1beta3.Job) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.JobsV1Beta3|getJob}.
                 * @param error Error, if any
                 * @param [response] Job
                 */
                type GetJobCallback = (error: (Error|null), response?: google.dataflow.v1beta3.Job) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.JobsV1Beta3|updateJob}.
                 * @param error Error, if any
                 * @param [response] Job
                 */
                type UpdateJobCallback = (error: (Error|null), response?: google.dataflow.v1beta3.Job) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.JobsV1Beta3|listJobs}.
                 * @param error Error, if any
                 * @param [response] ListJobsResponse
                 */
                type ListJobsCallback = (error: (Error|null), response?: google.dataflow.v1beta3.ListJobsResponse) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.JobsV1Beta3|aggregatedListJobs}.
                 * @param error Error, if any
                 * @param [response] ListJobsResponse
                 */
                type AggregatedListJobsCallback = (error: (Error|null), response?: google.dataflow.v1beta3.ListJobsResponse) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.JobsV1Beta3|checkActiveJobs}.
                 * @param error Error, if any
                 * @param [response] CheckActiveJobsResponse
                 */
                type CheckActiveJobsCallback = (error: (Error|null), response?: google.dataflow.v1beta3.CheckActiveJobsResponse) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.JobsV1Beta3|snapshotJob}.
                 * @param error Error, if any
                 * @param [response] Snapshot
                 */
                type SnapshotJobCallback = (error: (Error|null), response?: google.dataflow.v1beta3.Snapshot) => void;
            }

            /** Properties of a Job. */
            interface IJob {

                /** Job id */
                id?: (string|null);

                /** Job projectId */
                projectId?: (string|null);

                /** Job name */
                name?: (string|null);

                /** Job type */
                type?: (google.dataflow.v1beta3.JobType|keyof typeof google.dataflow.v1beta3.JobType|null);

                /** Job environment */
                environment?: (google.dataflow.v1beta3.IEnvironment|null);

                /** Job steps */
                steps?: (google.dataflow.v1beta3.IStep[]|null);

                /** Job stepsLocation */
                stepsLocation?: (string|null);

                /** Job currentState */
                currentState?: (google.dataflow.v1beta3.JobState|keyof typeof google.dataflow.v1beta3.JobState|null);

                /** Job currentStateTime */
                currentStateTime?: (google.protobuf.ITimestamp|null);

                /** Job requestedState */
                requestedState?: (google.dataflow.v1beta3.JobState|keyof typeof google.dataflow.v1beta3.JobState|null);

                /** Job executionInfo */
                executionInfo?: (google.dataflow.v1beta3.IJobExecutionInfo|null);

                /** Job createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Job replaceJobId */
                replaceJobId?: (string|null);

                /** Job transformNameMapping */
                transformNameMapping?: ({ [k: string]: string }|null);

                /** Job clientRequestId */
                clientRequestId?: (string|null);

                /** Job replacedByJobId */
                replacedByJobId?: (string|null);

                /** Job tempFiles */
                tempFiles?: (string[]|null);

                /** Job labels */
                labels?: ({ [k: string]: string }|null);

                /** Job location */
                location?: (string|null);

                /** Job pipelineDescription */
                pipelineDescription?: (google.dataflow.v1beta3.IPipelineDescription|null);

                /** Job stageStates */
                stageStates?: (google.dataflow.v1beta3.IExecutionStageState[]|null);

                /** Job jobMetadata */
                jobMetadata?: (google.dataflow.v1beta3.IJobMetadata|null);

                /** Job startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** Job createdFromSnapshotId */
                createdFromSnapshotId?: (string|null);

                /** Job satisfiesPzs */
                satisfiesPzs?: (boolean|null);

                /** Job runtimeUpdatableParams */
                runtimeUpdatableParams?: (google.dataflow.v1beta3.IRuntimeUpdatableParams|null);

                /** Job satisfiesPzi */
                satisfiesPzi?: (boolean|null);

                /** Job serviceResources */
                serviceResources?: (google.dataflow.v1beta3.IServiceResources|null);
            }

            /** Represents a Job. */
            class Job implements IJob {

                /**
                 * Constructs a new Job.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IJob);

                /** Job id. */
                public id: string;

                /** Job projectId. */
                public projectId: string;

                /** Job name. */
                public name: string;

                /** Job type. */
                public type: (google.dataflow.v1beta3.JobType|keyof typeof google.dataflow.v1beta3.JobType);

                /** Job environment. */
                public environment?: (google.dataflow.v1beta3.IEnvironment|null);

                /** Job steps. */
                public steps: google.dataflow.v1beta3.IStep[];

                /** Job stepsLocation. */
                public stepsLocation: string;

                /** Job currentState. */
                public currentState: (google.dataflow.v1beta3.JobState|keyof typeof google.dataflow.v1beta3.JobState);

                /** Job currentStateTime. */
                public currentStateTime?: (google.protobuf.ITimestamp|null);

                /** Job requestedState. */
                public requestedState: (google.dataflow.v1beta3.JobState|keyof typeof google.dataflow.v1beta3.JobState);

                /** Job executionInfo. */
                public executionInfo?: (google.dataflow.v1beta3.IJobExecutionInfo|null);

                /** Job createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Job replaceJobId. */
                public replaceJobId: string;

                /** Job transformNameMapping. */
                public transformNameMapping: { [k: string]: string };

                /** Job clientRequestId. */
                public clientRequestId: string;

                /** Job replacedByJobId. */
                public replacedByJobId: string;

                /** Job tempFiles. */
                public tempFiles: string[];

                /** Job labels. */
                public labels: { [k: string]: string };

                /** Job location. */
                public location: string;

                /** Job pipelineDescription. */
                public pipelineDescription?: (google.dataflow.v1beta3.IPipelineDescription|null);

                /** Job stageStates. */
                public stageStates: google.dataflow.v1beta3.IExecutionStageState[];

                /** Job jobMetadata. */
                public jobMetadata?: (google.dataflow.v1beta3.IJobMetadata|null);

                /** Job startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** Job createdFromSnapshotId. */
                public createdFromSnapshotId: string;

                /** Job satisfiesPzs. */
                public satisfiesPzs: boolean;

                /** Job runtimeUpdatableParams. */
                public runtimeUpdatableParams?: (google.dataflow.v1beta3.IRuntimeUpdatableParams|null);

                /** Job satisfiesPzi. */
                public satisfiesPzi?: (boolean|null);

                /** Job serviceResources. */
                public serviceResources?: (google.dataflow.v1beta3.IServiceResources|null);

                /**
                 * Creates a new Job instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Job instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IJob): google.dataflow.v1beta3.Job;

                /**
                 * Encodes the specified Job message. Does not implicitly {@link google.dataflow.v1beta3.Job.verify|verify} messages.
                 * @param message Job message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Job message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.Job.verify|verify} messages.
                 * @param message Job message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Job message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Job
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.Job;

                /**
                 * Decodes a Job message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Job
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.Job;

                /**
                 * Verifies a Job message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Job message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Job
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.Job;

                /**
                 * Creates a plain object from a Job message. Also converts values to other types if specified.
                 * @param message Job
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Job to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Job
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ServiceResources. */
            interface IServiceResources {

                /** ServiceResources zones */
                zones?: (string[]|null);
            }

            /** Represents a ServiceResources. */
            class ServiceResources implements IServiceResources {

                /**
                 * Constructs a new ServiceResources.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IServiceResources);

                /** ServiceResources zones. */
                public zones: string[];

                /**
                 * Creates a new ServiceResources instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServiceResources instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IServiceResources): google.dataflow.v1beta3.ServiceResources;

                /**
                 * Encodes the specified ServiceResources message. Does not implicitly {@link google.dataflow.v1beta3.ServiceResources.verify|verify} messages.
                 * @param message ServiceResources message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IServiceResources, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServiceResources message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ServiceResources.verify|verify} messages.
                 * @param message ServiceResources message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IServiceResources, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServiceResources message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServiceResources
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ServiceResources;

                /**
                 * Decodes a ServiceResources message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServiceResources
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ServiceResources;

                /**
                 * Verifies a ServiceResources message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServiceResources message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServiceResources
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ServiceResources;

                /**
                 * Creates a plain object from a ServiceResources message. Also converts values to other types if specified.
                 * @param message ServiceResources
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ServiceResources, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServiceResources to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ServiceResources
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RuntimeUpdatableParams. */
            interface IRuntimeUpdatableParams {

                /** RuntimeUpdatableParams maxNumWorkers */
                maxNumWorkers?: (number|null);

                /** RuntimeUpdatableParams minNumWorkers */
                minNumWorkers?: (number|null);

                /** RuntimeUpdatableParams workerUtilizationHint */
                workerUtilizationHint?: (number|null);
            }

            /** Represents a RuntimeUpdatableParams. */
            class RuntimeUpdatableParams implements IRuntimeUpdatableParams {

                /**
                 * Constructs a new RuntimeUpdatableParams.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IRuntimeUpdatableParams);

                /** RuntimeUpdatableParams maxNumWorkers. */
                public maxNumWorkers?: (number|null);

                /** RuntimeUpdatableParams minNumWorkers. */
                public minNumWorkers?: (number|null);

                /** RuntimeUpdatableParams workerUtilizationHint. */
                public workerUtilizationHint?: (number|null);

                /**
                 * Creates a new RuntimeUpdatableParams instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RuntimeUpdatableParams instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IRuntimeUpdatableParams): google.dataflow.v1beta3.RuntimeUpdatableParams;

                /**
                 * Encodes the specified RuntimeUpdatableParams message. Does not implicitly {@link google.dataflow.v1beta3.RuntimeUpdatableParams.verify|verify} messages.
                 * @param message RuntimeUpdatableParams message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IRuntimeUpdatableParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RuntimeUpdatableParams message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.RuntimeUpdatableParams.verify|verify} messages.
                 * @param message RuntimeUpdatableParams message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IRuntimeUpdatableParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RuntimeUpdatableParams message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RuntimeUpdatableParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.RuntimeUpdatableParams;

                /**
                 * Decodes a RuntimeUpdatableParams message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RuntimeUpdatableParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.RuntimeUpdatableParams;

                /**
                 * Verifies a RuntimeUpdatableParams message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RuntimeUpdatableParams message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RuntimeUpdatableParams
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.RuntimeUpdatableParams;

                /**
                 * Creates a plain object from a RuntimeUpdatableParams message. Also converts values to other types if specified.
                 * @param message RuntimeUpdatableParams
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.RuntimeUpdatableParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RuntimeUpdatableParams to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RuntimeUpdatableParams
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DatastoreIODetails. */
            interface IDatastoreIODetails {

                /** DatastoreIODetails namespace */
                namespace?: (string|null);

                /** DatastoreIODetails projectId */
                projectId?: (string|null);
            }

            /** Represents a DatastoreIODetails. */
            class DatastoreIODetails implements IDatastoreIODetails {

                /**
                 * Constructs a new DatastoreIODetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IDatastoreIODetails);

                /** DatastoreIODetails namespace. */
                public namespace: string;

                /** DatastoreIODetails projectId. */
                public projectId: string;

                /**
                 * Creates a new DatastoreIODetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DatastoreIODetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IDatastoreIODetails): google.dataflow.v1beta3.DatastoreIODetails;

                /**
                 * Encodes the specified DatastoreIODetails message. Does not implicitly {@link google.dataflow.v1beta3.DatastoreIODetails.verify|verify} messages.
                 * @param message DatastoreIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IDatastoreIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DatastoreIODetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.DatastoreIODetails.verify|verify} messages.
                 * @param message DatastoreIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IDatastoreIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DatastoreIODetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DatastoreIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.DatastoreIODetails;

                /**
                 * Decodes a DatastoreIODetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DatastoreIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.DatastoreIODetails;

                /**
                 * Verifies a DatastoreIODetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DatastoreIODetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DatastoreIODetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.DatastoreIODetails;

                /**
                 * Creates a plain object from a DatastoreIODetails message. Also converts values to other types if specified.
                 * @param message DatastoreIODetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.DatastoreIODetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DatastoreIODetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DatastoreIODetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PubSubIODetails. */
            interface IPubSubIODetails {

                /** PubSubIODetails topic */
                topic?: (string|null);

                /** PubSubIODetails subscription */
                subscription?: (string|null);
            }

            /** Represents a PubSubIODetails. */
            class PubSubIODetails implements IPubSubIODetails {

                /**
                 * Constructs a new PubSubIODetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IPubSubIODetails);

                /** PubSubIODetails topic. */
                public topic: string;

                /** PubSubIODetails subscription. */
                public subscription: string;

                /**
                 * Creates a new PubSubIODetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PubSubIODetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IPubSubIODetails): google.dataflow.v1beta3.PubSubIODetails;

                /**
                 * Encodes the specified PubSubIODetails message. Does not implicitly {@link google.dataflow.v1beta3.PubSubIODetails.verify|verify} messages.
                 * @param message PubSubIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IPubSubIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PubSubIODetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.PubSubIODetails.verify|verify} messages.
                 * @param message PubSubIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IPubSubIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubSubIODetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PubSubIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.PubSubIODetails;

                /**
                 * Decodes a PubSubIODetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PubSubIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.PubSubIODetails;

                /**
                 * Verifies a PubSubIODetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PubSubIODetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PubSubIODetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.PubSubIODetails;

                /**
                 * Creates a plain object from a PubSubIODetails message. Also converts values to other types if specified.
                 * @param message PubSubIODetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.PubSubIODetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PubSubIODetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PubSubIODetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FileIODetails. */
            interface IFileIODetails {

                /** FileIODetails filePattern */
                filePattern?: (string|null);
            }

            /** Represents a FileIODetails. */
            class FileIODetails implements IFileIODetails {

                /**
                 * Constructs a new FileIODetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IFileIODetails);

                /** FileIODetails filePattern. */
                public filePattern: string;

                /**
                 * Creates a new FileIODetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FileIODetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IFileIODetails): google.dataflow.v1beta3.FileIODetails;

                /**
                 * Encodes the specified FileIODetails message. Does not implicitly {@link google.dataflow.v1beta3.FileIODetails.verify|verify} messages.
                 * @param message FileIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IFileIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FileIODetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.FileIODetails.verify|verify} messages.
                 * @param message FileIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IFileIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FileIODetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FileIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.FileIODetails;

                /**
                 * Decodes a FileIODetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FileIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.FileIODetails;

                /**
                 * Verifies a FileIODetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FileIODetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FileIODetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.FileIODetails;

                /**
                 * Creates a plain object from a FileIODetails message. Also converts values to other types if specified.
                 * @param message FileIODetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.FileIODetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FileIODetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FileIODetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BigTableIODetails. */
            interface IBigTableIODetails {

                /** BigTableIODetails projectId */
                projectId?: (string|null);

                /** BigTableIODetails instanceId */
                instanceId?: (string|null);

                /** BigTableIODetails tableId */
                tableId?: (string|null);
            }

            /** Represents a BigTableIODetails. */
            class BigTableIODetails implements IBigTableIODetails {

                /**
                 * Constructs a new BigTableIODetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IBigTableIODetails);

                /** BigTableIODetails projectId. */
                public projectId: string;

                /** BigTableIODetails instanceId. */
                public instanceId: string;

                /** BigTableIODetails tableId. */
                public tableId: string;

                /**
                 * Creates a new BigTableIODetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BigTableIODetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IBigTableIODetails): google.dataflow.v1beta3.BigTableIODetails;

                /**
                 * Encodes the specified BigTableIODetails message. Does not implicitly {@link google.dataflow.v1beta3.BigTableIODetails.verify|verify} messages.
                 * @param message BigTableIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IBigTableIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BigTableIODetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.BigTableIODetails.verify|verify} messages.
                 * @param message BigTableIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IBigTableIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BigTableIODetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BigTableIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.BigTableIODetails;

                /**
                 * Decodes a BigTableIODetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BigTableIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.BigTableIODetails;

                /**
                 * Verifies a BigTableIODetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BigTableIODetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BigTableIODetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.BigTableIODetails;

                /**
                 * Creates a plain object from a BigTableIODetails message. Also converts values to other types if specified.
                 * @param message BigTableIODetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.BigTableIODetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BigTableIODetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BigTableIODetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BigQueryIODetails. */
            interface IBigQueryIODetails {

                /** BigQueryIODetails table */
                table?: (string|null);

                /** BigQueryIODetails dataset */
                dataset?: (string|null);

                /** BigQueryIODetails projectId */
                projectId?: (string|null);

                /** BigQueryIODetails query */
                query?: (string|null);
            }

            /** Represents a BigQueryIODetails. */
            class BigQueryIODetails implements IBigQueryIODetails {

                /**
                 * Constructs a new BigQueryIODetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IBigQueryIODetails);

                /** BigQueryIODetails table. */
                public table: string;

                /** BigQueryIODetails dataset. */
                public dataset: string;

                /** BigQueryIODetails projectId. */
                public projectId: string;

                /** BigQueryIODetails query. */
                public query: string;

                /**
                 * Creates a new BigQueryIODetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BigQueryIODetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IBigQueryIODetails): google.dataflow.v1beta3.BigQueryIODetails;

                /**
                 * Encodes the specified BigQueryIODetails message. Does not implicitly {@link google.dataflow.v1beta3.BigQueryIODetails.verify|verify} messages.
                 * @param message BigQueryIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IBigQueryIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BigQueryIODetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.BigQueryIODetails.verify|verify} messages.
                 * @param message BigQueryIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IBigQueryIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BigQueryIODetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BigQueryIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.BigQueryIODetails;

                /**
                 * Decodes a BigQueryIODetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BigQueryIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.BigQueryIODetails;

                /**
                 * Verifies a BigQueryIODetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BigQueryIODetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BigQueryIODetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.BigQueryIODetails;

                /**
                 * Creates a plain object from a BigQueryIODetails message. Also converts values to other types if specified.
                 * @param message BigQueryIODetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.BigQueryIODetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BigQueryIODetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BigQueryIODetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SpannerIODetails. */
            interface ISpannerIODetails {

                /** SpannerIODetails projectId */
                projectId?: (string|null);

                /** SpannerIODetails instanceId */
                instanceId?: (string|null);

                /** SpannerIODetails databaseId */
                databaseId?: (string|null);
            }

            /** Represents a SpannerIODetails. */
            class SpannerIODetails implements ISpannerIODetails {

                /**
                 * Constructs a new SpannerIODetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ISpannerIODetails);

                /** SpannerIODetails projectId. */
                public projectId: string;

                /** SpannerIODetails instanceId. */
                public instanceId: string;

                /** SpannerIODetails databaseId. */
                public databaseId: string;

                /**
                 * Creates a new SpannerIODetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpannerIODetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ISpannerIODetails): google.dataflow.v1beta3.SpannerIODetails;

                /**
                 * Encodes the specified SpannerIODetails message. Does not implicitly {@link google.dataflow.v1beta3.SpannerIODetails.verify|verify} messages.
                 * @param message SpannerIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ISpannerIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpannerIODetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.SpannerIODetails.verify|verify} messages.
                 * @param message SpannerIODetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ISpannerIODetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpannerIODetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpannerIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.SpannerIODetails;

                /**
                 * Decodes a SpannerIODetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpannerIODetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.SpannerIODetails;

                /**
                 * Verifies a SpannerIODetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpannerIODetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpannerIODetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.SpannerIODetails;

                /**
                 * Creates a plain object from a SpannerIODetails message. Also converts values to other types if specified.
                 * @param message SpannerIODetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.SpannerIODetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpannerIODetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SpannerIODetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SdkVersion. */
            interface ISdkVersion {

                /** SdkVersion version */
                version?: (string|null);

                /** SdkVersion versionDisplayName */
                versionDisplayName?: (string|null);

                /** SdkVersion sdkSupportStatus */
                sdkSupportStatus?: (google.dataflow.v1beta3.SdkVersion.SdkSupportStatus|keyof typeof google.dataflow.v1beta3.SdkVersion.SdkSupportStatus|null);

                /** SdkVersion bugs */
                bugs?: (google.dataflow.v1beta3.ISdkBug[]|null);
            }

            /** Represents a SdkVersion. */
            class SdkVersion implements ISdkVersion {

                /**
                 * Constructs a new SdkVersion.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ISdkVersion);

                /** SdkVersion version. */
                public version: string;

                /** SdkVersion versionDisplayName. */
                public versionDisplayName: string;

                /** SdkVersion sdkSupportStatus. */
                public sdkSupportStatus: (google.dataflow.v1beta3.SdkVersion.SdkSupportStatus|keyof typeof google.dataflow.v1beta3.SdkVersion.SdkSupportStatus);

                /** SdkVersion bugs. */
                public bugs: google.dataflow.v1beta3.ISdkBug[];

                /**
                 * Creates a new SdkVersion instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SdkVersion instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ISdkVersion): google.dataflow.v1beta3.SdkVersion;

                /**
                 * Encodes the specified SdkVersion message. Does not implicitly {@link google.dataflow.v1beta3.SdkVersion.verify|verify} messages.
                 * @param message SdkVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ISdkVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SdkVersion message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.SdkVersion.verify|verify} messages.
                 * @param message SdkVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ISdkVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SdkVersion message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SdkVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.SdkVersion;

                /**
                 * Decodes a SdkVersion message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SdkVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.SdkVersion;

                /**
                 * Verifies a SdkVersion message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SdkVersion message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SdkVersion
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.SdkVersion;

                /**
                 * Creates a plain object from a SdkVersion message. Also converts values to other types if specified.
                 * @param message SdkVersion
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.SdkVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SdkVersion to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SdkVersion
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SdkVersion {

                /** SdkSupportStatus enum. */
                enum SdkSupportStatus {
                    UNKNOWN = 0,
                    SUPPORTED = 1,
                    STALE = 2,
                    DEPRECATED = 3,
                    UNSUPPORTED = 4
                }
            }

            /** Properties of a SdkBug. */
            interface ISdkBug {

                /** SdkBug type */
                type?: (google.dataflow.v1beta3.SdkBug.Type|keyof typeof google.dataflow.v1beta3.SdkBug.Type|null);

                /** SdkBug severity */
                severity?: (google.dataflow.v1beta3.SdkBug.Severity|keyof typeof google.dataflow.v1beta3.SdkBug.Severity|null);

                /** SdkBug uri */
                uri?: (string|null);
            }

            /** Represents a SdkBug. */
            class SdkBug implements ISdkBug {

                /**
                 * Constructs a new SdkBug.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ISdkBug);

                /** SdkBug type. */
                public type: (google.dataflow.v1beta3.SdkBug.Type|keyof typeof google.dataflow.v1beta3.SdkBug.Type);

                /** SdkBug severity. */
                public severity: (google.dataflow.v1beta3.SdkBug.Severity|keyof typeof google.dataflow.v1beta3.SdkBug.Severity);

                /** SdkBug uri. */
                public uri: string;

                /**
                 * Creates a new SdkBug instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SdkBug instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ISdkBug): google.dataflow.v1beta3.SdkBug;

                /**
                 * Encodes the specified SdkBug message. Does not implicitly {@link google.dataflow.v1beta3.SdkBug.verify|verify} messages.
                 * @param message SdkBug message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ISdkBug, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SdkBug message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.SdkBug.verify|verify} messages.
                 * @param message SdkBug message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ISdkBug, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SdkBug message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SdkBug
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.SdkBug;

                /**
                 * Decodes a SdkBug message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SdkBug
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.SdkBug;

                /**
                 * Verifies a SdkBug message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SdkBug message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SdkBug
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.SdkBug;

                /**
                 * Creates a plain object from a SdkBug message. Also converts values to other types if specified.
                 * @param message SdkBug
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.SdkBug, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SdkBug to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SdkBug
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SdkBug {

                /** Type enum. */
                enum Type {
                    TYPE_UNSPECIFIED = 0,
                    GENERAL = 1,
                    PERFORMANCE = 2,
                    DATALOSS = 3
                }

                /** Severity enum. */
                enum Severity {
                    SEVERITY_UNSPECIFIED = 0,
                    NOTICE = 1,
                    WARNING = 2,
                    SEVERE = 3
                }
            }

            /** Properties of a JobMetadata. */
            interface IJobMetadata {

                /** JobMetadata sdkVersion */
                sdkVersion?: (google.dataflow.v1beta3.ISdkVersion|null);

                /** JobMetadata spannerDetails */
                spannerDetails?: (google.dataflow.v1beta3.ISpannerIODetails[]|null);

                /** JobMetadata bigqueryDetails */
                bigqueryDetails?: (google.dataflow.v1beta3.IBigQueryIODetails[]|null);

                /** JobMetadata bigTableDetails */
                bigTableDetails?: (google.dataflow.v1beta3.IBigTableIODetails[]|null);

                /** JobMetadata pubsubDetails */
                pubsubDetails?: (google.dataflow.v1beta3.IPubSubIODetails[]|null);

                /** JobMetadata fileDetails */
                fileDetails?: (google.dataflow.v1beta3.IFileIODetails[]|null);

                /** JobMetadata datastoreDetails */
                datastoreDetails?: (google.dataflow.v1beta3.IDatastoreIODetails[]|null);

                /** JobMetadata userDisplayProperties */
                userDisplayProperties?: ({ [k: string]: string }|null);
            }

            /** Represents a JobMetadata. */
            class JobMetadata implements IJobMetadata {

                /**
                 * Constructs a new JobMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IJobMetadata);

                /** JobMetadata sdkVersion. */
                public sdkVersion?: (google.dataflow.v1beta3.ISdkVersion|null);

                /** JobMetadata spannerDetails. */
                public spannerDetails: google.dataflow.v1beta3.ISpannerIODetails[];

                /** JobMetadata bigqueryDetails. */
                public bigqueryDetails: google.dataflow.v1beta3.IBigQueryIODetails[];

                /** JobMetadata bigTableDetails. */
                public bigTableDetails: google.dataflow.v1beta3.IBigTableIODetails[];

                /** JobMetadata pubsubDetails. */
                public pubsubDetails: google.dataflow.v1beta3.IPubSubIODetails[];

                /** JobMetadata fileDetails. */
                public fileDetails: google.dataflow.v1beta3.IFileIODetails[];

                /** JobMetadata datastoreDetails. */
                public datastoreDetails: google.dataflow.v1beta3.IDatastoreIODetails[];

                /** JobMetadata userDisplayProperties. */
                public userDisplayProperties: { [k: string]: string };

                /**
                 * Creates a new JobMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JobMetadata instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IJobMetadata): google.dataflow.v1beta3.JobMetadata;

                /**
                 * Encodes the specified JobMetadata message. Does not implicitly {@link google.dataflow.v1beta3.JobMetadata.verify|verify} messages.
                 * @param message JobMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IJobMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified JobMetadata message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.JobMetadata.verify|verify} messages.
                 * @param message JobMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IJobMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JobMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JobMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.JobMetadata;

                /**
                 * Decodes a JobMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns JobMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.JobMetadata;

                /**
                 * Verifies a JobMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a JobMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns JobMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.JobMetadata;

                /**
                 * Creates a plain object from a JobMetadata message. Also converts values to other types if specified.
                 * @param message JobMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.JobMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this JobMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for JobMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExecutionStageState. */
            interface IExecutionStageState {

                /** ExecutionStageState executionStageName */
                executionStageName?: (string|null);

                /** ExecutionStageState executionStageState */
                executionStageState?: (google.dataflow.v1beta3.JobState|keyof typeof google.dataflow.v1beta3.JobState|null);

                /** ExecutionStageState currentStateTime */
                currentStateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an ExecutionStageState. */
            class ExecutionStageState implements IExecutionStageState {

                /**
                 * Constructs a new ExecutionStageState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IExecutionStageState);

                /** ExecutionStageState executionStageName. */
                public executionStageName: string;

                /** ExecutionStageState executionStageState. */
                public executionStageState: (google.dataflow.v1beta3.JobState|keyof typeof google.dataflow.v1beta3.JobState);

                /** ExecutionStageState currentStateTime. */
                public currentStateTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new ExecutionStageState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecutionStageState instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IExecutionStageState): google.dataflow.v1beta3.ExecutionStageState;

                /**
                 * Encodes the specified ExecutionStageState message. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageState.verify|verify} messages.
                 * @param message ExecutionStageState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IExecutionStageState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecutionStageState message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageState.verify|verify} messages.
                 * @param message ExecutionStageState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IExecutionStageState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecutionStageState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecutionStageState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ExecutionStageState;

                /**
                 * Decodes an ExecutionStageState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecutionStageState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ExecutionStageState;

                /**
                 * Verifies an ExecutionStageState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecutionStageState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecutionStageState
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ExecutionStageState;

                /**
                 * Creates a plain object from an ExecutionStageState message. Also converts values to other types if specified.
                 * @param message ExecutionStageState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ExecutionStageState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecutionStageState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExecutionStageState
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PipelineDescription. */
            interface IPipelineDescription {

                /** PipelineDescription originalPipelineTransform */
                originalPipelineTransform?: (google.dataflow.v1beta3.ITransformSummary[]|null);

                /** PipelineDescription executionPipelineStage */
                executionPipelineStage?: (google.dataflow.v1beta3.IExecutionStageSummary[]|null);

                /** PipelineDescription displayData */
                displayData?: (google.dataflow.v1beta3.IDisplayData[]|null);

                /** PipelineDescription stepNamesHash */
                stepNamesHash?: (string|null);
            }

            /** Represents a PipelineDescription. */
            class PipelineDescription implements IPipelineDescription {

                /**
                 * Constructs a new PipelineDescription.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IPipelineDescription);

                /** PipelineDescription originalPipelineTransform. */
                public originalPipelineTransform: google.dataflow.v1beta3.ITransformSummary[];

                /** PipelineDescription executionPipelineStage. */
                public executionPipelineStage: google.dataflow.v1beta3.IExecutionStageSummary[];

                /** PipelineDescription displayData. */
                public displayData: google.dataflow.v1beta3.IDisplayData[];

                /** PipelineDescription stepNamesHash. */
                public stepNamesHash: string;

                /**
                 * Creates a new PipelineDescription instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PipelineDescription instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IPipelineDescription): google.dataflow.v1beta3.PipelineDescription;

                /**
                 * Encodes the specified PipelineDescription message. Does not implicitly {@link google.dataflow.v1beta3.PipelineDescription.verify|verify} messages.
                 * @param message PipelineDescription message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IPipelineDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PipelineDescription message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.PipelineDescription.verify|verify} messages.
                 * @param message PipelineDescription message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IPipelineDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PipelineDescription message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PipelineDescription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.PipelineDescription;

                /**
                 * Decodes a PipelineDescription message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PipelineDescription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.PipelineDescription;

                /**
                 * Verifies a PipelineDescription message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PipelineDescription message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PipelineDescription
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.PipelineDescription;

                /**
                 * Creates a plain object from a PipelineDescription message. Also converts values to other types if specified.
                 * @param message PipelineDescription
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.PipelineDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PipelineDescription to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PipelineDescription
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** KindType enum. */
            enum KindType {
                UNKNOWN_KIND = 0,
                PAR_DO_KIND = 1,
                GROUP_BY_KEY_KIND = 2,
                FLATTEN_KIND = 3,
                READ_KIND = 4,
                WRITE_KIND = 5,
                CONSTANT_KIND = 6,
                SINGLETON_KIND = 7,
                SHUFFLE_KIND = 8
            }

            /** Properties of a TransformSummary. */
            interface ITransformSummary {

                /** TransformSummary kind */
                kind?: (google.dataflow.v1beta3.KindType|keyof typeof google.dataflow.v1beta3.KindType|null);

                /** TransformSummary id */
                id?: (string|null);

                /** TransformSummary name */
                name?: (string|null);

                /** TransformSummary displayData */
                displayData?: (google.dataflow.v1beta3.IDisplayData[]|null);

                /** TransformSummary outputCollectionName */
                outputCollectionName?: (string[]|null);

                /** TransformSummary inputCollectionName */
                inputCollectionName?: (string[]|null);
            }

            /** Represents a TransformSummary. */
            class TransformSummary implements ITransformSummary {

                /**
                 * Constructs a new TransformSummary.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ITransformSummary);

                /** TransformSummary kind. */
                public kind: (google.dataflow.v1beta3.KindType|keyof typeof google.dataflow.v1beta3.KindType);

                /** TransformSummary id. */
                public id: string;

                /** TransformSummary name. */
                public name: string;

                /** TransformSummary displayData. */
                public displayData: google.dataflow.v1beta3.IDisplayData[];

                /** TransformSummary outputCollectionName. */
                public outputCollectionName: string[];

                /** TransformSummary inputCollectionName. */
                public inputCollectionName: string[];

                /**
                 * Creates a new TransformSummary instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransformSummary instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ITransformSummary): google.dataflow.v1beta3.TransformSummary;

                /**
                 * Encodes the specified TransformSummary message. Does not implicitly {@link google.dataflow.v1beta3.TransformSummary.verify|verify} messages.
                 * @param message TransformSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ITransformSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransformSummary message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.TransformSummary.verify|verify} messages.
                 * @param message TransformSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ITransformSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransformSummary message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransformSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.TransformSummary;

                /**
                 * Decodes a TransformSummary message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransformSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.TransformSummary;

                /**
                 * Verifies a TransformSummary message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransformSummary message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransformSummary
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.TransformSummary;

                /**
                 * Creates a plain object from a TransformSummary message. Also converts values to other types if specified.
                 * @param message TransformSummary
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.TransformSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransformSummary to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TransformSummary
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExecutionStageSummary. */
            interface IExecutionStageSummary {

                /** ExecutionStageSummary name */
                name?: (string|null);

                /** ExecutionStageSummary id */
                id?: (string|null);

                /** ExecutionStageSummary kind */
                kind?: (google.dataflow.v1beta3.KindType|keyof typeof google.dataflow.v1beta3.KindType|null);

                /** ExecutionStageSummary inputSource */
                inputSource?: (google.dataflow.v1beta3.ExecutionStageSummary.IStageSource[]|null);

                /** ExecutionStageSummary outputSource */
                outputSource?: (google.dataflow.v1beta3.ExecutionStageSummary.IStageSource[]|null);

                /** ExecutionStageSummary prerequisiteStage */
                prerequisiteStage?: (string[]|null);

                /** ExecutionStageSummary componentTransform */
                componentTransform?: (google.dataflow.v1beta3.ExecutionStageSummary.IComponentTransform[]|null);

                /** ExecutionStageSummary componentSource */
                componentSource?: (google.dataflow.v1beta3.ExecutionStageSummary.IComponentSource[]|null);
            }

            /** Represents an ExecutionStageSummary. */
            class ExecutionStageSummary implements IExecutionStageSummary {

                /**
                 * Constructs a new ExecutionStageSummary.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IExecutionStageSummary);

                /** ExecutionStageSummary name. */
                public name: string;

                /** ExecutionStageSummary id. */
                public id: string;

                /** ExecutionStageSummary kind. */
                public kind: (google.dataflow.v1beta3.KindType|keyof typeof google.dataflow.v1beta3.KindType);

                /** ExecutionStageSummary inputSource. */
                public inputSource: google.dataflow.v1beta3.ExecutionStageSummary.IStageSource[];

                /** ExecutionStageSummary outputSource. */
                public outputSource: google.dataflow.v1beta3.ExecutionStageSummary.IStageSource[];

                /** ExecutionStageSummary prerequisiteStage. */
                public prerequisiteStage: string[];

                /** ExecutionStageSummary componentTransform. */
                public componentTransform: google.dataflow.v1beta3.ExecutionStageSummary.IComponentTransform[];

                /** ExecutionStageSummary componentSource. */
                public componentSource: google.dataflow.v1beta3.ExecutionStageSummary.IComponentSource[];

                /**
                 * Creates a new ExecutionStageSummary instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExecutionStageSummary instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IExecutionStageSummary): google.dataflow.v1beta3.ExecutionStageSummary;

                /**
                 * Encodes the specified ExecutionStageSummary message. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageSummary.verify|verify} messages.
                 * @param message ExecutionStageSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IExecutionStageSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExecutionStageSummary message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageSummary.verify|verify} messages.
                 * @param message ExecutionStageSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IExecutionStageSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExecutionStageSummary message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExecutionStageSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ExecutionStageSummary;

                /**
                 * Decodes an ExecutionStageSummary message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExecutionStageSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ExecutionStageSummary;

                /**
                 * Verifies an ExecutionStageSummary message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExecutionStageSummary message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExecutionStageSummary
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ExecutionStageSummary;

                /**
                 * Creates a plain object from an ExecutionStageSummary message. Also converts values to other types if specified.
                 * @param message ExecutionStageSummary
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ExecutionStageSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExecutionStageSummary to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExecutionStageSummary
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ExecutionStageSummary {

                /** Properties of a StageSource. */
                interface IStageSource {

                    /** StageSource userName */
                    userName?: (string|null);

                    /** StageSource name */
                    name?: (string|null);

                    /** StageSource originalTransformOrCollection */
                    originalTransformOrCollection?: (string|null);

                    /** StageSource sizeBytes */
                    sizeBytes?: (number|Long|string|null);
                }

                /** Represents a StageSource. */
                class StageSource implements IStageSource {

                    /**
                     * Constructs a new StageSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.dataflow.v1beta3.ExecutionStageSummary.IStageSource);

                    /** StageSource userName. */
                    public userName: string;

                    /** StageSource name. */
                    public name: string;

                    /** StageSource originalTransformOrCollection. */
                    public originalTransformOrCollection: string;

                    /** StageSource sizeBytes. */
                    public sizeBytes: (number|Long|string);

                    /**
                     * Creates a new StageSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StageSource instance
                     */
                    public static create(properties?: google.dataflow.v1beta3.ExecutionStageSummary.IStageSource): google.dataflow.v1beta3.ExecutionStageSummary.StageSource;

                    /**
                     * Encodes the specified StageSource message. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageSummary.StageSource.verify|verify} messages.
                     * @param message StageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.dataflow.v1beta3.ExecutionStageSummary.IStageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StageSource message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageSummary.StageSource.verify|verify} messages.
                     * @param message StageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.dataflow.v1beta3.ExecutionStageSummary.IStageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StageSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ExecutionStageSummary.StageSource;

                    /**
                     * Decodes a StageSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ExecutionStageSummary.StageSource;

                    /**
                     * Verifies a StageSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StageSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StageSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ExecutionStageSummary.StageSource;

                    /**
                     * Creates a plain object from a StageSource message. Also converts values to other types if specified.
                     * @param message StageSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.dataflow.v1beta3.ExecutionStageSummary.StageSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StageSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StageSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ComponentTransform. */
                interface IComponentTransform {

                    /** ComponentTransform userName */
                    userName?: (string|null);

                    /** ComponentTransform name */
                    name?: (string|null);

                    /** ComponentTransform originalTransform */
                    originalTransform?: (string|null);
                }

                /** Represents a ComponentTransform. */
                class ComponentTransform implements IComponentTransform {

                    /**
                     * Constructs a new ComponentTransform.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.dataflow.v1beta3.ExecutionStageSummary.IComponentTransform);

                    /** ComponentTransform userName. */
                    public userName: string;

                    /** ComponentTransform name. */
                    public name: string;

                    /** ComponentTransform originalTransform. */
                    public originalTransform: string;

                    /**
                     * Creates a new ComponentTransform instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComponentTransform instance
                     */
                    public static create(properties?: google.dataflow.v1beta3.ExecutionStageSummary.IComponentTransform): google.dataflow.v1beta3.ExecutionStageSummary.ComponentTransform;

                    /**
                     * Encodes the specified ComponentTransform message. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageSummary.ComponentTransform.verify|verify} messages.
                     * @param message ComponentTransform message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.dataflow.v1beta3.ExecutionStageSummary.IComponentTransform, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComponentTransform message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageSummary.ComponentTransform.verify|verify} messages.
                     * @param message ComponentTransform message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.dataflow.v1beta3.ExecutionStageSummary.IComponentTransform, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComponentTransform message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComponentTransform
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ExecutionStageSummary.ComponentTransform;

                    /**
                     * Decodes a ComponentTransform message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComponentTransform
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ExecutionStageSummary.ComponentTransform;

                    /**
                     * Verifies a ComponentTransform message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComponentTransform message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComponentTransform
                     */
                    public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ExecutionStageSummary.ComponentTransform;

                    /**
                     * Creates a plain object from a ComponentTransform message. Also converts values to other types if specified.
                     * @param message ComponentTransform
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.dataflow.v1beta3.ExecutionStageSummary.ComponentTransform, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComponentTransform to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComponentTransform
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ComponentSource. */
                interface IComponentSource {

                    /** ComponentSource userName */
                    userName?: (string|null);

                    /** ComponentSource name */
                    name?: (string|null);

                    /** ComponentSource originalTransformOrCollection */
                    originalTransformOrCollection?: (string|null);
                }

                /** Represents a ComponentSource. */
                class ComponentSource implements IComponentSource {

                    /**
                     * Constructs a new ComponentSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.dataflow.v1beta3.ExecutionStageSummary.IComponentSource);

                    /** ComponentSource userName. */
                    public userName: string;

                    /** ComponentSource name. */
                    public name: string;

                    /** ComponentSource originalTransformOrCollection. */
                    public originalTransformOrCollection: string;

                    /**
                     * Creates a new ComponentSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComponentSource instance
                     */
                    public static create(properties?: google.dataflow.v1beta3.ExecutionStageSummary.IComponentSource): google.dataflow.v1beta3.ExecutionStageSummary.ComponentSource;

                    /**
                     * Encodes the specified ComponentSource message. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageSummary.ComponentSource.verify|verify} messages.
                     * @param message ComponentSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.dataflow.v1beta3.ExecutionStageSummary.IComponentSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComponentSource message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ExecutionStageSummary.ComponentSource.verify|verify} messages.
                     * @param message ComponentSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.dataflow.v1beta3.ExecutionStageSummary.IComponentSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComponentSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComponentSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ExecutionStageSummary.ComponentSource;

                    /**
                     * Decodes a ComponentSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComponentSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ExecutionStageSummary.ComponentSource;

                    /**
                     * Verifies a ComponentSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComponentSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComponentSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ExecutionStageSummary.ComponentSource;

                    /**
                     * Creates a plain object from a ComponentSource message. Also converts values to other types if specified.
                     * @param message ComponentSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.dataflow.v1beta3.ExecutionStageSummary.ComponentSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComponentSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComponentSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a DisplayData. */
            interface IDisplayData {

                /** DisplayData key */
                key?: (string|null);

                /** DisplayData namespace */
                namespace?: (string|null);

                /** DisplayData strValue */
                strValue?: (string|null);

                /** DisplayData int64Value */
                int64Value?: (number|Long|string|null);

                /** DisplayData floatValue */
                floatValue?: (number|null);

                /** DisplayData javaClassValue */
                javaClassValue?: (string|null);

                /** DisplayData timestampValue */
                timestampValue?: (google.protobuf.ITimestamp|null);

                /** DisplayData durationValue */
                durationValue?: (google.protobuf.IDuration|null);

                /** DisplayData boolValue */
                boolValue?: (boolean|null);

                /** DisplayData shortStrValue */
                shortStrValue?: (string|null);

                /** DisplayData url */
                url?: (string|null);

                /** DisplayData label */
                label?: (string|null);
            }

            /** Represents a DisplayData. */
            class DisplayData implements IDisplayData {

                /**
                 * Constructs a new DisplayData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IDisplayData);

                /** DisplayData key. */
                public key: string;

                /** DisplayData namespace. */
                public namespace: string;

                /** DisplayData strValue. */
                public strValue?: (string|null);

                /** DisplayData int64Value. */
                public int64Value?: (number|Long|string|null);

                /** DisplayData floatValue. */
                public floatValue?: (number|null);

                /** DisplayData javaClassValue. */
                public javaClassValue?: (string|null);

                /** DisplayData timestampValue. */
                public timestampValue?: (google.protobuf.ITimestamp|null);

                /** DisplayData durationValue. */
                public durationValue?: (google.protobuf.IDuration|null);

                /** DisplayData boolValue. */
                public boolValue?: (boolean|null);

                /** DisplayData shortStrValue. */
                public shortStrValue: string;

                /** DisplayData url. */
                public url: string;

                /** DisplayData label. */
                public label: string;

                /** DisplayData Value. */
                public Value?: ("strValue"|"int64Value"|"floatValue"|"javaClassValue"|"timestampValue"|"durationValue"|"boolValue");

                /**
                 * Creates a new DisplayData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DisplayData instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IDisplayData): google.dataflow.v1beta3.DisplayData;

                /**
                 * Encodes the specified DisplayData message. Does not implicitly {@link google.dataflow.v1beta3.DisplayData.verify|verify} messages.
                 * @param message DisplayData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IDisplayData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DisplayData message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.DisplayData.verify|verify} messages.
                 * @param message DisplayData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IDisplayData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DisplayData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DisplayData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.DisplayData;

                /**
                 * Decodes a DisplayData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DisplayData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.DisplayData;

                /**
                 * Verifies a DisplayData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DisplayData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DisplayData
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.DisplayData;

                /**
                 * Creates a plain object from a DisplayData message. Also converts values to other types if specified.
                 * @param message DisplayData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.DisplayData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DisplayData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DisplayData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Step. */
            interface IStep {

                /** Step kind */
                kind?: (string|null);

                /** Step name */
                name?: (string|null);

                /** Step properties */
                properties?: (google.protobuf.IStruct|null);
            }

            /** Represents a Step. */
            class Step implements IStep {

                /**
                 * Constructs a new Step.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStep);

                /** Step kind. */
                public kind: string;

                /** Step name. */
                public name: string;

                /** Step properties. */
                public properties?: (google.protobuf.IStruct|null);

                /**
                 * Creates a new Step instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Step instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStep): google.dataflow.v1beta3.Step;

                /**
                 * Encodes the specified Step message. Does not implicitly {@link google.dataflow.v1beta3.Step.verify|verify} messages.
                 * @param message Step message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Step message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.Step.verify|verify} messages.
                 * @param message Step message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Step message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Step
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.Step;

                /**
                 * Decodes a Step message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Step
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.Step;

                /**
                 * Verifies a Step message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Step message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Step
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.Step;

                /**
                 * Creates a plain object from a Step message. Also converts values to other types if specified.
                 * @param message Step
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.Step, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Step to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Step
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** JobState enum. */
            enum JobState {
                JOB_STATE_UNKNOWN = 0,
                JOB_STATE_STOPPED = 1,
                JOB_STATE_RUNNING = 2,
                JOB_STATE_DONE = 3,
                JOB_STATE_FAILED = 4,
                JOB_STATE_CANCELLED = 5,
                JOB_STATE_UPDATED = 6,
                JOB_STATE_DRAINING = 7,
                JOB_STATE_DRAINED = 8,
                JOB_STATE_PENDING = 9,
                JOB_STATE_CANCELLING = 10,
                JOB_STATE_QUEUED = 11,
                JOB_STATE_RESOURCE_CLEANING_UP = 12
            }

            /** Properties of a JobExecutionInfo. */
            interface IJobExecutionInfo {

                /** JobExecutionInfo stages */
                stages?: ({ [k: string]: google.dataflow.v1beta3.IJobExecutionStageInfo }|null);
            }

            /** Represents a JobExecutionInfo. */
            class JobExecutionInfo implements IJobExecutionInfo {

                /**
                 * Constructs a new JobExecutionInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IJobExecutionInfo);

                /** JobExecutionInfo stages. */
                public stages: { [k: string]: google.dataflow.v1beta3.IJobExecutionStageInfo };

                /**
                 * Creates a new JobExecutionInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JobExecutionInfo instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IJobExecutionInfo): google.dataflow.v1beta3.JobExecutionInfo;

                /**
                 * Encodes the specified JobExecutionInfo message. Does not implicitly {@link google.dataflow.v1beta3.JobExecutionInfo.verify|verify} messages.
                 * @param message JobExecutionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IJobExecutionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified JobExecutionInfo message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.JobExecutionInfo.verify|verify} messages.
                 * @param message JobExecutionInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IJobExecutionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JobExecutionInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JobExecutionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.JobExecutionInfo;

                /**
                 * Decodes a JobExecutionInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns JobExecutionInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.JobExecutionInfo;

                /**
                 * Verifies a JobExecutionInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a JobExecutionInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns JobExecutionInfo
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.JobExecutionInfo;

                /**
                 * Creates a plain object from a JobExecutionInfo message. Also converts values to other types if specified.
                 * @param message JobExecutionInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.JobExecutionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this JobExecutionInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for JobExecutionInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a JobExecutionStageInfo. */
            interface IJobExecutionStageInfo {

                /** JobExecutionStageInfo stepName */
                stepName?: (string[]|null);
            }

            /** Represents a JobExecutionStageInfo. */
            class JobExecutionStageInfo implements IJobExecutionStageInfo {

                /**
                 * Constructs a new JobExecutionStageInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IJobExecutionStageInfo);

                /** JobExecutionStageInfo stepName. */
                public stepName: string[];

                /**
                 * Creates a new JobExecutionStageInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JobExecutionStageInfo instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IJobExecutionStageInfo): google.dataflow.v1beta3.JobExecutionStageInfo;

                /**
                 * Encodes the specified JobExecutionStageInfo message. Does not implicitly {@link google.dataflow.v1beta3.JobExecutionStageInfo.verify|verify} messages.
                 * @param message JobExecutionStageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IJobExecutionStageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified JobExecutionStageInfo message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.JobExecutionStageInfo.verify|verify} messages.
                 * @param message JobExecutionStageInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IJobExecutionStageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JobExecutionStageInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JobExecutionStageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.JobExecutionStageInfo;

                /**
                 * Decodes a JobExecutionStageInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns JobExecutionStageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.JobExecutionStageInfo;

                /**
                 * Verifies a JobExecutionStageInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a JobExecutionStageInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns JobExecutionStageInfo
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.JobExecutionStageInfo;

                /**
                 * Creates a plain object from a JobExecutionStageInfo message. Also converts values to other types if specified.
                 * @param message JobExecutionStageInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.JobExecutionStageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this JobExecutionStageInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for JobExecutionStageInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** JobView enum. */
            enum JobView {
                JOB_VIEW_UNKNOWN = 0,
                JOB_VIEW_SUMMARY = 1,
                JOB_VIEW_ALL = 2,
                JOB_VIEW_DESCRIPTION = 3
            }

            /** Properties of a CreateJobRequest. */
            interface ICreateJobRequest {

                /** CreateJobRequest projectId */
                projectId?: (string|null);

                /** CreateJobRequest job */
                job?: (google.dataflow.v1beta3.IJob|null);

                /** CreateJobRequest view */
                view?: (google.dataflow.v1beta3.JobView|keyof typeof google.dataflow.v1beta3.JobView|null);

                /** CreateJobRequest replaceJobId */
                replaceJobId?: (string|null);

                /** CreateJobRequest location */
                location?: (string|null);
            }

            /** Represents a CreateJobRequest. */
            class CreateJobRequest implements ICreateJobRequest {

                /**
                 * Constructs a new CreateJobRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ICreateJobRequest);

                /** CreateJobRequest projectId. */
                public projectId: string;

                /** CreateJobRequest job. */
                public job?: (google.dataflow.v1beta3.IJob|null);

                /** CreateJobRequest view. */
                public view: (google.dataflow.v1beta3.JobView|keyof typeof google.dataflow.v1beta3.JobView);

                /** CreateJobRequest replaceJobId. */
                public replaceJobId: string;

                /** CreateJobRequest location. */
                public location: string;

                /**
                 * Creates a new CreateJobRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateJobRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ICreateJobRequest): google.dataflow.v1beta3.CreateJobRequest;

                /**
                 * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.dataflow.v1beta3.CreateJobRequest.verify|verify} messages.
                 * @param message CreateJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.CreateJobRequest.verify|verify} messages.
                 * @param message CreateJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateJobRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.CreateJobRequest;

                /**
                 * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.CreateJobRequest;

                /**
                 * Verifies a CreateJobRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateJobRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateJobRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.CreateJobRequest;

                /**
                 * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                 * @param message CreateJobRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.CreateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateJobRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateJobRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetJobRequest. */
            interface IGetJobRequest {

                /** GetJobRequest projectId */
                projectId?: (string|null);

                /** GetJobRequest jobId */
                jobId?: (string|null);

                /** GetJobRequest view */
                view?: (google.dataflow.v1beta3.JobView|keyof typeof google.dataflow.v1beta3.JobView|null);

                /** GetJobRequest location */
                location?: (string|null);
            }

            /** Represents a GetJobRequest. */
            class GetJobRequest implements IGetJobRequest {

                /**
                 * Constructs a new GetJobRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IGetJobRequest);

                /** GetJobRequest projectId. */
                public projectId: string;

                /** GetJobRequest jobId. */
                public jobId: string;

                /** GetJobRequest view. */
                public view: (google.dataflow.v1beta3.JobView|keyof typeof google.dataflow.v1beta3.JobView);

                /** GetJobRequest location. */
                public location: string;

                /**
                 * Creates a new GetJobRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetJobRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IGetJobRequest): google.dataflow.v1beta3.GetJobRequest;

                /**
                 * Encodes the specified GetJobRequest message. Does not implicitly {@link google.dataflow.v1beta3.GetJobRequest.verify|verify} messages.
                 * @param message GetJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.GetJobRequest.verify|verify} messages.
                 * @param message GetJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetJobRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.GetJobRequest;

                /**
                 * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.GetJobRequest;

                /**
                 * Verifies a GetJobRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetJobRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.GetJobRequest;

                /**
                 * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                 * @param message GetJobRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetJobRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetJobRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateJobRequest. */
            interface IUpdateJobRequest {

                /** UpdateJobRequest projectId */
                projectId?: (string|null);

                /** UpdateJobRequest jobId */
                jobId?: (string|null);

                /** UpdateJobRequest job */
                job?: (google.dataflow.v1beta3.IJob|null);

                /** UpdateJobRequest location */
                location?: (string|null);

                /** UpdateJobRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateJobRequest. */
            class UpdateJobRequest implements IUpdateJobRequest {

                /**
                 * Constructs a new UpdateJobRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IUpdateJobRequest);

                /** UpdateJobRequest projectId. */
                public projectId: string;

                /** UpdateJobRequest jobId. */
                public jobId: string;

                /** UpdateJobRequest job. */
                public job?: (google.dataflow.v1beta3.IJob|null);

                /** UpdateJobRequest location. */
                public location: string;

                /** UpdateJobRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateJobRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateJobRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IUpdateJobRequest): google.dataflow.v1beta3.UpdateJobRequest;

                /**
                 * Encodes the specified UpdateJobRequest message. Does not implicitly {@link google.dataflow.v1beta3.UpdateJobRequest.verify|verify} messages.
                 * @param message UpdateJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateJobRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.UpdateJobRequest.verify|verify} messages.
                 * @param message UpdateJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateJobRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.UpdateJobRequest;

                /**
                 * Decodes an UpdateJobRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.UpdateJobRequest;

                /**
                 * Verifies an UpdateJobRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateJobRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateJobRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.UpdateJobRequest;

                /**
                 * Creates a plain object from an UpdateJobRequest message. Also converts values to other types if specified.
                 * @param message UpdateJobRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.UpdateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateJobRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateJobRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListJobsRequest. */
            interface IListJobsRequest {

                /** ListJobsRequest filter */
                filter?: (google.dataflow.v1beta3.ListJobsRequest.Filter|keyof typeof google.dataflow.v1beta3.ListJobsRequest.Filter|null);

                /** ListJobsRequest projectId */
                projectId?: (string|null);

                /** ListJobsRequest view */
                view?: (google.dataflow.v1beta3.JobView|keyof typeof google.dataflow.v1beta3.JobView|null);

                /** ListJobsRequest pageSize */
                pageSize?: (number|null);

                /** ListJobsRequest pageToken */
                pageToken?: (string|null);

                /** ListJobsRequest location */
                location?: (string|null);

                /** ListJobsRequest name */
                name?: (string|null);
            }

            /** Represents a ListJobsRequest. */
            class ListJobsRequest implements IListJobsRequest {

                /**
                 * Constructs a new ListJobsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IListJobsRequest);

                /** ListJobsRequest filter. */
                public filter: (google.dataflow.v1beta3.ListJobsRequest.Filter|keyof typeof google.dataflow.v1beta3.ListJobsRequest.Filter);

                /** ListJobsRequest projectId. */
                public projectId: string;

                /** ListJobsRequest view. */
                public view: (google.dataflow.v1beta3.JobView|keyof typeof google.dataflow.v1beta3.JobView);

                /** ListJobsRequest pageSize. */
                public pageSize: number;

                /** ListJobsRequest pageToken. */
                public pageToken: string;

                /** ListJobsRequest location. */
                public location: string;

                /** ListJobsRequest name. */
                public name?: (string|null);

                /**
                 * Creates a new ListJobsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListJobsRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IListJobsRequest): google.dataflow.v1beta3.ListJobsRequest;

                /**
                 * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.dataflow.v1beta3.ListJobsRequest.verify|verify} messages.
                 * @param message ListJobsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ListJobsRequest.verify|verify} messages.
                 * @param message ListJobsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListJobsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListJobsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ListJobsRequest;

                /**
                 * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListJobsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ListJobsRequest;

                /**
                 * Verifies a ListJobsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListJobsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ListJobsRequest;

                /**
                 * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                 * @param message ListJobsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListJobsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListJobsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ListJobsRequest {

                /** Filter enum. */
                enum Filter {
                    UNKNOWN = 0,
                    ALL = 1,
                    TERMINATED = 2,
                    ACTIVE = 3
                }
            }

            /** Properties of a FailedLocation. */
            interface IFailedLocation {

                /** FailedLocation name */
                name?: (string|null);
            }

            /** Represents a FailedLocation. */
            class FailedLocation implements IFailedLocation {

                /**
                 * Constructs a new FailedLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IFailedLocation);

                /** FailedLocation name. */
                public name: string;

                /**
                 * Creates a new FailedLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FailedLocation instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IFailedLocation): google.dataflow.v1beta3.FailedLocation;

                /**
                 * Encodes the specified FailedLocation message. Does not implicitly {@link google.dataflow.v1beta3.FailedLocation.verify|verify} messages.
                 * @param message FailedLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IFailedLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FailedLocation message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.FailedLocation.verify|verify} messages.
                 * @param message FailedLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IFailedLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FailedLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FailedLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.FailedLocation;

                /**
                 * Decodes a FailedLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FailedLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.FailedLocation;

                /**
                 * Verifies a FailedLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FailedLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FailedLocation
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.FailedLocation;

                /**
                 * Creates a plain object from a FailedLocation message. Also converts values to other types if specified.
                 * @param message FailedLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.FailedLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FailedLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FailedLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListJobsResponse. */
            interface IListJobsResponse {

                /** ListJobsResponse jobs */
                jobs?: (google.dataflow.v1beta3.IJob[]|null);

                /** ListJobsResponse nextPageToken */
                nextPageToken?: (string|null);

                /** ListJobsResponse failedLocation */
                failedLocation?: (google.dataflow.v1beta3.IFailedLocation[]|null);
            }

            /** Represents a ListJobsResponse. */
            class ListJobsResponse implements IListJobsResponse {

                /**
                 * Constructs a new ListJobsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IListJobsResponse);

                /** ListJobsResponse jobs. */
                public jobs: google.dataflow.v1beta3.IJob[];

                /** ListJobsResponse nextPageToken. */
                public nextPageToken: string;

                /** ListJobsResponse failedLocation. */
                public failedLocation: google.dataflow.v1beta3.IFailedLocation[];

                /**
                 * Creates a new ListJobsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListJobsResponse instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IListJobsResponse): google.dataflow.v1beta3.ListJobsResponse;

                /**
                 * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.dataflow.v1beta3.ListJobsResponse.verify|verify} messages.
                 * @param message ListJobsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ListJobsResponse.verify|verify} messages.
                 * @param message ListJobsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListJobsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListJobsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ListJobsResponse;

                /**
                 * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListJobsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ListJobsResponse;

                /**
                 * Verifies a ListJobsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListJobsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ListJobsResponse;

                /**
                 * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                 * @param message ListJobsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListJobsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListJobsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SnapshotJobRequest. */
            interface ISnapshotJobRequest {

                /** SnapshotJobRequest projectId */
                projectId?: (string|null);

                /** SnapshotJobRequest jobId */
                jobId?: (string|null);

                /** SnapshotJobRequest ttl */
                ttl?: (google.protobuf.IDuration|null);

                /** SnapshotJobRequest location */
                location?: (string|null);

                /** SnapshotJobRequest snapshotSources */
                snapshotSources?: (boolean|null);

                /** SnapshotJobRequest description */
                description?: (string|null);
            }

            /** Represents a SnapshotJobRequest. */
            class SnapshotJobRequest implements ISnapshotJobRequest {

                /**
                 * Constructs a new SnapshotJobRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ISnapshotJobRequest);

                /** SnapshotJobRequest projectId. */
                public projectId: string;

                /** SnapshotJobRequest jobId. */
                public jobId: string;

                /** SnapshotJobRequest ttl. */
                public ttl?: (google.protobuf.IDuration|null);

                /** SnapshotJobRequest location. */
                public location: string;

                /** SnapshotJobRequest snapshotSources. */
                public snapshotSources: boolean;

                /** SnapshotJobRequest description. */
                public description: string;

                /**
                 * Creates a new SnapshotJobRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SnapshotJobRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ISnapshotJobRequest): google.dataflow.v1beta3.SnapshotJobRequest;

                /**
                 * Encodes the specified SnapshotJobRequest message. Does not implicitly {@link google.dataflow.v1beta3.SnapshotJobRequest.verify|verify} messages.
                 * @param message SnapshotJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ISnapshotJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SnapshotJobRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.SnapshotJobRequest.verify|verify} messages.
                 * @param message SnapshotJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ISnapshotJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SnapshotJobRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SnapshotJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.SnapshotJobRequest;

                /**
                 * Decodes a SnapshotJobRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SnapshotJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.SnapshotJobRequest;

                /**
                 * Verifies a SnapshotJobRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SnapshotJobRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SnapshotJobRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.SnapshotJobRequest;

                /**
                 * Creates a plain object from a SnapshotJobRequest message. Also converts values to other types if specified.
                 * @param message SnapshotJobRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.SnapshotJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SnapshotJobRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SnapshotJobRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CheckActiveJobsRequest. */
            interface ICheckActiveJobsRequest {

                /** CheckActiveJobsRequest projectId */
                projectId?: (string|null);
            }

            /** Represents a CheckActiveJobsRequest. */
            class CheckActiveJobsRequest implements ICheckActiveJobsRequest {

                /**
                 * Constructs a new CheckActiveJobsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ICheckActiveJobsRequest);

                /** CheckActiveJobsRequest projectId. */
                public projectId: string;

                /**
                 * Creates a new CheckActiveJobsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CheckActiveJobsRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ICheckActiveJobsRequest): google.dataflow.v1beta3.CheckActiveJobsRequest;

                /**
                 * Encodes the specified CheckActiveJobsRequest message. Does not implicitly {@link google.dataflow.v1beta3.CheckActiveJobsRequest.verify|verify} messages.
                 * @param message CheckActiveJobsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ICheckActiveJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CheckActiveJobsRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.CheckActiveJobsRequest.verify|verify} messages.
                 * @param message CheckActiveJobsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ICheckActiveJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CheckActiveJobsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CheckActiveJobsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.CheckActiveJobsRequest;

                /**
                 * Decodes a CheckActiveJobsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CheckActiveJobsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.CheckActiveJobsRequest;

                /**
                 * Verifies a CheckActiveJobsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CheckActiveJobsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CheckActiveJobsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.CheckActiveJobsRequest;

                /**
                 * Creates a plain object from a CheckActiveJobsRequest message. Also converts values to other types if specified.
                 * @param message CheckActiveJobsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.CheckActiveJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CheckActiveJobsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CheckActiveJobsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CheckActiveJobsResponse. */
            interface ICheckActiveJobsResponse {

                /** CheckActiveJobsResponse activeJobsExist */
                activeJobsExist?: (boolean|null);
            }

            /** Represents a CheckActiveJobsResponse. */
            class CheckActiveJobsResponse implements ICheckActiveJobsResponse {

                /**
                 * Constructs a new CheckActiveJobsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ICheckActiveJobsResponse);

                /** CheckActiveJobsResponse activeJobsExist. */
                public activeJobsExist: boolean;

                /**
                 * Creates a new CheckActiveJobsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CheckActiveJobsResponse instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ICheckActiveJobsResponse): google.dataflow.v1beta3.CheckActiveJobsResponse;

                /**
                 * Encodes the specified CheckActiveJobsResponse message. Does not implicitly {@link google.dataflow.v1beta3.CheckActiveJobsResponse.verify|verify} messages.
                 * @param message CheckActiveJobsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ICheckActiveJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CheckActiveJobsResponse message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.CheckActiveJobsResponse.verify|verify} messages.
                 * @param message CheckActiveJobsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ICheckActiveJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CheckActiveJobsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CheckActiveJobsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.CheckActiveJobsResponse;

                /**
                 * Decodes a CheckActiveJobsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CheckActiveJobsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.CheckActiveJobsResponse;

                /**
                 * Verifies a CheckActiveJobsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CheckActiveJobsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CheckActiveJobsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.CheckActiveJobsResponse;

                /**
                 * Creates a plain object from a CheckActiveJobsResponse message. Also converts values to other types if specified.
                 * @param message CheckActiveJobsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.CheckActiveJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CheckActiveJobsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CheckActiveJobsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a SnapshotsV1Beta3 */
            class SnapshotsV1Beta3 extends $protobuf.rpc.Service {

                /**
                 * Constructs a new SnapshotsV1Beta3 service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new SnapshotsV1Beta3 service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SnapshotsV1Beta3;

                /**
                 * Calls GetSnapshot.
                 * @param request GetSnapshotRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Snapshot
                 */
                public getSnapshot(request: google.dataflow.v1beta3.IGetSnapshotRequest, callback: google.dataflow.v1beta3.SnapshotsV1Beta3.GetSnapshotCallback): void;

                /**
                 * Calls GetSnapshot.
                 * @param request GetSnapshotRequest message or plain object
                 * @returns Promise
                 */
                public getSnapshot(request: google.dataflow.v1beta3.IGetSnapshotRequest): Promise<google.dataflow.v1beta3.Snapshot>;

                /**
                 * Calls DeleteSnapshot.
                 * @param request DeleteSnapshotRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DeleteSnapshotResponse
                 */
                public deleteSnapshot(request: google.dataflow.v1beta3.IDeleteSnapshotRequest, callback: google.dataflow.v1beta3.SnapshotsV1Beta3.DeleteSnapshotCallback): void;

                /**
                 * Calls DeleteSnapshot.
                 * @param request DeleteSnapshotRequest message or plain object
                 * @returns Promise
                 */
                public deleteSnapshot(request: google.dataflow.v1beta3.IDeleteSnapshotRequest): Promise<google.dataflow.v1beta3.DeleteSnapshotResponse>;

                /**
                 * Calls ListSnapshots.
                 * @param request ListSnapshotsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListSnapshotsResponse
                 */
                public listSnapshots(request: google.dataflow.v1beta3.IListSnapshotsRequest, callback: google.dataflow.v1beta3.SnapshotsV1Beta3.ListSnapshotsCallback): void;

                /**
                 * Calls ListSnapshots.
                 * @param request ListSnapshotsRequest message or plain object
                 * @returns Promise
                 */
                public listSnapshots(request: google.dataflow.v1beta3.IListSnapshotsRequest): Promise<google.dataflow.v1beta3.ListSnapshotsResponse>;
            }

            namespace SnapshotsV1Beta3 {

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.SnapshotsV1Beta3|getSnapshot}.
                 * @param error Error, if any
                 * @param [response] Snapshot
                 */
                type GetSnapshotCallback = (error: (Error|null), response?: google.dataflow.v1beta3.Snapshot) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.SnapshotsV1Beta3|deleteSnapshot}.
                 * @param error Error, if any
                 * @param [response] DeleteSnapshotResponse
                 */
                type DeleteSnapshotCallback = (error: (Error|null), response?: google.dataflow.v1beta3.DeleteSnapshotResponse) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.SnapshotsV1Beta3|listSnapshots}.
                 * @param error Error, if any
                 * @param [response] ListSnapshotsResponse
                 */
                type ListSnapshotsCallback = (error: (Error|null), response?: google.dataflow.v1beta3.ListSnapshotsResponse) => void;
            }

            /** SnapshotState enum. */
            enum SnapshotState {
                UNKNOWN_SNAPSHOT_STATE = 0,
                PENDING = 1,
                RUNNING = 2,
                READY = 3,
                FAILED = 4,
                DELETED = 5
            }

            /** Properties of a PubsubSnapshotMetadata. */
            interface IPubsubSnapshotMetadata {

                /** PubsubSnapshotMetadata topicName */
                topicName?: (string|null);

                /** PubsubSnapshotMetadata snapshotName */
                snapshotName?: (string|null);

                /** PubsubSnapshotMetadata expireTime */
                expireTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a PubsubSnapshotMetadata. */
            class PubsubSnapshotMetadata implements IPubsubSnapshotMetadata {

                /**
                 * Constructs a new PubsubSnapshotMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IPubsubSnapshotMetadata);

                /** PubsubSnapshotMetadata topicName. */
                public topicName: string;

                /** PubsubSnapshotMetadata snapshotName. */
                public snapshotName: string;

                /** PubsubSnapshotMetadata expireTime. */
                public expireTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new PubsubSnapshotMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PubsubSnapshotMetadata instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IPubsubSnapshotMetadata): google.dataflow.v1beta3.PubsubSnapshotMetadata;

                /**
                 * Encodes the specified PubsubSnapshotMetadata message. Does not implicitly {@link google.dataflow.v1beta3.PubsubSnapshotMetadata.verify|verify} messages.
                 * @param message PubsubSnapshotMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IPubsubSnapshotMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PubsubSnapshotMetadata message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.PubsubSnapshotMetadata.verify|verify} messages.
                 * @param message PubsubSnapshotMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IPubsubSnapshotMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubsubSnapshotMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PubsubSnapshotMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.PubsubSnapshotMetadata;

                /**
                 * Decodes a PubsubSnapshotMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PubsubSnapshotMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.PubsubSnapshotMetadata;

                /**
                 * Verifies a PubsubSnapshotMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PubsubSnapshotMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PubsubSnapshotMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.PubsubSnapshotMetadata;

                /**
                 * Creates a plain object from a PubsubSnapshotMetadata message. Also converts values to other types if specified.
                 * @param message PubsubSnapshotMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.PubsubSnapshotMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PubsubSnapshotMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PubsubSnapshotMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Snapshot. */
            interface ISnapshot {

                /** Snapshot id */
                id?: (string|null);

                /** Snapshot projectId */
                projectId?: (string|null);

                /** Snapshot sourceJobId */
                sourceJobId?: (string|null);

                /** Snapshot creationTime */
                creationTime?: (google.protobuf.ITimestamp|null);

                /** Snapshot ttl */
                ttl?: (google.protobuf.IDuration|null);

                /** Snapshot state */
                state?: (google.dataflow.v1beta3.SnapshotState|keyof typeof google.dataflow.v1beta3.SnapshotState|null);

                /** Snapshot pubsubMetadata */
                pubsubMetadata?: (google.dataflow.v1beta3.IPubsubSnapshotMetadata[]|null);

                /** Snapshot description */
                description?: (string|null);

                /** Snapshot diskSizeBytes */
                diskSizeBytes?: (number|Long|string|null);

                /** Snapshot region */
                region?: (string|null);
            }

            /** Represents a Snapshot. */
            class Snapshot implements ISnapshot {

                /**
                 * Constructs a new Snapshot.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ISnapshot);

                /** Snapshot id. */
                public id: string;

                /** Snapshot projectId. */
                public projectId: string;

                /** Snapshot sourceJobId. */
                public sourceJobId: string;

                /** Snapshot creationTime. */
                public creationTime?: (google.protobuf.ITimestamp|null);

                /** Snapshot ttl. */
                public ttl?: (google.protobuf.IDuration|null);

                /** Snapshot state. */
                public state: (google.dataflow.v1beta3.SnapshotState|keyof typeof google.dataflow.v1beta3.SnapshotState);

                /** Snapshot pubsubMetadata. */
                public pubsubMetadata: google.dataflow.v1beta3.IPubsubSnapshotMetadata[];

                /** Snapshot description. */
                public description: string;

                /** Snapshot diskSizeBytes. */
                public diskSizeBytes: (number|Long|string);

                /** Snapshot region. */
                public region: string;

                /**
                 * Creates a new Snapshot instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Snapshot instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ISnapshot): google.dataflow.v1beta3.Snapshot;

                /**
                 * Encodes the specified Snapshot message. Does not implicitly {@link google.dataflow.v1beta3.Snapshot.verify|verify} messages.
                 * @param message Snapshot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Snapshot message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.Snapshot.verify|verify} messages.
                 * @param message Snapshot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Snapshot message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Snapshot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.Snapshot;

                /**
                 * Decodes a Snapshot message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Snapshot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.Snapshot;

                /**
                 * Verifies a Snapshot message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Snapshot
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.Snapshot;

                /**
                 * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
                 * @param message Snapshot
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.Snapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Snapshot to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Snapshot
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetSnapshotRequest. */
            interface IGetSnapshotRequest {

                /** GetSnapshotRequest projectId */
                projectId?: (string|null);

                /** GetSnapshotRequest snapshotId */
                snapshotId?: (string|null);

                /** GetSnapshotRequest location */
                location?: (string|null);
            }

            /** Represents a GetSnapshotRequest. */
            class GetSnapshotRequest implements IGetSnapshotRequest {

                /**
                 * Constructs a new GetSnapshotRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IGetSnapshotRequest);

                /** GetSnapshotRequest projectId. */
                public projectId: string;

                /** GetSnapshotRequest snapshotId. */
                public snapshotId: string;

                /** GetSnapshotRequest location. */
                public location: string;

                /**
                 * Creates a new GetSnapshotRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSnapshotRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IGetSnapshotRequest): google.dataflow.v1beta3.GetSnapshotRequest;

                /**
                 * Encodes the specified GetSnapshotRequest message. Does not implicitly {@link google.dataflow.v1beta3.GetSnapshotRequest.verify|verify} messages.
                 * @param message GetSnapshotRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IGetSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSnapshotRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.GetSnapshotRequest.verify|verify} messages.
                 * @param message GetSnapshotRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IGetSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSnapshotRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetSnapshotRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.GetSnapshotRequest;

                /**
                 * Decodes a GetSnapshotRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetSnapshotRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.GetSnapshotRequest;

                /**
                 * Verifies a GetSnapshotRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSnapshotRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.GetSnapshotRequest;

                /**
                 * Creates a plain object from a GetSnapshotRequest message. Also converts values to other types if specified.
                 * @param message GetSnapshotRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.GetSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSnapshotRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetSnapshotRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteSnapshotRequest. */
            interface IDeleteSnapshotRequest {

                /** DeleteSnapshotRequest projectId */
                projectId?: (string|null);

                /** DeleteSnapshotRequest snapshotId */
                snapshotId?: (string|null);

                /** DeleteSnapshotRequest location */
                location?: (string|null);
            }

            /** Represents a DeleteSnapshotRequest. */
            class DeleteSnapshotRequest implements IDeleteSnapshotRequest {

                /**
                 * Constructs a new DeleteSnapshotRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IDeleteSnapshotRequest);

                /** DeleteSnapshotRequest projectId. */
                public projectId: string;

                /** DeleteSnapshotRequest snapshotId. */
                public snapshotId: string;

                /** DeleteSnapshotRequest location. */
                public location: string;

                /**
                 * Creates a new DeleteSnapshotRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteSnapshotRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IDeleteSnapshotRequest): google.dataflow.v1beta3.DeleteSnapshotRequest;

                /**
                 * Encodes the specified DeleteSnapshotRequest message. Does not implicitly {@link google.dataflow.v1beta3.DeleteSnapshotRequest.verify|verify} messages.
                 * @param message DeleteSnapshotRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IDeleteSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteSnapshotRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.DeleteSnapshotRequest.verify|verify} messages.
                 * @param message DeleteSnapshotRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IDeleteSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteSnapshotRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteSnapshotRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.DeleteSnapshotRequest;

                /**
                 * Decodes a DeleteSnapshotRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteSnapshotRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.DeleteSnapshotRequest;

                /**
                 * Verifies a DeleteSnapshotRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteSnapshotRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.DeleteSnapshotRequest;

                /**
                 * Creates a plain object from a DeleteSnapshotRequest message. Also converts values to other types if specified.
                 * @param message DeleteSnapshotRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.DeleteSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteSnapshotRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteSnapshotRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteSnapshotResponse. */
            interface IDeleteSnapshotResponse {
            }

            /** Represents a DeleteSnapshotResponse. */
            class DeleteSnapshotResponse implements IDeleteSnapshotResponse {

                /**
                 * Constructs a new DeleteSnapshotResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IDeleteSnapshotResponse);

                /**
                 * Creates a new DeleteSnapshotResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteSnapshotResponse instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IDeleteSnapshotResponse): google.dataflow.v1beta3.DeleteSnapshotResponse;

                /**
                 * Encodes the specified DeleteSnapshotResponse message. Does not implicitly {@link google.dataflow.v1beta3.DeleteSnapshotResponse.verify|verify} messages.
                 * @param message DeleteSnapshotResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IDeleteSnapshotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteSnapshotResponse message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.DeleteSnapshotResponse.verify|verify} messages.
                 * @param message DeleteSnapshotResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IDeleteSnapshotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteSnapshotResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteSnapshotResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.DeleteSnapshotResponse;

                /**
                 * Decodes a DeleteSnapshotResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteSnapshotResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.DeleteSnapshotResponse;

                /**
                 * Verifies a DeleteSnapshotResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteSnapshotResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteSnapshotResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.DeleteSnapshotResponse;

                /**
                 * Creates a plain object from a DeleteSnapshotResponse message. Also converts values to other types if specified.
                 * @param message DeleteSnapshotResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.DeleteSnapshotResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteSnapshotResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteSnapshotResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListSnapshotsRequest. */
            interface IListSnapshotsRequest {

                /** ListSnapshotsRequest projectId */
                projectId?: (string|null);

                /** ListSnapshotsRequest jobId */
                jobId?: (string|null);

                /** ListSnapshotsRequest location */
                location?: (string|null);
            }

            /** Represents a ListSnapshotsRequest. */
            class ListSnapshotsRequest implements IListSnapshotsRequest {

                /**
                 * Constructs a new ListSnapshotsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IListSnapshotsRequest);

                /** ListSnapshotsRequest projectId. */
                public projectId: string;

                /** ListSnapshotsRequest jobId. */
                public jobId: string;

                /** ListSnapshotsRequest location. */
                public location: string;

                /**
                 * Creates a new ListSnapshotsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSnapshotsRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IListSnapshotsRequest): google.dataflow.v1beta3.ListSnapshotsRequest;

                /**
                 * Encodes the specified ListSnapshotsRequest message. Does not implicitly {@link google.dataflow.v1beta3.ListSnapshotsRequest.verify|verify} messages.
                 * @param message ListSnapshotsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IListSnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSnapshotsRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ListSnapshotsRequest.verify|verify} messages.
                 * @param message ListSnapshotsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IListSnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSnapshotsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSnapshotsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ListSnapshotsRequest;

                /**
                 * Decodes a ListSnapshotsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSnapshotsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ListSnapshotsRequest;

                /**
                 * Verifies a ListSnapshotsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSnapshotsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSnapshotsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ListSnapshotsRequest;

                /**
                 * Creates a plain object from a ListSnapshotsRequest message. Also converts values to other types if specified.
                 * @param message ListSnapshotsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ListSnapshotsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSnapshotsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListSnapshotsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListSnapshotsResponse. */
            interface IListSnapshotsResponse {

                /** ListSnapshotsResponse snapshots */
                snapshots?: (google.dataflow.v1beta3.ISnapshot[]|null);
            }

            /** Represents a ListSnapshotsResponse. */
            class ListSnapshotsResponse implements IListSnapshotsResponse {

                /**
                 * Constructs a new ListSnapshotsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IListSnapshotsResponse);

                /** ListSnapshotsResponse snapshots. */
                public snapshots: google.dataflow.v1beta3.ISnapshot[];

                /**
                 * Creates a new ListSnapshotsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSnapshotsResponse instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IListSnapshotsResponse): google.dataflow.v1beta3.ListSnapshotsResponse;

                /**
                 * Encodes the specified ListSnapshotsResponse message. Does not implicitly {@link google.dataflow.v1beta3.ListSnapshotsResponse.verify|verify} messages.
                 * @param message ListSnapshotsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IListSnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSnapshotsResponse message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ListSnapshotsResponse.verify|verify} messages.
                 * @param message ListSnapshotsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IListSnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSnapshotsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSnapshotsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ListSnapshotsResponse;

                /**
                 * Decodes a ListSnapshotsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSnapshotsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ListSnapshotsResponse;

                /**
                 * Verifies a ListSnapshotsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSnapshotsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSnapshotsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ListSnapshotsResponse;

                /**
                 * Creates a plain object from a ListSnapshotsResponse message. Also converts values to other types if specified.
                 * @param message ListSnapshotsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ListSnapshotsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSnapshotsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListSnapshotsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a MessagesV1Beta3 */
            class MessagesV1Beta3 extends $protobuf.rpc.Service {

                /**
                 * Constructs a new MessagesV1Beta3 service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new MessagesV1Beta3 service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MessagesV1Beta3;

                /**
                 * Calls ListJobMessages.
                 * @param request ListJobMessagesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListJobMessagesResponse
                 */
                public listJobMessages(request: google.dataflow.v1beta3.IListJobMessagesRequest, callback: google.dataflow.v1beta3.MessagesV1Beta3.ListJobMessagesCallback): void;

                /**
                 * Calls ListJobMessages.
                 * @param request ListJobMessagesRequest message or plain object
                 * @returns Promise
                 */
                public listJobMessages(request: google.dataflow.v1beta3.IListJobMessagesRequest): Promise<google.dataflow.v1beta3.ListJobMessagesResponse>;
            }

            namespace MessagesV1Beta3 {

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.MessagesV1Beta3|listJobMessages}.
                 * @param error Error, if any
                 * @param [response] ListJobMessagesResponse
                 */
                type ListJobMessagesCallback = (error: (Error|null), response?: google.dataflow.v1beta3.ListJobMessagesResponse) => void;
            }

            /** Properties of a JobMessage. */
            interface IJobMessage {

                /** JobMessage id */
                id?: (string|null);

                /** JobMessage time */
                time?: (google.protobuf.ITimestamp|null);

                /** JobMessage messageText */
                messageText?: (string|null);

                /** JobMessage messageImportance */
                messageImportance?: (google.dataflow.v1beta3.JobMessageImportance|keyof typeof google.dataflow.v1beta3.JobMessageImportance|null);
            }

            /** Represents a JobMessage. */
            class JobMessage implements IJobMessage {

                /**
                 * Constructs a new JobMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IJobMessage);

                /** JobMessage id. */
                public id: string;

                /** JobMessage time. */
                public time?: (google.protobuf.ITimestamp|null);

                /** JobMessage messageText. */
                public messageText: string;

                /** JobMessage messageImportance. */
                public messageImportance: (google.dataflow.v1beta3.JobMessageImportance|keyof typeof google.dataflow.v1beta3.JobMessageImportance);

                /**
                 * Creates a new JobMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JobMessage instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IJobMessage): google.dataflow.v1beta3.JobMessage;

                /**
                 * Encodes the specified JobMessage message. Does not implicitly {@link google.dataflow.v1beta3.JobMessage.verify|verify} messages.
                 * @param message JobMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IJobMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified JobMessage message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.JobMessage.verify|verify} messages.
                 * @param message JobMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IJobMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JobMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JobMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.JobMessage;

                /**
                 * Decodes a JobMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns JobMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.JobMessage;

                /**
                 * Verifies a JobMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a JobMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns JobMessage
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.JobMessage;

                /**
                 * Creates a plain object from a JobMessage message. Also converts values to other types if specified.
                 * @param message JobMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.JobMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this JobMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for JobMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** JobMessageImportance enum. */
            enum JobMessageImportance {
                JOB_MESSAGE_IMPORTANCE_UNKNOWN = 0,
                JOB_MESSAGE_DEBUG = 1,
                JOB_MESSAGE_DETAILED = 2,
                JOB_MESSAGE_BASIC = 5,
                JOB_MESSAGE_WARNING = 3,
                JOB_MESSAGE_ERROR = 4
            }

            /** Properties of a StructuredMessage. */
            interface IStructuredMessage {

                /** StructuredMessage messageText */
                messageText?: (string|null);

                /** StructuredMessage messageKey */
                messageKey?: (string|null);

                /** StructuredMessage parameters */
                parameters?: (google.dataflow.v1beta3.StructuredMessage.IParameter[]|null);
            }

            /** Represents a StructuredMessage. */
            class StructuredMessage implements IStructuredMessage {

                /**
                 * Constructs a new StructuredMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStructuredMessage);

                /** StructuredMessage messageText. */
                public messageText: string;

                /** StructuredMessage messageKey. */
                public messageKey: string;

                /** StructuredMessage parameters. */
                public parameters: google.dataflow.v1beta3.StructuredMessage.IParameter[];

                /**
                 * Creates a new StructuredMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StructuredMessage instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStructuredMessage): google.dataflow.v1beta3.StructuredMessage;

                /**
                 * Encodes the specified StructuredMessage message. Does not implicitly {@link google.dataflow.v1beta3.StructuredMessage.verify|verify} messages.
                 * @param message StructuredMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStructuredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StructuredMessage message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StructuredMessage.verify|verify} messages.
                 * @param message StructuredMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStructuredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StructuredMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StructuredMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StructuredMessage;

                /**
                 * Decodes a StructuredMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StructuredMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StructuredMessage;

                /**
                 * Verifies a StructuredMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StructuredMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StructuredMessage
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StructuredMessage;

                /**
                 * Creates a plain object from a StructuredMessage message. Also converts values to other types if specified.
                 * @param message StructuredMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StructuredMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StructuredMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StructuredMessage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace StructuredMessage {

                /** Properties of a Parameter. */
                interface IParameter {

                    /** Parameter key */
                    key?: (string|null);

                    /** Parameter value */
                    value?: (google.protobuf.IValue|null);
                }

                /** Represents a Parameter. */
                class Parameter implements IParameter {

                    /**
                     * Constructs a new Parameter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.dataflow.v1beta3.StructuredMessage.IParameter);

                    /** Parameter key. */
                    public key: string;

                    /** Parameter value. */
                    public value?: (google.protobuf.IValue|null);

                    /**
                     * Creates a new Parameter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Parameter instance
                     */
                    public static create(properties?: google.dataflow.v1beta3.StructuredMessage.IParameter): google.dataflow.v1beta3.StructuredMessage.Parameter;

                    /**
                     * Encodes the specified Parameter message. Does not implicitly {@link google.dataflow.v1beta3.StructuredMessage.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.dataflow.v1beta3.StructuredMessage.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Parameter message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StructuredMessage.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.dataflow.v1beta3.StructuredMessage.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StructuredMessage.Parameter;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StructuredMessage.Parameter;

                    /**
                     * Verifies a Parameter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Parameter
                     */
                    public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StructuredMessage.Parameter;

                    /**
                     * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                     * @param message Parameter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.dataflow.v1beta3.StructuredMessage.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Parameter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Parameter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of an AutoscalingEvent. */
            interface IAutoscalingEvent {

                /** AutoscalingEvent currentNumWorkers */
                currentNumWorkers?: (number|Long|string|null);

                /** AutoscalingEvent targetNumWorkers */
                targetNumWorkers?: (number|Long|string|null);

                /** AutoscalingEvent eventType */
                eventType?: (google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType|keyof typeof google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType|null);

                /** AutoscalingEvent description */
                description?: (google.dataflow.v1beta3.IStructuredMessage|null);

                /** AutoscalingEvent time */
                time?: (google.protobuf.ITimestamp|null);

                /** AutoscalingEvent workerPool */
                workerPool?: (string|null);
            }

            /** Represents an AutoscalingEvent. */
            class AutoscalingEvent implements IAutoscalingEvent {

                /**
                 * Constructs a new AutoscalingEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IAutoscalingEvent);

                /** AutoscalingEvent currentNumWorkers. */
                public currentNumWorkers: (number|Long|string);

                /** AutoscalingEvent targetNumWorkers. */
                public targetNumWorkers: (number|Long|string);

                /** AutoscalingEvent eventType. */
                public eventType: (google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType|keyof typeof google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType);

                /** AutoscalingEvent description. */
                public description?: (google.dataflow.v1beta3.IStructuredMessage|null);

                /** AutoscalingEvent time. */
                public time?: (google.protobuf.ITimestamp|null);

                /** AutoscalingEvent workerPool. */
                public workerPool: string;

                /**
                 * Creates a new AutoscalingEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AutoscalingEvent instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IAutoscalingEvent): google.dataflow.v1beta3.AutoscalingEvent;

                /**
                 * Encodes the specified AutoscalingEvent message. Does not implicitly {@link google.dataflow.v1beta3.AutoscalingEvent.verify|verify} messages.
                 * @param message AutoscalingEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IAutoscalingEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AutoscalingEvent message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.AutoscalingEvent.verify|verify} messages.
                 * @param message AutoscalingEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IAutoscalingEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AutoscalingEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AutoscalingEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.AutoscalingEvent;

                /**
                 * Decodes an AutoscalingEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AutoscalingEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.AutoscalingEvent;

                /**
                 * Verifies an AutoscalingEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AutoscalingEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AutoscalingEvent
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.AutoscalingEvent;

                /**
                 * Creates a plain object from an AutoscalingEvent message. Also converts values to other types if specified.
                 * @param message AutoscalingEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.AutoscalingEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AutoscalingEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AutoscalingEvent
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AutoscalingEvent {

                /** AutoscalingEventType enum. */
                enum AutoscalingEventType {
                    TYPE_UNKNOWN = 0,
                    TARGET_NUM_WORKERS_CHANGED = 1,
                    CURRENT_NUM_WORKERS_CHANGED = 2,
                    ACTUATION_FAILURE = 3,
                    NO_CHANGE = 4
                }
            }

            /** Properties of a ListJobMessagesRequest. */
            interface IListJobMessagesRequest {

                /** ListJobMessagesRequest projectId */
                projectId?: (string|null);

                /** ListJobMessagesRequest jobId */
                jobId?: (string|null);

                /** ListJobMessagesRequest minimumImportance */
                minimumImportance?: (google.dataflow.v1beta3.JobMessageImportance|keyof typeof google.dataflow.v1beta3.JobMessageImportance|null);

                /** ListJobMessagesRequest pageSize */
                pageSize?: (number|null);

                /** ListJobMessagesRequest pageToken */
                pageToken?: (string|null);

                /** ListJobMessagesRequest startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** ListJobMessagesRequest endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** ListJobMessagesRequest location */
                location?: (string|null);
            }

            /** Represents a ListJobMessagesRequest. */
            class ListJobMessagesRequest implements IListJobMessagesRequest {

                /**
                 * Constructs a new ListJobMessagesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IListJobMessagesRequest);

                /** ListJobMessagesRequest projectId. */
                public projectId: string;

                /** ListJobMessagesRequest jobId. */
                public jobId: string;

                /** ListJobMessagesRequest minimumImportance. */
                public minimumImportance: (google.dataflow.v1beta3.JobMessageImportance|keyof typeof google.dataflow.v1beta3.JobMessageImportance);

                /** ListJobMessagesRequest pageSize. */
                public pageSize: number;

                /** ListJobMessagesRequest pageToken. */
                public pageToken: string;

                /** ListJobMessagesRequest startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** ListJobMessagesRequest endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** ListJobMessagesRequest location. */
                public location: string;

                /**
                 * Creates a new ListJobMessagesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListJobMessagesRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IListJobMessagesRequest): google.dataflow.v1beta3.ListJobMessagesRequest;

                /**
                 * Encodes the specified ListJobMessagesRequest message. Does not implicitly {@link google.dataflow.v1beta3.ListJobMessagesRequest.verify|verify} messages.
                 * @param message ListJobMessagesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IListJobMessagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListJobMessagesRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ListJobMessagesRequest.verify|verify} messages.
                 * @param message ListJobMessagesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IListJobMessagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListJobMessagesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListJobMessagesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ListJobMessagesRequest;

                /**
                 * Decodes a ListJobMessagesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListJobMessagesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ListJobMessagesRequest;

                /**
                 * Verifies a ListJobMessagesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListJobMessagesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListJobMessagesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ListJobMessagesRequest;

                /**
                 * Creates a plain object from a ListJobMessagesRequest message. Also converts values to other types if specified.
                 * @param message ListJobMessagesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ListJobMessagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListJobMessagesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListJobMessagesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListJobMessagesResponse. */
            interface IListJobMessagesResponse {

                /** ListJobMessagesResponse jobMessages */
                jobMessages?: (google.dataflow.v1beta3.IJobMessage[]|null);

                /** ListJobMessagesResponse nextPageToken */
                nextPageToken?: (string|null);

                /** ListJobMessagesResponse autoscalingEvents */
                autoscalingEvents?: (google.dataflow.v1beta3.IAutoscalingEvent[]|null);
            }

            /** Represents a ListJobMessagesResponse. */
            class ListJobMessagesResponse implements IListJobMessagesResponse {

                /**
                 * Constructs a new ListJobMessagesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IListJobMessagesResponse);

                /** ListJobMessagesResponse jobMessages. */
                public jobMessages: google.dataflow.v1beta3.IJobMessage[];

                /** ListJobMessagesResponse nextPageToken. */
                public nextPageToken: string;

                /** ListJobMessagesResponse autoscalingEvents. */
                public autoscalingEvents: google.dataflow.v1beta3.IAutoscalingEvent[];

                /**
                 * Creates a new ListJobMessagesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListJobMessagesResponse instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IListJobMessagesResponse): google.dataflow.v1beta3.ListJobMessagesResponse;

                /**
                 * Encodes the specified ListJobMessagesResponse message. Does not implicitly {@link google.dataflow.v1beta3.ListJobMessagesResponse.verify|verify} messages.
                 * @param message ListJobMessagesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IListJobMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListJobMessagesResponse message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ListJobMessagesResponse.verify|verify} messages.
                 * @param message ListJobMessagesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IListJobMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListJobMessagesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListJobMessagesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ListJobMessagesResponse;

                /**
                 * Decodes a ListJobMessagesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListJobMessagesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ListJobMessagesResponse;

                /**
                 * Verifies a ListJobMessagesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListJobMessagesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListJobMessagesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ListJobMessagesResponse;

                /**
                 * Creates a plain object from a ListJobMessagesResponse message. Also converts values to other types if specified.
                 * @param message ListJobMessagesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ListJobMessagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListJobMessagesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListJobMessagesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a MetricsV1Beta3 */
            class MetricsV1Beta3 extends $protobuf.rpc.Service {

                /**
                 * Constructs a new MetricsV1Beta3 service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new MetricsV1Beta3 service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MetricsV1Beta3;

                /**
                 * Calls GetJobMetrics.
                 * @param request GetJobMetricsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and JobMetrics
                 */
                public getJobMetrics(request: google.dataflow.v1beta3.IGetJobMetricsRequest, callback: google.dataflow.v1beta3.MetricsV1Beta3.GetJobMetricsCallback): void;

                /**
                 * Calls GetJobMetrics.
                 * @param request GetJobMetricsRequest message or plain object
                 * @returns Promise
                 */
                public getJobMetrics(request: google.dataflow.v1beta3.IGetJobMetricsRequest): Promise<google.dataflow.v1beta3.JobMetrics>;

                /**
                 * Calls GetJobExecutionDetails.
                 * @param request GetJobExecutionDetailsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and JobExecutionDetails
                 */
                public getJobExecutionDetails(request: google.dataflow.v1beta3.IGetJobExecutionDetailsRequest, callback: google.dataflow.v1beta3.MetricsV1Beta3.GetJobExecutionDetailsCallback): void;

                /**
                 * Calls GetJobExecutionDetails.
                 * @param request GetJobExecutionDetailsRequest message or plain object
                 * @returns Promise
                 */
                public getJobExecutionDetails(request: google.dataflow.v1beta3.IGetJobExecutionDetailsRequest): Promise<google.dataflow.v1beta3.JobExecutionDetails>;

                /**
                 * Calls GetStageExecutionDetails.
                 * @param request GetStageExecutionDetailsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and StageExecutionDetails
                 */
                public getStageExecutionDetails(request: google.dataflow.v1beta3.IGetStageExecutionDetailsRequest, callback: google.dataflow.v1beta3.MetricsV1Beta3.GetStageExecutionDetailsCallback): void;

                /**
                 * Calls GetStageExecutionDetails.
                 * @param request GetStageExecutionDetailsRequest message or plain object
                 * @returns Promise
                 */
                public getStageExecutionDetails(request: google.dataflow.v1beta3.IGetStageExecutionDetailsRequest): Promise<google.dataflow.v1beta3.StageExecutionDetails>;
            }

            namespace MetricsV1Beta3 {

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.MetricsV1Beta3|getJobMetrics}.
                 * @param error Error, if any
                 * @param [response] JobMetrics
                 */
                type GetJobMetricsCallback = (error: (Error|null), response?: google.dataflow.v1beta3.JobMetrics) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.MetricsV1Beta3|getJobExecutionDetails}.
                 * @param error Error, if any
                 * @param [response] JobExecutionDetails
                 */
                type GetJobExecutionDetailsCallback = (error: (Error|null), response?: google.dataflow.v1beta3.JobExecutionDetails) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.MetricsV1Beta3|getStageExecutionDetails}.
                 * @param error Error, if any
                 * @param [response] StageExecutionDetails
                 */
                type GetStageExecutionDetailsCallback = (error: (Error|null), response?: google.dataflow.v1beta3.StageExecutionDetails) => void;
            }

            /** Properties of a MetricStructuredName. */
            interface IMetricStructuredName {

                /** MetricStructuredName origin */
                origin?: (string|null);

                /** MetricStructuredName name */
                name?: (string|null);

                /** MetricStructuredName context */
                context?: ({ [k: string]: string }|null);
            }

            /** Represents a MetricStructuredName. */
            class MetricStructuredName implements IMetricStructuredName {

                /**
                 * Constructs a new MetricStructuredName.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IMetricStructuredName);

                /** MetricStructuredName origin. */
                public origin: string;

                /** MetricStructuredName name. */
                public name: string;

                /** MetricStructuredName context. */
                public context: { [k: string]: string };

                /**
                 * Creates a new MetricStructuredName instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MetricStructuredName instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IMetricStructuredName): google.dataflow.v1beta3.MetricStructuredName;

                /**
                 * Encodes the specified MetricStructuredName message. Does not implicitly {@link google.dataflow.v1beta3.MetricStructuredName.verify|verify} messages.
                 * @param message MetricStructuredName message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IMetricStructuredName, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MetricStructuredName message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.MetricStructuredName.verify|verify} messages.
                 * @param message MetricStructuredName message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IMetricStructuredName, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MetricStructuredName message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MetricStructuredName
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.MetricStructuredName;

                /**
                 * Decodes a MetricStructuredName message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MetricStructuredName
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.MetricStructuredName;

                /**
                 * Verifies a MetricStructuredName message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MetricStructuredName message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MetricStructuredName
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.MetricStructuredName;

                /**
                 * Creates a plain object from a MetricStructuredName message. Also converts values to other types if specified.
                 * @param message MetricStructuredName
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.MetricStructuredName, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MetricStructuredName to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MetricStructuredName
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MetricUpdate. */
            interface IMetricUpdate {

                /** MetricUpdate name */
                name?: (google.dataflow.v1beta3.IMetricStructuredName|null);

                /** MetricUpdate kind */
                kind?: (string|null);

                /** MetricUpdate cumulative */
                cumulative?: (boolean|null);

                /** MetricUpdate scalar */
                scalar?: (google.protobuf.IValue|null);

                /** MetricUpdate meanSum */
                meanSum?: (google.protobuf.IValue|null);

                /** MetricUpdate meanCount */
                meanCount?: (google.protobuf.IValue|null);

                /** MetricUpdate set */
                set?: (google.protobuf.IValue|null);

                /** MetricUpdate trie */
                trie?: (google.protobuf.IValue|null);

                /** MetricUpdate distribution */
                distribution?: (google.protobuf.IValue|null);

                /** MetricUpdate gauge */
                gauge?: (google.protobuf.IValue|null);

                /** MetricUpdate internal */
                internal?: (google.protobuf.IValue|null);

                /** MetricUpdate updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a MetricUpdate. */
            class MetricUpdate implements IMetricUpdate {

                /**
                 * Constructs a new MetricUpdate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IMetricUpdate);

                /** MetricUpdate name. */
                public name?: (google.dataflow.v1beta3.IMetricStructuredName|null);

                /** MetricUpdate kind. */
                public kind: string;

                /** MetricUpdate cumulative. */
                public cumulative: boolean;

                /** MetricUpdate scalar. */
                public scalar?: (google.protobuf.IValue|null);

                /** MetricUpdate meanSum. */
                public meanSum?: (google.protobuf.IValue|null);

                /** MetricUpdate meanCount. */
                public meanCount?: (google.protobuf.IValue|null);

                /** MetricUpdate set. */
                public set?: (google.protobuf.IValue|null);

                /** MetricUpdate trie. */
                public trie?: (google.protobuf.IValue|null);

                /** MetricUpdate distribution. */
                public distribution?: (google.protobuf.IValue|null);

                /** MetricUpdate gauge. */
                public gauge?: (google.protobuf.IValue|null);

                /** MetricUpdate internal. */
                public internal?: (google.protobuf.IValue|null);

                /** MetricUpdate updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new MetricUpdate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MetricUpdate instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IMetricUpdate): google.dataflow.v1beta3.MetricUpdate;

                /**
                 * Encodes the specified MetricUpdate message. Does not implicitly {@link google.dataflow.v1beta3.MetricUpdate.verify|verify} messages.
                 * @param message MetricUpdate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IMetricUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MetricUpdate message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.MetricUpdate.verify|verify} messages.
                 * @param message MetricUpdate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IMetricUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MetricUpdate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MetricUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.MetricUpdate;

                /**
                 * Decodes a MetricUpdate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MetricUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.MetricUpdate;

                /**
                 * Verifies a MetricUpdate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MetricUpdate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MetricUpdate
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.MetricUpdate;

                /**
                 * Creates a plain object from a MetricUpdate message. Also converts values to other types if specified.
                 * @param message MetricUpdate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.MetricUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MetricUpdate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MetricUpdate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetJobMetricsRequest. */
            interface IGetJobMetricsRequest {

                /** GetJobMetricsRequest projectId */
                projectId?: (string|null);

                /** GetJobMetricsRequest jobId */
                jobId?: (string|null);

                /** GetJobMetricsRequest startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** GetJobMetricsRequest location */
                location?: (string|null);
            }

            /** Represents a GetJobMetricsRequest. */
            class GetJobMetricsRequest implements IGetJobMetricsRequest {

                /**
                 * Constructs a new GetJobMetricsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IGetJobMetricsRequest);

                /** GetJobMetricsRequest projectId. */
                public projectId: string;

                /** GetJobMetricsRequest jobId. */
                public jobId: string;

                /** GetJobMetricsRequest startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** GetJobMetricsRequest location. */
                public location: string;

                /**
                 * Creates a new GetJobMetricsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetJobMetricsRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IGetJobMetricsRequest): google.dataflow.v1beta3.GetJobMetricsRequest;

                /**
                 * Encodes the specified GetJobMetricsRequest message. Does not implicitly {@link google.dataflow.v1beta3.GetJobMetricsRequest.verify|verify} messages.
                 * @param message GetJobMetricsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IGetJobMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetJobMetricsRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.GetJobMetricsRequest.verify|verify} messages.
                 * @param message GetJobMetricsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IGetJobMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetJobMetricsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetJobMetricsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.GetJobMetricsRequest;

                /**
                 * Decodes a GetJobMetricsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetJobMetricsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.GetJobMetricsRequest;

                /**
                 * Verifies a GetJobMetricsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetJobMetricsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetJobMetricsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.GetJobMetricsRequest;

                /**
                 * Creates a plain object from a GetJobMetricsRequest message. Also converts values to other types if specified.
                 * @param message GetJobMetricsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.GetJobMetricsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetJobMetricsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetJobMetricsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a JobMetrics. */
            interface IJobMetrics {

                /** JobMetrics metricTime */
                metricTime?: (google.protobuf.ITimestamp|null);

                /** JobMetrics metrics */
                metrics?: (google.dataflow.v1beta3.IMetricUpdate[]|null);
            }

            /** Represents a JobMetrics. */
            class JobMetrics implements IJobMetrics {

                /**
                 * Constructs a new JobMetrics.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IJobMetrics);

                /** JobMetrics metricTime. */
                public metricTime?: (google.protobuf.ITimestamp|null);

                /** JobMetrics metrics. */
                public metrics: google.dataflow.v1beta3.IMetricUpdate[];

                /**
                 * Creates a new JobMetrics instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JobMetrics instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IJobMetrics): google.dataflow.v1beta3.JobMetrics;

                /**
                 * Encodes the specified JobMetrics message. Does not implicitly {@link google.dataflow.v1beta3.JobMetrics.verify|verify} messages.
                 * @param message JobMetrics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IJobMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified JobMetrics message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.JobMetrics.verify|verify} messages.
                 * @param message JobMetrics message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IJobMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JobMetrics message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JobMetrics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.JobMetrics;

                /**
                 * Decodes a JobMetrics message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns JobMetrics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.JobMetrics;

                /**
                 * Verifies a JobMetrics message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a JobMetrics message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns JobMetrics
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.JobMetrics;

                /**
                 * Creates a plain object from a JobMetrics message. Also converts values to other types if specified.
                 * @param message JobMetrics
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.JobMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this JobMetrics to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for JobMetrics
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetJobExecutionDetailsRequest. */
            interface IGetJobExecutionDetailsRequest {

                /** GetJobExecutionDetailsRequest projectId */
                projectId?: (string|null);

                /** GetJobExecutionDetailsRequest jobId */
                jobId?: (string|null);

                /** GetJobExecutionDetailsRequest location */
                location?: (string|null);

                /** GetJobExecutionDetailsRequest pageSize */
                pageSize?: (number|null);

                /** GetJobExecutionDetailsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a GetJobExecutionDetailsRequest. */
            class GetJobExecutionDetailsRequest implements IGetJobExecutionDetailsRequest {

                /**
                 * Constructs a new GetJobExecutionDetailsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IGetJobExecutionDetailsRequest);

                /** GetJobExecutionDetailsRequest projectId. */
                public projectId: string;

                /** GetJobExecutionDetailsRequest jobId. */
                public jobId: string;

                /** GetJobExecutionDetailsRequest location. */
                public location: string;

                /** GetJobExecutionDetailsRequest pageSize. */
                public pageSize: number;

                /** GetJobExecutionDetailsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new GetJobExecutionDetailsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetJobExecutionDetailsRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IGetJobExecutionDetailsRequest): google.dataflow.v1beta3.GetJobExecutionDetailsRequest;

                /**
                 * Encodes the specified GetJobExecutionDetailsRequest message. Does not implicitly {@link google.dataflow.v1beta3.GetJobExecutionDetailsRequest.verify|verify} messages.
                 * @param message GetJobExecutionDetailsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IGetJobExecutionDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetJobExecutionDetailsRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.GetJobExecutionDetailsRequest.verify|verify} messages.
                 * @param message GetJobExecutionDetailsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IGetJobExecutionDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetJobExecutionDetailsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetJobExecutionDetailsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.GetJobExecutionDetailsRequest;

                /**
                 * Decodes a GetJobExecutionDetailsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetJobExecutionDetailsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.GetJobExecutionDetailsRequest;

                /**
                 * Verifies a GetJobExecutionDetailsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetJobExecutionDetailsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetJobExecutionDetailsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.GetJobExecutionDetailsRequest;

                /**
                 * Creates a plain object from a GetJobExecutionDetailsRequest message. Also converts values to other types if specified.
                 * @param message GetJobExecutionDetailsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.GetJobExecutionDetailsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetJobExecutionDetailsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetJobExecutionDetailsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ProgressTimeseries. */
            interface IProgressTimeseries {

                /** ProgressTimeseries currentProgress */
                currentProgress?: (number|null);

                /** ProgressTimeseries dataPoints */
                dataPoints?: (google.dataflow.v1beta3.ProgressTimeseries.IPoint[]|null);
            }

            /** Represents a ProgressTimeseries. */
            class ProgressTimeseries implements IProgressTimeseries {

                /**
                 * Constructs a new ProgressTimeseries.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IProgressTimeseries);

                /** ProgressTimeseries currentProgress. */
                public currentProgress: number;

                /** ProgressTimeseries dataPoints. */
                public dataPoints: google.dataflow.v1beta3.ProgressTimeseries.IPoint[];

                /**
                 * Creates a new ProgressTimeseries instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProgressTimeseries instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IProgressTimeseries): google.dataflow.v1beta3.ProgressTimeseries;

                /**
                 * Encodes the specified ProgressTimeseries message. Does not implicitly {@link google.dataflow.v1beta3.ProgressTimeseries.verify|verify} messages.
                 * @param message ProgressTimeseries message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IProgressTimeseries, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProgressTimeseries message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ProgressTimeseries.verify|verify} messages.
                 * @param message ProgressTimeseries message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IProgressTimeseries, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProgressTimeseries message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProgressTimeseries
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ProgressTimeseries;

                /**
                 * Decodes a ProgressTimeseries message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProgressTimeseries
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ProgressTimeseries;

                /**
                 * Verifies a ProgressTimeseries message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProgressTimeseries message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProgressTimeseries
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ProgressTimeseries;

                /**
                 * Creates a plain object from a ProgressTimeseries message. Also converts values to other types if specified.
                 * @param message ProgressTimeseries
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ProgressTimeseries, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProgressTimeseries to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProgressTimeseries
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ProgressTimeseries {

                /** Properties of a Point. */
                interface IPoint {

                    /** Point time */
                    time?: (google.protobuf.ITimestamp|null);

                    /** Point value */
                    value?: (number|null);
                }

                /** Represents a Point. */
                class Point implements IPoint {

                    /**
                     * Constructs a new Point.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.dataflow.v1beta3.ProgressTimeseries.IPoint);

                    /** Point time. */
                    public time?: (google.protobuf.ITimestamp|null);

                    /** Point value. */
                    public value: number;

                    /**
                     * Creates a new Point instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Point instance
                     */
                    public static create(properties?: google.dataflow.v1beta3.ProgressTimeseries.IPoint): google.dataflow.v1beta3.ProgressTimeseries.Point;

                    /**
                     * Encodes the specified Point message. Does not implicitly {@link google.dataflow.v1beta3.ProgressTimeseries.Point.verify|verify} messages.
                     * @param message Point message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.dataflow.v1beta3.ProgressTimeseries.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Point message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ProgressTimeseries.Point.verify|verify} messages.
                     * @param message Point message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.dataflow.v1beta3.ProgressTimeseries.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Point message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ProgressTimeseries.Point;

                    /**
                     * Decodes a Point message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ProgressTimeseries.Point;

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
                    public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ProgressTimeseries.Point;

                    /**
                     * Creates a plain object from a Point message. Also converts values to other types if specified.
                     * @param message Point
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.dataflow.v1beta3.ProgressTimeseries.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            }

            /** Properties of a StragglerInfo. */
            interface IStragglerInfo {

                /** StragglerInfo startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** StragglerInfo causes */
                causes?: ({ [k: string]: google.dataflow.v1beta3.StragglerInfo.IStragglerDebuggingInfo }|null);
            }

            /** Represents a StragglerInfo. */
            class StragglerInfo implements IStragglerInfo {

                /**
                 * Constructs a new StragglerInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStragglerInfo);

                /** StragglerInfo startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** StragglerInfo causes. */
                public causes: { [k: string]: google.dataflow.v1beta3.StragglerInfo.IStragglerDebuggingInfo };

                /**
                 * Creates a new StragglerInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StragglerInfo instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStragglerInfo): google.dataflow.v1beta3.StragglerInfo;

                /**
                 * Encodes the specified StragglerInfo message. Does not implicitly {@link google.dataflow.v1beta3.StragglerInfo.verify|verify} messages.
                 * @param message StragglerInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStragglerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StragglerInfo message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StragglerInfo.verify|verify} messages.
                 * @param message StragglerInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStragglerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StragglerInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StragglerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StragglerInfo;

                /**
                 * Decodes a StragglerInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StragglerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StragglerInfo;

                /**
                 * Verifies a StragglerInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StragglerInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StragglerInfo
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StragglerInfo;

                /**
                 * Creates a plain object from a StragglerInfo message. Also converts values to other types if specified.
                 * @param message StragglerInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StragglerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StragglerInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StragglerInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace StragglerInfo {

                /** Properties of a StragglerDebuggingInfo. */
                interface IStragglerDebuggingInfo {

                    /** StragglerDebuggingInfo hotKey */
                    hotKey?: (google.dataflow.v1beta3.IHotKeyDebuggingInfo|null);
                }

                /** Represents a StragglerDebuggingInfo. */
                class StragglerDebuggingInfo implements IStragglerDebuggingInfo {

                    /**
                     * Constructs a new StragglerDebuggingInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.dataflow.v1beta3.StragglerInfo.IStragglerDebuggingInfo);

                    /** StragglerDebuggingInfo hotKey. */
                    public hotKey?: (google.dataflow.v1beta3.IHotKeyDebuggingInfo|null);

                    /** StragglerDebuggingInfo stragglerDebuggingInfoValue. */
                    public stragglerDebuggingInfoValue?: "hotKey";

                    /**
                     * Creates a new StragglerDebuggingInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StragglerDebuggingInfo instance
                     */
                    public static create(properties?: google.dataflow.v1beta3.StragglerInfo.IStragglerDebuggingInfo): google.dataflow.v1beta3.StragglerInfo.StragglerDebuggingInfo;

                    /**
                     * Encodes the specified StragglerDebuggingInfo message. Does not implicitly {@link google.dataflow.v1beta3.StragglerInfo.StragglerDebuggingInfo.verify|verify} messages.
                     * @param message StragglerDebuggingInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.dataflow.v1beta3.StragglerInfo.IStragglerDebuggingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StragglerDebuggingInfo message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StragglerInfo.StragglerDebuggingInfo.verify|verify} messages.
                     * @param message StragglerDebuggingInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.dataflow.v1beta3.StragglerInfo.IStragglerDebuggingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StragglerDebuggingInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StragglerDebuggingInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StragglerInfo.StragglerDebuggingInfo;

                    /**
                     * Decodes a StragglerDebuggingInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StragglerDebuggingInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StragglerInfo.StragglerDebuggingInfo;

                    /**
                     * Verifies a StragglerDebuggingInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StragglerDebuggingInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StragglerDebuggingInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StragglerInfo.StragglerDebuggingInfo;

                    /**
                     * Creates a plain object from a StragglerDebuggingInfo message. Also converts values to other types if specified.
                     * @param message StragglerDebuggingInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.dataflow.v1beta3.StragglerInfo.StragglerDebuggingInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StragglerDebuggingInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StragglerDebuggingInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a StreamingStragglerInfo. */
            interface IStreamingStragglerInfo {

                /** StreamingStragglerInfo startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** StreamingStragglerInfo endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** StreamingStragglerInfo workerName */
                workerName?: (string|null);

                /** StreamingStragglerInfo dataWatermarkLag */
                dataWatermarkLag?: (google.protobuf.IDuration|null);

                /** StreamingStragglerInfo systemWatermarkLag */
                systemWatermarkLag?: (google.protobuf.IDuration|null);
            }

            /** Represents a StreamingStragglerInfo. */
            class StreamingStragglerInfo implements IStreamingStragglerInfo {

                /**
                 * Constructs a new StreamingStragglerInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStreamingStragglerInfo);

                /** StreamingStragglerInfo startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** StreamingStragglerInfo endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** StreamingStragglerInfo workerName. */
                public workerName: string;

                /** StreamingStragglerInfo dataWatermarkLag. */
                public dataWatermarkLag?: (google.protobuf.IDuration|null);

                /** StreamingStragglerInfo systemWatermarkLag. */
                public systemWatermarkLag?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new StreamingStragglerInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamingStragglerInfo instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStreamingStragglerInfo): google.dataflow.v1beta3.StreamingStragglerInfo;

                /**
                 * Encodes the specified StreamingStragglerInfo message. Does not implicitly {@link google.dataflow.v1beta3.StreamingStragglerInfo.verify|verify} messages.
                 * @param message StreamingStragglerInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStreamingStragglerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamingStragglerInfo message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StreamingStragglerInfo.verify|verify} messages.
                 * @param message StreamingStragglerInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStreamingStragglerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamingStragglerInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamingStragglerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StreamingStragglerInfo;

                /**
                 * Decodes a StreamingStragglerInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamingStragglerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StreamingStragglerInfo;

                /**
                 * Verifies a StreamingStragglerInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamingStragglerInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamingStragglerInfo
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StreamingStragglerInfo;

                /**
                 * Creates a plain object from a StreamingStragglerInfo message. Also converts values to other types if specified.
                 * @param message StreamingStragglerInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StreamingStragglerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamingStragglerInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StreamingStragglerInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Straggler. */
            interface IStraggler {

                /** Straggler batchStraggler */
                batchStraggler?: (google.dataflow.v1beta3.IStragglerInfo|null);

                /** Straggler streamingStraggler */
                streamingStraggler?: (google.dataflow.v1beta3.IStreamingStragglerInfo|null);
            }

            /** Represents a Straggler. */
            class Straggler implements IStraggler {

                /**
                 * Constructs a new Straggler.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStraggler);

                /** Straggler batchStraggler. */
                public batchStraggler?: (google.dataflow.v1beta3.IStragglerInfo|null);

                /** Straggler streamingStraggler. */
                public streamingStraggler?: (google.dataflow.v1beta3.IStreamingStragglerInfo|null);

                /** Straggler stragglerInfo. */
                public stragglerInfo?: ("batchStraggler"|"streamingStraggler");

                /**
                 * Creates a new Straggler instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Straggler instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStraggler): google.dataflow.v1beta3.Straggler;

                /**
                 * Encodes the specified Straggler message. Does not implicitly {@link google.dataflow.v1beta3.Straggler.verify|verify} messages.
                 * @param message Straggler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStraggler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Straggler message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.Straggler.verify|verify} messages.
                 * @param message Straggler message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStraggler, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Straggler message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Straggler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.Straggler;

                /**
                 * Decodes a Straggler message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Straggler
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.Straggler;

                /**
                 * Verifies a Straggler message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Straggler message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Straggler
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.Straggler;

                /**
                 * Creates a plain object from a Straggler message. Also converts values to other types if specified.
                 * @param message Straggler
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.Straggler, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Straggler to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Straggler
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a HotKeyDebuggingInfo. */
            interface IHotKeyDebuggingInfo {

                /** HotKeyDebuggingInfo detectedHotKeys */
                detectedHotKeys?: ({ [k: string]: google.dataflow.v1beta3.HotKeyDebuggingInfo.IHotKeyInfo }|null);
            }

            /** Represents a HotKeyDebuggingInfo. */
            class HotKeyDebuggingInfo implements IHotKeyDebuggingInfo {

                /**
                 * Constructs a new HotKeyDebuggingInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IHotKeyDebuggingInfo);

                /** HotKeyDebuggingInfo detectedHotKeys. */
                public detectedHotKeys: { [k: string]: google.dataflow.v1beta3.HotKeyDebuggingInfo.IHotKeyInfo };

                /**
                 * Creates a new HotKeyDebuggingInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HotKeyDebuggingInfo instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IHotKeyDebuggingInfo): google.dataflow.v1beta3.HotKeyDebuggingInfo;

                /**
                 * Encodes the specified HotKeyDebuggingInfo message. Does not implicitly {@link google.dataflow.v1beta3.HotKeyDebuggingInfo.verify|verify} messages.
                 * @param message HotKeyDebuggingInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IHotKeyDebuggingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HotKeyDebuggingInfo message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.HotKeyDebuggingInfo.verify|verify} messages.
                 * @param message HotKeyDebuggingInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IHotKeyDebuggingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HotKeyDebuggingInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HotKeyDebuggingInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.HotKeyDebuggingInfo;

                /**
                 * Decodes a HotKeyDebuggingInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HotKeyDebuggingInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.HotKeyDebuggingInfo;

                /**
                 * Verifies a HotKeyDebuggingInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HotKeyDebuggingInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HotKeyDebuggingInfo
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.HotKeyDebuggingInfo;

                /**
                 * Creates a plain object from a HotKeyDebuggingInfo message. Also converts values to other types if specified.
                 * @param message HotKeyDebuggingInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.HotKeyDebuggingInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HotKeyDebuggingInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for HotKeyDebuggingInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace HotKeyDebuggingInfo {

                /** Properties of a HotKeyInfo. */
                interface IHotKeyInfo {

                    /** HotKeyInfo hotKeyAge */
                    hotKeyAge?: (google.protobuf.IDuration|null);

                    /** HotKeyInfo key */
                    key?: (string|null);

                    /** HotKeyInfo keyTruncated */
                    keyTruncated?: (boolean|null);
                }

                /** Represents a HotKeyInfo. */
                class HotKeyInfo implements IHotKeyInfo {

                    /**
                     * Constructs a new HotKeyInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.dataflow.v1beta3.HotKeyDebuggingInfo.IHotKeyInfo);

                    /** HotKeyInfo hotKeyAge. */
                    public hotKeyAge?: (google.protobuf.IDuration|null);

                    /** HotKeyInfo key. */
                    public key: string;

                    /** HotKeyInfo keyTruncated. */
                    public keyTruncated: boolean;

                    /**
                     * Creates a new HotKeyInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HotKeyInfo instance
                     */
                    public static create(properties?: google.dataflow.v1beta3.HotKeyDebuggingInfo.IHotKeyInfo): google.dataflow.v1beta3.HotKeyDebuggingInfo.HotKeyInfo;

                    /**
                     * Encodes the specified HotKeyInfo message. Does not implicitly {@link google.dataflow.v1beta3.HotKeyDebuggingInfo.HotKeyInfo.verify|verify} messages.
                     * @param message HotKeyInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.dataflow.v1beta3.HotKeyDebuggingInfo.IHotKeyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HotKeyInfo message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.HotKeyDebuggingInfo.HotKeyInfo.verify|verify} messages.
                     * @param message HotKeyInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.dataflow.v1beta3.HotKeyDebuggingInfo.IHotKeyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HotKeyInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HotKeyInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.HotKeyDebuggingInfo.HotKeyInfo;

                    /**
                     * Decodes a HotKeyInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HotKeyInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.HotKeyDebuggingInfo.HotKeyInfo;

                    /**
                     * Verifies a HotKeyInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HotKeyInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HotKeyInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.HotKeyDebuggingInfo.HotKeyInfo;

                    /**
                     * Creates a plain object from a HotKeyInfo message. Also converts values to other types if specified.
                     * @param message HotKeyInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.dataflow.v1beta3.HotKeyDebuggingInfo.HotKeyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HotKeyInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HotKeyInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a StragglerSummary. */
            interface IStragglerSummary {

                /** StragglerSummary totalStragglerCount */
                totalStragglerCount?: (number|Long|string|null);

                /** StragglerSummary stragglerCauseCount */
                stragglerCauseCount?: ({ [k: string]: (number|Long|string) }|null);

                /** StragglerSummary recentStragglers */
                recentStragglers?: (google.dataflow.v1beta3.IStraggler[]|null);
            }

            /** Represents a StragglerSummary. */
            class StragglerSummary implements IStragglerSummary {

                /**
                 * Constructs a new StragglerSummary.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStragglerSummary);

                /** StragglerSummary totalStragglerCount. */
                public totalStragglerCount: (number|Long|string);

                /** StragglerSummary stragglerCauseCount. */
                public stragglerCauseCount: { [k: string]: (number|Long|string) };

                /** StragglerSummary recentStragglers. */
                public recentStragglers: google.dataflow.v1beta3.IStraggler[];

                /**
                 * Creates a new StragglerSummary instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StragglerSummary instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStragglerSummary): google.dataflow.v1beta3.StragglerSummary;

                /**
                 * Encodes the specified StragglerSummary message. Does not implicitly {@link google.dataflow.v1beta3.StragglerSummary.verify|verify} messages.
                 * @param message StragglerSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStragglerSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StragglerSummary message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StragglerSummary.verify|verify} messages.
                 * @param message StragglerSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStragglerSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StragglerSummary message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StragglerSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StragglerSummary;

                /**
                 * Decodes a StragglerSummary message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StragglerSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StragglerSummary;

                /**
                 * Verifies a StragglerSummary message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StragglerSummary message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StragglerSummary
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StragglerSummary;

                /**
                 * Creates a plain object from a StragglerSummary message. Also converts values to other types if specified.
                 * @param message StragglerSummary
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StragglerSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StragglerSummary to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StragglerSummary
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** ExecutionState enum. */
            enum ExecutionState {
                EXECUTION_STATE_UNKNOWN = 0,
                EXECUTION_STATE_NOT_STARTED = 1,
                EXECUTION_STATE_RUNNING = 2,
                EXECUTION_STATE_SUCCEEDED = 3,
                EXECUTION_STATE_FAILED = 4,
                EXECUTION_STATE_CANCELLED = 5
            }

            /** Properties of a StageSummary. */
            interface IStageSummary {

                /** StageSummary stageId */
                stageId?: (string|null);

                /** StageSummary state */
                state?: (google.dataflow.v1beta3.ExecutionState|keyof typeof google.dataflow.v1beta3.ExecutionState|null);

                /** StageSummary startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** StageSummary endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** StageSummary progress */
                progress?: (google.dataflow.v1beta3.IProgressTimeseries|null);

                /** StageSummary metrics */
                metrics?: (google.dataflow.v1beta3.IMetricUpdate[]|null);

                /** StageSummary stragglerSummary */
                stragglerSummary?: (google.dataflow.v1beta3.IStragglerSummary|null);
            }

            /** Represents a StageSummary. */
            class StageSummary implements IStageSummary {

                /**
                 * Constructs a new StageSummary.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStageSummary);

                /** StageSummary stageId. */
                public stageId: string;

                /** StageSummary state. */
                public state: (google.dataflow.v1beta3.ExecutionState|keyof typeof google.dataflow.v1beta3.ExecutionState);

                /** StageSummary startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** StageSummary endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** StageSummary progress. */
                public progress?: (google.dataflow.v1beta3.IProgressTimeseries|null);

                /** StageSummary metrics. */
                public metrics: google.dataflow.v1beta3.IMetricUpdate[];

                /** StageSummary stragglerSummary. */
                public stragglerSummary?: (google.dataflow.v1beta3.IStragglerSummary|null);

                /**
                 * Creates a new StageSummary instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StageSummary instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStageSummary): google.dataflow.v1beta3.StageSummary;

                /**
                 * Encodes the specified StageSummary message. Does not implicitly {@link google.dataflow.v1beta3.StageSummary.verify|verify} messages.
                 * @param message StageSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStageSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StageSummary message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StageSummary.verify|verify} messages.
                 * @param message StageSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStageSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StageSummary message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StageSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StageSummary;

                /**
                 * Decodes a StageSummary message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StageSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StageSummary;

                /**
                 * Verifies a StageSummary message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StageSummary message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StageSummary
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StageSummary;

                /**
                 * Creates a plain object from a StageSummary message. Also converts values to other types if specified.
                 * @param message StageSummary
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StageSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StageSummary to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StageSummary
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a JobExecutionDetails. */
            interface IJobExecutionDetails {

                /** JobExecutionDetails stages */
                stages?: (google.dataflow.v1beta3.IStageSummary[]|null);

                /** JobExecutionDetails nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a JobExecutionDetails. */
            class JobExecutionDetails implements IJobExecutionDetails {

                /**
                 * Constructs a new JobExecutionDetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IJobExecutionDetails);

                /** JobExecutionDetails stages. */
                public stages: google.dataflow.v1beta3.IStageSummary[];

                /** JobExecutionDetails nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new JobExecutionDetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns JobExecutionDetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IJobExecutionDetails): google.dataflow.v1beta3.JobExecutionDetails;

                /**
                 * Encodes the specified JobExecutionDetails message. Does not implicitly {@link google.dataflow.v1beta3.JobExecutionDetails.verify|verify} messages.
                 * @param message JobExecutionDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IJobExecutionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified JobExecutionDetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.JobExecutionDetails.verify|verify} messages.
                 * @param message JobExecutionDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IJobExecutionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a JobExecutionDetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns JobExecutionDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.JobExecutionDetails;

                /**
                 * Decodes a JobExecutionDetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns JobExecutionDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.JobExecutionDetails;

                /**
                 * Verifies a JobExecutionDetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a JobExecutionDetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns JobExecutionDetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.JobExecutionDetails;

                /**
                 * Creates a plain object from a JobExecutionDetails message. Also converts values to other types if specified.
                 * @param message JobExecutionDetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.JobExecutionDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this JobExecutionDetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for JobExecutionDetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetStageExecutionDetailsRequest. */
            interface IGetStageExecutionDetailsRequest {

                /** GetStageExecutionDetailsRequest projectId */
                projectId?: (string|null);

                /** GetStageExecutionDetailsRequest jobId */
                jobId?: (string|null);

                /** GetStageExecutionDetailsRequest location */
                location?: (string|null);

                /** GetStageExecutionDetailsRequest stageId */
                stageId?: (string|null);

                /** GetStageExecutionDetailsRequest pageSize */
                pageSize?: (number|null);

                /** GetStageExecutionDetailsRequest pageToken */
                pageToken?: (string|null);

                /** GetStageExecutionDetailsRequest startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** GetStageExecutionDetailsRequest endTime */
                endTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a GetStageExecutionDetailsRequest. */
            class GetStageExecutionDetailsRequest implements IGetStageExecutionDetailsRequest {

                /**
                 * Constructs a new GetStageExecutionDetailsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IGetStageExecutionDetailsRequest);

                /** GetStageExecutionDetailsRequest projectId. */
                public projectId: string;

                /** GetStageExecutionDetailsRequest jobId. */
                public jobId: string;

                /** GetStageExecutionDetailsRequest location. */
                public location: string;

                /** GetStageExecutionDetailsRequest stageId. */
                public stageId: string;

                /** GetStageExecutionDetailsRequest pageSize. */
                public pageSize: number;

                /** GetStageExecutionDetailsRequest pageToken. */
                public pageToken: string;

                /** GetStageExecutionDetailsRequest startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** GetStageExecutionDetailsRequest endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new GetStageExecutionDetailsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetStageExecutionDetailsRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IGetStageExecutionDetailsRequest): google.dataflow.v1beta3.GetStageExecutionDetailsRequest;

                /**
                 * Encodes the specified GetStageExecutionDetailsRequest message. Does not implicitly {@link google.dataflow.v1beta3.GetStageExecutionDetailsRequest.verify|verify} messages.
                 * @param message GetStageExecutionDetailsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IGetStageExecutionDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetStageExecutionDetailsRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.GetStageExecutionDetailsRequest.verify|verify} messages.
                 * @param message GetStageExecutionDetailsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IGetStageExecutionDetailsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetStageExecutionDetailsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetStageExecutionDetailsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.GetStageExecutionDetailsRequest;

                /**
                 * Decodes a GetStageExecutionDetailsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetStageExecutionDetailsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.GetStageExecutionDetailsRequest;

                /**
                 * Verifies a GetStageExecutionDetailsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetStageExecutionDetailsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetStageExecutionDetailsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.GetStageExecutionDetailsRequest;

                /**
                 * Creates a plain object from a GetStageExecutionDetailsRequest message. Also converts values to other types if specified.
                 * @param message GetStageExecutionDetailsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.GetStageExecutionDetailsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetStageExecutionDetailsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetStageExecutionDetailsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WorkItemDetails. */
            interface IWorkItemDetails {

                /** WorkItemDetails taskId */
                taskId?: (string|null);

                /** WorkItemDetails attemptId */
                attemptId?: (string|null);

                /** WorkItemDetails startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** WorkItemDetails endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** WorkItemDetails state */
                state?: (google.dataflow.v1beta3.ExecutionState|keyof typeof google.dataflow.v1beta3.ExecutionState|null);

                /** WorkItemDetails progress */
                progress?: (google.dataflow.v1beta3.IProgressTimeseries|null);

                /** WorkItemDetails metrics */
                metrics?: (google.dataflow.v1beta3.IMetricUpdate[]|null);

                /** WorkItemDetails stragglerInfo */
                stragglerInfo?: (google.dataflow.v1beta3.IStragglerInfo|null);
            }

            /** Represents a WorkItemDetails. */
            class WorkItemDetails implements IWorkItemDetails {

                /**
                 * Constructs a new WorkItemDetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IWorkItemDetails);

                /** WorkItemDetails taskId. */
                public taskId: string;

                /** WorkItemDetails attemptId. */
                public attemptId: string;

                /** WorkItemDetails startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** WorkItemDetails endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** WorkItemDetails state. */
                public state: (google.dataflow.v1beta3.ExecutionState|keyof typeof google.dataflow.v1beta3.ExecutionState);

                /** WorkItemDetails progress. */
                public progress?: (google.dataflow.v1beta3.IProgressTimeseries|null);

                /** WorkItemDetails metrics. */
                public metrics: google.dataflow.v1beta3.IMetricUpdate[];

                /** WorkItemDetails stragglerInfo. */
                public stragglerInfo?: (google.dataflow.v1beta3.IStragglerInfo|null);

                /**
                 * Creates a new WorkItemDetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkItemDetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IWorkItemDetails): google.dataflow.v1beta3.WorkItemDetails;

                /**
                 * Encodes the specified WorkItemDetails message. Does not implicitly {@link google.dataflow.v1beta3.WorkItemDetails.verify|verify} messages.
                 * @param message WorkItemDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IWorkItemDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkItemDetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.WorkItemDetails.verify|verify} messages.
                 * @param message WorkItemDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IWorkItemDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkItemDetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkItemDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.WorkItemDetails;

                /**
                 * Decodes a WorkItemDetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkItemDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.WorkItemDetails;

                /**
                 * Verifies a WorkItemDetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkItemDetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkItemDetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.WorkItemDetails;

                /**
                 * Creates a plain object from a WorkItemDetails message. Also converts values to other types if specified.
                 * @param message WorkItemDetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.WorkItemDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkItemDetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WorkItemDetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WorkerDetails. */
            interface IWorkerDetails {

                /** WorkerDetails workerName */
                workerName?: (string|null);

                /** WorkerDetails workItems */
                workItems?: (google.dataflow.v1beta3.IWorkItemDetails[]|null);
            }

            /** Represents a WorkerDetails. */
            class WorkerDetails implements IWorkerDetails {

                /**
                 * Constructs a new WorkerDetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IWorkerDetails);

                /** WorkerDetails workerName. */
                public workerName: string;

                /** WorkerDetails workItems. */
                public workItems: google.dataflow.v1beta3.IWorkItemDetails[];

                /**
                 * Creates a new WorkerDetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkerDetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IWorkerDetails): google.dataflow.v1beta3.WorkerDetails;

                /**
                 * Encodes the specified WorkerDetails message. Does not implicitly {@link google.dataflow.v1beta3.WorkerDetails.verify|verify} messages.
                 * @param message WorkerDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IWorkerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkerDetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.WorkerDetails.verify|verify} messages.
                 * @param message WorkerDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IWorkerDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkerDetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkerDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.WorkerDetails;

                /**
                 * Decodes a WorkerDetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkerDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.WorkerDetails;

                /**
                 * Verifies a WorkerDetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkerDetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkerDetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.WorkerDetails;

                /**
                 * Creates a plain object from a WorkerDetails message. Also converts values to other types if specified.
                 * @param message WorkerDetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.WorkerDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkerDetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WorkerDetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StageExecutionDetails. */
            interface IStageExecutionDetails {

                /** StageExecutionDetails workers */
                workers?: (google.dataflow.v1beta3.IWorkerDetails[]|null);

                /** StageExecutionDetails nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a StageExecutionDetails. */
            class StageExecutionDetails implements IStageExecutionDetails {

                /**
                 * Constructs a new StageExecutionDetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStageExecutionDetails);

                /** StageExecutionDetails workers. */
                public workers: google.dataflow.v1beta3.IWorkerDetails[];

                /** StageExecutionDetails nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new StageExecutionDetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StageExecutionDetails instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStageExecutionDetails): google.dataflow.v1beta3.StageExecutionDetails;

                /**
                 * Encodes the specified StageExecutionDetails message. Does not implicitly {@link google.dataflow.v1beta3.StageExecutionDetails.verify|verify} messages.
                 * @param message StageExecutionDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStageExecutionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StageExecutionDetails message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StageExecutionDetails.verify|verify} messages.
                 * @param message StageExecutionDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStageExecutionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StageExecutionDetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StageExecutionDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StageExecutionDetails;

                /**
                 * Decodes a StageExecutionDetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StageExecutionDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StageExecutionDetails;

                /**
                 * Verifies a StageExecutionDetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StageExecutionDetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StageExecutionDetails
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StageExecutionDetails;

                /**
                 * Creates a plain object from a StageExecutionDetails message. Also converts values to other types if specified.
                 * @param message StageExecutionDetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StageExecutionDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StageExecutionDetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StageExecutionDetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TopologyConfig. */
            interface ITopologyConfig {

                /** TopologyConfig computations */
                computations?: (google.dataflow.v1beta3.IComputationTopology[]|null);

                /** TopologyConfig dataDiskAssignments */
                dataDiskAssignments?: (google.dataflow.v1beta3.IDataDiskAssignment[]|null);

                /** TopologyConfig userStageToComputationNameMap */
                userStageToComputationNameMap?: ({ [k: string]: string }|null);

                /** TopologyConfig forwardingKeyBits */
                forwardingKeyBits?: (number|null);

                /** TopologyConfig persistentStateVersion */
                persistentStateVersion?: (number|null);
            }

            /** Represents a TopologyConfig. */
            class TopologyConfig implements ITopologyConfig {

                /**
                 * Constructs a new TopologyConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ITopologyConfig);

                /** TopologyConfig computations. */
                public computations: google.dataflow.v1beta3.IComputationTopology[];

                /** TopologyConfig dataDiskAssignments. */
                public dataDiskAssignments: google.dataflow.v1beta3.IDataDiskAssignment[];

                /** TopologyConfig userStageToComputationNameMap. */
                public userStageToComputationNameMap: { [k: string]: string };

                /** TopologyConfig forwardingKeyBits. */
                public forwardingKeyBits: number;

                /** TopologyConfig persistentStateVersion. */
                public persistentStateVersion: number;

                /**
                 * Creates a new TopologyConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TopologyConfig instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ITopologyConfig): google.dataflow.v1beta3.TopologyConfig;

                /**
                 * Encodes the specified TopologyConfig message. Does not implicitly {@link google.dataflow.v1beta3.TopologyConfig.verify|verify} messages.
                 * @param message TopologyConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ITopologyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TopologyConfig message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.TopologyConfig.verify|verify} messages.
                 * @param message TopologyConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ITopologyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TopologyConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TopologyConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.TopologyConfig;

                /**
                 * Decodes a TopologyConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TopologyConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.TopologyConfig;

                /**
                 * Verifies a TopologyConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TopologyConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TopologyConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.TopologyConfig;

                /**
                 * Creates a plain object from a TopologyConfig message. Also converts values to other types if specified.
                 * @param message TopologyConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.TopologyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TopologyConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TopologyConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PubsubLocation. */
            interface IPubsubLocation {

                /** PubsubLocation topic */
                topic?: (string|null);

                /** PubsubLocation subscription */
                subscription?: (string|null);

                /** PubsubLocation timestampLabel */
                timestampLabel?: (string|null);

                /** PubsubLocation idLabel */
                idLabel?: (string|null);

                /** PubsubLocation dropLateData */
                dropLateData?: (boolean|null);

                /** PubsubLocation trackingSubscription */
                trackingSubscription?: (string|null);

                /** PubsubLocation withAttributes */
                withAttributes?: (boolean|null);

                /** PubsubLocation dynamicDestinations */
                dynamicDestinations?: (boolean|null);
            }

            /** Represents a PubsubLocation. */
            class PubsubLocation implements IPubsubLocation {

                /**
                 * Constructs a new PubsubLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IPubsubLocation);

                /** PubsubLocation topic. */
                public topic: string;

                /** PubsubLocation subscription. */
                public subscription: string;

                /** PubsubLocation timestampLabel. */
                public timestampLabel: string;

                /** PubsubLocation idLabel. */
                public idLabel: string;

                /** PubsubLocation dropLateData. */
                public dropLateData: boolean;

                /** PubsubLocation trackingSubscription. */
                public trackingSubscription: string;

                /** PubsubLocation withAttributes. */
                public withAttributes: boolean;

                /** PubsubLocation dynamicDestinations. */
                public dynamicDestinations: boolean;

                /**
                 * Creates a new PubsubLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PubsubLocation instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IPubsubLocation): google.dataflow.v1beta3.PubsubLocation;

                /**
                 * Encodes the specified PubsubLocation message. Does not implicitly {@link google.dataflow.v1beta3.PubsubLocation.verify|verify} messages.
                 * @param message PubsubLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IPubsubLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PubsubLocation message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.PubsubLocation.verify|verify} messages.
                 * @param message PubsubLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IPubsubLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PubsubLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PubsubLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.PubsubLocation;

                /**
                 * Decodes a PubsubLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PubsubLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.PubsubLocation;

                /**
                 * Verifies a PubsubLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PubsubLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PubsubLocation
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.PubsubLocation;

                /**
                 * Creates a plain object from a PubsubLocation message. Also converts values to other types if specified.
                 * @param message PubsubLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.PubsubLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PubsubLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PubsubLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StreamingStageLocation. */
            interface IStreamingStageLocation {

                /** StreamingStageLocation streamId */
                streamId?: (string|null);
            }

            /** Represents a StreamingStageLocation. */
            class StreamingStageLocation implements IStreamingStageLocation {

                /**
                 * Constructs a new StreamingStageLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStreamingStageLocation);

                /** StreamingStageLocation streamId. */
                public streamId: string;

                /**
                 * Creates a new StreamingStageLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamingStageLocation instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStreamingStageLocation): google.dataflow.v1beta3.StreamingStageLocation;

                /**
                 * Encodes the specified StreamingStageLocation message. Does not implicitly {@link google.dataflow.v1beta3.StreamingStageLocation.verify|verify} messages.
                 * @param message StreamingStageLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStreamingStageLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamingStageLocation message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StreamingStageLocation.verify|verify} messages.
                 * @param message StreamingStageLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStreamingStageLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamingStageLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamingStageLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StreamingStageLocation;

                /**
                 * Decodes a StreamingStageLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamingStageLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StreamingStageLocation;

                /**
                 * Verifies a StreamingStageLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamingStageLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamingStageLocation
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StreamingStageLocation;

                /**
                 * Creates a plain object from a StreamingStageLocation message. Also converts values to other types if specified.
                 * @param message StreamingStageLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StreamingStageLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamingStageLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StreamingStageLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StreamingSideInputLocation. */
            interface IStreamingSideInputLocation {

                /** StreamingSideInputLocation tag */
                tag?: (string|null);

                /** StreamingSideInputLocation stateFamily */
                stateFamily?: (string|null);
            }

            /** Represents a StreamingSideInputLocation. */
            class StreamingSideInputLocation implements IStreamingSideInputLocation {

                /**
                 * Constructs a new StreamingSideInputLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStreamingSideInputLocation);

                /** StreamingSideInputLocation tag. */
                public tag: string;

                /** StreamingSideInputLocation stateFamily. */
                public stateFamily: string;

                /**
                 * Creates a new StreamingSideInputLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamingSideInputLocation instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStreamingSideInputLocation): google.dataflow.v1beta3.StreamingSideInputLocation;

                /**
                 * Encodes the specified StreamingSideInputLocation message. Does not implicitly {@link google.dataflow.v1beta3.StreamingSideInputLocation.verify|verify} messages.
                 * @param message StreamingSideInputLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStreamingSideInputLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamingSideInputLocation message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StreamingSideInputLocation.verify|verify} messages.
                 * @param message StreamingSideInputLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStreamingSideInputLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamingSideInputLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamingSideInputLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StreamingSideInputLocation;

                /**
                 * Decodes a StreamingSideInputLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamingSideInputLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StreamingSideInputLocation;

                /**
                 * Verifies a StreamingSideInputLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamingSideInputLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamingSideInputLocation
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StreamingSideInputLocation;

                /**
                 * Creates a plain object from a StreamingSideInputLocation message. Also converts values to other types if specified.
                 * @param message StreamingSideInputLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StreamingSideInputLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamingSideInputLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StreamingSideInputLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CustomSourceLocation. */
            interface ICustomSourceLocation {

                /** CustomSourceLocation stateful */
                stateful?: (boolean|null);
            }

            /** Represents a CustomSourceLocation. */
            class CustomSourceLocation implements ICustomSourceLocation {

                /**
                 * Constructs a new CustomSourceLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ICustomSourceLocation);

                /** CustomSourceLocation stateful. */
                public stateful: boolean;

                /**
                 * Creates a new CustomSourceLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustomSourceLocation instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ICustomSourceLocation): google.dataflow.v1beta3.CustomSourceLocation;

                /**
                 * Encodes the specified CustomSourceLocation message. Does not implicitly {@link google.dataflow.v1beta3.CustomSourceLocation.verify|verify} messages.
                 * @param message CustomSourceLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ICustomSourceLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CustomSourceLocation message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.CustomSourceLocation.verify|verify} messages.
                 * @param message CustomSourceLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ICustomSourceLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustomSourceLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CustomSourceLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.CustomSourceLocation;

                /**
                 * Decodes a CustomSourceLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CustomSourceLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.CustomSourceLocation;

                /**
                 * Verifies a CustomSourceLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CustomSourceLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CustomSourceLocation
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.CustomSourceLocation;

                /**
                 * Creates a plain object from a CustomSourceLocation message. Also converts values to other types if specified.
                 * @param message CustomSourceLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.CustomSourceLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CustomSourceLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CustomSourceLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StreamLocation. */
            interface IStreamLocation {

                /** StreamLocation streamingStageLocation */
                streamingStageLocation?: (google.dataflow.v1beta3.IStreamingStageLocation|null);

                /** StreamLocation pubsubLocation */
                pubsubLocation?: (google.dataflow.v1beta3.IPubsubLocation|null);

                /** StreamLocation sideInputLocation */
                sideInputLocation?: (google.dataflow.v1beta3.IStreamingSideInputLocation|null);

                /** StreamLocation customSourceLocation */
                customSourceLocation?: (google.dataflow.v1beta3.ICustomSourceLocation|null);
            }

            /** Represents a StreamLocation. */
            class StreamLocation implements IStreamLocation {

                /**
                 * Constructs a new StreamLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStreamLocation);

                /** StreamLocation streamingStageLocation. */
                public streamingStageLocation?: (google.dataflow.v1beta3.IStreamingStageLocation|null);

                /** StreamLocation pubsubLocation. */
                public pubsubLocation?: (google.dataflow.v1beta3.IPubsubLocation|null);

                /** StreamLocation sideInputLocation. */
                public sideInputLocation?: (google.dataflow.v1beta3.IStreamingSideInputLocation|null);

                /** StreamLocation customSourceLocation. */
                public customSourceLocation?: (google.dataflow.v1beta3.ICustomSourceLocation|null);

                /** StreamLocation location. */
                public location?: ("streamingStageLocation"|"pubsubLocation"|"sideInputLocation"|"customSourceLocation");

                /**
                 * Creates a new StreamLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamLocation instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStreamLocation): google.dataflow.v1beta3.StreamLocation;

                /**
                 * Encodes the specified StreamLocation message. Does not implicitly {@link google.dataflow.v1beta3.StreamLocation.verify|verify} messages.
                 * @param message StreamLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStreamLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamLocation message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StreamLocation.verify|verify} messages.
                 * @param message StreamLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStreamLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StreamLocation;

                /**
                 * Decodes a StreamLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StreamLocation;

                /**
                 * Verifies a StreamLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamLocation
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StreamLocation;

                /**
                 * Creates a plain object from a StreamLocation message. Also converts values to other types if specified.
                 * @param message StreamLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StreamLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StreamLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StateFamilyConfig. */
            interface IStateFamilyConfig {

                /** StateFamilyConfig stateFamily */
                stateFamily?: (string|null);

                /** StateFamilyConfig isRead */
                isRead?: (boolean|null);
            }

            /** Represents a StateFamilyConfig. */
            class StateFamilyConfig implements IStateFamilyConfig {

                /**
                 * Constructs a new StateFamilyConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStateFamilyConfig);

                /** StateFamilyConfig stateFamily. */
                public stateFamily: string;

                /** StateFamilyConfig isRead. */
                public isRead: boolean;

                /**
                 * Creates a new StateFamilyConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StateFamilyConfig instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStateFamilyConfig): google.dataflow.v1beta3.StateFamilyConfig;

                /**
                 * Encodes the specified StateFamilyConfig message. Does not implicitly {@link google.dataflow.v1beta3.StateFamilyConfig.verify|verify} messages.
                 * @param message StateFamilyConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStateFamilyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StateFamilyConfig message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StateFamilyConfig.verify|verify} messages.
                 * @param message StateFamilyConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStateFamilyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StateFamilyConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StateFamilyConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StateFamilyConfig;

                /**
                 * Decodes a StateFamilyConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StateFamilyConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StateFamilyConfig;

                /**
                 * Verifies a StateFamilyConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StateFamilyConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StateFamilyConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StateFamilyConfig;

                /**
                 * Creates a plain object from a StateFamilyConfig message. Also converts values to other types if specified.
                 * @param message StateFamilyConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StateFamilyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StateFamilyConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StateFamilyConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ComputationTopology. */
            interface IComputationTopology {

                /** ComputationTopology systemStageName */
                systemStageName?: (string|null);

                /** ComputationTopology computationId */
                computationId?: (string|null);

                /** ComputationTopology keyRanges */
                keyRanges?: (google.dataflow.v1beta3.IKeyRangeLocation[]|null);

                /** ComputationTopology inputs */
                inputs?: (google.dataflow.v1beta3.IStreamLocation[]|null);

                /** ComputationTopology outputs */
                outputs?: (google.dataflow.v1beta3.IStreamLocation[]|null);

                /** ComputationTopology stateFamilies */
                stateFamilies?: (google.dataflow.v1beta3.IStateFamilyConfig[]|null);
            }

            /** Represents a ComputationTopology. */
            class ComputationTopology implements IComputationTopology {

                /**
                 * Constructs a new ComputationTopology.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IComputationTopology);

                /** ComputationTopology systemStageName. */
                public systemStageName: string;

                /** ComputationTopology computationId. */
                public computationId: string;

                /** ComputationTopology keyRanges. */
                public keyRanges: google.dataflow.v1beta3.IKeyRangeLocation[];

                /** ComputationTopology inputs. */
                public inputs: google.dataflow.v1beta3.IStreamLocation[];

                /** ComputationTopology outputs. */
                public outputs: google.dataflow.v1beta3.IStreamLocation[];

                /** ComputationTopology stateFamilies. */
                public stateFamilies: google.dataflow.v1beta3.IStateFamilyConfig[];

                /**
                 * Creates a new ComputationTopology instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ComputationTopology instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IComputationTopology): google.dataflow.v1beta3.ComputationTopology;

                /**
                 * Encodes the specified ComputationTopology message. Does not implicitly {@link google.dataflow.v1beta3.ComputationTopology.verify|verify} messages.
                 * @param message ComputationTopology message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IComputationTopology, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ComputationTopology message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ComputationTopology.verify|verify} messages.
                 * @param message ComputationTopology message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IComputationTopology, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ComputationTopology message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ComputationTopology
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ComputationTopology;

                /**
                 * Decodes a ComputationTopology message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ComputationTopology
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ComputationTopology;

                /**
                 * Verifies a ComputationTopology message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ComputationTopology message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ComputationTopology
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ComputationTopology;

                /**
                 * Creates a plain object from a ComputationTopology message. Also converts values to other types if specified.
                 * @param message ComputationTopology
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ComputationTopology, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ComputationTopology to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ComputationTopology
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a KeyRangeLocation. */
            interface IKeyRangeLocation {

                /** KeyRangeLocation start */
                start?: (string|null);

                /** KeyRangeLocation end */
                end?: (string|null);

                /** KeyRangeLocation deliveryEndpoint */
                deliveryEndpoint?: (string|null);

                /** KeyRangeLocation dataDisk */
                dataDisk?: (string|null);

                /** KeyRangeLocation deprecatedPersistentDirectory */
                deprecatedPersistentDirectory?: (string|null);
            }

            /** Represents a KeyRangeLocation. */
            class KeyRangeLocation implements IKeyRangeLocation {

                /**
                 * Constructs a new KeyRangeLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IKeyRangeLocation);

                /** KeyRangeLocation start. */
                public start: string;

                /** KeyRangeLocation end. */
                public end: string;

                /** KeyRangeLocation deliveryEndpoint. */
                public deliveryEndpoint: string;

                /** KeyRangeLocation dataDisk. */
                public dataDisk: string;

                /** KeyRangeLocation deprecatedPersistentDirectory. */
                public deprecatedPersistentDirectory: string;

                /**
                 * Creates a new KeyRangeLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeyRangeLocation instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IKeyRangeLocation): google.dataflow.v1beta3.KeyRangeLocation;

                /**
                 * Encodes the specified KeyRangeLocation message. Does not implicitly {@link google.dataflow.v1beta3.KeyRangeLocation.verify|verify} messages.
                 * @param message KeyRangeLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IKeyRangeLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeyRangeLocation message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.KeyRangeLocation.verify|verify} messages.
                 * @param message KeyRangeLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IKeyRangeLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeyRangeLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeyRangeLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.KeyRangeLocation;

                /**
                 * Decodes a KeyRangeLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeyRangeLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.KeyRangeLocation;

                /**
                 * Verifies a KeyRangeLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeyRangeLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeyRangeLocation
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.KeyRangeLocation;

                /**
                 * Creates a plain object from a KeyRangeLocation message. Also converts values to other types if specified.
                 * @param message KeyRangeLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.KeyRangeLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeyRangeLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for KeyRangeLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MountedDataDisk. */
            interface IMountedDataDisk {

                /** MountedDataDisk dataDisk */
                dataDisk?: (string|null);
            }

            /** Represents a MountedDataDisk. */
            class MountedDataDisk implements IMountedDataDisk {

                /**
                 * Constructs a new MountedDataDisk.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IMountedDataDisk);

                /** MountedDataDisk dataDisk. */
                public dataDisk: string;

                /**
                 * Creates a new MountedDataDisk instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MountedDataDisk instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IMountedDataDisk): google.dataflow.v1beta3.MountedDataDisk;

                /**
                 * Encodes the specified MountedDataDisk message. Does not implicitly {@link google.dataflow.v1beta3.MountedDataDisk.verify|verify} messages.
                 * @param message MountedDataDisk message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IMountedDataDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MountedDataDisk message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.MountedDataDisk.verify|verify} messages.
                 * @param message MountedDataDisk message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IMountedDataDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MountedDataDisk message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MountedDataDisk
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.MountedDataDisk;

                /**
                 * Decodes a MountedDataDisk message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MountedDataDisk
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.MountedDataDisk;

                /**
                 * Verifies a MountedDataDisk message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MountedDataDisk message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MountedDataDisk
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.MountedDataDisk;

                /**
                 * Creates a plain object from a MountedDataDisk message. Also converts values to other types if specified.
                 * @param message MountedDataDisk
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.MountedDataDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MountedDataDisk to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MountedDataDisk
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DataDiskAssignment. */
            interface IDataDiskAssignment {

                /** DataDiskAssignment vmInstance */
                vmInstance?: (string|null);

                /** DataDiskAssignment dataDisks */
                dataDisks?: (string[]|null);
            }

            /** Represents a DataDiskAssignment. */
            class DataDiskAssignment implements IDataDiskAssignment {

                /**
                 * Constructs a new DataDiskAssignment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IDataDiskAssignment);

                /** DataDiskAssignment vmInstance. */
                public vmInstance: string;

                /** DataDiskAssignment dataDisks. */
                public dataDisks: string[];

                /**
                 * Creates a new DataDiskAssignment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DataDiskAssignment instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IDataDiskAssignment): google.dataflow.v1beta3.DataDiskAssignment;

                /**
                 * Encodes the specified DataDiskAssignment message. Does not implicitly {@link google.dataflow.v1beta3.DataDiskAssignment.verify|verify} messages.
                 * @param message DataDiskAssignment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IDataDiskAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DataDiskAssignment message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.DataDiskAssignment.verify|verify} messages.
                 * @param message DataDiskAssignment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IDataDiskAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DataDiskAssignment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DataDiskAssignment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.DataDiskAssignment;

                /**
                 * Decodes a DataDiskAssignment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DataDiskAssignment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.DataDiskAssignment;

                /**
                 * Verifies a DataDiskAssignment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DataDiskAssignment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DataDiskAssignment
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.DataDiskAssignment;

                /**
                 * Creates a plain object from a DataDiskAssignment message. Also converts values to other types if specified.
                 * @param message DataDiskAssignment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.DataDiskAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DataDiskAssignment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DataDiskAssignment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a KeyRangeDataDiskAssignment. */
            interface IKeyRangeDataDiskAssignment {

                /** KeyRangeDataDiskAssignment start */
                start?: (string|null);

                /** KeyRangeDataDiskAssignment end */
                end?: (string|null);

                /** KeyRangeDataDiskAssignment dataDisk */
                dataDisk?: (string|null);
            }

            /** Represents a KeyRangeDataDiskAssignment. */
            class KeyRangeDataDiskAssignment implements IKeyRangeDataDiskAssignment {

                /**
                 * Constructs a new KeyRangeDataDiskAssignment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IKeyRangeDataDiskAssignment);

                /** KeyRangeDataDiskAssignment start. */
                public start: string;

                /** KeyRangeDataDiskAssignment end. */
                public end: string;

                /** KeyRangeDataDiskAssignment dataDisk. */
                public dataDisk: string;

                /**
                 * Creates a new KeyRangeDataDiskAssignment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeyRangeDataDiskAssignment instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IKeyRangeDataDiskAssignment): google.dataflow.v1beta3.KeyRangeDataDiskAssignment;

                /**
                 * Encodes the specified KeyRangeDataDiskAssignment message. Does not implicitly {@link google.dataflow.v1beta3.KeyRangeDataDiskAssignment.verify|verify} messages.
                 * @param message KeyRangeDataDiskAssignment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IKeyRangeDataDiskAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeyRangeDataDiskAssignment message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.KeyRangeDataDiskAssignment.verify|verify} messages.
                 * @param message KeyRangeDataDiskAssignment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IKeyRangeDataDiskAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeyRangeDataDiskAssignment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeyRangeDataDiskAssignment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.KeyRangeDataDiskAssignment;

                /**
                 * Decodes a KeyRangeDataDiskAssignment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeyRangeDataDiskAssignment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.KeyRangeDataDiskAssignment;

                /**
                 * Verifies a KeyRangeDataDiskAssignment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeyRangeDataDiskAssignment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeyRangeDataDiskAssignment
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.KeyRangeDataDiskAssignment;

                /**
                 * Creates a plain object from a KeyRangeDataDiskAssignment message. Also converts values to other types if specified.
                 * @param message KeyRangeDataDiskAssignment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.KeyRangeDataDiskAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeyRangeDataDiskAssignment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for KeyRangeDataDiskAssignment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StreamingComputationRanges. */
            interface IStreamingComputationRanges {

                /** StreamingComputationRanges computationId */
                computationId?: (string|null);

                /** StreamingComputationRanges rangeAssignments */
                rangeAssignments?: (google.dataflow.v1beta3.IKeyRangeDataDiskAssignment[]|null);
            }

            /** Represents a StreamingComputationRanges. */
            class StreamingComputationRanges implements IStreamingComputationRanges {

                /**
                 * Constructs a new StreamingComputationRanges.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStreamingComputationRanges);

                /** StreamingComputationRanges computationId. */
                public computationId: string;

                /** StreamingComputationRanges rangeAssignments. */
                public rangeAssignments: google.dataflow.v1beta3.IKeyRangeDataDiskAssignment[];

                /**
                 * Creates a new StreamingComputationRanges instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamingComputationRanges instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStreamingComputationRanges): google.dataflow.v1beta3.StreamingComputationRanges;

                /**
                 * Encodes the specified StreamingComputationRanges message. Does not implicitly {@link google.dataflow.v1beta3.StreamingComputationRanges.verify|verify} messages.
                 * @param message StreamingComputationRanges message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStreamingComputationRanges, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamingComputationRanges message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StreamingComputationRanges.verify|verify} messages.
                 * @param message StreamingComputationRanges message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStreamingComputationRanges, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamingComputationRanges message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamingComputationRanges
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StreamingComputationRanges;

                /**
                 * Decodes a StreamingComputationRanges message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamingComputationRanges
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StreamingComputationRanges;

                /**
                 * Verifies a StreamingComputationRanges message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamingComputationRanges message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamingComputationRanges
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StreamingComputationRanges;

                /**
                 * Creates a plain object from a StreamingComputationRanges message. Also converts values to other types if specified.
                 * @param message StreamingComputationRanges
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StreamingComputationRanges, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamingComputationRanges to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StreamingComputationRanges
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StreamingApplianceSnapshotConfig. */
            interface IStreamingApplianceSnapshotConfig {

                /** StreamingApplianceSnapshotConfig snapshotId */
                snapshotId?: (string|null);

                /** StreamingApplianceSnapshotConfig importStateEndpoint */
                importStateEndpoint?: (string|null);
            }

            /** Represents a StreamingApplianceSnapshotConfig. */
            class StreamingApplianceSnapshotConfig implements IStreamingApplianceSnapshotConfig {

                /**
                 * Constructs a new StreamingApplianceSnapshotConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IStreamingApplianceSnapshotConfig);

                /** StreamingApplianceSnapshotConfig snapshotId. */
                public snapshotId: string;

                /** StreamingApplianceSnapshotConfig importStateEndpoint. */
                public importStateEndpoint: string;

                /**
                 * Creates a new StreamingApplianceSnapshotConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StreamingApplianceSnapshotConfig instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IStreamingApplianceSnapshotConfig): google.dataflow.v1beta3.StreamingApplianceSnapshotConfig;

                /**
                 * Encodes the specified StreamingApplianceSnapshotConfig message. Does not implicitly {@link google.dataflow.v1beta3.StreamingApplianceSnapshotConfig.verify|verify} messages.
                 * @param message StreamingApplianceSnapshotConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IStreamingApplianceSnapshotConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StreamingApplianceSnapshotConfig message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.StreamingApplianceSnapshotConfig.verify|verify} messages.
                 * @param message StreamingApplianceSnapshotConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IStreamingApplianceSnapshotConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StreamingApplianceSnapshotConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StreamingApplianceSnapshotConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.StreamingApplianceSnapshotConfig;

                /**
                 * Decodes a StreamingApplianceSnapshotConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StreamingApplianceSnapshotConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.StreamingApplianceSnapshotConfig;

                /**
                 * Verifies a StreamingApplianceSnapshotConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StreamingApplianceSnapshotConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StreamingApplianceSnapshotConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.StreamingApplianceSnapshotConfig;

                /**
                 * Creates a plain object from a StreamingApplianceSnapshotConfig message. Also converts values to other types if specified.
                 * @param message StreamingApplianceSnapshotConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.StreamingApplianceSnapshotConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StreamingApplianceSnapshotConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StreamingApplianceSnapshotConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a TemplatesService */
            class TemplatesService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new TemplatesService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new TemplatesService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TemplatesService;

                /**
                 * Calls CreateJobFromTemplate.
                 * @param request CreateJobFromTemplateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Job
                 */
                public createJobFromTemplate(request: google.dataflow.v1beta3.ICreateJobFromTemplateRequest, callback: google.dataflow.v1beta3.TemplatesService.CreateJobFromTemplateCallback): void;

                /**
                 * Calls CreateJobFromTemplate.
                 * @param request CreateJobFromTemplateRequest message or plain object
                 * @returns Promise
                 */
                public createJobFromTemplate(request: google.dataflow.v1beta3.ICreateJobFromTemplateRequest): Promise<google.dataflow.v1beta3.Job>;

                /**
                 * Calls LaunchTemplate.
                 * @param request LaunchTemplateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LaunchTemplateResponse
                 */
                public launchTemplate(request: google.dataflow.v1beta3.ILaunchTemplateRequest, callback: google.dataflow.v1beta3.TemplatesService.LaunchTemplateCallback): void;

                /**
                 * Calls LaunchTemplate.
                 * @param request LaunchTemplateRequest message or plain object
                 * @returns Promise
                 */
                public launchTemplate(request: google.dataflow.v1beta3.ILaunchTemplateRequest): Promise<google.dataflow.v1beta3.LaunchTemplateResponse>;

                /**
                 * Calls GetTemplate.
                 * @param request GetTemplateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetTemplateResponse
                 */
                public getTemplate(request: google.dataflow.v1beta3.IGetTemplateRequest, callback: google.dataflow.v1beta3.TemplatesService.GetTemplateCallback): void;

                /**
                 * Calls GetTemplate.
                 * @param request GetTemplateRequest message or plain object
                 * @returns Promise
                 */
                public getTemplate(request: google.dataflow.v1beta3.IGetTemplateRequest): Promise<google.dataflow.v1beta3.GetTemplateResponse>;
            }

            namespace TemplatesService {

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.TemplatesService|createJobFromTemplate}.
                 * @param error Error, if any
                 * @param [response] Job
                 */
                type CreateJobFromTemplateCallback = (error: (Error|null), response?: google.dataflow.v1beta3.Job) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.TemplatesService|launchTemplate}.
                 * @param error Error, if any
                 * @param [response] LaunchTemplateResponse
                 */
                type LaunchTemplateCallback = (error: (Error|null), response?: google.dataflow.v1beta3.LaunchTemplateResponse) => void;

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.TemplatesService|getTemplate}.
                 * @param error Error, if any
                 * @param [response] GetTemplateResponse
                 */
                type GetTemplateCallback = (error: (Error|null), response?: google.dataflow.v1beta3.GetTemplateResponse) => void;
            }

            /** Represents a FlexTemplatesService */
            class FlexTemplatesService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new FlexTemplatesService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new FlexTemplatesService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FlexTemplatesService;

                /**
                 * Calls LaunchFlexTemplate.
                 * @param request LaunchFlexTemplateRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and LaunchFlexTemplateResponse
                 */
                public launchFlexTemplate(request: google.dataflow.v1beta3.ILaunchFlexTemplateRequest, callback: google.dataflow.v1beta3.FlexTemplatesService.LaunchFlexTemplateCallback): void;

                /**
                 * Calls LaunchFlexTemplate.
                 * @param request LaunchFlexTemplateRequest message or plain object
                 * @returns Promise
                 */
                public launchFlexTemplate(request: google.dataflow.v1beta3.ILaunchFlexTemplateRequest): Promise<google.dataflow.v1beta3.LaunchFlexTemplateResponse>;
            }

            namespace FlexTemplatesService {

                /**
                 * Callback as used by {@link google.dataflow.v1beta3.FlexTemplatesService|launchFlexTemplate}.
                 * @param error Error, if any
                 * @param [response] LaunchFlexTemplateResponse
                 */
                type LaunchFlexTemplateCallback = (error: (Error|null), response?: google.dataflow.v1beta3.LaunchFlexTemplateResponse) => void;
            }

            /** Properties of a LaunchFlexTemplateResponse. */
            interface ILaunchFlexTemplateResponse {

                /** LaunchFlexTemplateResponse job */
                job?: (google.dataflow.v1beta3.IJob|null);
            }

            /** Represents a LaunchFlexTemplateResponse. */
            class LaunchFlexTemplateResponse implements ILaunchFlexTemplateResponse {

                /**
                 * Constructs a new LaunchFlexTemplateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ILaunchFlexTemplateResponse);

                /** LaunchFlexTemplateResponse job. */
                public job?: (google.dataflow.v1beta3.IJob|null);

                /**
                 * Creates a new LaunchFlexTemplateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LaunchFlexTemplateResponse instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ILaunchFlexTemplateResponse): google.dataflow.v1beta3.LaunchFlexTemplateResponse;

                /**
                 * Encodes the specified LaunchFlexTemplateResponse message. Does not implicitly {@link google.dataflow.v1beta3.LaunchFlexTemplateResponse.verify|verify} messages.
                 * @param message LaunchFlexTemplateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ILaunchFlexTemplateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LaunchFlexTemplateResponse message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.LaunchFlexTemplateResponse.verify|verify} messages.
                 * @param message LaunchFlexTemplateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ILaunchFlexTemplateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LaunchFlexTemplateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LaunchFlexTemplateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.LaunchFlexTemplateResponse;

                /**
                 * Decodes a LaunchFlexTemplateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LaunchFlexTemplateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.LaunchFlexTemplateResponse;

                /**
                 * Verifies a LaunchFlexTemplateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LaunchFlexTemplateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LaunchFlexTemplateResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.LaunchFlexTemplateResponse;

                /**
                 * Creates a plain object from a LaunchFlexTemplateResponse message. Also converts values to other types if specified.
                 * @param message LaunchFlexTemplateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.LaunchFlexTemplateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LaunchFlexTemplateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LaunchFlexTemplateResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ContainerSpec. */
            interface IContainerSpec {

                /** ContainerSpec image */
                image?: (string|null);

                /** ContainerSpec metadata */
                metadata?: (google.dataflow.v1beta3.ITemplateMetadata|null);

                /** ContainerSpec sdkInfo */
                sdkInfo?: (google.dataflow.v1beta3.ISDKInfo|null);

                /** ContainerSpec defaultEnvironment */
                defaultEnvironment?: (google.dataflow.v1beta3.IFlexTemplateRuntimeEnvironment|null);

                /** ContainerSpec imageRepositoryUsernameSecretId */
                imageRepositoryUsernameSecretId?: (string|null);

                /** ContainerSpec imageRepositoryPasswordSecretId */
                imageRepositoryPasswordSecretId?: (string|null);

                /** ContainerSpec imageRepositoryCertPath */
                imageRepositoryCertPath?: (string|null);
            }

            /** Represents a ContainerSpec. */
            class ContainerSpec implements IContainerSpec {

                /**
                 * Constructs a new ContainerSpec.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IContainerSpec);

                /** ContainerSpec image. */
                public image: string;

                /** ContainerSpec metadata. */
                public metadata?: (google.dataflow.v1beta3.ITemplateMetadata|null);

                /** ContainerSpec sdkInfo. */
                public sdkInfo?: (google.dataflow.v1beta3.ISDKInfo|null);

                /** ContainerSpec defaultEnvironment. */
                public defaultEnvironment?: (google.dataflow.v1beta3.IFlexTemplateRuntimeEnvironment|null);

                /** ContainerSpec imageRepositoryUsernameSecretId. */
                public imageRepositoryUsernameSecretId: string;

                /** ContainerSpec imageRepositoryPasswordSecretId. */
                public imageRepositoryPasswordSecretId: string;

                /** ContainerSpec imageRepositoryCertPath. */
                public imageRepositoryCertPath: string;

                /**
                 * Creates a new ContainerSpec instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContainerSpec instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IContainerSpec): google.dataflow.v1beta3.ContainerSpec;

                /**
                 * Encodes the specified ContainerSpec message. Does not implicitly {@link google.dataflow.v1beta3.ContainerSpec.verify|verify} messages.
                 * @param message ContainerSpec message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IContainerSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContainerSpec message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ContainerSpec.verify|verify} messages.
                 * @param message ContainerSpec message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IContainerSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContainerSpec message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContainerSpec
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ContainerSpec;

                /**
                 * Decodes a ContainerSpec message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContainerSpec
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ContainerSpec;

                /**
                 * Verifies a ContainerSpec message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContainerSpec message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContainerSpec
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ContainerSpec;

                /**
                 * Creates a plain object from a ContainerSpec message. Also converts values to other types if specified.
                 * @param message ContainerSpec
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ContainerSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContainerSpec to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContainerSpec
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LaunchFlexTemplateParameter. */
            interface ILaunchFlexTemplateParameter {

                /** LaunchFlexTemplateParameter jobName */
                jobName?: (string|null);

                /** LaunchFlexTemplateParameter containerSpec */
                containerSpec?: (google.dataflow.v1beta3.IContainerSpec|null);

                /** LaunchFlexTemplateParameter containerSpecGcsPath */
                containerSpecGcsPath?: (string|null);

                /** LaunchFlexTemplateParameter parameters */
                parameters?: ({ [k: string]: string }|null);

                /** LaunchFlexTemplateParameter launchOptions */
                launchOptions?: ({ [k: string]: string }|null);

                /** LaunchFlexTemplateParameter environment */
                environment?: (google.dataflow.v1beta3.IFlexTemplateRuntimeEnvironment|null);

                /** LaunchFlexTemplateParameter update */
                update?: (boolean|null);

                /** LaunchFlexTemplateParameter transformNameMappings */
                transformNameMappings?: ({ [k: string]: string }|null);
            }

            /** Represents a LaunchFlexTemplateParameter. */
            class LaunchFlexTemplateParameter implements ILaunchFlexTemplateParameter {

                /**
                 * Constructs a new LaunchFlexTemplateParameter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ILaunchFlexTemplateParameter);

                /** LaunchFlexTemplateParameter jobName. */
                public jobName: string;

                /** LaunchFlexTemplateParameter containerSpec. */
                public containerSpec?: (google.dataflow.v1beta3.IContainerSpec|null);

                /** LaunchFlexTemplateParameter containerSpecGcsPath. */
                public containerSpecGcsPath?: (string|null);

                /** LaunchFlexTemplateParameter parameters. */
                public parameters: { [k: string]: string };

                /** LaunchFlexTemplateParameter launchOptions. */
                public launchOptions: { [k: string]: string };

                /** LaunchFlexTemplateParameter environment. */
                public environment?: (google.dataflow.v1beta3.IFlexTemplateRuntimeEnvironment|null);

                /** LaunchFlexTemplateParameter update. */
                public update: boolean;

                /** LaunchFlexTemplateParameter transformNameMappings. */
                public transformNameMappings: { [k: string]: string };

                /** LaunchFlexTemplateParameter template. */
                public template?: ("containerSpec"|"containerSpecGcsPath");

                /**
                 * Creates a new LaunchFlexTemplateParameter instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LaunchFlexTemplateParameter instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ILaunchFlexTemplateParameter): google.dataflow.v1beta3.LaunchFlexTemplateParameter;

                /**
                 * Encodes the specified LaunchFlexTemplateParameter message. Does not implicitly {@link google.dataflow.v1beta3.LaunchFlexTemplateParameter.verify|verify} messages.
                 * @param message LaunchFlexTemplateParameter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ILaunchFlexTemplateParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LaunchFlexTemplateParameter message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.LaunchFlexTemplateParameter.verify|verify} messages.
                 * @param message LaunchFlexTemplateParameter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ILaunchFlexTemplateParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LaunchFlexTemplateParameter message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LaunchFlexTemplateParameter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.LaunchFlexTemplateParameter;

                /**
                 * Decodes a LaunchFlexTemplateParameter message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LaunchFlexTemplateParameter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.LaunchFlexTemplateParameter;

                /**
                 * Verifies a LaunchFlexTemplateParameter message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LaunchFlexTemplateParameter message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LaunchFlexTemplateParameter
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.LaunchFlexTemplateParameter;

                /**
                 * Creates a plain object from a LaunchFlexTemplateParameter message. Also converts values to other types if specified.
                 * @param message LaunchFlexTemplateParameter
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.LaunchFlexTemplateParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LaunchFlexTemplateParameter to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LaunchFlexTemplateParameter
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FlexTemplateRuntimeEnvironment. */
            interface IFlexTemplateRuntimeEnvironment {

                /** FlexTemplateRuntimeEnvironment numWorkers */
                numWorkers?: (number|null);

                /** FlexTemplateRuntimeEnvironment maxWorkers */
                maxWorkers?: (number|null);

                /** FlexTemplateRuntimeEnvironment zone */
                zone?: (string|null);

                /** FlexTemplateRuntimeEnvironment serviceAccountEmail */
                serviceAccountEmail?: (string|null);

                /** FlexTemplateRuntimeEnvironment tempLocation */
                tempLocation?: (string|null);

                /** FlexTemplateRuntimeEnvironment machineType */
                machineType?: (string|null);

                /** FlexTemplateRuntimeEnvironment additionalExperiments */
                additionalExperiments?: (string[]|null);

                /** FlexTemplateRuntimeEnvironment network */
                network?: (string|null);

                /** FlexTemplateRuntimeEnvironment subnetwork */
                subnetwork?: (string|null);

                /** FlexTemplateRuntimeEnvironment additionalUserLabels */
                additionalUserLabels?: ({ [k: string]: string }|null);

                /** FlexTemplateRuntimeEnvironment kmsKeyName */
                kmsKeyName?: (string|null);

                /** FlexTemplateRuntimeEnvironment ipConfiguration */
                ipConfiguration?: (google.dataflow.v1beta3.WorkerIPAddressConfiguration|keyof typeof google.dataflow.v1beta3.WorkerIPAddressConfiguration|null);

                /** FlexTemplateRuntimeEnvironment workerRegion */
                workerRegion?: (string|null);

                /** FlexTemplateRuntimeEnvironment workerZone */
                workerZone?: (string|null);

                /** FlexTemplateRuntimeEnvironment enableStreamingEngine */
                enableStreamingEngine?: (boolean|null);

                /** FlexTemplateRuntimeEnvironment flexrsGoal */
                flexrsGoal?: (google.dataflow.v1beta3.FlexResourceSchedulingGoal|keyof typeof google.dataflow.v1beta3.FlexResourceSchedulingGoal|null);

                /** FlexTemplateRuntimeEnvironment stagingLocation */
                stagingLocation?: (string|null);

                /** FlexTemplateRuntimeEnvironment sdkContainerImage */
                sdkContainerImage?: (string|null);

                /** FlexTemplateRuntimeEnvironment diskSizeGb */
                diskSizeGb?: (number|null);

                /** FlexTemplateRuntimeEnvironment autoscalingAlgorithm */
                autoscalingAlgorithm?: (google.dataflow.v1beta3.AutoscalingAlgorithm|keyof typeof google.dataflow.v1beta3.AutoscalingAlgorithm|null);

                /** FlexTemplateRuntimeEnvironment dumpHeapOnOom */
                dumpHeapOnOom?: (boolean|null);

                /** FlexTemplateRuntimeEnvironment saveHeapDumpsToGcsPath */
                saveHeapDumpsToGcsPath?: (string|null);

                /** FlexTemplateRuntimeEnvironment launcherMachineType */
                launcherMachineType?: (string|null);

                /** FlexTemplateRuntimeEnvironment enableLauncherVmSerialPortLogging */
                enableLauncherVmSerialPortLogging?: (boolean|null);

                /** FlexTemplateRuntimeEnvironment streamingMode */
                streamingMode?: (google.dataflow.v1beta3.StreamingMode|keyof typeof google.dataflow.v1beta3.StreamingMode|null);
            }

            /** Represents a FlexTemplateRuntimeEnvironment. */
            class FlexTemplateRuntimeEnvironment implements IFlexTemplateRuntimeEnvironment {

                /**
                 * Constructs a new FlexTemplateRuntimeEnvironment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IFlexTemplateRuntimeEnvironment);

                /** FlexTemplateRuntimeEnvironment numWorkers. */
                public numWorkers: number;

                /** FlexTemplateRuntimeEnvironment maxWorkers. */
                public maxWorkers: number;

                /** FlexTemplateRuntimeEnvironment zone. */
                public zone: string;

                /** FlexTemplateRuntimeEnvironment serviceAccountEmail. */
                public serviceAccountEmail: string;

                /** FlexTemplateRuntimeEnvironment tempLocation. */
                public tempLocation: string;

                /** FlexTemplateRuntimeEnvironment machineType. */
                public machineType: string;

                /** FlexTemplateRuntimeEnvironment additionalExperiments. */
                public additionalExperiments: string[];

                /** FlexTemplateRuntimeEnvironment network. */
                public network: string;

                /** FlexTemplateRuntimeEnvironment subnetwork. */
                public subnetwork: string;

                /** FlexTemplateRuntimeEnvironment additionalUserLabels. */
                public additionalUserLabels: { [k: string]: string };

                /** FlexTemplateRuntimeEnvironment kmsKeyName. */
                public kmsKeyName: string;

                /** FlexTemplateRuntimeEnvironment ipConfiguration. */
                public ipConfiguration: (google.dataflow.v1beta3.WorkerIPAddressConfiguration|keyof typeof google.dataflow.v1beta3.WorkerIPAddressConfiguration);

                /** FlexTemplateRuntimeEnvironment workerRegion. */
                public workerRegion: string;

                /** FlexTemplateRuntimeEnvironment workerZone. */
                public workerZone: string;

                /** FlexTemplateRuntimeEnvironment enableStreamingEngine. */
                public enableStreamingEngine: boolean;

                /** FlexTemplateRuntimeEnvironment flexrsGoal. */
                public flexrsGoal: (google.dataflow.v1beta3.FlexResourceSchedulingGoal|keyof typeof google.dataflow.v1beta3.FlexResourceSchedulingGoal);

                /** FlexTemplateRuntimeEnvironment stagingLocation. */
                public stagingLocation: string;

                /** FlexTemplateRuntimeEnvironment sdkContainerImage. */
                public sdkContainerImage: string;

                /** FlexTemplateRuntimeEnvironment diskSizeGb. */
                public diskSizeGb: number;

                /** FlexTemplateRuntimeEnvironment autoscalingAlgorithm. */
                public autoscalingAlgorithm: (google.dataflow.v1beta3.AutoscalingAlgorithm|keyof typeof google.dataflow.v1beta3.AutoscalingAlgorithm);

                /** FlexTemplateRuntimeEnvironment dumpHeapOnOom. */
                public dumpHeapOnOom: boolean;

                /** FlexTemplateRuntimeEnvironment saveHeapDumpsToGcsPath. */
                public saveHeapDumpsToGcsPath: string;

                /** FlexTemplateRuntimeEnvironment launcherMachineType. */
                public launcherMachineType: string;

                /** FlexTemplateRuntimeEnvironment enableLauncherVmSerialPortLogging. */
                public enableLauncherVmSerialPortLogging: boolean;

                /** FlexTemplateRuntimeEnvironment streamingMode. */
                public streamingMode?: (google.dataflow.v1beta3.StreamingMode|keyof typeof google.dataflow.v1beta3.StreamingMode|null);

                /**
                 * Creates a new FlexTemplateRuntimeEnvironment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlexTemplateRuntimeEnvironment instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IFlexTemplateRuntimeEnvironment): google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment;

                /**
                 * Encodes the specified FlexTemplateRuntimeEnvironment message. Does not implicitly {@link google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment.verify|verify} messages.
                 * @param message FlexTemplateRuntimeEnvironment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IFlexTemplateRuntimeEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlexTemplateRuntimeEnvironment message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment.verify|verify} messages.
                 * @param message FlexTemplateRuntimeEnvironment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IFlexTemplateRuntimeEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlexTemplateRuntimeEnvironment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FlexTemplateRuntimeEnvironment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment;

                /**
                 * Decodes a FlexTemplateRuntimeEnvironment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FlexTemplateRuntimeEnvironment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment;

                /**
                 * Verifies a FlexTemplateRuntimeEnvironment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlexTemplateRuntimeEnvironment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlexTemplateRuntimeEnvironment
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment;

                /**
                 * Creates a plain object from a FlexTemplateRuntimeEnvironment message. Also converts values to other types if specified.
                 * @param message FlexTemplateRuntimeEnvironment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlexTemplateRuntimeEnvironment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FlexTemplateRuntimeEnvironment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LaunchFlexTemplateRequest. */
            interface ILaunchFlexTemplateRequest {

                /** LaunchFlexTemplateRequest projectId */
                projectId?: (string|null);

                /** LaunchFlexTemplateRequest launchParameter */
                launchParameter?: (google.dataflow.v1beta3.ILaunchFlexTemplateParameter|null);

                /** LaunchFlexTemplateRequest location */
                location?: (string|null);

                /** LaunchFlexTemplateRequest validateOnly */
                validateOnly?: (boolean|null);
            }

            /** Represents a LaunchFlexTemplateRequest. */
            class LaunchFlexTemplateRequest implements ILaunchFlexTemplateRequest {

                /**
                 * Constructs a new LaunchFlexTemplateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ILaunchFlexTemplateRequest);

                /** LaunchFlexTemplateRequest projectId. */
                public projectId: string;

                /** LaunchFlexTemplateRequest launchParameter. */
                public launchParameter?: (google.dataflow.v1beta3.ILaunchFlexTemplateParameter|null);

                /** LaunchFlexTemplateRequest location. */
                public location: string;

                /** LaunchFlexTemplateRequest validateOnly. */
                public validateOnly: boolean;

                /**
                 * Creates a new LaunchFlexTemplateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LaunchFlexTemplateRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ILaunchFlexTemplateRequest): google.dataflow.v1beta3.LaunchFlexTemplateRequest;

                /**
                 * Encodes the specified LaunchFlexTemplateRequest message. Does not implicitly {@link google.dataflow.v1beta3.LaunchFlexTemplateRequest.verify|verify} messages.
                 * @param message LaunchFlexTemplateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ILaunchFlexTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LaunchFlexTemplateRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.LaunchFlexTemplateRequest.verify|verify} messages.
                 * @param message LaunchFlexTemplateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ILaunchFlexTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LaunchFlexTemplateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LaunchFlexTemplateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.LaunchFlexTemplateRequest;

                /**
                 * Decodes a LaunchFlexTemplateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LaunchFlexTemplateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.LaunchFlexTemplateRequest;

                /**
                 * Verifies a LaunchFlexTemplateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LaunchFlexTemplateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LaunchFlexTemplateRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.LaunchFlexTemplateRequest;

                /**
                 * Creates a plain object from a LaunchFlexTemplateRequest message. Also converts values to other types if specified.
                 * @param message LaunchFlexTemplateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.LaunchFlexTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LaunchFlexTemplateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LaunchFlexTemplateRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RuntimeEnvironment. */
            interface IRuntimeEnvironment {

                /** RuntimeEnvironment numWorkers */
                numWorkers?: (number|null);

                /** RuntimeEnvironment maxWorkers */
                maxWorkers?: (number|null);

                /** RuntimeEnvironment zone */
                zone?: (string|null);

                /** RuntimeEnvironment serviceAccountEmail */
                serviceAccountEmail?: (string|null);

                /** RuntimeEnvironment tempLocation */
                tempLocation?: (string|null);

                /** RuntimeEnvironment bypassTempDirValidation */
                bypassTempDirValidation?: (boolean|null);

                /** RuntimeEnvironment machineType */
                machineType?: (string|null);

                /** RuntimeEnvironment additionalExperiments */
                additionalExperiments?: (string[]|null);

                /** RuntimeEnvironment network */
                network?: (string|null);

                /** RuntimeEnvironment subnetwork */
                subnetwork?: (string|null);

                /** RuntimeEnvironment additionalUserLabels */
                additionalUserLabels?: ({ [k: string]: string }|null);

                /** RuntimeEnvironment kmsKeyName */
                kmsKeyName?: (string|null);

                /** RuntimeEnvironment ipConfiguration */
                ipConfiguration?: (google.dataflow.v1beta3.WorkerIPAddressConfiguration|keyof typeof google.dataflow.v1beta3.WorkerIPAddressConfiguration|null);

                /** RuntimeEnvironment workerRegion */
                workerRegion?: (string|null);

                /** RuntimeEnvironment workerZone */
                workerZone?: (string|null);

                /** RuntimeEnvironment enableStreamingEngine */
                enableStreamingEngine?: (boolean|null);

                /** RuntimeEnvironment diskSizeGb */
                diskSizeGb?: (number|null);

                /** RuntimeEnvironment streamingMode */
                streamingMode?: (google.dataflow.v1beta3.StreamingMode|keyof typeof google.dataflow.v1beta3.StreamingMode|null);
            }

            /** Represents a RuntimeEnvironment. */
            class RuntimeEnvironment implements IRuntimeEnvironment {

                /**
                 * Constructs a new RuntimeEnvironment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IRuntimeEnvironment);

                /** RuntimeEnvironment numWorkers. */
                public numWorkers: number;

                /** RuntimeEnvironment maxWorkers. */
                public maxWorkers: number;

                /** RuntimeEnvironment zone. */
                public zone: string;

                /** RuntimeEnvironment serviceAccountEmail. */
                public serviceAccountEmail: string;

                /** RuntimeEnvironment tempLocation. */
                public tempLocation: string;

                /** RuntimeEnvironment bypassTempDirValidation. */
                public bypassTempDirValidation: boolean;

                /** RuntimeEnvironment machineType. */
                public machineType: string;

                /** RuntimeEnvironment additionalExperiments. */
                public additionalExperiments: string[];

                /** RuntimeEnvironment network. */
                public network: string;

                /** RuntimeEnvironment subnetwork. */
                public subnetwork: string;

                /** RuntimeEnvironment additionalUserLabels. */
                public additionalUserLabels: { [k: string]: string };

                /** RuntimeEnvironment kmsKeyName. */
                public kmsKeyName: string;

                /** RuntimeEnvironment ipConfiguration. */
                public ipConfiguration: (google.dataflow.v1beta3.WorkerIPAddressConfiguration|keyof typeof google.dataflow.v1beta3.WorkerIPAddressConfiguration);

                /** RuntimeEnvironment workerRegion. */
                public workerRegion: string;

                /** RuntimeEnvironment workerZone. */
                public workerZone: string;

                /** RuntimeEnvironment enableStreamingEngine. */
                public enableStreamingEngine: boolean;

                /** RuntimeEnvironment diskSizeGb. */
                public diskSizeGb: number;

                /** RuntimeEnvironment streamingMode. */
                public streamingMode?: (google.dataflow.v1beta3.StreamingMode|keyof typeof google.dataflow.v1beta3.StreamingMode|null);

                /**
                 * Creates a new RuntimeEnvironment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RuntimeEnvironment instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IRuntimeEnvironment): google.dataflow.v1beta3.RuntimeEnvironment;

                /**
                 * Encodes the specified RuntimeEnvironment message. Does not implicitly {@link google.dataflow.v1beta3.RuntimeEnvironment.verify|verify} messages.
                 * @param message RuntimeEnvironment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IRuntimeEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RuntimeEnvironment message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.RuntimeEnvironment.verify|verify} messages.
                 * @param message RuntimeEnvironment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IRuntimeEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RuntimeEnvironment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RuntimeEnvironment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.RuntimeEnvironment;

                /**
                 * Decodes a RuntimeEnvironment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RuntimeEnvironment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.RuntimeEnvironment;

                /**
                 * Verifies a RuntimeEnvironment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RuntimeEnvironment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RuntimeEnvironment
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.RuntimeEnvironment;

                /**
                 * Creates a plain object from a RuntimeEnvironment message. Also converts values to other types if specified.
                 * @param message RuntimeEnvironment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.RuntimeEnvironment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RuntimeEnvironment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RuntimeEnvironment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ParameterMetadataEnumOption. */
            interface IParameterMetadataEnumOption {

                /** ParameterMetadataEnumOption value */
                value?: (string|null);

                /** ParameterMetadataEnumOption label */
                label?: (string|null);

                /** ParameterMetadataEnumOption description */
                description?: (string|null);
            }

            /** Represents a ParameterMetadataEnumOption. */
            class ParameterMetadataEnumOption implements IParameterMetadataEnumOption {

                /**
                 * Constructs a new ParameterMetadataEnumOption.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IParameterMetadataEnumOption);

                /** ParameterMetadataEnumOption value. */
                public value: string;

                /** ParameterMetadataEnumOption label. */
                public label: string;

                /** ParameterMetadataEnumOption description. */
                public description: string;

                /**
                 * Creates a new ParameterMetadataEnumOption instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ParameterMetadataEnumOption instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IParameterMetadataEnumOption): google.dataflow.v1beta3.ParameterMetadataEnumOption;

                /**
                 * Encodes the specified ParameterMetadataEnumOption message. Does not implicitly {@link google.dataflow.v1beta3.ParameterMetadataEnumOption.verify|verify} messages.
                 * @param message ParameterMetadataEnumOption message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IParameterMetadataEnumOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ParameterMetadataEnumOption message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ParameterMetadataEnumOption.verify|verify} messages.
                 * @param message ParameterMetadataEnumOption message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IParameterMetadataEnumOption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ParameterMetadataEnumOption message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ParameterMetadataEnumOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ParameterMetadataEnumOption;

                /**
                 * Decodes a ParameterMetadataEnumOption message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ParameterMetadataEnumOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ParameterMetadataEnumOption;

                /**
                 * Verifies a ParameterMetadataEnumOption message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ParameterMetadataEnumOption message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ParameterMetadataEnumOption
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ParameterMetadataEnumOption;

                /**
                 * Creates a plain object from a ParameterMetadataEnumOption message. Also converts values to other types if specified.
                 * @param message ParameterMetadataEnumOption
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ParameterMetadataEnumOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ParameterMetadataEnumOption to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ParameterMetadataEnumOption
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ParameterMetadata. */
            interface IParameterMetadata {

                /** ParameterMetadata name */
                name?: (string|null);

                /** ParameterMetadata label */
                label?: (string|null);

                /** ParameterMetadata helpText */
                helpText?: (string|null);

                /** ParameterMetadata isOptional */
                isOptional?: (boolean|null);

                /** ParameterMetadata regexes */
                regexes?: (string[]|null);

                /** ParameterMetadata paramType */
                paramType?: (google.dataflow.v1beta3.ParameterType|keyof typeof google.dataflow.v1beta3.ParameterType|null);

                /** ParameterMetadata customMetadata */
                customMetadata?: ({ [k: string]: string }|null);

                /** ParameterMetadata groupName */
                groupName?: (string|null);

                /** ParameterMetadata parentName */
                parentName?: (string|null);

                /** ParameterMetadata parentTriggerValues */
                parentTriggerValues?: (string[]|null);

                /** ParameterMetadata enumOptions */
                enumOptions?: (google.dataflow.v1beta3.IParameterMetadataEnumOption[]|null);

                /** ParameterMetadata defaultValue */
                defaultValue?: (string|null);

                /** ParameterMetadata hiddenUi */
                hiddenUi?: (boolean|null);
            }

            /** Represents a ParameterMetadata. */
            class ParameterMetadata implements IParameterMetadata {

                /**
                 * Constructs a new ParameterMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IParameterMetadata);

                /** ParameterMetadata name. */
                public name: string;

                /** ParameterMetadata label. */
                public label: string;

                /** ParameterMetadata helpText. */
                public helpText: string;

                /** ParameterMetadata isOptional. */
                public isOptional: boolean;

                /** ParameterMetadata regexes. */
                public regexes: string[];

                /** ParameterMetadata paramType. */
                public paramType: (google.dataflow.v1beta3.ParameterType|keyof typeof google.dataflow.v1beta3.ParameterType);

                /** ParameterMetadata customMetadata. */
                public customMetadata: { [k: string]: string };

                /** ParameterMetadata groupName. */
                public groupName: string;

                /** ParameterMetadata parentName. */
                public parentName: string;

                /** ParameterMetadata parentTriggerValues. */
                public parentTriggerValues: string[];

                /** ParameterMetadata enumOptions. */
                public enumOptions: google.dataflow.v1beta3.IParameterMetadataEnumOption[];

                /** ParameterMetadata defaultValue. */
                public defaultValue: string;

                /** ParameterMetadata hiddenUi. */
                public hiddenUi: boolean;

                /**
                 * Creates a new ParameterMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ParameterMetadata instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IParameterMetadata): google.dataflow.v1beta3.ParameterMetadata;

                /**
                 * Encodes the specified ParameterMetadata message. Does not implicitly {@link google.dataflow.v1beta3.ParameterMetadata.verify|verify} messages.
                 * @param message ParameterMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IParameterMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ParameterMetadata message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.ParameterMetadata.verify|verify} messages.
                 * @param message ParameterMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IParameterMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ParameterMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ParameterMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.ParameterMetadata;

                /**
                 * Decodes a ParameterMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ParameterMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.ParameterMetadata;

                /**
                 * Verifies a ParameterMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ParameterMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ParameterMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.ParameterMetadata;

                /**
                 * Creates a plain object from a ParameterMetadata message. Also converts values to other types if specified.
                 * @param message ParameterMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.ParameterMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ParameterMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ParameterMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TemplateMetadata. */
            interface ITemplateMetadata {

                /** TemplateMetadata name */
                name?: (string|null);

                /** TemplateMetadata description */
                description?: (string|null);

                /** TemplateMetadata parameters */
                parameters?: (google.dataflow.v1beta3.IParameterMetadata[]|null);

                /** TemplateMetadata streaming */
                streaming?: (boolean|null);

                /** TemplateMetadata supportsAtLeastOnce */
                supportsAtLeastOnce?: (boolean|null);

                /** TemplateMetadata supportsExactlyOnce */
                supportsExactlyOnce?: (boolean|null);

                /** TemplateMetadata defaultStreamingMode */
                defaultStreamingMode?: (string|null);
            }

            /** Represents a TemplateMetadata. */
            class TemplateMetadata implements ITemplateMetadata {

                /**
                 * Constructs a new TemplateMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ITemplateMetadata);

                /** TemplateMetadata name. */
                public name: string;

                /** TemplateMetadata description. */
                public description: string;

                /** TemplateMetadata parameters. */
                public parameters: google.dataflow.v1beta3.IParameterMetadata[];

                /** TemplateMetadata streaming. */
                public streaming: boolean;

                /** TemplateMetadata supportsAtLeastOnce. */
                public supportsAtLeastOnce: boolean;

                /** TemplateMetadata supportsExactlyOnce. */
                public supportsExactlyOnce: boolean;

                /** TemplateMetadata defaultStreamingMode. */
                public defaultStreamingMode: string;

                /**
                 * Creates a new TemplateMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TemplateMetadata instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ITemplateMetadata): google.dataflow.v1beta3.TemplateMetadata;

                /**
                 * Encodes the specified TemplateMetadata message. Does not implicitly {@link google.dataflow.v1beta3.TemplateMetadata.verify|verify} messages.
                 * @param message TemplateMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ITemplateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TemplateMetadata message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.TemplateMetadata.verify|verify} messages.
                 * @param message TemplateMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ITemplateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TemplateMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TemplateMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.TemplateMetadata;

                /**
                 * Decodes a TemplateMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TemplateMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.TemplateMetadata;

                /**
                 * Verifies a TemplateMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TemplateMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TemplateMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.TemplateMetadata;

                /**
                 * Creates a plain object from a TemplateMetadata message. Also converts values to other types if specified.
                 * @param message TemplateMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.TemplateMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TemplateMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TemplateMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SDKInfo. */
            interface ISDKInfo {

                /** SDKInfo language */
                language?: (google.dataflow.v1beta3.SDKInfo.Language|keyof typeof google.dataflow.v1beta3.SDKInfo.Language|null);

                /** SDKInfo version */
                version?: (string|null);
            }

            /** Represents a SDKInfo. */
            class SDKInfo implements ISDKInfo {

                /**
                 * Constructs a new SDKInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ISDKInfo);

                /** SDKInfo language. */
                public language: (google.dataflow.v1beta3.SDKInfo.Language|keyof typeof google.dataflow.v1beta3.SDKInfo.Language);

                /** SDKInfo version. */
                public version: string;

                /**
                 * Creates a new SDKInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SDKInfo instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ISDKInfo): google.dataflow.v1beta3.SDKInfo;

                /**
                 * Encodes the specified SDKInfo message. Does not implicitly {@link google.dataflow.v1beta3.SDKInfo.verify|verify} messages.
                 * @param message SDKInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ISDKInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SDKInfo message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.SDKInfo.verify|verify} messages.
                 * @param message SDKInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ISDKInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SDKInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SDKInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.SDKInfo;

                /**
                 * Decodes a SDKInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SDKInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.SDKInfo;

                /**
                 * Verifies a SDKInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SDKInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SDKInfo
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.SDKInfo;

                /**
                 * Creates a plain object from a SDKInfo message. Also converts values to other types if specified.
                 * @param message SDKInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.SDKInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SDKInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SDKInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SDKInfo {

                /** Language enum. */
                enum Language {
                    UNKNOWN = 0,
                    JAVA = 1,
                    PYTHON = 2,
                    GO = 3
                }
            }

            /** Properties of a RuntimeMetadata. */
            interface IRuntimeMetadata {

                /** RuntimeMetadata sdkInfo */
                sdkInfo?: (google.dataflow.v1beta3.ISDKInfo|null);

                /** RuntimeMetadata parameters */
                parameters?: (google.dataflow.v1beta3.IParameterMetadata[]|null);
            }

            /** Represents a RuntimeMetadata. */
            class RuntimeMetadata implements IRuntimeMetadata {

                /**
                 * Constructs a new RuntimeMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IRuntimeMetadata);

                /** RuntimeMetadata sdkInfo. */
                public sdkInfo?: (google.dataflow.v1beta3.ISDKInfo|null);

                /** RuntimeMetadata parameters. */
                public parameters: google.dataflow.v1beta3.IParameterMetadata[];

                /**
                 * Creates a new RuntimeMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RuntimeMetadata instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IRuntimeMetadata): google.dataflow.v1beta3.RuntimeMetadata;

                /**
                 * Encodes the specified RuntimeMetadata message. Does not implicitly {@link google.dataflow.v1beta3.RuntimeMetadata.verify|verify} messages.
                 * @param message RuntimeMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IRuntimeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RuntimeMetadata message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.RuntimeMetadata.verify|verify} messages.
                 * @param message RuntimeMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IRuntimeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RuntimeMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RuntimeMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.RuntimeMetadata;

                /**
                 * Decodes a RuntimeMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RuntimeMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.RuntimeMetadata;

                /**
                 * Verifies a RuntimeMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RuntimeMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RuntimeMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.RuntimeMetadata;

                /**
                 * Creates a plain object from a RuntimeMetadata message. Also converts values to other types if specified.
                 * @param message RuntimeMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.RuntimeMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RuntimeMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RuntimeMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateJobFromTemplateRequest. */
            interface ICreateJobFromTemplateRequest {

                /** CreateJobFromTemplateRequest projectId */
                projectId?: (string|null);

                /** CreateJobFromTemplateRequest jobName */
                jobName?: (string|null);

                /** CreateJobFromTemplateRequest gcsPath */
                gcsPath?: (string|null);

                /** CreateJobFromTemplateRequest parameters */
                parameters?: ({ [k: string]: string }|null);

                /** CreateJobFromTemplateRequest environment */
                environment?: (google.dataflow.v1beta3.IRuntimeEnvironment|null);

                /** CreateJobFromTemplateRequest location */
                location?: (string|null);
            }

            /** Represents a CreateJobFromTemplateRequest. */
            class CreateJobFromTemplateRequest implements ICreateJobFromTemplateRequest {

                /**
                 * Constructs a new CreateJobFromTemplateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ICreateJobFromTemplateRequest);

                /** CreateJobFromTemplateRequest projectId. */
                public projectId: string;

                /** CreateJobFromTemplateRequest jobName. */
                public jobName: string;

                /** CreateJobFromTemplateRequest gcsPath. */
                public gcsPath?: (string|null);

                /** CreateJobFromTemplateRequest parameters. */
                public parameters: { [k: string]: string };

                /** CreateJobFromTemplateRequest environment. */
                public environment?: (google.dataflow.v1beta3.IRuntimeEnvironment|null);

                /** CreateJobFromTemplateRequest location. */
                public location: string;

                /** CreateJobFromTemplateRequest template. */
                public template?: "gcsPath";

                /**
                 * Creates a new CreateJobFromTemplateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateJobFromTemplateRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ICreateJobFromTemplateRequest): google.dataflow.v1beta3.CreateJobFromTemplateRequest;

                /**
                 * Encodes the specified CreateJobFromTemplateRequest message. Does not implicitly {@link google.dataflow.v1beta3.CreateJobFromTemplateRequest.verify|verify} messages.
                 * @param message CreateJobFromTemplateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ICreateJobFromTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateJobFromTemplateRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.CreateJobFromTemplateRequest.verify|verify} messages.
                 * @param message CreateJobFromTemplateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ICreateJobFromTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateJobFromTemplateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateJobFromTemplateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.CreateJobFromTemplateRequest;

                /**
                 * Decodes a CreateJobFromTemplateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateJobFromTemplateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.CreateJobFromTemplateRequest;

                /**
                 * Verifies a CreateJobFromTemplateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateJobFromTemplateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateJobFromTemplateRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.CreateJobFromTemplateRequest;

                /**
                 * Creates a plain object from a CreateJobFromTemplateRequest message. Also converts values to other types if specified.
                 * @param message CreateJobFromTemplateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.CreateJobFromTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateJobFromTemplateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateJobFromTemplateRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetTemplateRequest. */
            interface IGetTemplateRequest {

                /** GetTemplateRequest projectId */
                projectId?: (string|null);

                /** GetTemplateRequest gcsPath */
                gcsPath?: (string|null);

                /** GetTemplateRequest view */
                view?: (google.dataflow.v1beta3.GetTemplateRequest.TemplateView|keyof typeof google.dataflow.v1beta3.GetTemplateRequest.TemplateView|null);

                /** GetTemplateRequest location */
                location?: (string|null);
            }

            /** Represents a GetTemplateRequest. */
            class GetTemplateRequest implements IGetTemplateRequest {

                /**
                 * Constructs a new GetTemplateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IGetTemplateRequest);

                /** GetTemplateRequest projectId. */
                public projectId: string;

                /** GetTemplateRequest gcsPath. */
                public gcsPath?: (string|null);

                /** GetTemplateRequest view. */
                public view: (google.dataflow.v1beta3.GetTemplateRequest.TemplateView|keyof typeof google.dataflow.v1beta3.GetTemplateRequest.TemplateView);

                /** GetTemplateRequest location. */
                public location: string;

                /** GetTemplateRequest template. */
                public template?: "gcsPath";

                /**
                 * Creates a new GetTemplateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetTemplateRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IGetTemplateRequest): google.dataflow.v1beta3.GetTemplateRequest;

                /**
                 * Encodes the specified GetTemplateRequest message. Does not implicitly {@link google.dataflow.v1beta3.GetTemplateRequest.verify|verify} messages.
                 * @param message GetTemplateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IGetTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetTemplateRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.GetTemplateRequest.verify|verify} messages.
                 * @param message GetTemplateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IGetTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetTemplateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetTemplateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.GetTemplateRequest;

                /**
                 * Decodes a GetTemplateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetTemplateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.GetTemplateRequest;

                /**
                 * Verifies a GetTemplateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetTemplateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetTemplateRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.GetTemplateRequest;

                /**
                 * Creates a plain object from a GetTemplateRequest message. Also converts values to other types if specified.
                 * @param message GetTemplateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.GetTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetTemplateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetTemplateRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace GetTemplateRequest {

                /** TemplateView enum. */
                enum TemplateView {
                    METADATA_ONLY = 0
                }
            }

            /** Properties of a GetTemplateResponse. */
            interface IGetTemplateResponse {

                /** GetTemplateResponse status */
                status?: (google.rpc.IStatus|null);

                /** GetTemplateResponse metadata */
                metadata?: (google.dataflow.v1beta3.ITemplateMetadata|null);

                /** GetTemplateResponse templateType */
                templateType?: (google.dataflow.v1beta3.GetTemplateResponse.TemplateType|keyof typeof google.dataflow.v1beta3.GetTemplateResponse.TemplateType|null);

                /** GetTemplateResponse runtimeMetadata */
                runtimeMetadata?: (google.dataflow.v1beta3.IRuntimeMetadata|null);
            }

            /** Represents a GetTemplateResponse. */
            class GetTemplateResponse implements IGetTemplateResponse {

                /**
                 * Constructs a new GetTemplateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IGetTemplateResponse);

                /** GetTemplateResponse status. */
                public status?: (google.rpc.IStatus|null);

                /** GetTemplateResponse metadata. */
                public metadata?: (google.dataflow.v1beta3.ITemplateMetadata|null);

                /** GetTemplateResponse templateType. */
                public templateType: (google.dataflow.v1beta3.GetTemplateResponse.TemplateType|keyof typeof google.dataflow.v1beta3.GetTemplateResponse.TemplateType);

                /** GetTemplateResponse runtimeMetadata. */
                public runtimeMetadata?: (google.dataflow.v1beta3.IRuntimeMetadata|null);

                /**
                 * Creates a new GetTemplateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetTemplateResponse instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IGetTemplateResponse): google.dataflow.v1beta3.GetTemplateResponse;

                /**
                 * Encodes the specified GetTemplateResponse message. Does not implicitly {@link google.dataflow.v1beta3.GetTemplateResponse.verify|verify} messages.
                 * @param message GetTemplateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IGetTemplateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetTemplateResponse message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.GetTemplateResponse.verify|verify} messages.
                 * @param message GetTemplateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IGetTemplateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetTemplateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetTemplateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.GetTemplateResponse;

                /**
                 * Decodes a GetTemplateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetTemplateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.GetTemplateResponse;

                /**
                 * Verifies a GetTemplateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetTemplateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetTemplateResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.GetTemplateResponse;

                /**
                 * Creates a plain object from a GetTemplateResponse message. Also converts values to other types if specified.
                 * @param message GetTemplateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.GetTemplateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetTemplateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetTemplateResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace GetTemplateResponse {

                /** TemplateType enum. */
                enum TemplateType {
                    UNKNOWN = 0,
                    LEGACY = 1,
                    FLEX = 2
                }
            }

            /** Properties of a LaunchTemplateParameters. */
            interface ILaunchTemplateParameters {

                /** LaunchTemplateParameters jobName */
                jobName?: (string|null);

                /** LaunchTemplateParameters parameters */
                parameters?: ({ [k: string]: string }|null);

                /** LaunchTemplateParameters environment */
                environment?: (google.dataflow.v1beta3.IRuntimeEnvironment|null);

                /** LaunchTemplateParameters update */
                update?: (boolean|null);

                /** LaunchTemplateParameters transformNameMapping */
                transformNameMapping?: ({ [k: string]: string }|null);
            }

            /** Represents a LaunchTemplateParameters. */
            class LaunchTemplateParameters implements ILaunchTemplateParameters {

                /**
                 * Constructs a new LaunchTemplateParameters.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ILaunchTemplateParameters);

                /** LaunchTemplateParameters jobName. */
                public jobName: string;

                /** LaunchTemplateParameters parameters. */
                public parameters: { [k: string]: string };

                /** LaunchTemplateParameters environment. */
                public environment?: (google.dataflow.v1beta3.IRuntimeEnvironment|null);

                /** LaunchTemplateParameters update. */
                public update: boolean;

                /** LaunchTemplateParameters transformNameMapping. */
                public transformNameMapping: { [k: string]: string };

                /**
                 * Creates a new LaunchTemplateParameters instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LaunchTemplateParameters instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ILaunchTemplateParameters): google.dataflow.v1beta3.LaunchTemplateParameters;

                /**
                 * Encodes the specified LaunchTemplateParameters message. Does not implicitly {@link google.dataflow.v1beta3.LaunchTemplateParameters.verify|verify} messages.
                 * @param message LaunchTemplateParameters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ILaunchTemplateParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LaunchTemplateParameters message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.LaunchTemplateParameters.verify|verify} messages.
                 * @param message LaunchTemplateParameters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ILaunchTemplateParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LaunchTemplateParameters message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LaunchTemplateParameters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.LaunchTemplateParameters;

                /**
                 * Decodes a LaunchTemplateParameters message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LaunchTemplateParameters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.LaunchTemplateParameters;

                /**
                 * Verifies a LaunchTemplateParameters message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LaunchTemplateParameters message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LaunchTemplateParameters
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.LaunchTemplateParameters;

                /**
                 * Creates a plain object from a LaunchTemplateParameters message. Also converts values to other types if specified.
                 * @param message LaunchTemplateParameters
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.LaunchTemplateParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LaunchTemplateParameters to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LaunchTemplateParameters
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LaunchTemplateRequest. */
            interface ILaunchTemplateRequest {

                /** LaunchTemplateRequest projectId */
                projectId?: (string|null);

                /** LaunchTemplateRequest validateOnly */
                validateOnly?: (boolean|null);

                /** LaunchTemplateRequest gcsPath */
                gcsPath?: (string|null);

                /** LaunchTemplateRequest dynamicTemplate */
                dynamicTemplate?: (google.dataflow.v1beta3.IDynamicTemplateLaunchParams|null);

                /** LaunchTemplateRequest launchParameters */
                launchParameters?: (google.dataflow.v1beta3.ILaunchTemplateParameters|null);

                /** LaunchTemplateRequest location */
                location?: (string|null);
            }

            /** Represents a LaunchTemplateRequest. */
            class LaunchTemplateRequest implements ILaunchTemplateRequest {

                /**
                 * Constructs a new LaunchTemplateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ILaunchTemplateRequest);

                /** LaunchTemplateRequest projectId. */
                public projectId: string;

                /** LaunchTemplateRequest validateOnly. */
                public validateOnly: boolean;

                /** LaunchTemplateRequest gcsPath. */
                public gcsPath?: (string|null);

                /** LaunchTemplateRequest dynamicTemplate. */
                public dynamicTemplate?: (google.dataflow.v1beta3.IDynamicTemplateLaunchParams|null);

                /** LaunchTemplateRequest launchParameters. */
                public launchParameters?: (google.dataflow.v1beta3.ILaunchTemplateParameters|null);

                /** LaunchTemplateRequest location. */
                public location: string;

                /** LaunchTemplateRequest template. */
                public template?: ("gcsPath"|"dynamicTemplate");

                /**
                 * Creates a new LaunchTemplateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LaunchTemplateRequest instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ILaunchTemplateRequest): google.dataflow.v1beta3.LaunchTemplateRequest;

                /**
                 * Encodes the specified LaunchTemplateRequest message. Does not implicitly {@link google.dataflow.v1beta3.LaunchTemplateRequest.verify|verify} messages.
                 * @param message LaunchTemplateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ILaunchTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LaunchTemplateRequest message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.LaunchTemplateRequest.verify|verify} messages.
                 * @param message LaunchTemplateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ILaunchTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LaunchTemplateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LaunchTemplateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.LaunchTemplateRequest;

                /**
                 * Decodes a LaunchTemplateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LaunchTemplateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.LaunchTemplateRequest;

                /**
                 * Verifies a LaunchTemplateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LaunchTemplateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LaunchTemplateRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.LaunchTemplateRequest;

                /**
                 * Creates a plain object from a LaunchTemplateRequest message. Also converts values to other types if specified.
                 * @param message LaunchTemplateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.LaunchTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LaunchTemplateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LaunchTemplateRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LaunchTemplateResponse. */
            interface ILaunchTemplateResponse {

                /** LaunchTemplateResponse job */
                job?: (google.dataflow.v1beta3.IJob|null);
            }

            /** Represents a LaunchTemplateResponse. */
            class LaunchTemplateResponse implements ILaunchTemplateResponse {

                /**
                 * Constructs a new LaunchTemplateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.ILaunchTemplateResponse);

                /** LaunchTemplateResponse job. */
                public job?: (google.dataflow.v1beta3.IJob|null);

                /**
                 * Creates a new LaunchTemplateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LaunchTemplateResponse instance
                 */
                public static create(properties?: google.dataflow.v1beta3.ILaunchTemplateResponse): google.dataflow.v1beta3.LaunchTemplateResponse;

                /**
                 * Encodes the specified LaunchTemplateResponse message. Does not implicitly {@link google.dataflow.v1beta3.LaunchTemplateResponse.verify|verify} messages.
                 * @param message LaunchTemplateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.ILaunchTemplateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LaunchTemplateResponse message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.LaunchTemplateResponse.verify|verify} messages.
                 * @param message LaunchTemplateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.ILaunchTemplateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LaunchTemplateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LaunchTemplateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.LaunchTemplateResponse;

                /**
                 * Decodes a LaunchTemplateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LaunchTemplateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.LaunchTemplateResponse;

                /**
                 * Verifies a LaunchTemplateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LaunchTemplateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LaunchTemplateResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.LaunchTemplateResponse;

                /**
                 * Creates a plain object from a LaunchTemplateResponse message. Also converts values to other types if specified.
                 * @param message LaunchTemplateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.LaunchTemplateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LaunchTemplateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LaunchTemplateResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an InvalidTemplateParameters. */
            interface IInvalidTemplateParameters {

                /** InvalidTemplateParameters parameterViolations */
                parameterViolations?: (google.dataflow.v1beta3.InvalidTemplateParameters.IParameterViolation[]|null);
            }

            /** Represents an InvalidTemplateParameters. */
            class InvalidTemplateParameters implements IInvalidTemplateParameters {

                /**
                 * Constructs a new InvalidTemplateParameters.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IInvalidTemplateParameters);

                /** InvalidTemplateParameters parameterViolations. */
                public parameterViolations: google.dataflow.v1beta3.InvalidTemplateParameters.IParameterViolation[];

                /**
                 * Creates a new InvalidTemplateParameters instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InvalidTemplateParameters instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IInvalidTemplateParameters): google.dataflow.v1beta3.InvalidTemplateParameters;

                /**
                 * Encodes the specified InvalidTemplateParameters message. Does not implicitly {@link google.dataflow.v1beta3.InvalidTemplateParameters.verify|verify} messages.
                 * @param message InvalidTemplateParameters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IInvalidTemplateParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InvalidTemplateParameters message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.InvalidTemplateParameters.verify|verify} messages.
                 * @param message InvalidTemplateParameters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IInvalidTemplateParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InvalidTemplateParameters message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InvalidTemplateParameters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.InvalidTemplateParameters;

                /**
                 * Decodes an InvalidTemplateParameters message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InvalidTemplateParameters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.InvalidTemplateParameters;

                /**
                 * Verifies an InvalidTemplateParameters message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InvalidTemplateParameters message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InvalidTemplateParameters
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.InvalidTemplateParameters;

                /**
                 * Creates a plain object from an InvalidTemplateParameters message. Also converts values to other types if specified.
                 * @param message InvalidTemplateParameters
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.InvalidTemplateParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InvalidTemplateParameters to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for InvalidTemplateParameters
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace InvalidTemplateParameters {

                /** Properties of a ParameterViolation. */
                interface IParameterViolation {

                    /** ParameterViolation parameter */
                    parameter?: (string|null);

                    /** ParameterViolation description */
                    description?: (string|null);
                }

                /** Represents a ParameterViolation. */
                class ParameterViolation implements IParameterViolation {

                    /**
                     * Constructs a new ParameterViolation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.dataflow.v1beta3.InvalidTemplateParameters.IParameterViolation);

                    /** ParameterViolation parameter. */
                    public parameter: string;

                    /** ParameterViolation description. */
                    public description: string;

                    /**
                     * Creates a new ParameterViolation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ParameterViolation instance
                     */
                    public static create(properties?: google.dataflow.v1beta3.InvalidTemplateParameters.IParameterViolation): google.dataflow.v1beta3.InvalidTemplateParameters.ParameterViolation;

                    /**
                     * Encodes the specified ParameterViolation message. Does not implicitly {@link google.dataflow.v1beta3.InvalidTemplateParameters.ParameterViolation.verify|verify} messages.
                     * @param message ParameterViolation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.dataflow.v1beta3.InvalidTemplateParameters.IParameterViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ParameterViolation message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.InvalidTemplateParameters.ParameterViolation.verify|verify} messages.
                     * @param message ParameterViolation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.dataflow.v1beta3.InvalidTemplateParameters.IParameterViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ParameterViolation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ParameterViolation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.InvalidTemplateParameters.ParameterViolation;

                    /**
                     * Decodes a ParameterViolation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ParameterViolation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.InvalidTemplateParameters.ParameterViolation;

                    /**
                     * Verifies a ParameterViolation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ParameterViolation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ParameterViolation
                     */
                    public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.InvalidTemplateParameters.ParameterViolation;

                    /**
                     * Creates a plain object from a ParameterViolation message. Also converts values to other types if specified.
                     * @param message ParameterViolation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.dataflow.v1beta3.InvalidTemplateParameters.ParameterViolation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ParameterViolation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ParameterViolation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a DynamicTemplateLaunchParams. */
            interface IDynamicTemplateLaunchParams {

                /** DynamicTemplateLaunchParams gcsPath */
                gcsPath?: (string|null);

                /** DynamicTemplateLaunchParams stagingLocation */
                stagingLocation?: (string|null);
            }

            /** Represents a DynamicTemplateLaunchParams. */
            class DynamicTemplateLaunchParams implements IDynamicTemplateLaunchParams {

                /**
                 * Constructs a new DynamicTemplateLaunchParams.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.dataflow.v1beta3.IDynamicTemplateLaunchParams);

                /** DynamicTemplateLaunchParams gcsPath. */
                public gcsPath: string;

                /** DynamicTemplateLaunchParams stagingLocation. */
                public stagingLocation: string;

                /**
                 * Creates a new DynamicTemplateLaunchParams instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DynamicTemplateLaunchParams instance
                 */
                public static create(properties?: google.dataflow.v1beta3.IDynamicTemplateLaunchParams): google.dataflow.v1beta3.DynamicTemplateLaunchParams;

                /**
                 * Encodes the specified DynamicTemplateLaunchParams message. Does not implicitly {@link google.dataflow.v1beta3.DynamicTemplateLaunchParams.verify|verify} messages.
                 * @param message DynamicTemplateLaunchParams message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.dataflow.v1beta3.IDynamicTemplateLaunchParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DynamicTemplateLaunchParams message, length delimited. Does not implicitly {@link google.dataflow.v1beta3.DynamicTemplateLaunchParams.verify|verify} messages.
                 * @param message DynamicTemplateLaunchParams message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.dataflow.v1beta3.IDynamicTemplateLaunchParams, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DynamicTemplateLaunchParams message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DynamicTemplateLaunchParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.dataflow.v1beta3.DynamicTemplateLaunchParams;

                /**
                 * Decodes a DynamicTemplateLaunchParams message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DynamicTemplateLaunchParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.dataflow.v1beta3.DynamicTemplateLaunchParams;

                /**
                 * Verifies a DynamicTemplateLaunchParams message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DynamicTemplateLaunchParams message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DynamicTemplateLaunchParams
                 */
                public static fromObject(object: { [k: string]: any }): google.dataflow.v1beta3.DynamicTemplateLaunchParams;

                /**
                 * Creates a plain object from a DynamicTemplateLaunchParams message. Also converts values to other types if specified.
                 * @param message DynamicTemplateLaunchParams
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.dataflow.v1beta3.DynamicTemplateLaunchParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DynamicTemplateLaunchParams to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DynamicTemplateLaunchParams
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** ParameterType enum. */
            enum ParameterType {
                DEFAULT = 0,
                TEXT = 1,
                GCS_READ_BUCKET = 2,
                GCS_WRITE_BUCKET = 3,
                GCS_READ_FILE = 4,
                GCS_WRITE_FILE = 5,
                GCS_READ_FOLDER = 6,
                GCS_WRITE_FOLDER = 7,
                PUBSUB_TOPIC = 8,
                PUBSUB_SUBSCRIPTION = 9,
                BIGQUERY_TABLE = 10,
                JAVASCRIPT_UDF_FILE = 11,
                SERVICE_ACCOUNT = 12,
                MACHINE_TYPE = 13,
                KMS_KEY_NAME = 14,
                WORKER_REGION = 15,
                WORKER_ZONE = 16,
                BOOLEAN = 17,
                ENUM = 18,
                NUMBER = 19,
                KAFKA_TOPIC = 20,
                KAFKA_READ_TOPIC = 21,
                KAFKA_WRITE_TOPIC = 22
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
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
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

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);

            /** Publishing restReferenceDocumentationUri */
            restReferenceDocumentationUri?: (string|null);
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

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /** Publishing restReferenceDocumentationUri. */
            public restReferenceDocumentationUri: string;

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

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
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

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

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

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
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

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

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
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
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

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
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
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
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
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

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

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
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

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

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

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
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
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
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

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
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

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
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

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

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

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

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

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

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

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

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

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

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

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);

            /** ServiceOptions .google.api.apiVersion */
            ".google.api.apiVersion"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

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

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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
            stringValue?: (Uint8Array|Buffer|string|null);

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
            public stringValue: (Uint8Array|Buffer|string);

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

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault features */
                features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault features. */
                public features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
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

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|Buffer|string|null);
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
            public value: (Uint8Array|Buffer|string);

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

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for ListValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
