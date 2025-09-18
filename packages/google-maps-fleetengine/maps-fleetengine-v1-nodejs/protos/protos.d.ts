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
/** Namespace maps. */
export namespace maps {

    /** Namespace fleetengine. */
    namespace fleetengine {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a TerminalPointId. */
            interface ITerminalPointId {

                /** TerminalPointId placeId */
                placeId?: (string|null);

                /** TerminalPointId generatedId */
                generatedId?: (string|null);

                /** TerminalPointId value */
                value?: (string|null);
            }

            /** Represents a TerminalPointId. */
            class TerminalPointId implements ITerminalPointId {

                /**
                 * Constructs a new TerminalPointId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ITerminalPointId);

                /** TerminalPointId placeId. */
                public placeId?: (string|null);

                /** TerminalPointId generatedId. */
                public generatedId?: (string|null);

                /** TerminalPointId value. */
                public value: string;

                /** TerminalPointId Id. */
                public Id?: ("placeId"|"generatedId");

                /**
                 * Creates a new TerminalPointId instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminalPointId instance
                 */
                public static create(properties?: maps.fleetengine.v1.ITerminalPointId): maps.fleetengine.v1.TerminalPointId;

                /**
                 * Encodes the specified TerminalPointId message. Does not implicitly {@link maps.fleetengine.v1.TerminalPointId.verify|verify} messages.
                 * @param message TerminalPointId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ITerminalPointId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminalPointId message, length delimited. Does not implicitly {@link maps.fleetengine.v1.TerminalPointId.verify|verify} messages.
                 * @param message TerminalPointId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ITerminalPointId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminalPointId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminalPointId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.TerminalPointId;

                /**
                 * Decodes a TerminalPointId message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminalPointId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.TerminalPointId;

                /**
                 * Verifies a TerminalPointId message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminalPointId message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminalPointId
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.TerminalPointId;

                /**
                 * Creates a plain object from a TerminalPointId message. Also converts values to other types if specified.
                 * @param message TerminalPointId
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.TerminalPointId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminalPointId to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TerminalPointId
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TerminalLocation. */
            interface ITerminalLocation {

                /** TerminalLocation point */
                point?: (google.type.ILatLng|null);

                /** TerminalLocation terminalPointId */
                terminalPointId?: (maps.fleetengine.v1.ITerminalPointId|null);

                /** TerminalLocation accessPointId */
                accessPointId?: (string|null);

                /** TerminalLocation tripId */
                tripId?: (string|null);

                /** TerminalLocation terminalLocationType */
                terminalLocationType?: (maps.fleetengine.v1.WaypointType|keyof typeof maps.fleetengine.v1.WaypointType|null);
            }

            /** Represents a TerminalLocation. */
            class TerminalLocation implements ITerminalLocation {

                /**
                 * Constructs a new TerminalLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ITerminalLocation);

                /** TerminalLocation point. */
                public point?: (google.type.ILatLng|null);

                /** TerminalLocation terminalPointId. */
                public terminalPointId?: (maps.fleetengine.v1.ITerminalPointId|null);

                /** TerminalLocation accessPointId. */
                public accessPointId: string;

                /** TerminalLocation tripId. */
                public tripId: string;

                /** TerminalLocation terminalLocationType. */
                public terminalLocationType: (maps.fleetengine.v1.WaypointType|keyof typeof maps.fleetengine.v1.WaypointType);

                /**
                 * Creates a new TerminalLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminalLocation instance
                 */
                public static create(properties?: maps.fleetengine.v1.ITerminalLocation): maps.fleetengine.v1.TerminalLocation;

                /**
                 * Encodes the specified TerminalLocation message. Does not implicitly {@link maps.fleetengine.v1.TerminalLocation.verify|verify} messages.
                 * @param message TerminalLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ITerminalLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminalLocation message, length delimited. Does not implicitly {@link maps.fleetengine.v1.TerminalLocation.verify|verify} messages.
                 * @param message TerminalLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ITerminalLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminalLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminalLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.TerminalLocation;

                /**
                 * Decodes a TerminalLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminalLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.TerminalLocation;

                /**
                 * Verifies a TerminalLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminalLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminalLocation
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.TerminalLocation;

                /**
                 * Creates a plain object from a TerminalLocation message. Also converts values to other types if specified.
                 * @param message TerminalLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.TerminalLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminalLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TerminalLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TripWaypoint. */
            interface ITripWaypoint {

                /** TripWaypoint location */
                location?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** TripWaypoint tripId */
                tripId?: (string|null);

                /** TripWaypoint waypointType */
                waypointType?: (maps.fleetengine.v1.WaypointType|keyof typeof maps.fleetengine.v1.WaypointType|null);

                /** TripWaypoint pathToWaypoint */
                pathToWaypoint?: (google.type.ILatLng[]|null);

                /** TripWaypoint encodedPathToWaypoint */
                encodedPathToWaypoint?: (string|null);

                /** TripWaypoint trafficToWaypoint */
                trafficToWaypoint?: (maps.fleetengine.v1.IConsumableTrafficPolyline|null);

                /** TripWaypoint distanceMeters */
                distanceMeters?: (google.protobuf.IInt32Value|null);

                /** TripWaypoint eta */
                eta?: (google.protobuf.ITimestamp|null);

                /** TripWaypoint duration */
                duration?: (google.protobuf.IDuration|null);
            }

            /** Represents a TripWaypoint. */
            class TripWaypoint implements ITripWaypoint {

                /**
                 * Constructs a new TripWaypoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ITripWaypoint);

                /** TripWaypoint location. */
                public location?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** TripWaypoint tripId. */
                public tripId: string;

                /** TripWaypoint waypointType. */
                public waypointType: (maps.fleetengine.v1.WaypointType|keyof typeof maps.fleetengine.v1.WaypointType);

                /** TripWaypoint pathToWaypoint. */
                public pathToWaypoint: google.type.ILatLng[];

                /** TripWaypoint encodedPathToWaypoint. */
                public encodedPathToWaypoint: string;

                /** TripWaypoint trafficToWaypoint. */
                public trafficToWaypoint?: (maps.fleetengine.v1.IConsumableTrafficPolyline|null);

                /** TripWaypoint distanceMeters. */
                public distanceMeters?: (google.protobuf.IInt32Value|null);

                /** TripWaypoint eta. */
                public eta?: (google.protobuf.ITimestamp|null);

                /** TripWaypoint duration. */
                public duration?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new TripWaypoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TripWaypoint instance
                 */
                public static create(properties?: maps.fleetengine.v1.ITripWaypoint): maps.fleetengine.v1.TripWaypoint;

                /**
                 * Encodes the specified TripWaypoint message. Does not implicitly {@link maps.fleetengine.v1.TripWaypoint.verify|verify} messages.
                 * @param message TripWaypoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ITripWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TripWaypoint message, length delimited. Does not implicitly {@link maps.fleetengine.v1.TripWaypoint.verify|verify} messages.
                 * @param message TripWaypoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ITripWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TripWaypoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TripWaypoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.TripWaypoint;

                /**
                 * Decodes a TripWaypoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TripWaypoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.TripWaypoint;

                /**
                 * Verifies a TripWaypoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TripWaypoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TripWaypoint
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.TripWaypoint;

                /**
                 * Creates a plain object from a TripWaypoint message. Also converts values to other types if specified.
                 * @param message TripWaypoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.TripWaypoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TripWaypoint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TripWaypoint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** TripType enum. */
            enum TripType {
                UNKNOWN_TRIP_TYPE = 0,
                SHARED = 1,
                EXCLUSIVE = 2
            }

            /** WaypointType enum. */
            enum WaypointType {
                UNKNOWN_WAYPOINT_TYPE = 0,
                PICKUP_WAYPOINT_TYPE = 1,
                DROP_OFF_WAYPOINT_TYPE = 2,
                INTERMEDIATE_DESTINATION_WAYPOINT_TYPE = 3
            }

            /** PolylineFormatType enum. */
            enum PolylineFormatType {
                UNKNOWN_FORMAT_TYPE = 0,
                LAT_LNG_LIST_TYPE = 1,
                ENCODED_POLYLINE_TYPE = 2
            }

            /** NavigationStatus enum. */
            enum NavigationStatus {
                UNKNOWN_NAVIGATION_STATUS = 0,
                NO_GUIDANCE = 1,
                ENROUTE_TO_DESTINATION = 2,
                OFF_ROUTE = 3,
                ARRIVED_AT_DESTINATION = 4
            }

            /** Properties of a VehicleAttribute. */
            interface IVehicleAttribute {

                /** VehicleAttribute key */
                key?: (string|null);

                /** VehicleAttribute value */
                value?: (string|null);

                /** VehicleAttribute stringValue */
                stringValue?: (string|null);

                /** VehicleAttribute boolValue */
                boolValue?: (boolean|null);

                /** VehicleAttribute numberValue */
                numberValue?: (number|null);
            }

            /** Represents a VehicleAttribute. */
            class VehicleAttribute implements IVehicleAttribute {

                /**
                 * Constructs a new VehicleAttribute.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IVehicleAttribute);

                /** VehicleAttribute key. */
                public key: string;

                /** VehicleAttribute value. */
                public value: string;

                /** VehicleAttribute stringValue. */
                public stringValue?: (string|null);

                /** VehicleAttribute boolValue. */
                public boolValue?: (boolean|null);

                /** VehicleAttribute numberValue. */
                public numberValue?: (number|null);

                /** VehicleAttribute vehicleAttributeValue. */
                public vehicleAttributeValue?: ("stringValue"|"boolValue"|"numberValue");

                /**
                 * Creates a new VehicleAttribute instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VehicleAttribute instance
                 */
                public static create(properties?: maps.fleetengine.v1.IVehicleAttribute): maps.fleetengine.v1.VehicleAttribute;

                /**
                 * Encodes the specified VehicleAttribute message. Does not implicitly {@link maps.fleetengine.v1.VehicleAttribute.verify|verify} messages.
                 * @param message VehicleAttribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IVehicleAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VehicleAttribute message, length delimited. Does not implicitly {@link maps.fleetengine.v1.VehicleAttribute.verify|verify} messages.
                 * @param message VehicleAttribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IVehicleAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VehicleAttribute message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VehicleAttribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.VehicleAttribute;

                /**
                 * Decodes a VehicleAttribute message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VehicleAttribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.VehicleAttribute;

                /**
                 * Verifies a VehicleAttribute message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VehicleAttribute message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VehicleAttribute
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.VehicleAttribute;

                /**
                 * Creates a plain object from a VehicleAttribute message. Also converts values to other types if specified.
                 * @param message VehicleAttribute
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.VehicleAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VehicleAttribute to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VehicleAttribute
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VehicleLocation. */
            interface IVehicleLocation {

                /** VehicleLocation location */
                location?: (google.type.ILatLng|null);

                /** VehicleLocation horizontalAccuracy */
                horizontalAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation latlngAccuracy */
                latlngAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation heading */
                heading?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation bearingAccuracy */
                bearingAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation headingAccuracy */
                headingAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation altitude */
                altitude?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation verticalAccuracy */
                verticalAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation altitudeAccuracy */
                altitudeAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation speedKmph */
                speedKmph?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation speed */
                speed?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation speedAccuracy */
                speedAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation serverTime */
                serverTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation locationSensor */
                locationSensor?: (maps.fleetengine.v1.LocationSensor|keyof typeof maps.fleetengine.v1.LocationSensor|null);

                /** VehicleLocation isRoadSnapped */
                isRoadSnapped?: (google.protobuf.IBoolValue|null);

                /** VehicleLocation isGpsSensorEnabled */
                isGpsSensorEnabled?: (google.protobuf.IBoolValue|null);

                /** VehicleLocation timeSinceUpdate */
                timeSinceUpdate?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation numStaleUpdates */
                numStaleUpdates?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation rawLocation */
                rawLocation?: (google.type.ILatLng|null);

                /** VehicleLocation rawLocationTime */
                rawLocationTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation rawLocationSensor */
                rawLocationSensor?: (maps.fleetengine.v1.LocationSensor|keyof typeof maps.fleetengine.v1.LocationSensor|null);

                /** VehicleLocation rawLocationAccuracy */
                rawLocationAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation flpLocation */
                flpLocation?: (google.type.ILatLng|null);

                /** VehicleLocation flpUpdateTime */
                flpUpdateTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation flpLatlngAccuracyMeters */
                flpLatlngAccuracyMeters?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation flpHeadingDegrees */
                flpHeadingDegrees?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation supplementalLocation */
                supplementalLocation?: (google.type.ILatLng|null);

                /** VehicleLocation supplementalLocationTime */
                supplementalLocationTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation supplementalLocationSensor */
                supplementalLocationSensor?: (maps.fleetengine.v1.LocationSensor|keyof typeof maps.fleetengine.v1.LocationSensor|null);

                /** VehicleLocation supplementalLocationAccuracy */
                supplementalLocationAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation roadSnapped */
                roadSnapped?: (boolean|null);
            }

            /** Represents a VehicleLocation. */
            class VehicleLocation implements IVehicleLocation {

                /**
                 * Constructs a new VehicleLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IVehicleLocation);

                /** VehicleLocation location. */
                public location?: (google.type.ILatLng|null);

                /** VehicleLocation horizontalAccuracy. */
                public horizontalAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation latlngAccuracy. */
                public latlngAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation heading. */
                public heading?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation bearingAccuracy. */
                public bearingAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation headingAccuracy. */
                public headingAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation altitude. */
                public altitude?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation verticalAccuracy. */
                public verticalAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation altitudeAccuracy. */
                public altitudeAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation speedKmph. */
                public speedKmph?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation speed. */
                public speed?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation speedAccuracy. */
                public speedAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation serverTime. */
                public serverTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation locationSensor. */
                public locationSensor: (maps.fleetengine.v1.LocationSensor|keyof typeof maps.fleetengine.v1.LocationSensor);

                /** VehicleLocation isRoadSnapped. */
                public isRoadSnapped?: (google.protobuf.IBoolValue|null);

                /** VehicleLocation isGpsSensorEnabled. */
                public isGpsSensorEnabled?: (google.protobuf.IBoolValue|null);

                /** VehicleLocation timeSinceUpdate. */
                public timeSinceUpdate?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation numStaleUpdates. */
                public numStaleUpdates?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation rawLocation. */
                public rawLocation?: (google.type.ILatLng|null);

                /** VehicleLocation rawLocationTime. */
                public rawLocationTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation rawLocationSensor. */
                public rawLocationSensor: (maps.fleetengine.v1.LocationSensor|keyof typeof maps.fleetengine.v1.LocationSensor);

                /** VehicleLocation rawLocationAccuracy. */
                public rawLocationAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation flpLocation. */
                public flpLocation?: (google.type.ILatLng|null);

                /** VehicleLocation flpUpdateTime. */
                public flpUpdateTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation flpLatlngAccuracyMeters. */
                public flpLatlngAccuracyMeters?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation flpHeadingDegrees. */
                public flpHeadingDegrees?: (google.protobuf.IInt32Value|null);

                /** VehicleLocation supplementalLocation. */
                public supplementalLocation?: (google.type.ILatLng|null);

                /** VehicleLocation supplementalLocationTime. */
                public supplementalLocationTime?: (google.protobuf.ITimestamp|null);

                /** VehicleLocation supplementalLocationSensor. */
                public supplementalLocationSensor: (maps.fleetengine.v1.LocationSensor|keyof typeof maps.fleetengine.v1.LocationSensor);

