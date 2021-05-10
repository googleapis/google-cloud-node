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

        /** Namespace bigquery. */
        namespace bigquery {

            /** Namespace reservation. */
            namespace reservation {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a ReservationService */
                    class ReservationService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ReservationService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ReservationService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ReservationService;

                        /**
                         * Calls CreateReservation.
                         * @param request CreateReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Reservation
                         */
                        public createReservation(request: google.cloud.bigquery.reservation.v1.ICreateReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.CreateReservationCallback): void;

                        /**
                         * Calls CreateReservation.
                         * @param request CreateReservationRequest message or plain object
                         * @returns Promise
                         */
                        public createReservation(request: google.cloud.bigquery.reservation.v1.ICreateReservationRequest): Promise<google.cloud.bigquery.reservation.v1.Reservation>;

                        /**
                         * Calls ListReservations.
                         * @param request ListReservationsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListReservationsResponse
                         */
                        public listReservations(request: google.cloud.bigquery.reservation.v1.IListReservationsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.ListReservationsCallback): void;

                        /**
                         * Calls ListReservations.
                         * @param request ListReservationsRequest message or plain object
                         * @returns Promise
                         */
                        public listReservations(request: google.cloud.bigquery.reservation.v1.IListReservationsRequest): Promise<google.cloud.bigquery.reservation.v1.ListReservationsResponse>;

                        /**
                         * Calls GetReservation.
                         * @param request GetReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Reservation
                         */
                        public getReservation(request: google.cloud.bigquery.reservation.v1.IGetReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.GetReservationCallback): void;

                        /**
                         * Calls GetReservation.
                         * @param request GetReservationRequest message or plain object
                         * @returns Promise
                         */
                        public getReservation(request: google.cloud.bigquery.reservation.v1.IGetReservationRequest): Promise<google.cloud.bigquery.reservation.v1.Reservation>;

                        /**
                         * Calls DeleteReservation.
                         * @param request DeleteReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteReservation(request: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.DeleteReservationCallback): void;

                        /**
                         * Calls DeleteReservation.
                         * @param request DeleteReservationRequest message or plain object
                         * @returns Promise
                         */
                        public deleteReservation(request: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls UpdateReservation.
                         * @param request UpdateReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Reservation
                         */
                        public updateReservation(request: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.UpdateReservationCallback): void;

                        /**
                         * Calls UpdateReservation.
                         * @param request UpdateReservationRequest message or plain object
                         * @returns Promise
                         */
                        public updateReservation(request: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest): Promise<google.cloud.bigquery.reservation.v1.Reservation>;

                        /**
                         * Calls CreateCapacityCommitment.
                         * @param request CreateCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CapacityCommitment
                         */
                        public createCapacityCommitment(request: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.CreateCapacityCommitmentCallback): void;

                        /**
                         * Calls CreateCapacityCommitment.
                         * @param request CreateCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public createCapacityCommitment(request: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest): Promise<google.cloud.bigquery.reservation.v1.CapacityCommitment>;

                        /**
                         * Calls ListCapacityCommitments.
                         * @param request ListCapacityCommitmentsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListCapacityCommitmentsResponse
                         */
                        public listCapacityCommitments(request: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.ListCapacityCommitmentsCallback): void;

                        /**
                         * Calls ListCapacityCommitments.
                         * @param request ListCapacityCommitmentsRequest message or plain object
                         * @returns Promise
                         */
                        public listCapacityCommitments(request: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest): Promise<google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse>;

                        /**
                         * Calls GetCapacityCommitment.
                         * @param request GetCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CapacityCommitment
                         */
                        public getCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.GetCapacityCommitmentCallback): void;

                        /**
                         * Calls GetCapacityCommitment.
                         * @param request GetCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public getCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest): Promise<google.cloud.bigquery.reservation.v1.CapacityCommitment>;

                        /**
                         * Calls DeleteCapacityCommitment.
                         * @param request DeleteCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.DeleteCapacityCommitmentCallback): void;

                        /**
                         * Calls DeleteCapacityCommitment.
                         * @param request DeleteCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public deleteCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls UpdateCapacityCommitment.
                         * @param request UpdateCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CapacityCommitment
                         */
                        public updateCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.UpdateCapacityCommitmentCallback): void;

                        /**
                         * Calls UpdateCapacityCommitment.
                         * @param request UpdateCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public updateCapacityCommitment(request: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest): Promise<google.cloud.bigquery.reservation.v1.CapacityCommitment>;

                        /**
                         * Calls SplitCapacityCommitment.
                         * @param request SplitCapacityCommitmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SplitCapacityCommitmentResponse
                         */
                        public splitCapacityCommitment(request: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.SplitCapacityCommitmentCallback): void;

                        /**
                         * Calls SplitCapacityCommitment.
                         * @param request SplitCapacityCommitmentRequest message or plain object
                         * @returns Promise
                         */
                        public splitCapacityCommitment(request: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest): Promise<google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse>;

                        /**
                         * Calls MergeCapacityCommitments.
                         * @param request MergeCapacityCommitmentsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and CapacityCommitment
                         */
                        public mergeCapacityCommitments(request: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.MergeCapacityCommitmentsCallback): void;

                        /**
                         * Calls MergeCapacityCommitments.
                         * @param request MergeCapacityCommitmentsRequest message or plain object
                         * @returns Promise
                         */
                        public mergeCapacityCommitments(request: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest): Promise<google.cloud.bigquery.reservation.v1.CapacityCommitment>;

                        /**
                         * Calls CreateAssignment.
                         * @param request CreateAssignmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Assignment
                         */
                        public createAssignment(request: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.CreateAssignmentCallback): void;

                        /**
                         * Calls CreateAssignment.
                         * @param request CreateAssignmentRequest message or plain object
                         * @returns Promise
                         */
                        public createAssignment(request: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest): Promise<google.cloud.bigquery.reservation.v1.Assignment>;

                        /**
                         * Calls ListAssignments.
                         * @param request ListAssignmentsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListAssignmentsResponse
                         */
                        public listAssignments(request: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.ListAssignmentsCallback): void;

                        /**
                         * Calls ListAssignments.
                         * @param request ListAssignmentsRequest message or plain object
                         * @returns Promise
                         */
                        public listAssignments(request: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest): Promise<google.cloud.bigquery.reservation.v1.ListAssignmentsResponse>;

                        /**
                         * Calls DeleteAssignment.
                         * @param request DeleteAssignmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteAssignment(request: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.DeleteAssignmentCallback): void;

                        /**
                         * Calls DeleteAssignment.
                         * @param request DeleteAssignmentRequest message or plain object
                         * @returns Promise
                         */
                        public deleteAssignment(request: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls SearchAssignments.
                         * @param request SearchAssignmentsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SearchAssignmentsResponse
                         */
                        public searchAssignments(request: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.SearchAssignmentsCallback): void;

                        /**
                         * Calls SearchAssignments.
                         * @param request SearchAssignmentsRequest message or plain object
                         * @returns Promise
                         */
                        public searchAssignments(request: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest): Promise<google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse>;

                        /**
                         * Calls MoveAssignment.
                         * @param request MoveAssignmentRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Assignment
                         */
                        public moveAssignment(request: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.MoveAssignmentCallback): void;

                        /**
                         * Calls MoveAssignment.
                         * @param request MoveAssignmentRequest message or plain object
                         * @returns Promise
                         */
                        public moveAssignment(request: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest): Promise<google.cloud.bigquery.reservation.v1.Assignment>;

                        /**
                         * Calls GetBiReservation.
                         * @param request GetBiReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BiReservation
                         */
                        public getBiReservation(request: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.GetBiReservationCallback): void;

                        /**
                         * Calls GetBiReservation.
                         * @param request GetBiReservationRequest message or plain object
                         * @returns Promise
                         */
                        public getBiReservation(request: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest): Promise<google.cloud.bigquery.reservation.v1.BiReservation>;

                        /**
                         * Calls UpdateBiReservation.
                         * @param request UpdateBiReservationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BiReservation
                         */
                        public updateBiReservation(request: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest, callback: google.cloud.bigquery.reservation.v1.ReservationService.UpdateBiReservationCallback): void;

                        /**
                         * Calls UpdateBiReservation.
                         * @param request UpdateBiReservationRequest message or plain object
                         * @returns Promise
                         */
                        public updateBiReservation(request: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest): Promise<google.cloud.bigquery.reservation.v1.BiReservation>;
                    }

                    namespace ReservationService {

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#createReservation}.
                         * @param error Error, if any
                         * @param [response] Reservation
                         */
                        type CreateReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Reservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#listReservations}.
                         * @param error Error, if any
                         * @param [response] ListReservationsResponse
                         */
                        type ListReservationsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.ListReservationsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#getReservation}.
                         * @param error Error, if any
                         * @param [response] Reservation
                         */
                        type GetReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Reservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#deleteReservation}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteReservationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#updateReservation}.
                         * @param error Error, if any
                         * @param [response] Reservation
                         */
                        type UpdateReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Reservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#createCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] CapacityCommitment
                         */
                        type CreateCapacityCommitmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.CapacityCommitment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#listCapacityCommitments}.
                         * @param error Error, if any
                         * @param [response] ListCapacityCommitmentsResponse
                         */
                        type ListCapacityCommitmentsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#getCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] CapacityCommitment
                         */
                        type GetCapacityCommitmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.CapacityCommitment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#deleteCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteCapacityCommitmentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#updateCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] CapacityCommitment
                         */
                        type UpdateCapacityCommitmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.CapacityCommitment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#splitCapacityCommitment}.
                         * @param error Error, if any
                         * @param [response] SplitCapacityCommitmentResponse
                         */
                        type SplitCapacityCommitmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#mergeCapacityCommitments}.
                         * @param error Error, if any
                         * @param [response] CapacityCommitment
                         */
                        type MergeCapacityCommitmentsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.CapacityCommitment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#createAssignment}.
                         * @param error Error, if any
                         * @param [response] Assignment
                         */
                        type CreateAssignmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Assignment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#listAssignments}.
                         * @param error Error, if any
                         * @param [response] ListAssignmentsResponse
                         */
                        type ListAssignmentsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.ListAssignmentsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#deleteAssignment}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteAssignmentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#searchAssignments}.
                         * @param error Error, if any
                         * @param [response] SearchAssignmentsResponse
                         */
                        type SearchAssignmentsCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#moveAssignment}.
                         * @param error Error, if any
                         * @param [response] Assignment
                         */
                        type MoveAssignmentCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.Assignment) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#getBiReservation}.
                         * @param error Error, if any
                         * @param [response] BiReservation
                         */
                        type GetBiReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.BiReservation) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.reservation.v1.ReservationService#updateBiReservation}.
                         * @param error Error, if any
                         * @param [response] BiReservation
                         */
                        type UpdateBiReservationCallback = (error: (Error|null), response?: google.cloud.bigquery.reservation.v1.BiReservation) => void;
                    }

                    /** Properties of a Reservation. */
                    interface IReservation {

                        /** Reservation name */
                        name?: (string|null);

                        /** Reservation slotCapacity */
                        slotCapacity?: (number|Long|string|null);

                        /** Reservation ignoreIdleSlots */
                        ignoreIdleSlots?: (boolean|null);
                    }

                    /** Represents a Reservation. */
                    class Reservation implements IReservation {

                        /**
                         * Constructs a new Reservation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IReservation);

                        /** Reservation name. */
                        public name: string;

                        /** Reservation slotCapacity. */
                        public slotCapacity: (number|Long|string);

                        /** Reservation ignoreIdleSlots. */
                        public ignoreIdleSlots: boolean;

                        /**
                         * Creates a new Reservation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Reservation instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IReservation): google.cloud.bigquery.reservation.v1.Reservation;

                        /**
                         * Encodes the specified Reservation message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Reservation.verify|verify} messages.
                         * @param message Reservation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Reservation message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Reservation.verify|verify} messages.
                         * @param message Reservation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Reservation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Reservation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.Reservation;

                        /**
                         * Decodes a Reservation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Reservation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.Reservation;

                        /**
                         * Verifies a Reservation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Reservation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Reservation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.Reservation;

                        /**
                         * Creates a plain object from a Reservation message. Also converts values to other types if specified.
                         * @param message Reservation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.Reservation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Reservation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CapacityCommitment. */
                    interface ICapacityCommitment {

                        /** CapacityCommitment name */
                        name?: (string|null);

                        /** CapacityCommitment slotCount */
                        slotCount?: (number|Long|string|null);

                        /** CapacityCommitment plan */
                        plan?: (google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|null);

                        /** CapacityCommitment state */
                        state?: (google.cloud.bigquery.reservation.v1.CapacityCommitment.State|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.State|null);

                        /** CapacityCommitment commitmentEndTime */
                        commitmentEndTime?: (google.protobuf.ITimestamp|null);

                        /** CapacityCommitment failureStatus */
                        failureStatus?: (google.rpc.IStatus|null);

                        /** CapacityCommitment renewalPlan */
                        renewalPlan?: (google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|null);
                    }

                    /** Represents a CapacityCommitment. */
                    class CapacityCommitment implements ICapacityCommitment {

                        /**
                         * Constructs a new CapacityCommitment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ICapacityCommitment);

                        /** CapacityCommitment name. */
                        public name: string;

                        /** CapacityCommitment slotCount. */
                        public slotCount: (number|Long|string);

                        /** CapacityCommitment plan. */
                        public plan: (google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan);

                        /** CapacityCommitment state. */
                        public state: (google.cloud.bigquery.reservation.v1.CapacityCommitment.State|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.State);

                        /** CapacityCommitment commitmentEndTime. */
                        public commitmentEndTime?: (google.protobuf.ITimestamp|null);

                        /** CapacityCommitment failureStatus. */
                        public failureStatus?: (google.rpc.IStatus|null);

                        /** CapacityCommitment renewalPlan. */
                        public renewalPlan: (google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan|keyof typeof google.cloud.bigquery.reservation.v1.CapacityCommitment.CommitmentPlan);

                        /**
                         * Creates a new CapacityCommitment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CapacityCommitment instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ICapacityCommitment): google.cloud.bigquery.reservation.v1.CapacityCommitment;

                        /**
                         * Encodes the specified CapacityCommitment message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CapacityCommitment.verify|verify} messages.
                         * @param message CapacityCommitment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ICapacityCommitment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CapacityCommitment message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CapacityCommitment.verify|verify} messages.
                         * @param message CapacityCommitment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ICapacityCommitment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CapacityCommitment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CapacityCommitment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.CapacityCommitment;

                        /**
                         * Decodes a CapacityCommitment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CapacityCommitment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.CapacityCommitment;

                        /**
                         * Verifies a CapacityCommitment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CapacityCommitment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CapacityCommitment
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.CapacityCommitment;

                        /**
                         * Creates a plain object from a CapacityCommitment message. Also converts values to other types if specified.
                         * @param message CapacityCommitment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.CapacityCommitment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CapacityCommitment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace CapacityCommitment {

                        /** CommitmentPlan enum. */
                        enum CommitmentPlan {
                            COMMITMENT_PLAN_UNSPECIFIED = 0,
                            FLEX = 3,
                            TRIAL = 5,
                            MONTHLY = 2,
                            ANNUAL = 4
                        }

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            PENDING = 1,
                            ACTIVE = 2,
                            FAILED = 3
                        }
                    }

                    /** Properties of a CreateReservationRequest. */
                    interface ICreateReservationRequest {

                        /** CreateReservationRequest parent */
                        parent?: (string|null);

                        /** CreateReservationRequest reservationId */
                        reservationId?: (string|null);

                        /** CreateReservationRequest reservation */
                        reservation?: (google.cloud.bigquery.reservation.v1.IReservation|null);
                    }

                    /** Represents a CreateReservationRequest. */
                    class CreateReservationRequest implements ICreateReservationRequest {

                        /**
                         * Constructs a new CreateReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ICreateReservationRequest);

                        /** CreateReservationRequest parent. */
                        public parent: string;

                        /** CreateReservationRequest reservationId. */
                        public reservationId: string;

                        /** CreateReservationRequest reservation. */
                        public reservation?: (google.cloud.bigquery.reservation.v1.IReservation|null);

                        /**
                         * Creates a new CreateReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ICreateReservationRequest): google.cloud.bigquery.reservation.v1.CreateReservationRequest;

                        /**
                         * Encodes the specified CreateReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateReservationRequest.verify|verify} messages.
                         * @param message CreateReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ICreateReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateReservationRequest.verify|verify} messages.
                         * @param message CreateReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ICreateReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.CreateReservationRequest;

                        /**
                         * Decodes a CreateReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.CreateReservationRequest;

                        /**
                         * Verifies a CreateReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.CreateReservationRequest;

                        /**
                         * Creates a plain object from a CreateReservationRequest message. Also converts values to other types if specified.
                         * @param message CreateReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.CreateReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListReservationsRequest. */
                    interface IListReservationsRequest {

                        /** ListReservationsRequest parent */
                        parent?: (string|null);

                        /** ListReservationsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListReservationsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListReservationsRequest. */
                    class ListReservationsRequest implements IListReservationsRequest {

                        /**
                         * Constructs a new ListReservationsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListReservationsRequest);

                        /** ListReservationsRequest parent. */
                        public parent: string;

                        /** ListReservationsRequest pageSize. */
                        public pageSize: number;

                        /** ListReservationsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListReservationsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReservationsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListReservationsRequest): google.cloud.bigquery.reservation.v1.ListReservationsRequest;

                        /**
                         * Encodes the specified ListReservationsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationsRequest.verify|verify} messages.
                         * @param message ListReservationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListReservationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReservationsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationsRequest.verify|verify} messages.
                         * @param message ListReservationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListReservationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReservationsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReservationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListReservationsRequest;

                        /**
                         * Decodes a ListReservationsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReservationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListReservationsRequest;

                        /**
                         * Verifies a ListReservationsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReservationsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReservationsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListReservationsRequest;

                        /**
                         * Creates a plain object from a ListReservationsRequest message. Also converts values to other types if specified.
                         * @param message ListReservationsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListReservationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReservationsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListReservationsResponse. */
                    interface IListReservationsResponse {

                        /** ListReservationsResponse reservations */
                        reservations?: (google.cloud.bigquery.reservation.v1.IReservation[]|null);

                        /** ListReservationsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListReservationsResponse. */
                    class ListReservationsResponse implements IListReservationsResponse {

                        /**
                         * Constructs a new ListReservationsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListReservationsResponse);

                        /** ListReservationsResponse reservations. */
                        public reservations: google.cloud.bigquery.reservation.v1.IReservation[];

                        /** ListReservationsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListReservationsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListReservationsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListReservationsResponse): google.cloud.bigquery.reservation.v1.ListReservationsResponse;

                        /**
                         * Encodes the specified ListReservationsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationsResponse.verify|verify} messages.
                         * @param message ListReservationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListReservationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListReservationsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListReservationsResponse.verify|verify} messages.
                         * @param message ListReservationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListReservationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListReservationsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListReservationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListReservationsResponse;

                        /**
                         * Decodes a ListReservationsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListReservationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListReservationsResponse;

                        /**
                         * Verifies a ListReservationsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListReservationsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListReservationsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListReservationsResponse;

                        /**
                         * Creates a plain object from a ListReservationsResponse message. Also converts values to other types if specified.
                         * @param message ListReservationsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListReservationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListReservationsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetReservationRequest. */
                    interface IGetReservationRequest {

                        /** GetReservationRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetReservationRequest. */
                    class GetReservationRequest implements IGetReservationRequest {

                        /**
                         * Constructs a new GetReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IGetReservationRequest);

                        /** GetReservationRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IGetReservationRequest): google.cloud.bigquery.reservation.v1.GetReservationRequest;

                        /**
                         * Encodes the specified GetReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetReservationRequest.verify|verify} messages.
                         * @param message GetReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IGetReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetReservationRequest.verify|verify} messages.
                         * @param message GetReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IGetReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.GetReservationRequest;

                        /**
                         * Decodes a GetReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.GetReservationRequest;

                        /**
                         * Verifies a GetReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.GetReservationRequest;

                        /**
                         * Creates a plain object from a GetReservationRequest message. Also converts values to other types if specified.
                         * @param message GetReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.GetReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteReservationRequest. */
                    interface IDeleteReservationRequest {

                        /** DeleteReservationRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteReservationRequest. */
                    class DeleteReservationRequest implements IDeleteReservationRequest {

                        /**
                         * Constructs a new DeleteReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest);

                        /** DeleteReservationRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest): google.cloud.bigquery.reservation.v1.DeleteReservationRequest;

                        /**
                         * Encodes the specified DeleteReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteReservationRequest.verify|verify} messages.
                         * @param message DeleteReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteReservationRequest.verify|verify} messages.
                         * @param message DeleteReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IDeleteReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.DeleteReservationRequest;

                        /**
                         * Decodes a DeleteReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.DeleteReservationRequest;

                        /**
                         * Verifies a DeleteReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.DeleteReservationRequest;

                        /**
                         * Creates a plain object from a DeleteReservationRequest message. Also converts values to other types if specified.
                         * @param message DeleteReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.DeleteReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateReservationRequest. */
                    interface IUpdateReservationRequest {

                        /** UpdateReservationRequest reservation */
                        reservation?: (google.cloud.bigquery.reservation.v1.IReservation|null);

                        /** UpdateReservationRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateReservationRequest. */
                    class UpdateReservationRequest implements IUpdateReservationRequest {

                        /**
                         * Constructs a new UpdateReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest);

                        /** UpdateReservationRequest reservation. */
                        public reservation?: (google.cloud.bigquery.reservation.v1.IReservation|null);

                        /** UpdateReservationRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest): google.cloud.bigquery.reservation.v1.UpdateReservationRequest;

                        /**
                         * Encodes the specified UpdateReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateReservationRequest.verify|verify} messages.
                         * @param message UpdateReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateReservationRequest.verify|verify} messages.
                         * @param message UpdateReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IUpdateReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.UpdateReservationRequest;

                        /**
                         * Decodes an UpdateReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.UpdateReservationRequest;

                        /**
                         * Verifies an UpdateReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.UpdateReservationRequest;

                        /**
                         * Creates a plain object from an UpdateReservationRequest message. Also converts values to other types if specified.
                         * @param message UpdateReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.UpdateReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CreateCapacityCommitmentRequest. */
                    interface ICreateCapacityCommitmentRequest {

                        /** CreateCapacityCommitmentRequest parent */
                        parent?: (string|null);

                        /** CreateCapacityCommitmentRequest capacityCommitment */
                        capacityCommitment?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** CreateCapacityCommitmentRequest enforceSingleAdminProjectPerOrg */
                        enforceSingleAdminProjectPerOrg?: (boolean|null);
                    }

                    /** Represents a CreateCapacityCommitmentRequest. */
                    class CreateCapacityCommitmentRequest implements ICreateCapacityCommitmentRequest {

                        /**
                         * Constructs a new CreateCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest);

                        /** CreateCapacityCommitmentRequest parent. */
                        public parent: string;

                        /** CreateCapacityCommitmentRequest capacityCommitment. */
                        public capacityCommitment?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** CreateCapacityCommitmentRequest enforceSingleAdminProjectPerOrg. */
                        public enforceSingleAdminProjectPerOrg: boolean;

                        /**
                         * Creates a new CreateCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest;

                        /**
                         * Encodes the specified CreateCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest.verify|verify} messages.
                         * @param message CreateCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest.verify|verify} messages.
                         * @param message CreateCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ICreateCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest;

                        /**
                         * Decodes a CreateCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest;

                        /**
                         * Verifies a CreateCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from a CreateCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message CreateCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.CreateCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListCapacityCommitmentsRequest. */
                    interface IListCapacityCommitmentsRequest {

                        /** ListCapacityCommitmentsRequest parent */
                        parent?: (string|null);

                        /** ListCapacityCommitmentsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListCapacityCommitmentsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListCapacityCommitmentsRequest. */
                    class ListCapacityCommitmentsRequest implements IListCapacityCommitmentsRequest {

                        /**
                         * Constructs a new ListCapacityCommitmentsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest);

                        /** ListCapacityCommitmentsRequest parent. */
                        public parent: string;

                        /** ListCapacityCommitmentsRequest pageSize. */
                        public pageSize: number;

                        /** ListCapacityCommitmentsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListCapacityCommitmentsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCapacityCommitmentsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest;

                        /**
                         * Encodes the specified ListCapacityCommitmentsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest.verify|verify} messages.
                         * @param message ListCapacityCommitmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCapacityCommitmentsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest.verify|verify} messages.
                         * @param message ListCapacityCommitmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCapacityCommitmentsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCapacityCommitmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest;

                        /**
                         * Decodes a ListCapacityCommitmentsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCapacityCommitmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest;

                        /**
                         * Verifies a ListCapacityCommitmentsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCapacityCommitmentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCapacityCommitmentsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest;

                        /**
                         * Creates a plain object from a ListCapacityCommitmentsRequest message. Also converts values to other types if specified.
                         * @param message ListCapacityCommitmentsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCapacityCommitmentsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListCapacityCommitmentsResponse. */
                    interface IListCapacityCommitmentsResponse {

                        /** ListCapacityCommitmentsResponse capacityCommitments */
                        capacityCommitments?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment[]|null);

                        /** ListCapacityCommitmentsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListCapacityCommitmentsResponse. */
                    class ListCapacityCommitmentsResponse implements IListCapacityCommitmentsResponse {

                        /**
                         * Constructs a new ListCapacityCommitmentsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsResponse);

                        /** ListCapacityCommitmentsResponse capacityCommitments. */
                        public capacityCommitments: google.cloud.bigquery.reservation.v1.ICapacityCommitment[];

                        /** ListCapacityCommitmentsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListCapacityCommitmentsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListCapacityCommitmentsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsResponse): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse;

                        /**
                         * Encodes the specified ListCapacityCommitmentsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse.verify|verify} messages.
                         * @param message ListCapacityCommitmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListCapacityCommitmentsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse.verify|verify} messages.
                         * @param message ListCapacityCommitmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListCapacityCommitmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListCapacityCommitmentsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListCapacityCommitmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse;

                        /**
                         * Decodes a ListCapacityCommitmentsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListCapacityCommitmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse;

                        /**
                         * Verifies a ListCapacityCommitmentsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListCapacityCommitmentsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListCapacityCommitmentsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse;

                        /**
                         * Creates a plain object from a ListCapacityCommitmentsResponse message. Also converts values to other types if specified.
                         * @param message ListCapacityCommitmentsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListCapacityCommitmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListCapacityCommitmentsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetCapacityCommitmentRequest. */
                    interface IGetCapacityCommitmentRequest {

                        /** GetCapacityCommitmentRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetCapacityCommitmentRequest. */
                    class GetCapacityCommitmentRequest implements IGetCapacityCommitmentRequest {

                        /**
                         * Constructs a new GetCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest);

                        /** GetCapacityCommitmentRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest;

                        /**
                         * Encodes the specified GetCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest.verify|verify} messages.
                         * @param message GetCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest.verify|verify} messages.
                         * @param message GetCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IGetCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest;

                        /**
                         * Decodes a GetCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest;

                        /**
                         * Verifies a GetCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from a GetCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message GetCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.GetCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteCapacityCommitmentRequest. */
                    interface IDeleteCapacityCommitmentRequest {

                        /** DeleteCapacityCommitmentRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteCapacityCommitmentRequest. */
                    class DeleteCapacityCommitmentRequest implements IDeleteCapacityCommitmentRequest {

                        /**
                         * Constructs a new DeleteCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest);

                        /** DeleteCapacityCommitmentRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest;

                        /**
                         * Encodes the specified DeleteCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest.verify|verify} messages.
                         * @param message DeleteCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest.verify|verify} messages.
                         * @param message DeleteCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IDeleteCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest;

                        /**
                         * Decodes a DeleteCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest;

                        /**
                         * Verifies a DeleteCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from a DeleteCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message DeleteCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.DeleteCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateCapacityCommitmentRequest. */
                    interface IUpdateCapacityCommitmentRequest {

                        /** UpdateCapacityCommitmentRequest capacityCommitment */
                        capacityCommitment?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** UpdateCapacityCommitmentRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateCapacityCommitmentRequest. */
                    class UpdateCapacityCommitmentRequest implements IUpdateCapacityCommitmentRequest {

                        /**
                         * Constructs a new UpdateCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest);

                        /** UpdateCapacityCommitmentRequest capacityCommitment. */
                        public capacityCommitment?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** UpdateCapacityCommitmentRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest;

                        /**
                         * Encodes the specified UpdateCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest.verify|verify} messages.
                         * @param message UpdateCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest.verify|verify} messages.
                         * @param message UpdateCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IUpdateCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest;

                        /**
                         * Decodes an UpdateCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest;

                        /**
                         * Verifies an UpdateCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from an UpdateCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message UpdateCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.UpdateCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SplitCapacityCommitmentRequest. */
                    interface ISplitCapacityCommitmentRequest {

                        /** SplitCapacityCommitmentRequest name */
                        name?: (string|null);

                        /** SplitCapacityCommitmentRequest slotCount */
                        slotCount?: (number|Long|string|null);
                    }

                    /** Represents a SplitCapacityCommitmentRequest. */
                    class SplitCapacityCommitmentRequest implements ISplitCapacityCommitmentRequest {

                        /**
                         * Constructs a new SplitCapacityCommitmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest);

                        /** SplitCapacityCommitmentRequest name. */
                        public name: string;

                        /** SplitCapacityCommitmentRequest slotCount. */
                        public slotCount: (number|Long|string);

                        /**
                         * Creates a new SplitCapacityCommitmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SplitCapacityCommitmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest;

                        /**
                         * Encodes the specified SplitCapacityCommitmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest.verify|verify} messages.
                         * @param message SplitCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SplitCapacityCommitmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest.verify|verify} messages.
                         * @param message SplitCapacityCommitmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SplitCapacityCommitmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SplitCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest;

                        /**
                         * Decodes a SplitCapacityCommitmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SplitCapacityCommitmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest;

                        /**
                         * Verifies a SplitCapacityCommitmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SplitCapacityCommitmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SplitCapacityCommitmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest;

                        /**
                         * Creates a plain object from a SplitCapacityCommitmentRequest message. Also converts values to other types if specified.
                         * @param message SplitCapacityCommitmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SplitCapacityCommitmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SplitCapacityCommitmentResponse. */
                    interface ISplitCapacityCommitmentResponse {

                        /** SplitCapacityCommitmentResponse first */
                        first?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** SplitCapacityCommitmentResponse second */
                        second?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);
                    }

                    /** Represents a SplitCapacityCommitmentResponse. */
                    class SplitCapacityCommitmentResponse implements ISplitCapacityCommitmentResponse {

                        /**
                         * Constructs a new SplitCapacityCommitmentResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentResponse);

                        /** SplitCapacityCommitmentResponse first. */
                        public first?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /** SplitCapacityCommitmentResponse second. */
                        public second?: (google.cloud.bigquery.reservation.v1.ICapacityCommitment|null);

                        /**
                         * Creates a new SplitCapacityCommitmentResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SplitCapacityCommitmentResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentResponse): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse;

                        /**
                         * Encodes the specified SplitCapacityCommitmentResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse.verify|verify} messages.
                         * @param message SplitCapacityCommitmentResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SplitCapacityCommitmentResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse.verify|verify} messages.
                         * @param message SplitCapacityCommitmentResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISplitCapacityCommitmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SplitCapacityCommitmentResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SplitCapacityCommitmentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse;

                        /**
                         * Decodes a SplitCapacityCommitmentResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SplitCapacityCommitmentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse;

                        /**
                         * Verifies a SplitCapacityCommitmentResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SplitCapacityCommitmentResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SplitCapacityCommitmentResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse;

                        /**
                         * Creates a plain object from a SplitCapacityCommitmentResponse message. Also converts values to other types if specified.
                         * @param message SplitCapacityCommitmentResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SplitCapacityCommitmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SplitCapacityCommitmentResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MergeCapacityCommitmentsRequest. */
                    interface IMergeCapacityCommitmentsRequest {

                        /** MergeCapacityCommitmentsRequest parent */
                        parent?: (string|null);

                        /** MergeCapacityCommitmentsRequest capacityCommitmentIds */
                        capacityCommitmentIds?: (string[]|null);
                    }

                    /** Represents a MergeCapacityCommitmentsRequest. */
                    class MergeCapacityCommitmentsRequest implements IMergeCapacityCommitmentsRequest {

                        /**
                         * Constructs a new MergeCapacityCommitmentsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest);

                        /** MergeCapacityCommitmentsRequest parent. */
                        public parent: string;

                        /** MergeCapacityCommitmentsRequest capacityCommitmentIds. */
                        public capacityCommitmentIds: string[];

                        /**
                         * Creates a new MergeCapacityCommitmentsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MergeCapacityCommitmentsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest): google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest;

                        /**
                         * Encodes the specified MergeCapacityCommitmentsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest.verify|verify} messages.
                         * @param message MergeCapacityCommitmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MergeCapacityCommitmentsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest.verify|verify} messages.
                         * @param message MergeCapacityCommitmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IMergeCapacityCommitmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MergeCapacityCommitmentsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MergeCapacityCommitmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest;

                        /**
                         * Decodes a MergeCapacityCommitmentsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MergeCapacityCommitmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest;

                        /**
                         * Verifies a MergeCapacityCommitmentsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MergeCapacityCommitmentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MergeCapacityCommitmentsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest;

                        /**
                         * Creates a plain object from a MergeCapacityCommitmentsRequest message. Also converts values to other types if specified.
                         * @param message MergeCapacityCommitmentsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.MergeCapacityCommitmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MergeCapacityCommitmentsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Assignment. */
                    interface IAssignment {

                        /** Assignment name */
                        name?: (string|null);

                        /** Assignment assignee */
                        assignee?: (string|null);

                        /** Assignment jobType */
                        jobType?: (google.cloud.bigquery.reservation.v1.Assignment.JobType|keyof typeof google.cloud.bigquery.reservation.v1.Assignment.JobType|null);

                        /** Assignment state */
                        state?: (google.cloud.bigquery.reservation.v1.Assignment.State|keyof typeof google.cloud.bigquery.reservation.v1.Assignment.State|null);
                    }

                    /** Represents an Assignment. */
                    class Assignment implements IAssignment {

                        /**
                         * Constructs a new Assignment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IAssignment);

                        /** Assignment name. */
                        public name: string;

                        /** Assignment assignee. */
                        public assignee: string;

                        /** Assignment jobType. */
                        public jobType: (google.cloud.bigquery.reservation.v1.Assignment.JobType|keyof typeof google.cloud.bigquery.reservation.v1.Assignment.JobType);

                        /** Assignment state. */
                        public state: (google.cloud.bigquery.reservation.v1.Assignment.State|keyof typeof google.cloud.bigquery.reservation.v1.Assignment.State);

                        /**
                         * Creates a new Assignment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Assignment instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IAssignment): google.cloud.bigquery.reservation.v1.Assignment;

                        /**
                         * Encodes the specified Assignment message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Assignment.verify|verify} messages.
                         * @param message Assignment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Assignment message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.Assignment.verify|verify} messages.
                         * @param message Assignment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Assignment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Assignment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.Assignment;

                        /**
                         * Decodes an Assignment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Assignment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.Assignment;

                        /**
                         * Verifies an Assignment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Assignment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Assignment
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.Assignment;

                        /**
                         * Creates a plain object from an Assignment message. Also converts values to other types if specified.
                         * @param message Assignment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.Assignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Assignment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Assignment {

                        /** JobType enum. */
                        enum JobType {
                            JOB_TYPE_UNSPECIFIED = 0,
                            PIPELINE = 1,
                            QUERY = 2
                        }

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            PENDING = 1,
                            ACTIVE = 2
                        }
                    }

                    /** Properties of a CreateAssignmentRequest. */
                    interface ICreateAssignmentRequest {

                        /** CreateAssignmentRequest parent */
                        parent?: (string|null);

                        /** CreateAssignmentRequest assignment */
                        assignment?: (google.cloud.bigquery.reservation.v1.IAssignment|null);
                    }

                    /** Represents a CreateAssignmentRequest. */
                    class CreateAssignmentRequest implements ICreateAssignmentRequest {

                        /**
                         * Constructs a new CreateAssignmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest);

                        /** CreateAssignmentRequest parent. */
                        public parent: string;

                        /** CreateAssignmentRequest assignment. */
                        public assignment?: (google.cloud.bigquery.reservation.v1.IAssignment|null);

                        /**
                         * Creates a new CreateAssignmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateAssignmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest): google.cloud.bigquery.reservation.v1.CreateAssignmentRequest;

                        /**
                         * Encodes the specified CreateAssignmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateAssignmentRequest.verify|verify} messages.
                         * @param message CreateAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.CreateAssignmentRequest.verify|verify} messages.
                         * @param message CreateAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ICreateAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateAssignmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.CreateAssignmentRequest;

                        /**
                         * Decodes a CreateAssignmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.CreateAssignmentRequest;

                        /**
                         * Verifies a CreateAssignmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateAssignmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.CreateAssignmentRequest;

                        /**
                         * Creates a plain object from a CreateAssignmentRequest message. Also converts values to other types if specified.
                         * @param message CreateAssignmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.CreateAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateAssignmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListAssignmentsRequest. */
                    interface IListAssignmentsRequest {

                        /** ListAssignmentsRequest parent */
                        parent?: (string|null);

                        /** ListAssignmentsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListAssignmentsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListAssignmentsRequest. */
                    class ListAssignmentsRequest implements IListAssignmentsRequest {

                        /**
                         * Constructs a new ListAssignmentsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest);

                        /** ListAssignmentsRequest parent. */
                        public parent: string;

                        /** ListAssignmentsRequest pageSize. */
                        public pageSize: number;

                        /** ListAssignmentsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListAssignmentsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAssignmentsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest): google.cloud.bigquery.reservation.v1.ListAssignmentsRequest;

                        /**
                         * Encodes the specified ListAssignmentsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListAssignmentsRequest.verify|verify} messages.
                         * @param message ListAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAssignmentsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListAssignmentsRequest.verify|verify} messages.
                         * @param message ListAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAssignmentsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListAssignmentsRequest;

                        /**
                         * Decodes a ListAssignmentsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListAssignmentsRequest;

                        /**
                         * Verifies a ListAssignmentsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAssignmentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAssignmentsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListAssignmentsRequest;

                        /**
                         * Creates a plain object from a ListAssignmentsRequest message. Also converts values to other types if specified.
                         * @param message ListAssignmentsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListAssignmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAssignmentsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ListAssignmentsResponse. */
                    interface IListAssignmentsResponse {

                        /** ListAssignmentsResponse assignments */
                        assignments?: (google.cloud.bigquery.reservation.v1.IAssignment[]|null);

                        /** ListAssignmentsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListAssignmentsResponse. */
                    class ListAssignmentsResponse implements IListAssignmentsResponse {

                        /**
                         * Constructs a new ListAssignmentsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IListAssignmentsResponse);

                        /** ListAssignmentsResponse assignments. */
                        public assignments: google.cloud.bigquery.reservation.v1.IAssignment[];

                        /** ListAssignmentsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListAssignmentsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAssignmentsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IListAssignmentsResponse): google.cloud.bigquery.reservation.v1.ListAssignmentsResponse;

                        /**
                         * Encodes the specified ListAssignmentsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListAssignmentsResponse.verify|verify} messages.
                         * @param message ListAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IListAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAssignmentsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.ListAssignmentsResponse.verify|verify} messages.
                         * @param message ListAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IListAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAssignmentsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.ListAssignmentsResponse;

                        /**
                         * Decodes a ListAssignmentsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.ListAssignmentsResponse;

                        /**
                         * Verifies a ListAssignmentsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAssignmentsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAssignmentsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.ListAssignmentsResponse;

                        /**
                         * Creates a plain object from a ListAssignmentsResponse message. Also converts values to other types if specified.
                         * @param message ListAssignmentsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.ListAssignmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAssignmentsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DeleteAssignmentRequest. */
                    interface IDeleteAssignmentRequest {

                        /** DeleteAssignmentRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteAssignmentRequest. */
                    class DeleteAssignmentRequest implements IDeleteAssignmentRequest {

                        /**
                         * Constructs a new DeleteAssignmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest);

                        /** DeleteAssignmentRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteAssignmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteAssignmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest): google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest;

                        /**
                         * Encodes the specified DeleteAssignmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest.verify|verify} messages.
                         * @param message DeleteAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest.verify|verify} messages.
                         * @param message DeleteAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IDeleteAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteAssignmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest;

                        /**
                         * Decodes a DeleteAssignmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest;

                        /**
                         * Verifies a DeleteAssignmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteAssignmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest;

                        /**
                         * Creates a plain object from a DeleteAssignmentRequest message. Also converts values to other types if specified.
                         * @param message DeleteAssignmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.DeleteAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteAssignmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SearchAssignmentsRequest. */
                    interface ISearchAssignmentsRequest {

                        /** SearchAssignmentsRequest parent */
                        parent?: (string|null);

                        /** SearchAssignmentsRequest query */
                        query?: (string|null);

                        /** SearchAssignmentsRequest pageSize */
                        pageSize?: (number|null);

                        /** SearchAssignmentsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a SearchAssignmentsRequest. */
                    class SearchAssignmentsRequest implements ISearchAssignmentsRequest {

                        /**
                         * Constructs a new SearchAssignmentsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest);

                        /** SearchAssignmentsRequest parent. */
                        public parent: string;

                        /** SearchAssignmentsRequest query. */
                        public query: string;

                        /** SearchAssignmentsRequest pageSize. */
                        public pageSize: number;

                        /** SearchAssignmentsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new SearchAssignmentsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchAssignmentsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest): google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest;

                        /**
                         * Encodes the specified SearchAssignmentsRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest.verify|verify} messages.
                         * @param message SearchAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchAssignmentsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest.verify|verify} messages.
                         * @param message SearchAssignmentsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISearchAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchAssignmentsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest;

                        /**
                         * Decodes a SearchAssignmentsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchAssignmentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest;

                        /**
                         * Verifies a SearchAssignmentsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchAssignmentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchAssignmentsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest;

                        /**
                         * Creates a plain object from a SearchAssignmentsRequest message. Also converts values to other types if specified.
                         * @param message SearchAssignmentsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SearchAssignmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchAssignmentsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SearchAssignmentsResponse. */
                    interface ISearchAssignmentsResponse {

                        /** SearchAssignmentsResponse assignments */
                        assignments?: (google.cloud.bigquery.reservation.v1.IAssignment[]|null);

                        /** SearchAssignmentsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a SearchAssignmentsResponse. */
                    class SearchAssignmentsResponse implements ISearchAssignmentsResponse {

                        /**
                         * Constructs a new SearchAssignmentsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.ISearchAssignmentsResponse);

                        /** SearchAssignmentsResponse assignments. */
                        public assignments: google.cloud.bigquery.reservation.v1.IAssignment[];

                        /** SearchAssignmentsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new SearchAssignmentsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchAssignmentsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.ISearchAssignmentsResponse): google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse;

                        /**
                         * Encodes the specified SearchAssignmentsResponse message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse.verify|verify} messages.
                         * @param message SearchAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.ISearchAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchAssignmentsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse.verify|verify} messages.
                         * @param message SearchAssignmentsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.ISearchAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchAssignmentsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse;

                        /**
                         * Decodes a SearchAssignmentsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchAssignmentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse;

                        /**
                         * Verifies a SearchAssignmentsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchAssignmentsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchAssignmentsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse;

                        /**
                         * Creates a plain object from a SearchAssignmentsResponse message. Also converts values to other types if specified.
                         * @param message SearchAssignmentsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.SearchAssignmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchAssignmentsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MoveAssignmentRequest. */
                    interface IMoveAssignmentRequest {

                        /** MoveAssignmentRequest name */
                        name?: (string|null);

                        /** MoveAssignmentRequest destinationId */
                        destinationId?: (string|null);
                    }

                    /** Represents a MoveAssignmentRequest. */
                    class MoveAssignmentRequest implements IMoveAssignmentRequest {

                        /**
                         * Constructs a new MoveAssignmentRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest);

                        /** MoveAssignmentRequest name. */
                        public name: string;

                        /** MoveAssignmentRequest destinationId. */
                        public destinationId: string;

                        /**
                         * Creates a new MoveAssignmentRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MoveAssignmentRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest): google.cloud.bigquery.reservation.v1.MoveAssignmentRequest;

                        /**
                         * Encodes the specified MoveAssignmentRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.MoveAssignmentRequest.verify|verify} messages.
                         * @param message MoveAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MoveAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.MoveAssignmentRequest.verify|verify} messages.
                         * @param message MoveAssignmentRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IMoveAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MoveAssignmentRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MoveAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.MoveAssignmentRequest;

                        /**
                         * Decodes a MoveAssignmentRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MoveAssignmentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.MoveAssignmentRequest;

                        /**
                         * Verifies a MoveAssignmentRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MoveAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MoveAssignmentRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.MoveAssignmentRequest;

                        /**
                         * Creates a plain object from a MoveAssignmentRequest message. Also converts values to other types if specified.
                         * @param message MoveAssignmentRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.MoveAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MoveAssignmentRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a BiReservation. */
                    interface IBiReservation {

                        /** BiReservation name */
                        name?: (string|null);

                        /** BiReservation updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);

                        /** BiReservation size */
                        size?: (number|Long|string|null);
                    }

                    /** Represents a BiReservation. */
                    class BiReservation implements IBiReservation {

                        /**
                         * Constructs a new BiReservation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IBiReservation);

                        /** BiReservation name. */
                        public name: string;

                        /** BiReservation updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** BiReservation size. */
                        public size: (number|Long|string);

                        /**
                         * Creates a new BiReservation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BiReservation instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IBiReservation): google.cloud.bigquery.reservation.v1.BiReservation;

                        /**
                         * Encodes the specified BiReservation message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.BiReservation.verify|verify} messages.
                         * @param message BiReservation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IBiReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BiReservation message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.BiReservation.verify|verify} messages.
                         * @param message BiReservation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IBiReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BiReservation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BiReservation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.BiReservation;

                        /**
                         * Decodes a BiReservation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BiReservation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.BiReservation;

                        /**
                         * Verifies a BiReservation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BiReservation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BiReservation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.BiReservation;

                        /**
                         * Creates a plain object from a BiReservation message. Also converts values to other types if specified.
                         * @param message BiReservation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.BiReservation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BiReservation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GetBiReservationRequest. */
                    interface IGetBiReservationRequest {

                        /** GetBiReservationRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetBiReservationRequest. */
                    class GetBiReservationRequest implements IGetBiReservationRequest {

                        /**
                         * Constructs a new GetBiReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest);

                        /** GetBiReservationRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetBiReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetBiReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest): google.cloud.bigquery.reservation.v1.GetBiReservationRequest;

                        /**
                         * Encodes the specified GetBiReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetBiReservationRequest.verify|verify} messages.
                         * @param message GetBiReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetBiReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.GetBiReservationRequest.verify|verify} messages.
                         * @param message GetBiReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IGetBiReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetBiReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetBiReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.GetBiReservationRequest;

                        /**
                         * Decodes a GetBiReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetBiReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.GetBiReservationRequest;

                        /**
                         * Verifies a GetBiReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetBiReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetBiReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.GetBiReservationRequest;

                        /**
                         * Creates a plain object from a GetBiReservationRequest message. Also converts values to other types if specified.
                         * @param message GetBiReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.GetBiReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetBiReservationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an UpdateBiReservationRequest. */
                    interface IUpdateBiReservationRequest {

                        /** UpdateBiReservationRequest biReservation */
                        biReservation?: (google.cloud.bigquery.reservation.v1.IBiReservation|null);

                        /** UpdateBiReservationRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateBiReservationRequest. */
                    class UpdateBiReservationRequest implements IUpdateBiReservationRequest {

                        /**
                         * Constructs a new UpdateBiReservationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest);

                        /** UpdateBiReservationRequest biReservation. */
                        public biReservation?: (google.cloud.bigquery.reservation.v1.IBiReservation|null);

                        /** UpdateBiReservationRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateBiReservationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateBiReservationRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest): google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest;

                        /**
                         * Encodes the specified UpdateBiReservationRequest message. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest.verify|verify} messages.
                         * @param message UpdateBiReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateBiReservationRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest.verify|verify} messages.
                         * @param message UpdateBiReservationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.reservation.v1.IUpdateBiReservationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateBiReservationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateBiReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest;

                        /**
                         * Decodes an UpdateBiReservationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateBiReservationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest;

                        /**
                         * Verifies an UpdateBiReservationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateBiReservationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateBiReservationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest;

                        /**
                         * Creates a plain object from an UpdateBiReservationRequest message. Also converts values to other types if specified.
                         * @param message UpdateBiReservationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.reservation.v1.UpdateBiReservationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateBiReservationRequest to JSON.
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