                /** VehicleLocation supplementalLocationAccuracy. */
                public supplementalLocationAccuracy?: (google.protobuf.IDoubleValue|null);

                /** VehicleLocation roadSnapped. */
                public roadSnapped: boolean;

                /**
                 * Creates a new VehicleLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VehicleLocation instance
                 */
                public static create(properties?: maps.fleetengine.v1.IVehicleLocation): maps.fleetengine.v1.VehicleLocation;

                /**
                 * Encodes the specified VehicleLocation message. Does not implicitly {@link maps.fleetengine.v1.VehicleLocation.verify|verify} messages.
                 * @param message VehicleLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IVehicleLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VehicleLocation message, length delimited. Does not implicitly {@link maps.fleetengine.v1.VehicleLocation.verify|verify} messages.
                 * @param message VehicleLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IVehicleLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VehicleLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VehicleLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.VehicleLocation;

                /**
                 * Decodes a VehicleLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VehicleLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.VehicleLocation;

                /**
                 * Verifies a VehicleLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VehicleLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VehicleLocation
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.VehicleLocation;

                /**
                 * Creates a plain object from a VehicleLocation message. Also converts values to other types if specified.
                 * @param message VehicleLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.VehicleLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VehicleLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VehicleLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** LocationSensor enum. */
            enum LocationSensor {
                UNKNOWN_SENSOR = 0,
                GPS = 1,
                NETWORK = 2,
                PASSIVE = 3,
                ROAD_SNAPPED_LOCATION_PROVIDER = 4,
                CUSTOMER_SUPPLIED_LOCATION = 5,
                FLEET_ENGINE_LOCATION = 6,
                FUSED_LOCATION_PROVIDER = 100,
                CORE_LOCATION = 200
            }

            /** Properties of a TripAttribute. */
            interface ITripAttribute {

                /** TripAttribute key */
                key?: (string|null);

                /** TripAttribute stringValue */
                stringValue?: (string|null);

                /** TripAttribute boolValue */
                boolValue?: (boolean|null);

                /** TripAttribute numberValue */
                numberValue?: (number|null);
            }

            /** Represents a TripAttribute. */
            class TripAttribute implements ITripAttribute {

                /**
                 * Constructs a new TripAttribute.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ITripAttribute);

                /** TripAttribute key. */
                public key: string;

                /** TripAttribute stringValue. */
                public stringValue?: (string|null);

                /** TripAttribute boolValue. */
                public boolValue?: (boolean|null);

                /** TripAttribute numberValue. */
                public numberValue?: (number|null);

                /** TripAttribute tripAttributeValue. */
                public tripAttributeValue?: ("stringValue"|"boolValue"|"numberValue");

                /**
                 * Creates a new TripAttribute instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TripAttribute instance
                 */
                public static create(properties?: maps.fleetengine.v1.ITripAttribute): maps.fleetengine.v1.TripAttribute;

                /**
                 * Encodes the specified TripAttribute message. Does not implicitly {@link maps.fleetengine.v1.TripAttribute.verify|verify} messages.
                 * @param message TripAttribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ITripAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TripAttribute message, length delimited. Does not implicitly {@link maps.fleetengine.v1.TripAttribute.verify|verify} messages.
                 * @param message TripAttribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ITripAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TripAttribute message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TripAttribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.TripAttribute;

                /**
                 * Decodes a TripAttribute message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TripAttribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.TripAttribute;

                /**
                 * Verifies a TripAttribute message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TripAttribute message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TripAttribute
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.TripAttribute;

                /**
                 * Creates a plain object from a TripAttribute message. Also converts values to other types if specified.
                 * @param message TripAttribute
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.TripAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TripAttribute to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TripAttribute
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SpeedReadingInterval. */
            interface ISpeedReadingInterval {

                /** SpeedReadingInterval startPolylinePointIndex */
                startPolylinePointIndex?: (number|null);

                /** SpeedReadingInterval endPolylinePointIndex */
                endPolylinePointIndex?: (number|null);

                /** SpeedReadingInterval speed */
                speed?: (maps.fleetengine.v1.SpeedReadingInterval.Speed|keyof typeof maps.fleetengine.v1.SpeedReadingInterval.Speed|null);
            }

            /** Represents a SpeedReadingInterval. */
            class SpeedReadingInterval implements ISpeedReadingInterval {

                /**
                 * Constructs a new SpeedReadingInterval.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ISpeedReadingInterval);

                /** SpeedReadingInterval startPolylinePointIndex. */
                public startPolylinePointIndex: number;

                /** SpeedReadingInterval endPolylinePointIndex. */
                public endPolylinePointIndex: number;

                /** SpeedReadingInterval speed. */
                public speed: (maps.fleetengine.v1.SpeedReadingInterval.Speed|keyof typeof maps.fleetengine.v1.SpeedReadingInterval.Speed);

                /**
                 * Creates a new SpeedReadingInterval instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SpeedReadingInterval instance
                 */
                public static create(properties?: maps.fleetengine.v1.ISpeedReadingInterval): maps.fleetengine.v1.SpeedReadingInterval;

                /**
                 * Encodes the specified SpeedReadingInterval message. Does not implicitly {@link maps.fleetengine.v1.SpeedReadingInterval.verify|verify} messages.
                 * @param message SpeedReadingInterval message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ISpeedReadingInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SpeedReadingInterval message, length delimited. Does not implicitly {@link maps.fleetengine.v1.SpeedReadingInterval.verify|verify} messages.
                 * @param message SpeedReadingInterval message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ISpeedReadingInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SpeedReadingInterval message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SpeedReadingInterval
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.SpeedReadingInterval;

                /**
                 * Decodes a SpeedReadingInterval message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SpeedReadingInterval
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.SpeedReadingInterval;

                /**
                 * Verifies a SpeedReadingInterval message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SpeedReadingInterval message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SpeedReadingInterval
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.SpeedReadingInterval;

                /**
                 * Creates a plain object from a SpeedReadingInterval message. Also converts values to other types if specified.
                 * @param message SpeedReadingInterval
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.SpeedReadingInterval, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SpeedReadingInterval to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SpeedReadingInterval
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SpeedReadingInterval {

                /** Speed enum. */
                enum Speed {
                    SPEED_UNSPECIFIED = 0,
                    NORMAL = 1,
                    SLOW = 2,
                    TRAFFIC_JAM = 3
                }
            }

            /** Properties of a ConsumableTrafficPolyline. */
            interface IConsumableTrafficPolyline {

                /** ConsumableTrafficPolyline speedReadingInterval */
                speedReadingInterval?: (maps.fleetengine.v1.ISpeedReadingInterval[]|null);

                /** ConsumableTrafficPolyline encodedPathToWaypoint */
                encodedPathToWaypoint?: (string|null);
            }

            /** Represents a ConsumableTrafficPolyline. */
            class ConsumableTrafficPolyline implements IConsumableTrafficPolyline {

                /**
                 * Constructs a new ConsumableTrafficPolyline.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IConsumableTrafficPolyline);

                /** ConsumableTrafficPolyline speedReadingInterval. */
                public speedReadingInterval: maps.fleetengine.v1.ISpeedReadingInterval[];

                /** ConsumableTrafficPolyline encodedPathToWaypoint. */
                public encodedPathToWaypoint: string;

                /**
                 * Creates a new ConsumableTrafficPolyline instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConsumableTrafficPolyline instance
                 */
                public static create(properties?: maps.fleetengine.v1.IConsumableTrafficPolyline): maps.fleetengine.v1.ConsumableTrafficPolyline;

                /**
                 * Encodes the specified ConsumableTrafficPolyline message. Does not implicitly {@link maps.fleetengine.v1.ConsumableTrafficPolyline.verify|verify} messages.
                 * @param message ConsumableTrafficPolyline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IConsumableTrafficPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ConsumableTrafficPolyline message, length delimited. Does not implicitly {@link maps.fleetengine.v1.ConsumableTrafficPolyline.verify|verify} messages.
                 * @param message ConsumableTrafficPolyline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IConsumableTrafficPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConsumableTrafficPolyline message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConsumableTrafficPolyline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.ConsumableTrafficPolyline;

                /**
                 * Decodes a ConsumableTrafficPolyline message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ConsumableTrafficPolyline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.ConsumableTrafficPolyline;

                /**
                 * Verifies a ConsumableTrafficPolyline message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ConsumableTrafficPolyline message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ConsumableTrafficPolyline
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.ConsumableTrafficPolyline;

                /**
                 * Creates a plain object from a ConsumableTrafficPolyline message. Also converts values to other types if specified.
                 * @param message ConsumableTrafficPolyline
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.ConsumableTrafficPolyline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ConsumableTrafficPolyline to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ConsumableTrafficPolyline
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RequestHeader. */
            interface IRequestHeader {

                /** RequestHeader languageCode */
                languageCode?: (string|null);

                /** RequestHeader regionCode */
                regionCode?: (string|null);

                /** RequestHeader sdkVersion */
                sdkVersion?: (string|null);

                /** RequestHeader osVersion */
                osVersion?: (string|null);

                /** RequestHeader deviceModel */
                deviceModel?: (string|null);

                /** RequestHeader sdkType */
                sdkType?: (maps.fleetengine.v1.RequestHeader.SdkType|keyof typeof maps.fleetengine.v1.RequestHeader.SdkType|null);

                /** RequestHeader mapsSdkVersion */
                mapsSdkVersion?: (string|null);

                /** RequestHeader navSdkVersion */
                navSdkVersion?: (string|null);

                /** RequestHeader platform */
                platform?: (maps.fleetengine.v1.RequestHeader.Platform|keyof typeof maps.fleetengine.v1.RequestHeader.Platform|null);

                /** RequestHeader manufacturer */
                manufacturer?: (string|null);

                /** RequestHeader androidApiLevel */
                androidApiLevel?: (number|null);

                /** RequestHeader traceId */
                traceId?: (string|null);
            }

            /** Represents a RequestHeader. */
            class RequestHeader implements IRequestHeader {

                /**
                 * Constructs a new RequestHeader.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IRequestHeader);

                /** RequestHeader languageCode. */
                public languageCode: string;

                /** RequestHeader regionCode. */
                public regionCode: string;

                /** RequestHeader sdkVersion. */
                public sdkVersion: string;

                /** RequestHeader osVersion. */
                public osVersion: string;

                /** RequestHeader deviceModel. */
                public deviceModel: string;

                /** RequestHeader sdkType. */
                public sdkType: (maps.fleetengine.v1.RequestHeader.SdkType|keyof typeof maps.fleetengine.v1.RequestHeader.SdkType);

                /** RequestHeader mapsSdkVersion. */
                public mapsSdkVersion: string;

                /** RequestHeader navSdkVersion. */
                public navSdkVersion: string;

                /** RequestHeader platform. */
                public platform: (maps.fleetengine.v1.RequestHeader.Platform|keyof typeof maps.fleetengine.v1.RequestHeader.Platform);

                /** RequestHeader manufacturer. */
                public manufacturer: string;

                /** RequestHeader androidApiLevel. */
                public androidApiLevel: number;

                /** RequestHeader traceId. */
                public traceId: string;

                /**
                 * Creates a new RequestHeader instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestHeader instance
                 */
                public static create(properties?: maps.fleetengine.v1.IRequestHeader): maps.fleetengine.v1.RequestHeader;

                /**
                 * Encodes the specified RequestHeader message. Does not implicitly {@link maps.fleetengine.v1.RequestHeader.verify|verify} messages.
                 * @param message RequestHeader message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IRequestHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestHeader message, length delimited. Does not implicitly {@link maps.fleetengine.v1.RequestHeader.verify|verify} messages.
                 * @param message RequestHeader message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IRequestHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestHeader message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.RequestHeader;

                /**
                 * Decodes a RequestHeader message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestHeader
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.RequestHeader;

                /**
                 * Verifies a RequestHeader message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestHeader message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestHeader
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.RequestHeader;

                /**
                 * Creates a plain object from a RequestHeader message. Also converts values to other types if specified.
                 * @param message RequestHeader
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.RequestHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestHeader to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RequestHeader
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace RequestHeader {

                /** SdkType enum. */
                enum SdkType {
                    SDK_TYPE_UNSPECIFIED = 0,
                    CONSUMER = 1,
                    DRIVER = 2,
                    JAVASCRIPT = 3
                }

                /** Platform enum. */
                enum Platform {
                    PLATFORM_UNSPECIFIED = 0,
                    ANDROID = 1,
                    IOS = 2,
                    WEB = 3
                }
            }

            /** Represents a TripService */
            class TripService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new TripService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new TripService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TripService;

                /**
                 * Calls CreateTrip.
                 * @param request CreateTripRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Trip
                 */
                public createTrip(request: maps.fleetengine.v1.ICreateTripRequest, callback: maps.fleetengine.v1.TripService.CreateTripCallback): void;

                /**
                 * Calls CreateTrip.
                 * @param request CreateTripRequest message or plain object
                 * @returns Promise
                 */
                public createTrip(request: maps.fleetengine.v1.ICreateTripRequest): Promise<maps.fleetengine.v1.Trip>;

                /**
                 * Calls GetTrip.
                 * @param request GetTripRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Trip
                 */
                public getTrip(request: maps.fleetengine.v1.IGetTripRequest, callback: maps.fleetengine.v1.TripService.GetTripCallback): void;

                /**
                 * Calls GetTrip.
                 * @param request GetTripRequest message or plain object
                 * @returns Promise
                 */
                public getTrip(request: maps.fleetengine.v1.IGetTripRequest): Promise<maps.fleetengine.v1.Trip>;

                /**
                 * Calls DeleteTrip.
                 * @param request DeleteTripRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteTrip(request: maps.fleetengine.v1.IDeleteTripRequest, callback: maps.fleetengine.v1.TripService.DeleteTripCallback): void;

                /**
                 * Calls DeleteTrip.
                 * @param request DeleteTripRequest message or plain object
                 * @returns Promise
                 */
                public deleteTrip(request: maps.fleetengine.v1.IDeleteTripRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls ReportBillableTrip.
                 * @param request ReportBillableTripRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public reportBillableTrip(request: maps.fleetengine.v1.IReportBillableTripRequest, callback: maps.fleetengine.v1.TripService.ReportBillableTripCallback): void;

                /**
                 * Calls ReportBillableTrip.
                 * @param request ReportBillableTripRequest message or plain object
                 * @returns Promise
                 */
                public reportBillableTrip(request: maps.fleetengine.v1.IReportBillableTripRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls SearchTrips.
                 * @param request SearchTripsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SearchTripsResponse
                 */
                public searchTrips(request: maps.fleetengine.v1.ISearchTripsRequest, callback: maps.fleetengine.v1.TripService.SearchTripsCallback): void;

                /**
                 * Calls SearchTrips.
                 * @param request SearchTripsRequest message or plain object
                 * @returns Promise
                 */
                public searchTrips(request: maps.fleetengine.v1.ISearchTripsRequest): Promise<maps.fleetengine.v1.SearchTripsResponse>;

                /**
                 * Calls UpdateTrip.
                 * @param request UpdateTripRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Trip
                 */
                public updateTrip(request: maps.fleetengine.v1.IUpdateTripRequest, callback: maps.fleetengine.v1.TripService.UpdateTripCallback): void;

                /**
                 * Calls UpdateTrip.
                 * @param request UpdateTripRequest message or plain object
                 * @returns Promise
                 */
                public updateTrip(request: maps.fleetengine.v1.IUpdateTripRequest): Promise<maps.fleetengine.v1.Trip>;
            }

            namespace TripService {

                /**
                 * Callback as used by {@link maps.fleetengine.v1.TripService|createTrip}.
                 * @param error Error, if any
                 * @param [response] Trip
                 */
                type CreateTripCallback = (error: (Error|null), response?: maps.fleetengine.v1.Trip) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.TripService|getTrip}.
                 * @param error Error, if any
                 * @param [response] Trip
                 */
                type GetTripCallback = (error: (Error|null), response?: maps.fleetengine.v1.Trip) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.TripService|deleteTrip}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteTripCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.TripService|reportBillableTrip}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type ReportBillableTripCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.TripService|searchTrips}.
                 * @param error Error, if any
                 * @param [response] SearchTripsResponse
                 */
                type SearchTripsCallback = (error: (Error|null), response?: maps.fleetengine.v1.SearchTripsResponse) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.TripService|updateTrip}.
                 * @param error Error, if any
                 * @param [response] Trip
                 */
                type UpdateTripCallback = (error: (Error|null), response?: maps.fleetengine.v1.Trip) => void;
            }

            /** Properties of a CreateTripRequest. */
            interface ICreateTripRequest {

                /** CreateTripRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** CreateTripRequest parent */
                parent?: (string|null);

                /** CreateTripRequest tripId */
                tripId?: (string|null);

                /** CreateTripRequest trip */
                trip?: (maps.fleetengine.v1.ITrip|null);
            }

            /** Represents a CreateTripRequest. */
            class CreateTripRequest implements ICreateTripRequest {

                /**
                 * Constructs a new CreateTripRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ICreateTripRequest);

                /** CreateTripRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** CreateTripRequest parent. */
                public parent: string;

                /** CreateTripRequest tripId. */
                public tripId: string;

                /** CreateTripRequest trip. */
                public trip?: (maps.fleetengine.v1.ITrip|null);

                /**
                 * Creates a new CreateTripRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateTripRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.ICreateTripRequest): maps.fleetengine.v1.CreateTripRequest;

                /**
                 * Encodes the specified CreateTripRequest message. Does not implicitly {@link maps.fleetengine.v1.CreateTripRequest.verify|verify} messages.
                 * @param message CreateTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ICreateTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateTripRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.CreateTripRequest.verify|verify} messages.
                 * @param message CreateTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ICreateTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateTripRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.CreateTripRequest;

                /**
                 * Decodes a CreateTripRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.CreateTripRequest;

                /**
                 * Verifies a CreateTripRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateTripRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateTripRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.CreateTripRequest;

                /**
                 * Creates a plain object from a CreateTripRequest message. Also converts values to other types if specified.
                 * @param message CreateTripRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.CreateTripRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateTripRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateTripRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetTripRequest. */
            interface IGetTripRequest {

                /** GetTripRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** GetTripRequest name */
                name?: (string|null);

                /** GetTripRequest view */
                view?: (maps.fleetengine.v1.TripView|keyof typeof maps.fleetengine.v1.TripView|null);

                /** GetTripRequest currentRouteSegmentVersion */
                currentRouteSegmentVersion?: (google.protobuf.ITimestamp|null);

                /** GetTripRequest remainingWaypointsVersion */
                remainingWaypointsVersion?: (google.protobuf.ITimestamp|null);

                /** GetTripRequest routeFormatType */
                routeFormatType?: (maps.fleetengine.v1.PolylineFormatType|keyof typeof maps.fleetengine.v1.PolylineFormatType|null);

                /** GetTripRequest currentRouteSegmentTrafficVersion */
                currentRouteSegmentTrafficVersion?: (google.protobuf.ITimestamp|null);

                /** GetTripRequest remainingWaypointsRouteVersion */
                remainingWaypointsRouteVersion?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a GetTripRequest. */
            class GetTripRequest implements IGetTripRequest {

                /**
                 * Constructs a new GetTripRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IGetTripRequest);

                /** GetTripRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** GetTripRequest name. */
                public name: string;

                /** GetTripRequest view. */
                public view: (maps.fleetengine.v1.TripView|keyof typeof maps.fleetengine.v1.TripView);

                /** GetTripRequest currentRouteSegmentVersion. */
                public currentRouteSegmentVersion?: (google.protobuf.ITimestamp|null);

                /** GetTripRequest remainingWaypointsVersion. */
                public remainingWaypointsVersion?: (google.protobuf.ITimestamp|null);

                /** GetTripRequest routeFormatType. */
                public routeFormatType: (maps.fleetengine.v1.PolylineFormatType|keyof typeof maps.fleetengine.v1.PolylineFormatType);

                /** GetTripRequest currentRouteSegmentTrafficVersion. */
                public currentRouteSegmentTrafficVersion?: (google.protobuf.ITimestamp|null);

                /** GetTripRequest remainingWaypointsRouteVersion. */
                public remainingWaypointsRouteVersion?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new GetTripRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetTripRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.IGetTripRequest): maps.fleetengine.v1.GetTripRequest;

                /**
                 * Encodes the specified GetTripRequest message. Does not implicitly {@link maps.fleetengine.v1.GetTripRequest.verify|verify} messages.
                 * @param message GetTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IGetTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetTripRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.GetTripRequest.verify|verify} messages.
                 * @param message GetTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IGetTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetTripRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.GetTripRequest;

                /**
                 * Decodes a GetTripRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.GetTripRequest;

                /**
                 * Verifies a GetTripRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetTripRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetTripRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.GetTripRequest;

                /**
                 * Creates a plain object from a GetTripRequest message. Also converts values to other types if specified.
                 * @param message GetTripRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.GetTripRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetTripRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetTripRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteTripRequest. */
            interface IDeleteTripRequest {

                /** DeleteTripRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** DeleteTripRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteTripRequest. */
            class DeleteTripRequest implements IDeleteTripRequest {

                /**
                 * Constructs a new DeleteTripRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IDeleteTripRequest);

                /** DeleteTripRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** DeleteTripRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteTripRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteTripRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.IDeleteTripRequest): maps.fleetengine.v1.DeleteTripRequest;

                /**
                 * Encodes the specified DeleteTripRequest message. Does not implicitly {@link maps.fleetengine.v1.DeleteTripRequest.verify|verify} messages.
                 * @param message DeleteTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IDeleteTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteTripRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.DeleteTripRequest.verify|verify} messages.
                 * @param message DeleteTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IDeleteTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteTripRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.DeleteTripRequest;

                /**
                 * Decodes a DeleteTripRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.DeleteTripRequest;

                /**
                 * Verifies a DeleteTripRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteTripRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteTripRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.DeleteTripRequest;

                /**
                 * Creates a plain object from a DeleteTripRequest message. Also converts values to other types if specified.
                 * @param message DeleteTripRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.DeleteTripRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteTripRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteTripRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReportBillableTripRequest. */
            interface IReportBillableTripRequest {

                /** ReportBillableTripRequest name */
                name?: (string|null);

                /** ReportBillableTripRequest countryCode */
                countryCode?: (string|null);

                /** ReportBillableTripRequest platform */
                platform?: (maps.fleetengine.v1.BillingPlatformIdentifier|keyof typeof maps.fleetengine.v1.BillingPlatformIdentifier|null);

                /** ReportBillableTripRequest relatedIds */
                relatedIds?: (string[]|null);

                /** ReportBillableTripRequest solutionType */
                solutionType?: (maps.fleetengine.v1.ReportBillableTripRequest.SolutionType|keyof typeof maps.fleetengine.v1.ReportBillableTripRequest.SolutionType|null);
            }

            /** Represents a ReportBillableTripRequest. */
            class ReportBillableTripRequest implements IReportBillableTripRequest {

                /**
                 * Constructs a new ReportBillableTripRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IReportBillableTripRequest);

                /** ReportBillableTripRequest name. */
                public name: string;

                /** ReportBillableTripRequest countryCode. */
                public countryCode: string;

                /** ReportBillableTripRequest platform. */
                public platform: (maps.fleetengine.v1.BillingPlatformIdentifier|keyof typeof maps.fleetengine.v1.BillingPlatformIdentifier);

                /** ReportBillableTripRequest relatedIds. */
                public relatedIds: string[];

                /** ReportBillableTripRequest solutionType. */
                public solutionType: (maps.fleetengine.v1.ReportBillableTripRequest.SolutionType|keyof typeof maps.fleetengine.v1.ReportBillableTripRequest.SolutionType);

                /**
                 * Creates a new ReportBillableTripRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReportBillableTripRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.IReportBillableTripRequest): maps.fleetengine.v1.ReportBillableTripRequest;

                /**
                 * Encodes the specified ReportBillableTripRequest message. Does not implicitly {@link maps.fleetengine.v1.ReportBillableTripRequest.verify|verify} messages.
                 * @param message ReportBillableTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IReportBillableTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReportBillableTripRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.ReportBillableTripRequest.verify|verify} messages.
                 * @param message ReportBillableTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IReportBillableTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReportBillableTripRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReportBillableTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.ReportBillableTripRequest;

                /**
                 * Decodes a ReportBillableTripRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReportBillableTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.ReportBillableTripRequest;

                /**
                 * Verifies a ReportBillableTripRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReportBillableTripRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReportBillableTripRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.ReportBillableTripRequest;

                /**
                 * Creates a plain object from a ReportBillableTripRequest message. Also converts values to other types if specified.
                 * @param message ReportBillableTripRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.ReportBillableTripRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReportBillableTripRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReportBillableTripRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ReportBillableTripRequest {

                /** SolutionType enum. */
                enum SolutionType {
                    SOLUTION_TYPE_UNSPECIFIED = 0,
                    ON_DEMAND_RIDESHARING_AND_DELIVERIES = 1
                }
            }

            /** Properties of an UpdateTripRequest. */
            interface IUpdateTripRequest {

                /** UpdateTripRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** UpdateTripRequest name */
                name?: (string|null);

                /** UpdateTripRequest trip */
                trip?: (maps.fleetengine.v1.ITrip|null);

                /** UpdateTripRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateTripRequest. */
            class UpdateTripRequest implements IUpdateTripRequest {

                /**
                 * Constructs a new UpdateTripRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IUpdateTripRequest);

                /** UpdateTripRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** UpdateTripRequest name. */
                public name: string;

                /** UpdateTripRequest trip. */
                public trip?: (maps.fleetengine.v1.ITrip|null);

                /** UpdateTripRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateTripRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateTripRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.IUpdateTripRequest): maps.fleetengine.v1.UpdateTripRequest;

                /**
                 * Encodes the specified UpdateTripRequest message. Does not implicitly {@link maps.fleetengine.v1.UpdateTripRequest.verify|verify} messages.
                 * @param message UpdateTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IUpdateTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateTripRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.UpdateTripRequest.verify|verify} messages.
                 * @param message UpdateTripRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IUpdateTripRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateTripRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.UpdateTripRequest;

                /**
                 * Decodes an UpdateTripRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateTripRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.UpdateTripRequest;

                /**
                 * Verifies an UpdateTripRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateTripRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateTripRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.UpdateTripRequest;

                /**
                 * Creates a plain object from an UpdateTripRequest message. Also converts values to other types if specified.
                 * @param message UpdateTripRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.UpdateTripRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateTripRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateTripRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchTripsRequest. */
            interface ISearchTripsRequest {

                /** SearchTripsRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** SearchTripsRequest parent */
                parent?: (string|null);

                /** SearchTripsRequest vehicleId */
                vehicleId?: (string|null);

                /** SearchTripsRequest activeTripsOnly */
                activeTripsOnly?: (boolean|null);

                /** SearchTripsRequest pageSize */
                pageSize?: (number|null);

                /** SearchTripsRequest pageToken */
                pageToken?: (string|null);

                /** SearchTripsRequest minimumStaleness */
                minimumStaleness?: (google.protobuf.IDuration|null);
            }

            /** Represents a SearchTripsRequest. */
            class SearchTripsRequest implements ISearchTripsRequest {

                /**
                 * Constructs a new SearchTripsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ISearchTripsRequest);

                /** SearchTripsRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** SearchTripsRequest parent. */
                public parent: string;

                /** SearchTripsRequest vehicleId. */
                public vehicleId: string;

                /** SearchTripsRequest activeTripsOnly. */
                public activeTripsOnly: boolean;

                /** SearchTripsRequest pageSize. */
                public pageSize: number;

                /** SearchTripsRequest pageToken. */
                public pageToken: string;

                /** SearchTripsRequest minimumStaleness. */
                public minimumStaleness?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new SearchTripsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchTripsRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.ISearchTripsRequest): maps.fleetengine.v1.SearchTripsRequest;

                /**
                 * Encodes the specified SearchTripsRequest message. Does not implicitly {@link maps.fleetengine.v1.SearchTripsRequest.verify|verify} messages.
                 * @param message SearchTripsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ISearchTripsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchTripsRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.SearchTripsRequest.verify|verify} messages.
                 * @param message SearchTripsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ISearchTripsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchTripsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchTripsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.SearchTripsRequest;

                /**
                 * Decodes a SearchTripsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchTripsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.SearchTripsRequest;

                /**
                 * Verifies a SearchTripsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchTripsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchTripsRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.SearchTripsRequest;

                /**
                 * Creates a plain object from a SearchTripsRequest message. Also converts values to other types if specified.
                 * @param message SearchTripsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.SearchTripsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchTripsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchTripsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchTripsResponse. */
            interface ISearchTripsResponse {

                /** SearchTripsResponse trips */
                trips?: (maps.fleetengine.v1.ITrip[]|null);

                /** SearchTripsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a SearchTripsResponse. */
            class SearchTripsResponse implements ISearchTripsResponse {

                /**
                 * Constructs a new SearchTripsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ISearchTripsResponse);

                /** SearchTripsResponse trips. */
                public trips: maps.fleetengine.v1.ITrip[];

                /** SearchTripsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new SearchTripsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchTripsResponse instance
                 */
                public static create(properties?: maps.fleetengine.v1.ISearchTripsResponse): maps.fleetengine.v1.SearchTripsResponse;

                /**
                 * Encodes the specified SearchTripsResponse message. Does not implicitly {@link maps.fleetengine.v1.SearchTripsResponse.verify|verify} messages.
                 * @param message SearchTripsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ISearchTripsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchTripsResponse message, length delimited. Does not implicitly {@link maps.fleetengine.v1.SearchTripsResponse.verify|verify} messages.
                 * @param message SearchTripsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ISearchTripsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchTripsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchTripsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.SearchTripsResponse;

                /**
                 * Decodes a SearchTripsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchTripsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.SearchTripsResponse;

                /**
                 * Verifies a SearchTripsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchTripsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchTripsResponse
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.SearchTripsResponse;

                /**
                 * Creates a plain object from a SearchTripsResponse message. Also converts values to other types if specified.
                 * @param message SearchTripsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.SearchTripsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchTripsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchTripsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Trip. */
            interface ITrip {

                /** Trip name */
                name?: (string|null);

                /** Trip vehicleId */
                vehicleId?: (string|null);

                /** Trip tripStatus */
                tripStatus?: (maps.fleetengine.v1.TripStatus|keyof typeof maps.fleetengine.v1.TripStatus|null);

                /** Trip tripType */
                tripType?: (maps.fleetengine.v1.TripType|keyof typeof maps.fleetengine.v1.TripType|null);

                /** Trip pickupPoint */
                pickupPoint?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** Trip actualPickupPoint */
                actualPickupPoint?: (maps.fleetengine.v1.IStopLocation|null);

                /** Trip actualPickupArrivalPoint */
                actualPickupArrivalPoint?: (maps.fleetengine.v1.IStopLocation|null);

                /** Trip pickupTime */
                pickupTime?: (google.protobuf.ITimestamp|null);

                /** Trip intermediateDestinations */
                intermediateDestinations?: (maps.fleetengine.v1.ITerminalLocation[]|null);

                /** Trip intermediateDestinationsVersion */
                intermediateDestinationsVersion?: (google.protobuf.ITimestamp|null);

                /** Trip intermediateDestinationIndex */
                intermediateDestinationIndex?: (number|null);

                /** Trip actualIntermediateDestinationArrivalPoints */
                actualIntermediateDestinationArrivalPoints?: (maps.fleetengine.v1.IStopLocation[]|null);

                /** Trip actualIntermediateDestinations */
                actualIntermediateDestinations?: (maps.fleetengine.v1.IStopLocation[]|null);

                /** Trip dropoffPoint */
                dropoffPoint?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** Trip actualDropoffPoint */
                actualDropoffPoint?: (maps.fleetengine.v1.IStopLocation|null);

                /** Trip dropoffTime */
                dropoffTime?: (google.protobuf.ITimestamp|null);

                /** Trip remainingWaypoints */
                remainingWaypoints?: (maps.fleetengine.v1.ITripWaypoint[]|null);

                /** Trip vehicleWaypoints */
                vehicleWaypoints?: (maps.fleetengine.v1.ITripWaypoint[]|null);

                /** Trip route */
                route?: (google.type.ILatLng[]|null);

                /** Trip currentRouteSegment */
                currentRouteSegment?: (string|null);

                /** Trip currentRouteSegmentVersion */
                currentRouteSegmentVersion?: (google.protobuf.ITimestamp|null);

                /** Trip currentRouteSegmentTraffic */
                currentRouteSegmentTraffic?: (maps.fleetengine.v1.IConsumableTrafficPolyline|null);

                /** Trip currentRouteSegmentTrafficVersion */
                currentRouteSegmentTrafficVersion?: (google.protobuf.ITimestamp|null);

                /** Trip currentRouteSegmentEndPoint */
                currentRouteSegmentEndPoint?: (maps.fleetengine.v1.ITripWaypoint|null);

                /** Trip remainingDistanceMeters */
                remainingDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** Trip etaToFirstWaypoint */
                etaToFirstWaypoint?: (google.protobuf.ITimestamp|null);

                /** Trip remainingTimeToFirstWaypoint */
                remainingTimeToFirstWaypoint?: (google.protobuf.IDuration|null);

                /** Trip remainingWaypointsVersion */
                remainingWaypointsVersion?: (google.protobuf.ITimestamp|null);

                /** Trip remainingWaypointsRouteVersion */
                remainingWaypointsRouteVersion?: (google.protobuf.ITimestamp|null);

                /** Trip numberOfPassengers */
                numberOfPassengers?: (number|null);

                /** Trip lastLocation */
                lastLocation?: (maps.fleetengine.v1.IVehicleLocation|null);

                /** Trip lastLocationSnappable */
                lastLocationSnappable?: (boolean|null);

                /** Trip view */
                view?: (maps.fleetengine.v1.TripView|keyof typeof maps.fleetengine.v1.TripView|null);

                /** Trip attributes */
                attributes?: (maps.fleetengine.v1.ITripAttribute[]|null);
            }

            /** Represents a Trip. */
            class Trip implements ITrip {

                /**
                 * Constructs a new Trip.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ITrip);

                /** Trip name. */
                public name: string;

                /** Trip vehicleId. */
                public vehicleId: string;

                /** Trip tripStatus. */
                public tripStatus: (maps.fleetengine.v1.TripStatus|keyof typeof maps.fleetengine.v1.TripStatus);

                /** Trip tripType. */
                public tripType: (maps.fleetengine.v1.TripType|keyof typeof maps.fleetengine.v1.TripType);

                /** Trip pickupPoint. */
                public pickupPoint?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** Trip actualPickupPoint. */
                public actualPickupPoint?: (maps.fleetengine.v1.IStopLocation|null);

                /** Trip actualPickupArrivalPoint. */
                public actualPickupArrivalPoint?: (maps.fleetengine.v1.IStopLocation|null);

                /** Trip pickupTime. */
                public pickupTime?: (google.protobuf.ITimestamp|null);

                /** Trip intermediateDestinations. */
                public intermediateDestinations: maps.fleetengine.v1.ITerminalLocation[];

                /** Trip intermediateDestinationsVersion. */
                public intermediateDestinationsVersion?: (google.protobuf.ITimestamp|null);

                /** Trip intermediateDestinationIndex. */
                public intermediateDestinationIndex: number;

                /** Trip actualIntermediateDestinationArrivalPoints. */
                public actualIntermediateDestinationArrivalPoints: maps.fleetengine.v1.IStopLocation[];

                /** Trip actualIntermediateDestinations. */
                public actualIntermediateDestinations: maps.fleetengine.v1.IStopLocation[];

                /** Trip dropoffPoint. */
                public dropoffPoint?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** Trip actualDropoffPoint. */
                public actualDropoffPoint?: (maps.fleetengine.v1.IStopLocation|null);

                /** Trip dropoffTime. */
                public dropoffTime?: (google.protobuf.ITimestamp|null);

                /** Trip remainingWaypoints. */
                public remainingWaypoints: maps.fleetengine.v1.ITripWaypoint[];

                /** Trip vehicleWaypoints. */
                public vehicleWaypoints: maps.fleetengine.v1.ITripWaypoint[];

                /** Trip route. */
                public route: google.type.ILatLng[];

                /** Trip currentRouteSegment. */
                public currentRouteSegment: string;

                /** Trip currentRouteSegmentVersion. */
                public currentRouteSegmentVersion?: (google.protobuf.ITimestamp|null);

                /** Trip currentRouteSegmentTraffic. */
                public currentRouteSegmentTraffic?: (maps.fleetengine.v1.IConsumableTrafficPolyline|null);

                /** Trip currentRouteSegmentTrafficVersion. */
                public currentRouteSegmentTrafficVersion?: (google.protobuf.ITimestamp|null);

                /** Trip currentRouteSegmentEndPoint. */
                public currentRouteSegmentEndPoint?: (maps.fleetengine.v1.ITripWaypoint|null);

                /** Trip remainingDistanceMeters. */
                public remainingDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** Trip etaToFirstWaypoint. */
                public etaToFirstWaypoint?: (google.protobuf.ITimestamp|null);

                /** Trip remainingTimeToFirstWaypoint. */
                public remainingTimeToFirstWaypoint?: (google.protobuf.IDuration|null);

                /** Trip remainingWaypointsVersion. */
                public remainingWaypointsVersion?: (google.protobuf.ITimestamp|null);

                /** Trip remainingWaypointsRouteVersion. */
                public remainingWaypointsRouteVersion?: (google.protobuf.ITimestamp|null);

                /** Trip numberOfPassengers. */
                public numberOfPassengers: number;

                /** Trip lastLocation. */
                public lastLocation?: (maps.fleetengine.v1.IVehicleLocation|null);

                /** Trip lastLocationSnappable. */
                public lastLocationSnappable: boolean;

                /** Trip view. */
                public view: (maps.fleetengine.v1.TripView|keyof typeof maps.fleetengine.v1.TripView);

                /** Trip attributes. */
                public attributes: maps.fleetengine.v1.ITripAttribute[];

                /**
                 * Creates a new Trip instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Trip instance
                 */
                public static create(properties?: maps.fleetengine.v1.ITrip): maps.fleetengine.v1.Trip;

                /**
                 * Encodes the specified Trip message. Does not implicitly {@link maps.fleetengine.v1.Trip.verify|verify} messages.
                 * @param message Trip message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ITrip, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Trip message, length delimited. Does not implicitly {@link maps.fleetengine.v1.Trip.verify|verify} messages.
                 * @param message Trip message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ITrip, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Trip message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Trip
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.Trip;

                /**
                 * Decodes a Trip message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Trip
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.Trip;

                /**
                 * Verifies a Trip message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Trip message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Trip
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.Trip;

                /**
                 * Creates a plain object from a Trip message. Also converts values to other types if specified.
                 * @param message Trip
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.Trip, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Trip to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Trip
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a StopLocation. */
            interface IStopLocation {

                /** StopLocation point */
                point?: (google.type.ILatLng|null);

                /** StopLocation timestamp */
                timestamp?: (google.protobuf.ITimestamp|null);

                /** StopLocation stopTime */
                stopTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a StopLocation. */
            class StopLocation implements IStopLocation {

                /**
                 * Constructs a new StopLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IStopLocation);

                /** StopLocation point. */
                public point?: (google.type.ILatLng|null);

                /** StopLocation timestamp. */
                public timestamp?: (google.protobuf.ITimestamp|null);

                /** StopLocation stopTime. */
                public stopTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new StopLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StopLocation instance
                 */
                public static create(properties?: maps.fleetengine.v1.IStopLocation): maps.fleetengine.v1.StopLocation;

                /**
                 * Encodes the specified StopLocation message. Does not implicitly {@link maps.fleetengine.v1.StopLocation.verify|verify} messages.
                 * @param message StopLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IStopLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StopLocation message, length delimited. Does not implicitly {@link maps.fleetengine.v1.StopLocation.verify|verify} messages.
                 * @param message StopLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IStopLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StopLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StopLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.StopLocation;

                /**
                 * Decodes a StopLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StopLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.StopLocation;

                /**
                 * Verifies a StopLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StopLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StopLocation
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.StopLocation;

                /**
                 * Creates a plain object from a StopLocation message. Also converts values to other types if specified.
                 * @param message StopLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.StopLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StopLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StopLocation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** TripStatus enum. */
            enum TripStatus {
                UNKNOWN_TRIP_STATUS = 0,
                NEW = 1,
                ENROUTE_TO_PICKUP = 2,
                ARRIVED_AT_PICKUP = 3,
                ARRIVED_AT_INTERMEDIATE_DESTINATION = 7,
                ENROUTE_TO_INTERMEDIATE_DESTINATION = 8,
                ENROUTE_TO_DROPOFF = 4,
                COMPLETE = 5,
                CANCELED = 6
            }

            /** BillingPlatformIdentifier enum. */
            enum BillingPlatformIdentifier {
                BILLING_PLATFORM_IDENTIFIER_UNSPECIFIED = 0,
                SERVER = 1,
                WEB = 2,
                ANDROID = 3,
                IOS = 4,
                OTHERS = 5
            }

            /** TripView enum. */
            enum TripView {
                TRIP_VIEW_UNSPECIFIED = 0,
                SDK = 1,
                JOURNEY_SHARING_V1S = 2
            }

            /** Represents a VehicleService */
            class VehicleService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new VehicleService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new VehicleService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): VehicleService;

                /**
                 * Calls CreateVehicle.
                 * @param request CreateVehicleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Vehicle
                 */
                public createVehicle(request: maps.fleetengine.v1.ICreateVehicleRequest, callback: maps.fleetengine.v1.VehicleService.CreateVehicleCallback): void;

                /**
                 * Calls CreateVehicle.
                 * @param request CreateVehicleRequest message or plain object
                 * @returns Promise
                 */
                public createVehicle(request: maps.fleetengine.v1.ICreateVehicleRequest): Promise<maps.fleetengine.v1.Vehicle>;

                /**
                 * Calls GetVehicle.
                 * @param request GetVehicleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Vehicle
                 */
                public getVehicle(request: maps.fleetengine.v1.IGetVehicleRequest, callback: maps.fleetengine.v1.VehicleService.GetVehicleCallback): void;

                /**
                 * Calls GetVehicle.
                 * @param request GetVehicleRequest message or plain object
                 * @returns Promise
                 */
                public getVehicle(request: maps.fleetengine.v1.IGetVehicleRequest): Promise<maps.fleetengine.v1.Vehicle>;

                /**
                 * Calls DeleteVehicle.
                 * @param request DeleteVehicleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteVehicle(request: maps.fleetengine.v1.IDeleteVehicleRequest, callback: maps.fleetengine.v1.VehicleService.DeleteVehicleCallback): void;

                /**
                 * Calls DeleteVehicle.
                 * @param request DeleteVehicleRequest message or plain object
                 * @returns Promise
                 */
                public deleteVehicle(request: maps.fleetengine.v1.IDeleteVehicleRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls UpdateVehicle.
                 * @param request UpdateVehicleRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Vehicle
                 */
                public updateVehicle(request: maps.fleetengine.v1.IUpdateVehicleRequest, callback: maps.fleetengine.v1.VehicleService.UpdateVehicleCallback): void;

                /**
                 * Calls UpdateVehicle.
                 * @param request UpdateVehicleRequest message or plain object
                 * @returns Promise
                 */
                public updateVehicle(request: maps.fleetengine.v1.IUpdateVehicleRequest): Promise<maps.fleetengine.v1.Vehicle>;

                /**
                 * Calls UpdateVehicleAttributes.
                 * @param request UpdateVehicleAttributesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and UpdateVehicleAttributesResponse
                 */
                public updateVehicleAttributes(request: maps.fleetengine.v1.IUpdateVehicleAttributesRequest, callback: maps.fleetengine.v1.VehicleService.UpdateVehicleAttributesCallback): void;

                /**
                 * Calls UpdateVehicleAttributes.
                 * @param request UpdateVehicleAttributesRequest message or plain object
                 * @returns Promise
                 */
                public updateVehicleAttributes(request: maps.fleetengine.v1.IUpdateVehicleAttributesRequest): Promise<maps.fleetengine.v1.UpdateVehicleAttributesResponse>;

                /**
                 * Calls ListVehicles.
                 * @param request ListVehiclesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListVehiclesResponse
                 */
                public listVehicles(request: maps.fleetengine.v1.IListVehiclesRequest, callback: maps.fleetengine.v1.VehicleService.ListVehiclesCallback): void;

                /**
                 * Calls ListVehicles.
                 * @param request ListVehiclesRequest message or plain object
                 * @returns Promise
                 */
                public listVehicles(request: maps.fleetengine.v1.IListVehiclesRequest): Promise<maps.fleetengine.v1.ListVehiclesResponse>;

                /**
                 * Calls SearchVehicles.
                 * @param request SearchVehiclesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SearchVehiclesResponse
                 */
                public searchVehicles(request: maps.fleetengine.v1.ISearchVehiclesRequest, callback: maps.fleetengine.v1.VehicleService.SearchVehiclesCallback): void;

                /**
                 * Calls SearchVehicles.
                 * @param request SearchVehiclesRequest message or plain object
                 * @returns Promise
                 */
                public searchVehicles(request: maps.fleetengine.v1.ISearchVehiclesRequest): Promise<maps.fleetengine.v1.SearchVehiclesResponse>;
            }

            namespace VehicleService {

                /**
                 * Callback as used by {@link maps.fleetengine.v1.VehicleService|createVehicle}.
                 * @param error Error, if any
                 * @param [response] Vehicle
                 */
                type CreateVehicleCallback = (error: (Error|null), response?: maps.fleetengine.v1.Vehicle) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.VehicleService|getVehicle}.
                 * @param error Error, if any
                 * @param [response] Vehicle
                 */
                type GetVehicleCallback = (error: (Error|null), response?: maps.fleetengine.v1.Vehicle) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.VehicleService|deleteVehicle}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteVehicleCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.VehicleService|updateVehicle}.
                 * @param error Error, if any
                 * @param [response] Vehicle
                 */
                type UpdateVehicleCallback = (error: (Error|null), response?: maps.fleetengine.v1.Vehicle) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.VehicleService|updateVehicleAttributes}.
                 * @param error Error, if any
                 * @param [response] UpdateVehicleAttributesResponse
                 */
                type UpdateVehicleAttributesCallback = (error: (Error|null), response?: maps.fleetengine.v1.UpdateVehicleAttributesResponse) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.VehicleService|listVehicles}.
                 * @param error Error, if any
                 * @param [response] ListVehiclesResponse
                 */
                type ListVehiclesCallback = (error: (Error|null), response?: maps.fleetengine.v1.ListVehiclesResponse) => void;

                /**
                 * Callback as used by {@link maps.fleetengine.v1.VehicleService|searchVehicles}.
                 * @param error Error, if any
                 * @param [response] SearchVehiclesResponse
                 */
                type SearchVehiclesCallback = (error: (Error|null), response?: maps.fleetengine.v1.SearchVehiclesResponse) => void;
            }

            /** Properties of a CreateVehicleRequest. */
            interface ICreateVehicleRequest {

                /** CreateVehicleRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** CreateVehicleRequest parent */
                parent?: (string|null);

                /** CreateVehicleRequest vehicleId */
                vehicleId?: (string|null);

                /** CreateVehicleRequest vehicle */
                vehicle?: (maps.fleetengine.v1.IVehicle|null);
            }

            /** Represents a CreateVehicleRequest. */
            class CreateVehicleRequest implements ICreateVehicleRequest {

                /**
                 * Constructs a new CreateVehicleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ICreateVehicleRequest);

                /** CreateVehicleRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** CreateVehicleRequest parent. */
                public parent: string;

                /** CreateVehicleRequest vehicleId. */
                public vehicleId: string;

                /** CreateVehicleRequest vehicle. */
                public vehicle?: (maps.fleetengine.v1.IVehicle|null);

                /**
                 * Creates a new CreateVehicleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateVehicleRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.ICreateVehicleRequest): maps.fleetengine.v1.CreateVehicleRequest;

                /**
                 * Encodes the specified CreateVehicleRequest message. Does not implicitly {@link maps.fleetengine.v1.CreateVehicleRequest.verify|verify} messages.
                 * @param message CreateVehicleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ICreateVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateVehicleRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.CreateVehicleRequest.verify|verify} messages.
                 * @param message CreateVehicleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ICreateVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateVehicleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateVehicleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.CreateVehicleRequest;

                /**
                 * Decodes a CreateVehicleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateVehicleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.CreateVehicleRequest;

                /**
                 * Verifies a CreateVehicleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateVehicleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateVehicleRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.CreateVehicleRequest;

                /**
                 * Creates a plain object from a CreateVehicleRequest message. Also converts values to other types if specified.
                 * @param message CreateVehicleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.CreateVehicleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateVehicleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateVehicleRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetVehicleRequest. */
            interface IGetVehicleRequest {

                /** GetVehicleRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** GetVehicleRequest name */
                name?: (string|null);

                /** GetVehicleRequest currentRouteSegmentVersion */
                currentRouteSegmentVersion?: (google.protobuf.ITimestamp|null);

                /** GetVehicleRequest waypointsVersion */
                waypointsVersion?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a GetVehicleRequest. */
            class GetVehicleRequest implements IGetVehicleRequest {

                /**
                 * Constructs a new GetVehicleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IGetVehicleRequest);

                /** GetVehicleRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** GetVehicleRequest name. */
                public name: string;

                /** GetVehicleRequest currentRouteSegmentVersion. */
                public currentRouteSegmentVersion?: (google.protobuf.ITimestamp|null);

                /** GetVehicleRequest waypointsVersion. */
                public waypointsVersion?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new GetVehicleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetVehicleRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.IGetVehicleRequest): maps.fleetengine.v1.GetVehicleRequest;

                /**
                 * Encodes the specified GetVehicleRequest message. Does not implicitly {@link maps.fleetengine.v1.GetVehicleRequest.verify|verify} messages.
                 * @param message GetVehicleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IGetVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetVehicleRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.GetVehicleRequest.verify|verify} messages.
                 * @param message GetVehicleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IGetVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetVehicleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetVehicleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.GetVehicleRequest;

                /**
                 * Decodes a GetVehicleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetVehicleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.GetVehicleRequest;

                /**
                 * Verifies a GetVehicleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetVehicleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetVehicleRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.GetVehicleRequest;

                /**
                 * Creates a plain object from a GetVehicleRequest message. Also converts values to other types if specified.
                 * @param message GetVehicleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.GetVehicleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetVehicleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetVehicleRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteVehicleRequest. */
            interface IDeleteVehicleRequest {

                /** DeleteVehicleRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** DeleteVehicleRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteVehicleRequest. */
            class DeleteVehicleRequest implements IDeleteVehicleRequest {

                /**
                 * Constructs a new DeleteVehicleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IDeleteVehicleRequest);

                /** DeleteVehicleRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** DeleteVehicleRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteVehicleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteVehicleRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.IDeleteVehicleRequest): maps.fleetengine.v1.DeleteVehicleRequest;

                /**
                 * Encodes the specified DeleteVehicleRequest message. Does not implicitly {@link maps.fleetengine.v1.DeleteVehicleRequest.verify|verify} messages.
                 * @param message DeleteVehicleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IDeleteVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteVehicleRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.DeleteVehicleRequest.verify|verify} messages.
                 * @param message DeleteVehicleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IDeleteVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteVehicleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteVehicleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.DeleteVehicleRequest;

                /**
                 * Decodes a DeleteVehicleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteVehicleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.DeleteVehicleRequest;

                /**
                 * Verifies a DeleteVehicleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteVehicleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteVehicleRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.DeleteVehicleRequest;

                /**
                 * Creates a plain object from a DeleteVehicleRequest message. Also converts values to other types if specified.
                 * @param message DeleteVehicleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.DeleteVehicleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteVehicleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteVehicleRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateVehicleRequest. */
            interface IUpdateVehicleRequest {

                /** UpdateVehicleRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** UpdateVehicleRequest name */
                name?: (string|null);

                /** UpdateVehicleRequest vehicle */
                vehicle?: (maps.fleetengine.v1.IVehicle|null);

                /** UpdateVehicleRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateVehicleRequest. */
            class UpdateVehicleRequest implements IUpdateVehicleRequest {

                /**
                 * Constructs a new UpdateVehicleRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IUpdateVehicleRequest);

                /** UpdateVehicleRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** UpdateVehicleRequest name. */
                public name: string;

                /** UpdateVehicleRequest vehicle. */
                public vehicle?: (maps.fleetengine.v1.IVehicle|null);

                /** UpdateVehicleRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateVehicleRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateVehicleRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.IUpdateVehicleRequest): maps.fleetengine.v1.UpdateVehicleRequest;

                /**
                 * Encodes the specified UpdateVehicleRequest message. Does not implicitly {@link maps.fleetengine.v1.UpdateVehicleRequest.verify|verify} messages.
                 * @param message UpdateVehicleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IUpdateVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateVehicleRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.UpdateVehicleRequest.verify|verify} messages.
                 * @param message UpdateVehicleRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IUpdateVehicleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateVehicleRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateVehicleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.UpdateVehicleRequest;

                /**
                 * Decodes an UpdateVehicleRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateVehicleRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.UpdateVehicleRequest;

                /**
                 * Verifies an UpdateVehicleRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateVehicleRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateVehicleRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.UpdateVehicleRequest;

                /**
                 * Creates a plain object from an UpdateVehicleRequest message. Also converts values to other types if specified.
                 * @param message UpdateVehicleRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.UpdateVehicleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateVehicleRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateVehicleRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateVehicleAttributesRequest. */
            interface IUpdateVehicleAttributesRequest {

                /** UpdateVehicleAttributesRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** UpdateVehicleAttributesRequest name */
                name?: (string|null);

                /** UpdateVehicleAttributesRequest attributes */
                attributes?: (maps.fleetengine.v1.IVehicleAttribute[]|null);
            }

            /** Represents an UpdateVehicleAttributesRequest. */
            class UpdateVehicleAttributesRequest implements IUpdateVehicleAttributesRequest {

                /**
                 * Constructs a new UpdateVehicleAttributesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IUpdateVehicleAttributesRequest);

                /** UpdateVehicleAttributesRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** UpdateVehicleAttributesRequest name. */
                public name: string;

                /** UpdateVehicleAttributesRequest attributes. */
                public attributes: maps.fleetengine.v1.IVehicleAttribute[];

                /**
                 * Creates a new UpdateVehicleAttributesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateVehicleAttributesRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.IUpdateVehicleAttributesRequest): maps.fleetengine.v1.UpdateVehicleAttributesRequest;

                /**
                 * Encodes the specified UpdateVehicleAttributesRequest message. Does not implicitly {@link maps.fleetengine.v1.UpdateVehicleAttributesRequest.verify|verify} messages.
                 * @param message UpdateVehicleAttributesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IUpdateVehicleAttributesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateVehicleAttributesRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.UpdateVehicleAttributesRequest.verify|verify} messages.
                 * @param message UpdateVehicleAttributesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IUpdateVehicleAttributesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateVehicleAttributesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateVehicleAttributesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.UpdateVehicleAttributesRequest;

                /**
                 * Decodes an UpdateVehicleAttributesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateVehicleAttributesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.UpdateVehicleAttributesRequest;

                /**
                 * Verifies an UpdateVehicleAttributesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateVehicleAttributesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateVehicleAttributesRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.UpdateVehicleAttributesRequest;

                /**
                 * Creates a plain object from an UpdateVehicleAttributesRequest message. Also converts values to other types if specified.
                 * @param message UpdateVehicleAttributesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.UpdateVehicleAttributesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateVehicleAttributesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateVehicleAttributesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateVehicleAttributesResponse. */
            interface IUpdateVehicleAttributesResponse {

                /** UpdateVehicleAttributesResponse attributes */
                attributes?: (maps.fleetengine.v1.IVehicleAttribute[]|null);
            }

            /** Represents an UpdateVehicleAttributesResponse. */
            class UpdateVehicleAttributesResponse implements IUpdateVehicleAttributesResponse {

                /**
                 * Constructs a new UpdateVehicleAttributesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IUpdateVehicleAttributesResponse);

                /** UpdateVehicleAttributesResponse attributes. */
                public attributes: maps.fleetengine.v1.IVehicleAttribute[];

                /**
                 * Creates a new UpdateVehicleAttributesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateVehicleAttributesResponse instance
                 */
                public static create(properties?: maps.fleetengine.v1.IUpdateVehicleAttributesResponse): maps.fleetengine.v1.UpdateVehicleAttributesResponse;

                /**
                 * Encodes the specified UpdateVehicleAttributesResponse message. Does not implicitly {@link maps.fleetengine.v1.UpdateVehicleAttributesResponse.verify|verify} messages.
                 * @param message UpdateVehicleAttributesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IUpdateVehicleAttributesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateVehicleAttributesResponse message, length delimited. Does not implicitly {@link maps.fleetengine.v1.UpdateVehicleAttributesResponse.verify|verify} messages.
                 * @param message UpdateVehicleAttributesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IUpdateVehicleAttributesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateVehicleAttributesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateVehicleAttributesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.UpdateVehicleAttributesResponse;

                /**
                 * Decodes an UpdateVehicleAttributesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateVehicleAttributesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.UpdateVehicleAttributesResponse;

                /**
                 * Verifies an UpdateVehicleAttributesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateVehicleAttributesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateVehicleAttributesResponse
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.UpdateVehicleAttributesResponse;

                /**
                 * Creates a plain object from an UpdateVehicleAttributesResponse message. Also converts values to other types if specified.
                 * @param message UpdateVehicleAttributesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.UpdateVehicleAttributesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateVehicleAttributesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateVehicleAttributesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchVehiclesRequest. */
            interface ISearchVehiclesRequest {

                /** SearchVehiclesRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** SearchVehiclesRequest parent */
                parent?: (string|null);

                /** SearchVehiclesRequest pickupPoint */
                pickupPoint?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** SearchVehiclesRequest dropoffPoint */
                dropoffPoint?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** SearchVehiclesRequest pickupRadiusMeters */
                pickupRadiusMeters?: (number|null);

                /** SearchVehiclesRequest count */
                count?: (number|null);

                /** SearchVehiclesRequest minimumCapacity */
                minimumCapacity?: (number|null);

                /** SearchVehiclesRequest tripTypes */
                tripTypes?: (maps.fleetengine.v1.TripType[]|null);

                /** SearchVehiclesRequest maximumStaleness */
                maximumStaleness?: (google.protobuf.IDuration|null);

                /** SearchVehiclesRequest vehicleTypes */
                vehicleTypes?: (maps.fleetengine.v1.Vehicle.IVehicleType[]|null);

                /** SearchVehiclesRequest requiredAttributes */
                requiredAttributes?: (maps.fleetengine.v1.IVehicleAttribute[]|null);

                /** SearchVehiclesRequest requiredOneOfAttributes */
                requiredOneOfAttributes?: (maps.fleetengine.v1.IVehicleAttributeList[]|null);

                /** SearchVehiclesRequest requiredOneOfAttributeSets */
                requiredOneOfAttributeSets?: (maps.fleetengine.v1.IVehicleAttributeList[]|null);

                /** SearchVehiclesRequest orderBy */
                orderBy?: (maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder|keyof typeof maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder|null);

                /** SearchVehiclesRequest includeBackToBack */
                includeBackToBack?: (boolean|null);

                /** SearchVehiclesRequest tripId */
                tripId?: (string|null);

                /** SearchVehiclesRequest currentTripsPresent */
                currentTripsPresent?: (maps.fleetengine.v1.SearchVehiclesRequest.CurrentTripsPresent|keyof typeof maps.fleetengine.v1.SearchVehiclesRequest.CurrentTripsPresent|null);

                /** SearchVehiclesRequest filter */
                filter?: (string|null);
            }

            /** Represents a SearchVehiclesRequest. */
            class SearchVehiclesRequest implements ISearchVehiclesRequest {

                /**
                 * Constructs a new SearchVehiclesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ISearchVehiclesRequest);

                /** SearchVehiclesRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** SearchVehiclesRequest parent. */
                public parent: string;

                /** SearchVehiclesRequest pickupPoint. */
                public pickupPoint?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** SearchVehiclesRequest dropoffPoint. */
                public dropoffPoint?: (maps.fleetengine.v1.ITerminalLocation|null);

                /** SearchVehiclesRequest pickupRadiusMeters. */
                public pickupRadiusMeters: number;

                /** SearchVehiclesRequest count. */
                public count: number;

                /** SearchVehiclesRequest minimumCapacity. */
                public minimumCapacity: number;

                /** SearchVehiclesRequest tripTypes. */
                public tripTypes: maps.fleetengine.v1.TripType[];

                /** SearchVehiclesRequest maximumStaleness. */
                public maximumStaleness?: (google.protobuf.IDuration|null);

                /** SearchVehiclesRequest vehicleTypes. */
                public vehicleTypes: maps.fleetengine.v1.Vehicle.IVehicleType[];

                /** SearchVehiclesRequest requiredAttributes. */
                public requiredAttributes: maps.fleetengine.v1.IVehicleAttribute[];

                /** SearchVehiclesRequest requiredOneOfAttributes. */
                public requiredOneOfAttributes: maps.fleetengine.v1.IVehicleAttributeList[];

                /** SearchVehiclesRequest requiredOneOfAttributeSets. */
                public requiredOneOfAttributeSets: maps.fleetengine.v1.IVehicleAttributeList[];

                /** SearchVehiclesRequest orderBy. */
                public orderBy: (maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder|keyof typeof maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder);

                /** SearchVehiclesRequest includeBackToBack. */
                public includeBackToBack: boolean;

                /** SearchVehiclesRequest tripId. */
                public tripId: string;

                /** SearchVehiclesRequest currentTripsPresent. */
                public currentTripsPresent: (maps.fleetengine.v1.SearchVehiclesRequest.CurrentTripsPresent|keyof typeof maps.fleetengine.v1.SearchVehiclesRequest.CurrentTripsPresent);

                /** SearchVehiclesRequest filter. */
                public filter: string;

                /**
                 * Creates a new SearchVehiclesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchVehiclesRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.ISearchVehiclesRequest): maps.fleetengine.v1.SearchVehiclesRequest;

                /**
                 * Encodes the specified SearchVehiclesRequest message. Does not implicitly {@link maps.fleetengine.v1.SearchVehiclesRequest.verify|verify} messages.
                 * @param message SearchVehiclesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ISearchVehiclesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchVehiclesRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.SearchVehiclesRequest.verify|verify} messages.
                 * @param message SearchVehiclesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ISearchVehiclesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchVehiclesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchVehiclesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.SearchVehiclesRequest;

                /**
                 * Decodes a SearchVehiclesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchVehiclesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.SearchVehiclesRequest;

                /**
                 * Verifies a SearchVehiclesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchVehiclesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchVehiclesRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.SearchVehiclesRequest;

                /**
                 * Creates a plain object from a SearchVehiclesRequest message. Also converts values to other types if specified.
                 * @param message SearchVehiclesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.SearchVehiclesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchVehiclesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchVehiclesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SearchVehiclesRequest {

                /** VehicleMatchOrder enum. */
                enum VehicleMatchOrder {
                    UNKNOWN_VEHICLE_MATCH_ORDER = 0,
                    PICKUP_POINT_ETA = 1,
                    PICKUP_POINT_DISTANCE = 2,
                    DROPOFF_POINT_ETA = 3,
                    PICKUP_POINT_STRAIGHT_DISTANCE = 4,
                    COST = 5
                }

                /** CurrentTripsPresent enum. */
                enum CurrentTripsPresent {
                    CURRENT_TRIPS_PRESENT_UNSPECIFIED = 0,
                    NONE = 1,
                    ANY = 2
                }
            }

            /** Properties of a SearchVehiclesResponse. */
            interface ISearchVehiclesResponse {

                /** SearchVehiclesResponse matches */
                matches?: (maps.fleetengine.v1.IVehicleMatch[]|null);
            }

            /** Represents a SearchVehiclesResponse. */
            class SearchVehiclesResponse implements ISearchVehiclesResponse {

                /**
                 * Constructs a new SearchVehiclesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ISearchVehiclesResponse);

                /** SearchVehiclesResponse matches. */
                public matches: maps.fleetengine.v1.IVehicleMatch[];

                /**
                 * Creates a new SearchVehiclesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchVehiclesResponse instance
                 */
                public static create(properties?: maps.fleetengine.v1.ISearchVehiclesResponse): maps.fleetengine.v1.SearchVehiclesResponse;

                /**
                 * Encodes the specified SearchVehiclesResponse message. Does not implicitly {@link maps.fleetengine.v1.SearchVehiclesResponse.verify|verify} messages.
                 * @param message SearchVehiclesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ISearchVehiclesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchVehiclesResponse message, length delimited. Does not implicitly {@link maps.fleetengine.v1.SearchVehiclesResponse.verify|verify} messages.
                 * @param message SearchVehiclesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ISearchVehiclesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchVehiclesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchVehiclesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.SearchVehiclesResponse;

                /**
                 * Decodes a SearchVehiclesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchVehiclesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.SearchVehiclesResponse;

                /**
                 * Verifies a SearchVehiclesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchVehiclesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchVehiclesResponse
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.SearchVehiclesResponse;

                /**
                 * Creates a plain object from a SearchVehiclesResponse message. Also converts values to other types if specified.
                 * @param message SearchVehiclesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.SearchVehiclesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchVehiclesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchVehiclesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListVehiclesRequest. */
            interface IListVehiclesRequest {

                /** ListVehiclesRequest header */
                header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** ListVehiclesRequest parent */
                parent?: (string|null);

                /** ListVehiclesRequest pageSize */
                pageSize?: (number|null);

                /** ListVehiclesRequest pageToken */
                pageToken?: (string|null);

                /** ListVehiclesRequest minimumCapacity */
                minimumCapacity?: (google.protobuf.IInt32Value|null);

                /** ListVehiclesRequest tripTypes */
                tripTypes?: (maps.fleetengine.v1.TripType[]|null);

                /** ListVehiclesRequest maximumStaleness */
                maximumStaleness?: (google.protobuf.IDuration|null);

                /** ListVehiclesRequest vehicleTypeCategories */
                vehicleTypeCategories?: (maps.fleetengine.v1.Vehicle.VehicleType.Category[]|null);

                /** ListVehiclesRequest requiredAttributes */
                requiredAttributes?: (string[]|null);

                /** ListVehiclesRequest requiredOneOfAttributes */
                requiredOneOfAttributes?: (string[]|null);

                /** ListVehiclesRequest requiredOneOfAttributeSets */
                requiredOneOfAttributeSets?: (string[]|null);

                /** ListVehiclesRequest vehicleState */
                vehicleState?: (maps.fleetengine.v1.VehicleState|keyof typeof maps.fleetengine.v1.VehicleState|null);

                /** ListVehiclesRequest onTripOnly */
                onTripOnly?: (boolean|null);

                /** ListVehiclesRequest filter */
                filter?: (string|null);

                /** ListVehiclesRequest viewport */
                viewport?: (google.geo.type.IViewport|null);
            }

            /** Represents a ListVehiclesRequest. */
            class ListVehiclesRequest implements IListVehiclesRequest {

                /**
                 * Constructs a new ListVehiclesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IListVehiclesRequest);

                /** ListVehiclesRequest header. */
                public header?: (maps.fleetengine.v1.IRequestHeader|null);

                /** ListVehiclesRequest parent. */
                public parent: string;

                /** ListVehiclesRequest pageSize. */
                public pageSize: number;

                /** ListVehiclesRequest pageToken. */
                public pageToken: string;

                /** ListVehiclesRequest minimumCapacity. */
                public minimumCapacity?: (google.protobuf.IInt32Value|null);

                /** ListVehiclesRequest tripTypes. */
                public tripTypes: maps.fleetengine.v1.TripType[];

                /** ListVehiclesRequest maximumStaleness. */
                public maximumStaleness?: (google.protobuf.IDuration|null);

                /** ListVehiclesRequest vehicleTypeCategories. */
                public vehicleTypeCategories: maps.fleetengine.v1.Vehicle.VehicleType.Category[];

                /** ListVehiclesRequest requiredAttributes. */
                public requiredAttributes: string[];

                /** ListVehiclesRequest requiredOneOfAttributes. */
                public requiredOneOfAttributes: string[];

                /** ListVehiclesRequest requiredOneOfAttributeSets. */
                public requiredOneOfAttributeSets: string[];

                /** ListVehiclesRequest vehicleState. */
                public vehicleState: (maps.fleetengine.v1.VehicleState|keyof typeof maps.fleetengine.v1.VehicleState);

                /** ListVehiclesRequest onTripOnly. */
                public onTripOnly: boolean;

                /** ListVehiclesRequest filter. */
                public filter: string;

                /** ListVehiclesRequest viewport. */
                public viewport?: (google.geo.type.IViewport|null);

                /**
                 * Creates a new ListVehiclesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListVehiclesRequest instance
                 */
                public static create(properties?: maps.fleetengine.v1.IListVehiclesRequest): maps.fleetengine.v1.ListVehiclesRequest;

                /**
                 * Encodes the specified ListVehiclesRequest message. Does not implicitly {@link maps.fleetengine.v1.ListVehiclesRequest.verify|verify} messages.
                 * @param message ListVehiclesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IListVehiclesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListVehiclesRequest message, length delimited. Does not implicitly {@link maps.fleetengine.v1.ListVehiclesRequest.verify|verify} messages.
                 * @param message ListVehiclesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IListVehiclesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListVehiclesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListVehiclesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.ListVehiclesRequest;

                /**
                 * Decodes a ListVehiclesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListVehiclesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.ListVehiclesRequest;

                /**
                 * Verifies a ListVehiclesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListVehiclesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListVehiclesRequest
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.ListVehiclesRequest;

                /**
                 * Creates a plain object from a ListVehiclesRequest message. Also converts values to other types if specified.
                 * @param message ListVehiclesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.ListVehiclesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListVehiclesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListVehiclesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListVehiclesResponse. */
            interface IListVehiclesResponse {

                /** ListVehiclesResponse vehicles */
                vehicles?: (maps.fleetengine.v1.IVehicle[]|null);

                /** ListVehiclesResponse nextPageToken */
                nextPageToken?: (string|null);

                /** ListVehiclesResponse totalSize */
                totalSize?: (number|Long|string|null);
            }

            /** Represents a ListVehiclesResponse. */
            class ListVehiclesResponse implements IListVehiclesResponse {

                /**
                 * Constructs a new ListVehiclesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IListVehiclesResponse);

                /** ListVehiclesResponse vehicles. */
                public vehicles: maps.fleetengine.v1.IVehicle[];

                /** ListVehiclesResponse nextPageToken. */
                public nextPageToken: string;

                /** ListVehiclesResponse totalSize. */
                public totalSize: (number|Long|string);

                /**
                 * Creates a new ListVehiclesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListVehiclesResponse instance
                 */
                public static create(properties?: maps.fleetengine.v1.IListVehiclesResponse): maps.fleetengine.v1.ListVehiclesResponse;

                /**
                 * Encodes the specified ListVehiclesResponse message. Does not implicitly {@link maps.fleetengine.v1.ListVehiclesResponse.verify|verify} messages.
                 * @param message ListVehiclesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IListVehiclesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListVehiclesResponse message, length delimited. Does not implicitly {@link maps.fleetengine.v1.ListVehiclesResponse.verify|verify} messages.
                 * @param message ListVehiclesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IListVehiclesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListVehiclesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListVehiclesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.ListVehiclesResponse;

                /**
                 * Decodes a ListVehiclesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListVehiclesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.ListVehiclesResponse;

                /**
                 * Verifies a ListVehiclesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListVehiclesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListVehiclesResponse
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.ListVehiclesResponse;

                /**
                 * Creates a plain object from a ListVehiclesResponse message. Also converts values to other types if specified.
                 * @param message ListVehiclesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.ListVehiclesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListVehiclesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListVehiclesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Waypoint. */
            interface IWaypoint {

                /** Waypoint latLng */
                latLng?: (google.type.ILatLng|null);

                /** Waypoint eta */
                eta?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Waypoint. */
            class Waypoint implements IWaypoint {

                /**
                 * Constructs a new Waypoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IWaypoint);

                /** Waypoint latLng. */
                public latLng?: (google.type.ILatLng|null);

                /** Waypoint eta. */
                public eta?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Waypoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Waypoint instance
                 */
                public static create(properties?: maps.fleetengine.v1.IWaypoint): maps.fleetengine.v1.Waypoint;

                /**
                 * Encodes the specified Waypoint message. Does not implicitly {@link maps.fleetengine.v1.Waypoint.verify|verify} messages.
                 * @param message Waypoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Waypoint message, length delimited. Does not implicitly {@link maps.fleetengine.v1.Waypoint.verify|verify} messages.
                 * @param message Waypoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Waypoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Waypoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.Waypoint;

                /**
                 * Decodes a Waypoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Waypoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.Waypoint;

                /**
                 * Verifies a Waypoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Waypoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Waypoint
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.Waypoint;

                /**
                 * Creates a plain object from a Waypoint message. Also converts values to other types if specified.
                 * @param message Waypoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.Waypoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Waypoint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Waypoint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VehicleMatch. */
            interface IVehicleMatch {

                /** VehicleMatch vehicle */
                vehicle?: (maps.fleetengine.v1.IVehicle|null);

                /** VehicleMatch vehiclePickupEta */
                vehiclePickupEta?: (google.protobuf.ITimestamp|null);

                /** VehicleMatch vehiclePickupDistanceMeters */
                vehiclePickupDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** VehicleMatch vehiclePickupStraightLineDistanceMeters */
                vehiclePickupStraightLineDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** VehicleMatch vehicleDropoffEta */
                vehicleDropoffEta?: (google.protobuf.ITimestamp|null);

                /** VehicleMatch vehiclePickupToDropoffDistanceMeters */
                vehiclePickupToDropoffDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** VehicleMatch tripType */
                tripType?: (maps.fleetengine.v1.TripType|keyof typeof maps.fleetengine.v1.TripType|null);

                /** VehicleMatch vehicleTripsWaypoints */
                vehicleTripsWaypoints?: (maps.fleetengine.v1.IWaypoint[]|null);

                /** VehicleMatch vehicleMatchType */
                vehicleMatchType?: (maps.fleetengine.v1.VehicleMatch.VehicleMatchType|keyof typeof maps.fleetengine.v1.VehicleMatch.VehicleMatchType|null);

                /** VehicleMatch requestedOrderedBy */
                requestedOrderedBy?: (maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder|keyof typeof maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder|null);

                /** VehicleMatch orderedBy */
                orderedBy?: (maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder|keyof typeof maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder|null);
            }

            /** Represents a VehicleMatch. */
            class VehicleMatch implements IVehicleMatch {

                /**
                 * Constructs a new VehicleMatch.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IVehicleMatch);

                /** VehicleMatch vehicle. */
                public vehicle?: (maps.fleetengine.v1.IVehicle|null);

                /** VehicleMatch vehiclePickupEta. */
                public vehiclePickupEta?: (google.protobuf.ITimestamp|null);

                /** VehicleMatch vehiclePickupDistanceMeters. */
                public vehiclePickupDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** VehicleMatch vehiclePickupStraightLineDistanceMeters. */
                public vehiclePickupStraightLineDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** VehicleMatch vehicleDropoffEta. */
                public vehicleDropoffEta?: (google.protobuf.ITimestamp|null);

                /** VehicleMatch vehiclePickupToDropoffDistanceMeters. */
                public vehiclePickupToDropoffDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** VehicleMatch tripType. */
                public tripType: (maps.fleetengine.v1.TripType|keyof typeof maps.fleetengine.v1.TripType);

                /** VehicleMatch vehicleTripsWaypoints. */
                public vehicleTripsWaypoints: maps.fleetengine.v1.IWaypoint[];

                /** VehicleMatch vehicleMatchType. */
                public vehicleMatchType: (maps.fleetengine.v1.VehicleMatch.VehicleMatchType|keyof typeof maps.fleetengine.v1.VehicleMatch.VehicleMatchType);

                /** VehicleMatch requestedOrderedBy. */
                public requestedOrderedBy: (maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder|keyof typeof maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder);

                /** VehicleMatch orderedBy. */
                public orderedBy: (maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder|keyof typeof maps.fleetengine.v1.SearchVehiclesRequest.VehicleMatchOrder);

                /**
                 * Creates a new VehicleMatch instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VehicleMatch instance
                 */
                public static create(properties?: maps.fleetengine.v1.IVehicleMatch): maps.fleetengine.v1.VehicleMatch;

                /**
                 * Encodes the specified VehicleMatch message. Does not implicitly {@link maps.fleetengine.v1.VehicleMatch.verify|verify} messages.
                 * @param message VehicleMatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IVehicleMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VehicleMatch message, length delimited. Does not implicitly {@link maps.fleetengine.v1.VehicleMatch.verify|verify} messages.
                 * @param message VehicleMatch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IVehicleMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VehicleMatch message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VehicleMatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.VehicleMatch;

                /**
                 * Decodes a VehicleMatch message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VehicleMatch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.VehicleMatch;

                /**
                 * Verifies a VehicleMatch message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VehicleMatch message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VehicleMatch
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.VehicleMatch;

                /**
                 * Creates a plain object from a VehicleMatch message. Also converts values to other types if specified.
                 * @param message VehicleMatch
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.VehicleMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VehicleMatch to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VehicleMatch
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VehicleMatch {

                /** VehicleMatchType enum. */
                enum VehicleMatchType {
                    UNKNOWN = 0,
                    EXCLUSIVE = 1,
                    BACK_TO_BACK = 2,
                    CARPOOL = 3,
                    CARPOOL_BACK_TO_BACK = 4
                }
            }

            /** Properties of a VehicleAttributeList. */
            interface IVehicleAttributeList {

                /** VehicleAttributeList attributes */
                attributes?: (maps.fleetengine.v1.IVehicleAttribute[]|null);
            }

            /** Represents a VehicleAttributeList. */
            class VehicleAttributeList implements IVehicleAttributeList {

                /**
                 * Constructs a new VehicleAttributeList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IVehicleAttributeList);

                /** VehicleAttributeList attributes. */
                public attributes: maps.fleetengine.v1.IVehicleAttribute[];

                /**
                 * Creates a new VehicleAttributeList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VehicleAttributeList instance
                 */
                public static create(properties?: maps.fleetengine.v1.IVehicleAttributeList): maps.fleetengine.v1.VehicleAttributeList;

                /**
                 * Encodes the specified VehicleAttributeList message. Does not implicitly {@link maps.fleetengine.v1.VehicleAttributeList.verify|verify} messages.
                 * @param message VehicleAttributeList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IVehicleAttributeList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VehicleAttributeList message, length delimited. Does not implicitly {@link maps.fleetengine.v1.VehicleAttributeList.verify|verify} messages.
                 * @param message VehicleAttributeList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IVehicleAttributeList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VehicleAttributeList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VehicleAttributeList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.VehicleAttributeList;

                /**
                 * Decodes a VehicleAttributeList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VehicleAttributeList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.VehicleAttributeList;

                /**
                 * Verifies a VehicleAttributeList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VehicleAttributeList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VehicleAttributeList
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.VehicleAttributeList;

                /**
                 * Creates a plain object from a VehicleAttributeList message. Also converts values to other types if specified.
                 * @param message VehicleAttributeList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.VehicleAttributeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VehicleAttributeList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VehicleAttributeList
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Vehicle. */
            interface IVehicle {

                /** Vehicle name */
                name?: (string|null);

                /** Vehicle vehicleState */
                vehicleState?: (maps.fleetengine.v1.VehicleState|keyof typeof maps.fleetengine.v1.VehicleState|null);

                /** Vehicle supportedTripTypes */
                supportedTripTypes?: (maps.fleetengine.v1.TripType[]|null);

                /** Vehicle currentTrips */
                currentTrips?: (string[]|null);

                /** Vehicle lastLocation */
                lastLocation?: (maps.fleetengine.v1.IVehicleLocation|null);

                /** Vehicle pastLocations */
                pastLocations?: (maps.fleetengine.v1.IVehicleLocation[]|null);

                /** Vehicle maximumCapacity */
                maximumCapacity?: (number|null);

                /** Vehicle attributes */
                attributes?: (maps.fleetengine.v1.IVehicleAttribute[]|null);

                /** Vehicle vehicleType */
                vehicleType?: (maps.fleetengine.v1.Vehicle.IVehicleType|null);

                /** Vehicle licensePlate */
                licensePlate?: (maps.fleetengine.v1.ILicensePlate|null);

                /** Vehicle route */
                route?: (maps.fleetengine.v1.ITerminalLocation[]|null);

                /** Vehicle currentRouteSegment */
                currentRouteSegment?: (string|null);

                /** Vehicle currentRouteSegmentTraffic */
                currentRouteSegmentTraffic?: (maps.fleetengine.v1.ITrafficPolylineData|null);

                /** Vehicle currentRouteSegmentVersion */
                currentRouteSegmentVersion?: (google.protobuf.ITimestamp|null);

                /** Vehicle currentRouteSegmentEndPoint */
                currentRouteSegmentEndPoint?: (maps.fleetengine.v1.ITripWaypoint|null);

                /** Vehicle remainingDistanceMeters */
                remainingDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** Vehicle etaToFirstWaypoint */
                etaToFirstWaypoint?: (google.protobuf.ITimestamp|null);

                /** Vehicle remainingTimeSeconds */
                remainingTimeSeconds?: (google.protobuf.IInt32Value|null);

                /** Vehicle waypoints */
                waypoints?: (maps.fleetengine.v1.ITripWaypoint[]|null);

                /** Vehicle waypointsVersion */
                waypointsVersion?: (google.protobuf.ITimestamp|null);

                /** Vehicle backToBackEnabled */
                backToBackEnabled?: (boolean|null);

                /** Vehicle navigationStatus */
                navigationStatus?: (maps.fleetengine.v1.NavigationStatus|keyof typeof maps.fleetengine.v1.NavigationStatus|null);

                /** Vehicle deviceSettings */
                deviceSettings?: (maps.fleetengine.v1.IDeviceSettings|null);
            }

            /** Represents a Vehicle. */
            class Vehicle implements IVehicle {

                /**
                 * Constructs a new Vehicle.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IVehicle);

                /** Vehicle name. */
                public name: string;

                /** Vehicle vehicleState. */
                public vehicleState: (maps.fleetengine.v1.VehicleState|keyof typeof maps.fleetengine.v1.VehicleState);

                /** Vehicle supportedTripTypes. */
                public supportedTripTypes: maps.fleetengine.v1.TripType[];

                /** Vehicle currentTrips. */
                public currentTrips: string[];

                /** Vehicle lastLocation. */
                public lastLocation?: (maps.fleetengine.v1.IVehicleLocation|null);

                /** Vehicle pastLocations. */
                public pastLocations: maps.fleetengine.v1.IVehicleLocation[];

                /** Vehicle maximumCapacity. */
                public maximumCapacity: number;

                /** Vehicle attributes. */
                public attributes: maps.fleetengine.v1.IVehicleAttribute[];

                /** Vehicle vehicleType. */
                public vehicleType?: (maps.fleetengine.v1.Vehicle.IVehicleType|null);

                /** Vehicle licensePlate. */
                public licensePlate?: (maps.fleetengine.v1.ILicensePlate|null);

                /** Vehicle route. */
                public route: maps.fleetengine.v1.ITerminalLocation[];

                /** Vehicle currentRouteSegment. */
                public currentRouteSegment: string;

                /** Vehicle currentRouteSegmentTraffic. */
                public currentRouteSegmentTraffic?: (maps.fleetengine.v1.ITrafficPolylineData|null);

                /** Vehicle currentRouteSegmentVersion. */
                public currentRouteSegmentVersion?: (google.protobuf.ITimestamp|null);

                /** Vehicle currentRouteSegmentEndPoint. */
                public currentRouteSegmentEndPoint?: (maps.fleetengine.v1.ITripWaypoint|null);

                /** Vehicle remainingDistanceMeters. */
                public remainingDistanceMeters?: (google.protobuf.IInt32Value|null);

                /** Vehicle etaToFirstWaypoint. */
                public etaToFirstWaypoint?: (google.protobuf.ITimestamp|null);

                /** Vehicle remainingTimeSeconds. */
                public remainingTimeSeconds?: (google.protobuf.IInt32Value|null);

                /** Vehicle waypoints. */
                public waypoints: maps.fleetengine.v1.ITripWaypoint[];

                /** Vehicle waypointsVersion. */
                public waypointsVersion?: (google.protobuf.ITimestamp|null);

                /** Vehicle backToBackEnabled. */
                public backToBackEnabled: boolean;

                /** Vehicle navigationStatus. */
                public navigationStatus: (maps.fleetengine.v1.NavigationStatus|keyof typeof maps.fleetengine.v1.NavigationStatus);

                /** Vehicle deviceSettings. */
                public deviceSettings?: (maps.fleetengine.v1.IDeviceSettings|null);

                /**
                 * Creates a new Vehicle instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Vehicle instance
                 */
                public static create(properties?: maps.fleetengine.v1.IVehicle): maps.fleetengine.v1.Vehicle;

                /**
                 * Encodes the specified Vehicle message. Does not implicitly {@link maps.fleetengine.v1.Vehicle.verify|verify} messages.
                 * @param message Vehicle message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Vehicle message, length delimited. Does not implicitly {@link maps.fleetengine.v1.Vehicle.verify|verify} messages.
                 * @param message Vehicle message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Vehicle message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Vehicle
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.Vehicle;

                /**
                 * Decodes a Vehicle message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Vehicle
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.Vehicle;

                /**
                 * Verifies a Vehicle message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Vehicle message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Vehicle
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.Vehicle;

                /**
                 * Creates a plain object from a Vehicle message. Also converts values to other types if specified.
                 * @param message Vehicle
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.Vehicle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Vehicle to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Vehicle
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Vehicle {

                /** Properties of a VehicleType. */
                interface IVehicleType {

                    /** VehicleType category */
                    category?: (maps.fleetengine.v1.Vehicle.VehicleType.Category|keyof typeof maps.fleetengine.v1.Vehicle.VehicleType.Category|null);
                }

                /** Represents a VehicleType. */
                class VehicleType implements IVehicleType {

                    /**
                     * Constructs a new VehicleType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: maps.fleetengine.v1.Vehicle.IVehicleType);

                    /** VehicleType category. */
                    public category: (maps.fleetengine.v1.Vehicle.VehicleType.Category|keyof typeof maps.fleetengine.v1.Vehicle.VehicleType.Category);

                    /**
                     * Creates a new VehicleType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VehicleType instance
                     */
                    public static create(properties?: maps.fleetengine.v1.Vehicle.IVehicleType): maps.fleetengine.v1.Vehicle.VehicleType;

                    /**
                     * Encodes the specified VehicleType message. Does not implicitly {@link maps.fleetengine.v1.Vehicle.VehicleType.verify|verify} messages.
                     * @param message VehicleType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: maps.fleetengine.v1.Vehicle.IVehicleType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VehicleType message, length delimited. Does not implicitly {@link maps.fleetengine.v1.Vehicle.VehicleType.verify|verify} messages.
                     * @param message VehicleType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: maps.fleetengine.v1.Vehicle.IVehicleType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VehicleType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VehicleType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.Vehicle.VehicleType;

                    /**
                     * Decodes a VehicleType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VehicleType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.Vehicle.VehicleType;

                    /**
                     * Verifies a VehicleType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VehicleType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VehicleType
                     */
                    public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.Vehicle.VehicleType;

                    /**
                     * Creates a plain object from a VehicleType message. Also converts values to other types if specified.
                     * @param message VehicleType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: maps.fleetengine.v1.Vehicle.VehicleType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VehicleType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VehicleType
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VehicleType {

                    /** Category enum. */
                    enum Category {
                        UNKNOWN = 0,
                        AUTO = 1,
                        TAXI = 2,
                        TRUCK = 3,
                        TWO_WHEELER = 4,
                        BICYCLE = 5,
                        PEDESTRIAN = 6
                    }
                }
            }

            /** Properties of a BatteryInfo. */
            interface IBatteryInfo {

                /** BatteryInfo batteryStatus */
                batteryStatus?: (maps.fleetengine.v1.BatteryStatus|keyof typeof maps.fleetengine.v1.BatteryStatus|null);

                /** BatteryInfo powerSource */
                powerSource?: (maps.fleetengine.v1.PowerSource|keyof typeof maps.fleetengine.v1.PowerSource|null);

                /** BatteryInfo batteryPercentage */
                batteryPercentage?: (number|null);
            }

            /** Represents a BatteryInfo. */
            class BatteryInfo implements IBatteryInfo {

                /**
                 * Constructs a new BatteryInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IBatteryInfo);

                /** BatteryInfo batteryStatus. */
                public batteryStatus: (maps.fleetengine.v1.BatteryStatus|keyof typeof maps.fleetengine.v1.BatteryStatus);

                /** BatteryInfo powerSource. */
                public powerSource: (maps.fleetengine.v1.PowerSource|keyof typeof maps.fleetengine.v1.PowerSource);

                /** BatteryInfo batteryPercentage. */
                public batteryPercentage: number;

                /**
                 * Creates a new BatteryInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BatteryInfo instance
                 */
                public static create(properties?: maps.fleetengine.v1.IBatteryInfo): maps.fleetengine.v1.BatteryInfo;

                /**
                 * Encodes the specified BatteryInfo message. Does not implicitly {@link maps.fleetengine.v1.BatteryInfo.verify|verify} messages.
                 * @param message BatteryInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IBatteryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BatteryInfo message, length delimited. Does not implicitly {@link maps.fleetengine.v1.BatteryInfo.verify|verify} messages.
                 * @param message BatteryInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IBatteryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BatteryInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BatteryInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.BatteryInfo;

                /**
                 * Decodes a BatteryInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BatteryInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.BatteryInfo;

                /**
                 * Verifies a BatteryInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BatteryInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BatteryInfo
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.BatteryInfo;

                /**
                 * Creates a plain object from a BatteryInfo message. Also converts values to other types if specified.
                 * @param message BatteryInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.BatteryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BatteryInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BatteryInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeviceSettings. */
            interface IDeviceSettings {

                /** DeviceSettings locationPowerSaveMode */
                locationPowerSaveMode?: (maps.fleetengine.v1.LocationPowerSaveMode|keyof typeof maps.fleetengine.v1.LocationPowerSaveMode|null);

                /** DeviceSettings isPowerSaveMode */
                isPowerSaveMode?: (boolean|null);

                /** DeviceSettings isInteractive */
                isInteractive?: (boolean|null);

                /** DeviceSettings batteryInfo */
                batteryInfo?: (maps.fleetengine.v1.IBatteryInfo|null);
            }

            /** Represents a DeviceSettings. */
            class DeviceSettings implements IDeviceSettings {

                /**
                 * Constructs a new DeviceSettings.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IDeviceSettings);

                /** DeviceSettings locationPowerSaveMode. */
                public locationPowerSaveMode: (maps.fleetengine.v1.LocationPowerSaveMode|keyof typeof maps.fleetengine.v1.LocationPowerSaveMode);

                /** DeviceSettings isPowerSaveMode. */
                public isPowerSaveMode: boolean;

                /** DeviceSettings isInteractive. */
                public isInteractive: boolean;

                /** DeviceSettings batteryInfo. */
                public batteryInfo?: (maps.fleetengine.v1.IBatteryInfo|null);

                /**
                 * Creates a new DeviceSettings instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeviceSettings instance
                 */
                public static create(properties?: maps.fleetengine.v1.IDeviceSettings): maps.fleetengine.v1.DeviceSettings;

                /**
                 * Encodes the specified DeviceSettings message. Does not implicitly {@link maps.fleetengine.v1.DeviceSettings.verify|verify} messages.
                 * @param message DeviceSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IDeviceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeviceSettings message, length delimited. Does not implicitly {@link maps.fleetengine.v1.DeviceSettings.verify|verify} messages.
                 * @param message DeviceSettings message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IDeviceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeviceSettings message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeviceSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.DeviceSettings;

                /**
                 * Decodes a DeviceSettings message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeviceSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.DeviceSettings;

                /**
                 * Verifies a DeviceSettings message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeviceSettings message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeviceSettings
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.DeviceSettings;

                /**
                 * Creates a plain object from a DeviceSettings message. Also converts values to other types if specified.
                 * @param message DeviceSettings
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.DeviceSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeviceSettings to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeviceSettings
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a LicensePlate. */
            interface ILicensePlate {

                /** LicensePlate countryCode */
                countryCode?: (string|null);

                /** LicensePlate lastCharacter */
                lastCharacter?: (string|null);
            }

            /** Represents a LicensePlate. */
            class LicensePlate implements ILicensePlate {

                /**
                 * Constructs a new LicensePlate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ILicensePlate);

                /** LicensePlate countryCode. */
                public countryCode: string;

                /** LicensePlate lastCharacter. */
                public lastCharacter: string;

                /**
                 * Creates a new LicensePlate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LicensePlate instance
                 */
                public static create(properties?: maps.fleetengine.v1.ILicensePlate): maps.fleetengine.v1.LicensePlate;

                /**
                 * Encodes the specified LicensePlate message. Does not implicitly {@link maps.fleetengine.v1.LicensePlate.verify|verify} messages.
                 * @param message LicensePlate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ILicensePlate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LicensePlate message, length delimited. Does not implicitly {@link maps.fleetengine.v1.LicensePlate.verify|verify} messages.
                 * @param message LicensePlate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ILicensePlate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LicensePlate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LicensePlate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.LicensePlate;

                /**
                 * Decodes a LicensePlate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LicensePlate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.LicensePlate;

                /**
                 * Verifies a LicensePlate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LicensePlate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LicensePlate
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.LicensePlate;

                /**
                 * Creates a plain object from a LicensePlate message. Also converts values to other types if specified.
                 * @param message LicensePlate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.LicensePlate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LicensePlate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LicensePlate
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VisualTrafficReportPolylineRendering. */
            interface IVisualTrafficReportPolylineRendering {

                /** VisualTrafficReportPolylineRendering roadStretch */
                roadStretch?: (maps.fleetengine.v1.VisualTrafficReportPolylineRendering.IRoadStretch[]|null);
            }

            /** Represents a VisualTrafficReportPolylineRendering. */
            class VisualTrafficReportPolylineRendering implements IVisualTrafficReportPolylineRendering {

                /**
                 * Constructs a new VisualTrafficReportPolylineRendering.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.IVisualTrafficReportPolylineRendering);

                /** VisualTrafficReportPolylineRendering roadStretch. */
                public roadStretch: maps.fleetengine.v1.VisualTrafficReportPolylineRendering.IRoadStretch[];

                /**
                 * Creates a new VisualTrafficReportPolylineRendering instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisualTrafficReportPolylineRendering instance
                 */
                public static create(properties?: maps.fleetengine.v1.IVisualTrafficReportPolylineRendering): maps.fleetengine.v1.VisualTrafficReportPolylineRendering;

                /**
                 * Encodes the specified VisualTrafficReportPolylineRendering message. Does not implicitly {@link maps.fleetengine.v1.VisualTrafficReportPolylineRendering.verify|verify} messages.
                 * @param message VisualTrafficReportPolylineRendering message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.IVisualTrafficReportPolylineRendering, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisualTrafficReportPolylineRendering message, length delimited. Does not implicitly {@link maps.fleetengine.v1.VisualTrafficReportPolylineRendering.verify|verify} messages.
                 * @param message VisualTrafficReportPolylineRendering message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.IVisualTrafficReportPolylineRendering, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisualTrafficReportPolylineRendering message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisualTrafficReportPolylineRendering
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.VisualTrafficReportPolylineRendering;

                /**
                 * Decodes a VisualTrafficReportPolylineRendering message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisualTrafficReportPolylineRendering
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.VisualTrafficReportPolylineRendering;

                /**
                 * Verifies a VisualTrafficReportPolylineRendering message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisualTrafficReportPolylineRendering message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisualTrafficReportPolylineRendering
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.VisualTrafficReportPolylineRendering;

                /**
                 * Creates a plain object from a VisualTrafficReportPolylineRendering message. Also converts values to other types if specified.
                 * @param message VisualTrafficReportPolylineRendering
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.VisualTrafficReportPolylineRendering, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisualTrafficReportPolylineRendering to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisualTrafficReportPolylineRendering
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisualTrafficReportPolylineRendering {

                /** Properties of a RoadStretch. */
                interface IRoadStretch {

                    /** RoadStretch style */
                    style?: (maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch.Style|keyof typeof maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch.Style|null);

                    /** RoadStretch offsetMeters */
                    offsetMeters?: (number|null);

                    /** RoadStretch lengthMeters */
                    lengthMeters?: (number|null);
                }

                /** Represents a RoadStretch. */
                class RoadStretch implements IRoadStretch {

                    /**
                     * Constructs a new RoadStretch.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: maps.fleetengine.v1.VisualTrafficReportPolylineRendering.IRoadStretch);

                    /** RoadStretch style. */
                    public style: (maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch.Style|keyof typeof maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch.Style);

                    /** RoadStretch offsetMeters. */
                    public offsetMeters: number;

                    /** RoadStretch lengthMeters. */
                    public lengthMeters: number;

                    /**
                     * Creates a new RoadStretch instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoadStretch instance
                     */
                    public static create(properties?: maps.fleetengine.v1.VisualTrafficReportPolylineRendering.IRoadStretch): maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch;

                    /**
                     * Encodes the specified RoadStretch message. Does not implicitly {@link maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch.verify|verify} messages.
                     * @param message RoadStretch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: maps.fleetengine.v1.VisualTrafficReportPolylineRendering.IRoadStretch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoadStretch message, length delimited. Does not implicitly {@link maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch.verify|verify} messages.
                     * @param message RoadStretch message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: maps.fleetengine.v1.VisualTrafficReportPolylineRendering.IRoadStretch, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoadStretch message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoadStretch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch;

                    /**
                     * Decodes a RoadStretch message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoadStretch
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch;

                    /**
                     * Verifies a RoadStretch message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoadStretch message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoadStretch
                     */
                    public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch;

                    /**
                     * Creates a plain object from a RoadStretch message. Also converts values to other types if specified.
                     * @param message RoadStretch
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: maps.fleetengine.v1.VisualTrafficReportPolylineRendering.RoadStretch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoadStretch to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoadStretch
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RoadStretch {

                    /** Style enum. */
                    enum Style {
                        STYLE_UNSPECIFIED = 0,
                        SLOWER_TRAFFIC = 1,
                        TRAFFIC_JAM = 2
                    }
                }
            }

            /** Properties of a TrafficPolylineData. */
            interface ITrafficPolylineData {

                /** TrafficPolylineData trafficRendering */
                trafficRendering?: (maps.fleetengine.v1.IVisualTrafficReportPolylineRendering|null);
            }

            /** Represents a TrafficPolylineData. */
            class TrafficPolylineData implements ITrafficPolylineData {

                /**
                 * Constructs a new TrafficPolylineData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: maps.fleetengine.v1.ITrafficPolylineData);

                /** TrafficPolylineData trafficRendering. */
                public trafficRendering?: (maps.fleetengine.v1.IVisualTrafficReportPolylineRendering|null);

                /**
                 * Creates a new TrafficPolylineData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TrafficPolylineData instance
                 */
                public static create(properties?: maps.fleetengine.v1.ITrafficPolylineData): maps.fleetengine.v1.TrafficPolylineData;

                /**
                 * Encodes the specified TrafficPolylineData message. Does not implicitly {@link maps.fleetengine.v1.TrafficPolylineData.verify|verify} messages.
                 * @param message TrafficPolylineData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: maps.fleetengine.v1.ITrafficPolylineData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TrafficPolylineData message, length delimited. Does not implicitly {@link maps.fleetengine.v1.TrafficPolylineData.verify|verify} messages.
                 * @param message TrafficPolylineData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: maps.fleetengine.v1.ITrafficPolylineData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TrafficPolylineData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TrafficPolylineData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): maps.fleetengine.v1.TrafficPolylineData;

                /**
                 * Decodes a TrafficPolylineData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TrafficPolylineData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): maps.fleetengine.v1.TrafficPolylineData;

                /**
                 * Verifies a TrafficPolylineData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TrafficPolylineData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TrafficPolylineData
                 */
                public static fromObject(object: { [k: string]: any }): maps.fleetengine.v1.TrafficPolylineData;

                /**
                 * Creates a plain object from a TrafficPolylineData message. Also converts values to other types if specified.
                 * @param message TrafficPolylineData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: maps.fleetengine.v1.TrafficPolylineData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TrafficPolylineData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TrafficPolylineData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VehicleState enum. */
            enum VehicleState {
                UNKNOWN_VEHICLE_STATE = 0,
                OFFLINE = 1,
                ONLINE = 2
            }

            /** LocationPowerSaveMode enum. */
            enum LocationPowerSaveMode {
                UNKNOWN_LOCATION_POWER_SAVE_MODE = 0,
                LOCATION_MODE_NO_CHANGE = 1,
                LOCATION_MODE_GPS_DISABLED_WHEN_SCREEN_OFF = 2,
                LOCATION_MODE_ALL_DISABLED_WHEN_SCREEN_OFF = 3,
                LOCATION_MODE_FOREGROUND_ONLY = 4,
                LOCATION_MODE_THROTTLE_REQUESTS_WHEN_SCREEN_OFF = 5
            }

            /** BatteryStatus enum. */
            enum BatteryStatus {
                UNKNOWN_BATTERY_STATUS = 0,
                BATTERY_STATUS_CHARGING = 1,
                BATTERY_STATUS_DISCHARGING = 2,
                BATTERY_STATUS_FULL = 3,
                BATTERY_STATUS_NOT_CHARGING = 4,
                BATTERY_STATUS_POWER_LOW = 5
            }

            /** PowerSource enum. */
            enum PowerSource {
                UNKNOWN_POWER_SOURCE = 0,
                POWER_SOURCE_AC = 1,
                POWER_SOURCE_USB = 2,
                POWER_SOURCE_WIRELESS = 3,
                POWER_SOURCE_UNPLUGGED = 4
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace geo. */
    namespace geo {

        /** Namespace type. */
        namespace type {

            /** Properties of a Viewport. */
            interface IViewport {

                /** Viewport low */
                low?: (google.type.ILatLng|null);

                /** Viewport high */
                high?: (google.type.ILatLng|null);
            }

            /** Represents a Viewport. */
            class Viewport implements IViewport {

                /**
                 * Constructs a new Viewport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.geo.type.IViewport);

                /** Viewport low. */
                public low?: (google.type.ILatLng|null);

                /** Viewport high. */
                public high?: (google.type.ILatLng|null);

                /**
                 * Creates a new Viewport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Viewport instance
                 */
                public static create(properties?: google.geo.type.IViewport): google.geo.type.Viewport;

                /**
                 * Encodes the specified Viewport message. Does not implicitly {@link google.geo.type.Viewport.verify|verify} messages.
                 * @param message Viewport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.geo.type.IViewport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Viewport message, length delimited. Does not implicitly {@link google.geo.type.Viewport.verify|verify} messages.
                 * @param message Viewport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.geo.type.IViewport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Viewport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Viewport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.geo.type.Viewport;

                /**
                 * Decodes a Viewport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Viewport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.geo.type.Viewport;

                /**
                 * Verifies a Viewport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Viewport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Viewport
                 */
                public static fromObject(object: { [k: string]: any }): google.geo.type.Viewport;

                /**
                 * Creates a plain object from a Viewport message. Also converts values to other types if specified.
                 * @param message Viewport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.geo.type.Viewport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Viewport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Viewport
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a LatLng. */
        interface ILatLng {

            /** LatLng latitude */
            latitude?: (number|null);

            /** LatLng longitude */
            longitude?: (number|null);
        }

        /** Represents a LatLng. */
        class LatLng implements ILatLng {

            /**
             * Constructs a new LatLng.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILatLng);

            /** LatLng latitude. */
            public latitude: number;

            /** LatLng longitude. */
            public longitude: number;

            /**
             * Creates a new LatLng instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LatLng instance
             */
            public static create(properties?: google.type.ILatLng): google.type.LatLng;

            /**
             * Encodes the specified LatLng message. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LatLng message, length delimited. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LatLng message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.LatLng;

            /**
             * Decodes a LatLng message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.LatLng;

            /**
             * Verifies a LatLng message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LatLng message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LatLng
             */
            public static fromObject(object: { [k: string]: any }): google.type.LatLng;

            /**
             * Creates a plain object from a LatLng message. Also converts values to other types if specified.
             * @param message LatLng
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.LatLng, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LatLng to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LatLng
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /** Properties of a RoutingRule. */
        interface IRoutingRule {

            /** RoutingRule routingParameters */
            routingParameters?: (google.api.IRoutingParameter[]|null);
        }

        /** Represents a RoutingRule. */
        class RoutingRule implements IRoutingRule {

            /**
             * Constructs a new RoutingRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRoutingRule);

            /** RoutingRule routingParameters. */
            public routingParameters: google.api.IRoutingParameter[];

            /**
             * Creates a new RoutingRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoutingRule instance
             */
            public static create(properties?: google.api.IRoutingRule): google.api.RoutingRule;

            /**
             * Encodes the specified RoutingRule message. Does not implicitly {@link google.api.RoutingRule.verify|verify} messages.
             * @param message RoutingRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRoutingRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoutingRule message, length delimited. Does not implicitly {@link google.api.RoutingRule.verify|verify} messages.
             * @param message RoutingRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRoutingRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoutingRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoutingRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RoutingRule;

            /**
             * Decodes a RoutingRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoutingRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RoutingRule;

            /**
             * Verifies a RoutingRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoutingRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoutingRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.RoutingRule;

            /**
             * Creates a plain object from a RoutingRule message. Also converts values to other types if specified.
             * @param message RoutingRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RoutingRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoutingRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RoutingRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RoutingParameter. */
        interface IRoutingParameter {

            /** RoutingParameter field */
            field?: (string|null);

            /** RoutingParameter pathTemplate */
            pathTemplate?: (string|null);
        }

        /** Represents a RoutingParameter. */
        class RoutingParameter implements IRoutingParameter {

            /**
             * Constructs a new RoutingParameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRoutingParameter);

            /** RoutingParameter field. */
            public field: string;

            /** RoutingParameter pathTemplate. */
            public pathTemplate: string;

            /**
             * Creates a new RoutingParameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoutingParameter instance
             */
            public static create(properties?: google.api.IRoutingParameter): google.api.RoutingParameter;

            /**
             * Encodes the specified RoutingParameter message. Does not implicitly {@link google.api.RoutingParameter.verify|verify} messages.
             * @param message RoutingParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRoutingParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoutingParameter message, length delimited. Does not implicitly {@link google.api.RoutingParameter.verify|verify} messages.
             * @param message RoutingParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRoutingParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoutingParameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoutingParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RoutingParameter;

            /**
             * Decodes a RoutingParameter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoutingParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RoutingParameter;

            /**
             * Verifies a RoutingParameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoutingParameter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoutingParameter
             */
            public static fromObject(object: { [k: string]: any }): google.api.RoutingParameter;

            /**
             * Creates a plain object from a RoutingParameter message. Also converts values to other types if specified.
             * @param message RoutingParameter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RoutingParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoutingParameter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RoutingParameter
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** MethodOptions .google.api.routing */
            ".google.api.routing"?: (google.api.IRoutingRule|null);
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

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|Buffer|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|Buffer|string);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
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
}
