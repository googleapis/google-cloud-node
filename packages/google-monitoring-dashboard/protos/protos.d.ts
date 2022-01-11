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

    /** Namespace monitoring. */
    namespace monitoring {

        /** Namespace dashboard. */
        namespace dashboard {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AlertChart. */
                interface IAlertChart {

                    /** AlertChart name */
                    name?: (string|null);
                }

                /** Represents an AlertChart. */
                class AlertChart implements IAlertChart {

                    /**
                     * Constructs a new AlertChart.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IAlertChart);

                    /** AlertChart name. */
                    public name: string;

                    /**
                     * Creates a new AlertChart instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AlertChart instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IAlertChart): google.monitoring.dashboard.v1.AlertChart;

                    /**
                     * Encodes the specified AlertChart message. Does not implicitly {@link google.monitoring.dashboard.v1.AlertChart.verify|verify} messages.
                     * @param message AlertChart message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IAlertChart, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AlertChart message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.AlertChart.verify|verify} messages.
                     * @param message AlertChart message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IAlertChart, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AlertChart message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AlertChart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.AlertChart;

                    /**
                     * Decodes an AlertChart message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AlertChart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.AlertChart;

                    /**
                     * Verifies an AlertChart message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AlertChart message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AlertChart
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.AlertChart;

                    /**
                     * Creates a plain object from an AlertChart message. Also converts values to other types if specified.
                     * @param message AlertChart
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.AlertChart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AlertChart to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Aggregation. */
                interface IAggregation {

                    /** Aggregation alignmentPeriod */
                    alignmentPeriod?: (google.protobuf.IDuration|null);

                    /** Aggregation perSeriesAligner */
                    perSeriesAligner?: (google.monitoring.dashboard.v1.Aggregation.Aligner|keyof typeof google.monitoring.dashboard.v1.Aggregation.Aligner|null);

                    /** Aggregation crossSeriesReducer */
                    crossSeriesReducer?: (google.monitoring.dashboard.v1.Aggregation.Reducer|keyof typeof google.monitoring.dashboard.v1.Aggregation.Reducer|null);

                    /** Aggregation groupByFields */
                    groupByFields?: (string[]|null);
                }

                /** Represents an Aggregation. */
                class Aggregation implements IAggregation {

                    /**
                     * Constructs a new Aggregation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IAggregation);

                    /** Aggregation alignmentPeriod. */
                    public alignmentPeriod?: (google.protobuf.IDuration|null);

                    /** Aggregation perSeriesAligner. */
                    public perSeriesAligner: (google.monitoring.dashboard.v1.Aggregation.Aligner|keyof typeof google.monitoring.dashboard.v1.Aggregation.Aligner);

                    /** Aggregation crossSeriesReducer. */
                    public crossSeriesReducer: (google.monitoring.dashboard.v1.Aggregation.Reducer|keyof typeof google.monitoring.dashboard.v1.Aggregation.Reducer);

                    /** Aggregation groupByFields. */
                    public groupByFields: string[];

                    /**
                     * Creates a new Aggregation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Aggregation instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IAggregation): google.monitoring.dashboard.v1.Aggregation;

                    /**
                     * Encodes the specified Aggregation message. Does not implicitly {@link google.monitoring.dashboard.v1.Aggregation.verify|verify} messages.
                     * @param message Aggregation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Aggregation message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.Aggregation.verify|verify} messages.
                     * @param message Aggregation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Aggregation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Aggregation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.Aggregation;

                    /**
                     * Decodes an Aggregation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Aggregation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.Aggregation;

                    /**
                     * Verifies an Aggregation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Aggregation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Aggregation
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.Aggregation;

                    /**
                     * Creates a plain object from an Aggregation message. Also converts values to other types if specified.
                     * @param message Aggregation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.Aggregation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Aggregation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Aggregation {

                    /** Aligner enum. */
                    enum Aligner {
                        ALIGN_NONE = 0,
                        ALIGN_DELTA = 1,
                        ALIGN_RATE = 2,
                        ALIGN_INTERPOLATE = 3,
                        ALIGN_NEXT_OLDER = 4,
                        ALIGN_MIN = 10,
                        ALIGN_MAX = 11,
                        ALIGN_MEAN = 12,
                        ALIGN_COUNT = 13,
                        ALIGN_SUM = 14,
                        ALIGN_STDDEV = 15,
                        ALIGN_COUNT_TRUE = 16,
                        ALIGN_COUNT_FALSE = 24,
                        ALIGN_FRACTION_TRUE = 17,
                        ALIGN_PERCENTILE_99 = 18,
                        ALIGN_PERCENTILE_95 = 19,
                        ALIGN_PERCENTILE_50 = 20,
                        ALIGN_PERCENTILE_05 = 21,
                        ALIGN_PERCENT_CHANGE = 23
                    }

                    /** Reducer enum. */
                    enum Reducer {
                        REDUCE_NONE = 0,
                        REDUCE_MEAN = 1,
                        REDUCE_MIN = 2,
                        REDUCE_MAX = 3,
                        REDUCE_SUM = 4,
                        REDUCE_STDDEV = 5,
                        REDUCE_COUNT = 6,
                        REDUCE_COUNT_TRUE = 7,
                        REDUCE_COUNT_FALSE = 15,
                        REDUCE_FRACTION_TRUE = 8,
                        REDUCE_PERCENTILE_99 = 9,
                        REDUCE_PERCENTILE_95 = 10,
                        REDUCE_PERCENTILE_50 = 11,
                        REDUCE_PERCENTILE_05 = 12
                    }
                }

                /** Properties of a PickTimeSeriesFilter. */
                interface IPickTimeSeriesFilter {

                    /** PickTimeSeriesFilter rankingMethod */
                    rankingMethod?: (google.monitoring.dashboard.v1.PickTimeSeriesFilter.Method|keyof typeof google.monitoring.dashboard.v1.PickTimeSeriesFilter.Method|null);

                    /** PickTimeSeriesFilter numTimeSeries */
                    numTimeSeries?: (number|null);

                    /** PickTimeSeriesFilter direction */
                    direction?: (google.monitoring.dashboard.v1.PickTimeSeriesFilter.Direction|keyof typeof google.monitoring.dashboard.v1.PickTimeSeriesFilter.Direction|null);
                }

                /** Represents a PickTimeSeriesFilter. */
                class PickTimeSeriesFilter implements IPickTimeSeriesFilter {

                    /**
                     * Constructs a new PickTimeSeriesFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IPickTimeSeriesFilter);

                    /** PickTimeSeriesFilter rankingMethod. */
                    public rankingMethod: (google.monitoring.dashboard.v1.PickTimeSeriesFilter.Method|keyof typeof google.monitoring.dashboard.v1.PickTimeSeriesFilter.Method);

                    /** PickTimeSeriesFilter numTimeSeries. */
                    public numTimeSeries: number;

                    /** PickTimeSeriesFilter direction. */
                    public direction: (google.monitoring.dashboard.v1.PickTimeSeriesFilter.Direction|keyof typeof google.monitoring.dashboard.v1.PickTimeSeriesFilter.Direction);

                    /**
                     * Creates a new PickTimeSeriesFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PickTimeSeriesFilter instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IPickTimeSeriesFilter): google.monitoring.dashboard.v1.PickTimeSeriesFilter;

                    /**
                     * Encodes the specified PickTimeSeriesFilter message. Does not implicitly {@link google.monitoring.dashboard.v1.PickTimeSeriesFilter.verify|verify} messages.
                     * @param message PickTimeSeriesFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IPickTimeSeriesFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PickTimeSeriesFilter message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.PickTimeSeriesFilter.verify|verify} messages.
                     * @param message PickTimeSeriesFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IPickTimeSeriesFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PickTimeSeriesFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PickTimeSeriesFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.PickTimeSeriesFilter;

                    /**
                     * Decodes a PickTimeSeriesFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PickTimeSeriesFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.PickTimeSeriesFilter;

                    /**
                     * Verifies a PickTimeSeriesFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PickTimeSeriesFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PickTimeSeriesFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.PickTimeSeriesFilter;

                    /**
                     * Creates a plain object from a PickTimeSeriesFilter message. Also converts values to other types if specified.
                     * @param message PickTimeSeriesFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.PickTimeSeriesFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PickTimeSeriesFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PickTimeSeriesFilter {

                    /** Method enum. */
                    enum Method {
                        METHOD_UNSPECIFIED = 0,
                        METHOD_MEAN = 1,
                        METHOD_MAX = 2,
                        METHOD_MIN = 3,
                        METHOD_SUM = 4,
                        METHOD_LATEST = 5
                    }

                    /** Direction enum. */
                    enum Direction {
                        DIRECTION_UNSPECIFIED = 0,
                        TOP = 1,
                        BOTTOM = 2
                    }
                }

                /** Properties of a StatisticalTimeSeriesFilter. */
                interface IStatisticalTimeSeriesFilter {

                    /** StatisticalTimeSeriesFilter rankingMethod */
                    rankingMethod?: (google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter.Method|keyof typeof google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter.Method|null);

                    /** StatisticalTimeSeriesFilter numTimeSeries */
                    numTimeSeries?: (number|null);
                }

                /** Represents a StatisticalTimeSeriesFilter. */
                class StatisticalTimeSeriesFilter implements IStatisticalTimeSeriesFilter {

                    /**
                     * Constructs a new StatisticalTimeSeriesFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IStatisticalTimeSeriesFilter);

                    /** StatisticalTimeSeriesFilter rankingMethod. */
                    public rankingMethod: (google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter.Method|keyof typeof google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter.Method);

                    /** StatisticalTimeSeriesFilter numTimeSeries. */
                    public numTimeSeries: number;

                    /**
                     * Creates a new StatisticalTimeSeriesFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StatisticalTimeSeriesFilter instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IStatisticalTimeSeriesFilter): google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter;

                    /**
                     * Encodes the specified StatisticalTimeSeriesFilter message. Does not implicitly {@link google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter.verify|verify} messages.
                     * @param message StatisticalTimeSeriesFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IStatisticalTimeSeriesFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StatisticalTimeSeriesFilter message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter.verify|verify} messages.
                     * @param message StatisticalTimeSeriesFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IStatisticalTimeSeriesFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StatisticalTimeSeriesFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StatisticalTimeSeriesFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter;

                    /**
                     * Decodes a StatisticalTimeSeriesFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StatisticalTimeSeriesFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter;

                    /**
                     * Verifies a StatisticalTimeSeriesFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StatisticalTimeSeriesFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StatisticalTimeSeriesFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter;

                    /**
                     * Creates a plain object from a StatisticalTimeSeriesFilter message. Also converts values to other types if specified.
                     * @param message StatisticalTimeSeriesFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.StatisticalTimeSeriesFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StatisticalTimeSeriesFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace StatisticalTimeSeriesFilter {

                    /** Method enum. */
                    enum Method {
                        METHOD_UNSPECIFIED = 0,
                        METHOD_CLUSTER_OUTLIER = 1
                    }
                }

                /** Properties of a Dashboard. */
                interface IDashboard {

                    /** Dashboard name */
                    name?: (string|null);

                    /** Dashboard displayName */
                    displayName?: (string|null);

                    /** Dashboard etag */
                    etag?: (string|null);

                    /** Dashboard gridLayout */
                    gridLayout?: (google.monitoring.dashboard.v1.IGridLayout|null);

                    /** Dashboard mosaicLayout */
                    mosaicLayout?: (google.monitoring.dashboard.v1.IMosaicLayout|null);

                    /** Dashboard rowLayout */
                    rowLayout?: (google.monitoring.dashboard.v1.IRowLayout|null);

                    /** Dashboard columnLayout */
                    columnLayout?: (google.monitoring.dashboard.v1.IColumnLayout|null);
                }

                /** Represents a Dashboard. */
                class Dashboard implements IDashboard {

                    /**
                     * Constructs a new Dashboard.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IDashboard);

                    /** Dashboard name. */
                    public name: string;

                    /** Dashboard displayName. */
                    public displayName: string;

                    /** Dashboard etag. */
                    public etag: string;

                    /** Dashboard gridLayout. */
                    public gridLayout?: (google.monitoring.dashboard.v1.IGridLayout|null);

                    /** Dashboard mosaicLayout. */
                    public mosaicLayout?: (google.monitoring.dashboard.v1.IMosaicLayout|null);

                    /** Dashboard rowLayout. */
                    public rowLayout?: (google.monitoring.dashboard.v1.IRowLayout|null);

                    /** Dashboard columnLayout. */
                    public columnLayout?: (google.monitoring.dashboard.v1.IColumnLayout|null);

                    /** Dashboard layout. */
                    public layout?: ("gridLayout"|"mosaicLayout"|"rowLayout"|"columnLayout");

                    /**
                     * Creates a new Dashboard instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Dashboard instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IDashboard): google.monitoring.dashboard.v1.Dashboard;

                    /**
                     * Encodes the specified Dashboard message. Does not implicitly {@link google.monitoring.dashboard.v1.Dashboard.verify|verify} messages.
                     * @param message Dashboard message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IDashboard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Dashboard message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.Dashboard.verify|verify} messages.
                     * @param message Dashboard message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IDashboard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Dashboard message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dashboard
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.Dashboard;

                    /**
                     * Decodes a Dashboard message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Dashboard
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.Dashboard;

                    /**
                     * Verifies a Dashboard message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Dashboard message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Dashboard
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.Dashboard;

                    /**
                     * Creates a plain object from a Dashboard message. Also converts values to other types if specified.
                     * @param message Dashboard
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.Dashboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Dashboard to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GridLayout. */
                interface IGridLayout {

                    /** GridLayout columns */
                    columns?: (number|Long|string|null);

                    /** GridLayout widgets */
                    widgets?: (google.monitoring.dashboard.v1.IWidget[]|null);
                }

                /** Represents a GridLayout. */
                class GridLayout implements IGridLayout {

                    /**
                     * Constructs a new GridLayout.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IGridLayout);

                    /** GridLayout columns. */
                    public columns: (number|Long|string);

                    /** GridLayout widgets. */
                    public widgets: google.monitoring.dashboard.v1.IWidget[];

                    /**
                     * Creates a new GridLayout instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GridLayout instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IGridLayout): google.monitoring.dashboard.v1.GridLayout;

                    /**
                     * Encodes the specified GridLayout message. Does not implicitly {@link google.monitoring.dashboard.v1.GridLayout.verify|verify} messages.
                     * @param message GridLayout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IGridLayout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GridLayout message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.GridLayout.verify|verify} messages.
                     * @param message GridLayout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IGridLayout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GridLayout message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GridLayout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.GridLayout;

                    /**
                     * Decodes a GridLayout message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GridLayout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.GridLayout;

                    /**
                     * Verifies a GridLayout message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GridLayout message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GridLayout
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.GridLayout;

                    /**
                     * Creates a plain object from a GridLayout message. Also converts values to other types if specified.
                     * @param message GridLayout
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.GridLayout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GridLayout to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MosaicLayout. */
                interface IMosaicLayout {

                    /** MosaicLayout columns */
                    columns?: (number|null);

                    /** MosaicLayout tiles */
                    tiles?: (google.monitoring.dashboard.v1.MosaicLayout.ITile[]|null);
                }

                /** Represents a MosaicLayout. */
                class MosaicLayout implements IMosaicLayout {

                    /**
                     * Constructs a new MosaicLayout.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IMosaicLayout);

                    /** MosaicLayout columns. */
                    public columns: number;

                    /** MosaicLayout tiles. */
                    public tiles: google.monitoring.dashboard.v1.MosaicLayout.ITile[];

                    /**
                     * Creates a new MosaicLayout instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MosaicLayout instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IMosaicLayout): google.monitoring.dashboard.v1.MosaicLayout;

                    /**
                     * Encodes the specified MosaicLayout message. Does not implicitly {@link google.monitoring.dashboard.v1.MosaicLayout.verify|verify} messages.
                     * @param message MosaicLayout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IMosaicLayout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MosaicLayout message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.MosaicLayout.verify|verify} messages.
                     * @param message MosaicLayout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IMosaicLayout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MosaicLayout message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MosaicLayout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.MosaicLayout;

                    /**
                     * Decodes a MosaicLayout message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MosaicLayout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.MosaicLayout;

                    /**
                     * Verifies a MosaicLayout message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MosaicLayout message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MosaicLayout
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.MosaicLayout;

                    /**
                     * Creates a plain object from a MosaicLayout message. Also converts values to other types if specified.
                     * @param message MosaicLayout
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.MosaicLayout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MosaicLayout to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MosaicLayout {

                    /** Properties of a Tile. */
                    interface ITile {

                        /** Tile xPos */
                        xPos?: (number|null);

                        /** Tile yPos */
                        yPos?: (number|null);

                        /** Tile width */
                        width?: (number|null);

                        /** Tile height */
                        height?: (number|null);

                        /** Tile widget */
                        widget?: (google.monitoring.dashboard.v1.IWidget|null);
                    }

                    /** Represents a Tile. */
                    class Tile implements ITile {

                        /**
                         * Constructs a new Tile.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.dashboard.v1.MosaicLayout.ITile);

                        /** Tile xPos. */
                        public xPos: number;

                        /** Tile yPos. */
                        public yPos: number;

                        /** Tile width. */
                        public width: number;

                        /** Tile height. */
                        public height: number;

                        /** Tile widget. */
                        public widget?: (google.monitoring.dashboard.v1.IWidget|null);

                        /**
                         * Creates a new Tile instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Tile instance
                         */
                        public static create(properties?: google.monitoring.dashboard.v1.MosaicLayout.ITile): google.monitoring.dashboard.v1.MosaicLayout.Tile;

                        /**
                         * Encodes the specified Tile message. Does not implicitly {@link google.monitoring.dashboard.v1.MosaicLayout.Tile.verify|verify} messages.
                         * @param message Tile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.dashboard.v1.MosaicLayout.ITile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Tile message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.MosaicLayout.Tile.verify|verify} messages.
                         * @param message Tile message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.dashboard.v1.MosaicLayout.ITile, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Tile message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Tile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.MosaicLayout.Tile;

                        /**
                         * Decodes a Tile message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Tile
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.MosaicLayout.Tile;

                        /**
                         * Verifies a Tile message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Tile message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Tile
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.MosaicLayout.Tile;

                        /**
                         * Creates a plain object from a Tile message. Also converts values to other types if specified.
                         * @param message Tile
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.dashboard.v1.MosaicLayout.Tile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Tile to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a RowLayout. */
                interface IRowLayout {

                    /** RowLayout rows */
                    rows?: (google.monitoring.dashboard.v1.RowLayout.IRow[]|null);
                }

                /** Represents a RowLayout. */
                class RowLayout implements IRowLayout {

                    /**
                     * Constructs a new RowLayout.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IRowLayout);

                    /** RowLayout rows. */
                    public rows: google.monitoring.dashboard.v1.RowLayout.IRow[];

                    /**
                     * Creates a new RowLayout instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RowLayout instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IRowLayout): google.monitoring.dashboard.v1.RowLayout;

                    /**
                     * Encodes the specified RowLayout message. Does not implicitly {@link google.monitoring.dashboard.v1.RowLayout.verify|verify} messages.
                     * @param message RowLayout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IRowLayout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RowLayout message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.RowLayout.verify|verify} messages.
                     * @param message RowLayout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IRowLayout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RowLayout message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RowLayout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.RowLayout;

                    /**
                     * Decodes a RowLayout message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RowLayout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.RowLayout;

                    /**
                     * Verifies a RowLayout message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RowLayout message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RowLayout
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.RowLayout;

                    /**
                     * Creates a plain object from a RowLayout message. Also converts values to other types if specified.
                     * @param message RowLayout
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.RowLayout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RowLayout to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RowLayout {

                    /** Properties of a Row. */
                    interface IRow {

                        /** Row weight */
                        weight?: (number|Long|string|null);

                        /** Row widgets */
                        widgets?: (google.monitoring.dashboard.v1.IWidget[]|null);
                    }

                    /** Represents a Row. */
                    class Row implements IRow {

                        /**
                         * Constructs a new Row.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.dashboard.v1.RowLayout.IRow);

                        /** Row weight. */
                        public weight: (number|Long|string);

                        /** Row widgets. */
                        public widgets: google.monitoring.dashboard.v1.IWidget[];

                        /**
                         * Creates a new Row instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Row instance
                         */
                        public static create(properties?: google.monitoring.dashboard.v1.RowLayout.IRow): google.monitoring.dashboard.v1.RowLayout.Row;

                        /**
                         * Encodes the specified Row message. Does not implicitly {@link google.monitoring.dashboard.v1.RowLayout.Row.verify|verify} messages.
                         * @param message Row message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.dashboard.v1.RowLayout.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Row message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.RowLayout.Row.verify|verify} messages.
                         * @param message Row message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.dashboard.v1.RowLayout.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Row message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Row
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.RowLayout.Row;

                        /**
                         * Decodes a Row message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Row
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.RowLayout.Row;

                        /**
                         * Verifies a Row message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Row message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Row
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.RowLayout.Row;

                        /**
                         * Creates a plain object from a Row message. Also converts values to other types if specified.
                         * @param message Row
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.dashboard.v1.RowLayout.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Row to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ColumnLayout. */
                interface IColumnLayout {

                    /** ColumnLayout columns */
                    columns?: (google.monitoring.dashboard.v1.ColumnLayout.IColumn[]|null);
                }

                /** Represents a ColumnLayout. */
                class ColumnLayout implements IColumnLayout {

                    /**
                     * Constructs a new ColumnLayout.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IColumnLayout);

                    /** ColumnLayout columns. */
                    public columns: google.monitoring.dashboard.v1.ColumnLayout.IColumn[];

                    /**
                     * Creates a new ColumnLayout instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ColumnLayout instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IColumnLayout): google.monitoring.dashboard.v1.ColumnLayout;

                    /**
                     * Encodes the specified ColumnLayout message. Does not implicitly {@link google.monitoring.dashboard.v1.ColumnLayout.verify|verify} messages.
                     * @param message ColumnLayout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IColumnLayout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ColumnLayout message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.ColumnLayout.verify|verify} messages.
                     * @param message ColumnLayout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IColumnLayout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ColumnLayout message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ColumnLayout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.ColumnLayout;

                    /**
                     * Decodes a ColumnLayout message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ColumnLayout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.ColumnLayout;

                    /**
                     * Verifies a ColumnLayout message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ColumnLayout message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ColumnLayout
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.ColumnLayout;

                    /**
                     * Creates a plain object from a ColumnLayout message. Also converts values to other types if specified.
                     * @param message ColumnLayout
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.ColumnLayout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ColumnLayout to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ColumnLayout {

                    /** Properties of a Column. */
                    interface IColumn {

                        /** Column weight */
                        weight?: (number|Long|string|null);

                        /** Column widgets */
                        widgets?: (google.monitoring.dashboard.v1.IWidget[]|null);
                    }

                    /** Represents a Column. */
                    class Column implements IColumn {

                        /**
                         * Constructs a new Column.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.dashboard.v1.ColumnLayout.IColumn);

                        /** Column weight. */
                        public weight: (number|Long|string);

                        /** Column widgets. */
                        public widgets: google.monitoring.dashboard.v1.IWidget[];

                        /**
                         * Creates a new Column instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Column instance
                         */
                        public static create(properties?: google.monitoring.dashboard.v1.ColumnLayout.IColumn): google.monitoring.dashboard.v1.ColumnLayout.Column;

                        /**
                         * Encodes the specified Column message. Does not implicitly {@link google.monitoring.dashboard.v1.ColumnLayout.Column.verify|verify} messages.
                         * @param message Column message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.dashboard.v1.ColumnLayout.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Column message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.ColumnLayout.Column.verify|verify} messages.
                         * @param message Column message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.dashboard.v1.ColumnLayout.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Column message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.ColumnLayout.Column;

                        /**
                         * Decodes a Column message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.ColumnLayout.Column;

                        /**
                         * Verifies a Column message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Column message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Column
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.ColumnLayout.Column;

                        /**
                         * Creates a plain object from a Column message. Also converts values to other types if specified.
                         * @param message Column
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.dashboard.v1.ColumnLayout.Column, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Column to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Widget. */
                interface IWidget {

                    /** Widget title */
                    title?: (string|null);

                    /** Widget xyChart */
                    xyChart?: (google.monitoring.dashboard.v1.IXyChart|null);

                    /** Widget scorecard */
                    scorecard?: (google.monitoring.dashboard.v1.IScorecard|null);

                    /** Widget text */
                    text?: (google.monitoring.dashboard.v1.IText|null);

                    /** Widget blank */
                    blank?: (google.protobuf.IEmpty|null);

                    /** Widget alertChart */
                    alertChart?: (google.monitoring.dashboard.v1.IAlertChart|null);
                }

                /** Represents a Widget. */
                class Widget implements IWidget {

                    /**
                     * Constructs a new Widget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IWidget);

                    /** Widget title. */
                    public title: string;

                    /** Widget xyChart. */
                    public xyChart?: (google.monitoring.dashboard.v1.IXyChart|null);

                    /** Widget scorecard. */
                    public scorecard?: (google.monitoring.dashboard.v1.IScorecard|null);

                    /** Widget text. */
                    public text?: (google.monitoring.dashboard.v1.IText|null);

                    /** Widget blank. */
                    public blank?: (google.protobuf.IEmpty|null);

                    /** Widget alertChart. */
                    public alertChart?: (google.monitoring.dashboard.v1.IAlertChart|null);

                    /** Widget content. */
                    public content?: ("xyChart"|"scorecard"|"text"|"blank"|"alertChart");

                    /**
                     * Creates a new Widget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Widget instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IWidget): google.monitoring.dashboard.v1.Widget;

                    /**
                     * Encodes the specified Widget message. Does not implicitly {@link google.monitoring.dashboard.v1.Widget.verify|verify} messages.
                     * @param message Widget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IWidget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Widget message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.Widget.verify|verify} messages.
                     * @param message Widget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IWidget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Widget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Widget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.Widget;

                    /**
                     * Decodes a Widget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Widget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.Widget;

                    /**
                     * Verifies a Widget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Widget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Widget
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.Widget;

                    /**
                     * Creates a plain object from a Widget message. Also converts values to other types if specified.
                     * @param message Widget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.Widget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Widget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Scorecard. */
                interface IScorecard {

                    /** Scorecard timeSeriesQuery */
                    timeSeriesQuery?: (google.monitoring.dashboard.v1.ITimeSeriesQuery|null);

                    /** Scorecard gaugeView */
                    gaugeView?: (google.monitoring.dashboard.v1.Scorecard.IGaugeView|null);

                    /** Scorecard sparkChartView */
                    sparkChartView?: (google.monitoring.dashboard.v1.Scorecard.ISparkChartView|null);

                    /** Scorecard thresholds */
                    thresholds?: (google.monitoring.dashboard.v1.IThreshold[]|null);
                }

                /** Represents a Scorecard. */
                class Scorecard implements IScorecard {

                    /**
                     * Constructs a new Scorecard.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IScorecard);

                    /** Scorecard timeSeriesQuery. */
                    public timeSeriesQuery?: (google.monitoring.dashboard.v1.ITimeSeriesQuery|null);

                    /** Scorecard gaugeView. */
                    public gaugeView?: (google.monitoring.dashboard.v1.Scorecard.IGaugeView|null);

                    /** Scorecard sparkChartView. */
                    public sparkChartView?: (google.monitoring.dashboard.v1.Scorecard.ISparkChartView|null);

                    /** Scorecard thresholds. */
                    public thresholds: google.monitoring.dashboard.v1.IThreshold[];

                    /** Scorecard dataView. */
                    public dataView?: ("gaugeView"|"sparkChartView");

                    /**
                     * Creates a new Scorecard instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Scorecard instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IScorecard): google.monitoring.dashboard.v1.Scorecard;

                    /**
                     * Encodes the specified Scorecard message. Does not implicitly {@link google.monitoring.dashboard.v1.Scorecard.verify|verify} messages.
                     * @param message Scorecard message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IScorecard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Scorecard message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.Scorecard.verify|verify} messages.
                     * @param message Scorecard message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IScorecard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Scorecard message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Scorecard
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.Scorecard;

                    /**
                     * Decodes a Scorecard message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Scorecard
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.Scorecard;

                    /**
                     * Verifies a Scorecard message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Scorecard message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Scorecard
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.Scorecard;

                    /**
                     * Creates a plain object from a Scorecard message. Also converts values to other types if specified.
                     * @param message Scorecard
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.Scorecard, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Scorecard to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Scorecard {

                    /** Properties of a GaugeView. */
                    interface IGaugeView {

                        /** GaugeView lowerBound */
                        lowerBound?: (number|null);

                        /** GaugeView upperBound */
                        upperBound?: (number|null);
                    }

                    /** Represents a GaugeView. */
                    class GaugeView implements IGaugeView {

                        /**
                         * Constructs a new GaugeView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.dashboard.v1.Scorecard.IGaugeView);

                        /** GaugeView lowerBound. */
                        public lowerBound: number;

                        /** GaugeView upperBound. */
                        public upperBound: number;

                        /**
                         * Creates a new GaugeView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GaugeView instance
                         */
                        public static create(properties?: google.monitoring.dashboard.v1.Scorecard.IGaugeView): google.monitoring.dashboard.v1.Scorecard.GaugeView;

                        /**
                         * Encodes the specified GaugeView message. Does not implicitly {@link google.monitoring.dashboard.v1.Scorecard.GaugeView.verify|verify} messages.
                         * @param message GaugeView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.dashboard.v1.Scorecard.IGaugeView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GaugeView message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.Scorecard.GaugeView.verify|verify} messages.
                         * @param message GaugeView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.dashboard.v1.Scorecard.IGaugeView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GaugeView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GaugeView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.Scorecard.GaugeView;

                        /**
                         * Decodes a GaugeView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GaugeView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.Scorecard.GaugeView;

                        /**
                         * Verifies a GaugeView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GaugeView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GaugeView
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.Scorecard.GaugeView;

                        /**
                         * Creates a plain object from a GaugeView message. Also converts values to other types if specified.
                         * @param message GaugeView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.dashboard.v1.Scorecard.GaugeView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GaugeView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SparkChartView. */
                    interface ISparkChartView {

                        /** SparkChartView sparkChartType */
                        sparkChartType?: (google.monitoring.dashboard.v1.SparkChartType|keyof typeof google.monitoring.dashboard.v1.SparkChartType|null);

                        /** SparkChartView minAlignmentPeriod */
                        minAlignmentPeriod?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a SparkChartView. */
                    class SparkChartView implements ISparkChartView {

                        /**
                         * Constructs a new SparkChartView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.dashboard.v1.Scorecard.ISparkChartView);

                        /** SparkChartView sparkChartType. */
                        public sparkChartType: (google.monitoring.dashboard.v1.SparkChartType|keyof typeof google.monitoring.dashboard.v1.SparkChartType);

                        /** SparkChartView minAlignmentPeriod. */
                        public minAlignmentPeriod?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new SparkChartView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SparkChartView instance
                         */
                        public static create(properties?: google.monitoring.dashboard.v1.Scorecard.ISparkChartView): google.monitoring.dashboard.v1.Scorecard.SparkChartView;

                        /**
                         * Encodes the specified SparkChartView message. Does not implicitly {@link google.monitoring.dashboard.v1.Scorecard.SparkChartView.verify|verify} messages.
                         * @param message SparkChartView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.dashboard.v1.Scorecard.ISparkChartView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SparkChartView message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.Scorecard.SparkChartView.verify|verify} messages.
                         * @param message SparkChartView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.dashboard.v1.Scorecard.ISparkChartView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SparkChartView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SparkChartView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.Scorecard.SparkChartView;

                        /**
                         * Decodes a SparkChartView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SparkChartView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.Scorecard.SparkChartView;

                        /**
                         * Verifies a SparkChartView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SparkChartView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SparkChartView
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.Scorecard.SparkChartView;

                        /**
                         * Creates a plain object from a SparkChartView message. Also converts values to other types if specified.
                         * @param message SparkChartView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.dashboard.v1.Scorecard.SparkChartView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SparkChartView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a TimeSeriesQuery. */
                interface ITimeSeriesQuery {

                    /** TimeSeriesQuery timeSeriesFilter */
                    timeSeriesFilter?: (google.monitoring.dashboard.v1.ITimeSeriesFilter|null);

                    /** TimeSeriesQuery timeSeriesFilterRatio */
                    timeSeriesFilterRatio?: (google.monitoring.dashboard.v1.ITimeSeriesFilterRatio|null);

                    /** TimeSeriesQuery timeSeriesQueryLanguage */
                    timeSeriesQueryLanguage?: (string|null);

                    /** TimeSeriesQuery unitOverride */
                    unitOverride?: (string|null);
                }

                /** Represents a TimeSeriesQuery. */
                class TimeSeriesQuery implements ITimeSeriesQuery {

                    /**
                     * Constructs a new TimeSeriesQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.ITimeSeriesQuery);

                    /** TimeSeriesQuery timeSeriesFilter. */
                    public timeSeriesFilter?: (google.monitoring.dashboard.v1.ITimeSeriesFilter|null);

                    /** TimeSeriesQuery timeSeriesFilterRatio. */
                    public timeSeriesFilterRatio?: (google.monitoring.dashboard.v1.ITimeSeriesFilterRatio|null);

                    /** TimeSeriesQuery timeSeriesQueryLanguage. */
                    public timeSeriesQueryLanguage?: (string|null);

                    /** TimeSeriesQuery unitOverride. */
                    public unitOverride: string;

                    /** TimeSeriesQuery source. */
                    public source?: ("timeSeriesFilter"|"timeSeriesFilterRatio"|"timeSeriesQueryLanguage");

                    /**
                     * Creates a new TimeSeriesQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeSeriesQuery instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.ITimeSeriesQuery): google.monitoring.dashboard.v1.TimeSeriesQuery;

                    /**
                     * Encodes the specified TimeSeriesQuery message. Does not implicitly {@link google.monitoring.dashboard.v1.TimeSeriesQuery.verify|verify} messages.
                     * @param message TimeSeriesQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.ITimeSeriesQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeSeriesQuery message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.TimeSeriesQuery.verify|verify} messages.
                     * @param message TimeSeriesQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.ITimeSeriesQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeSeriesQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeSeriesQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.TimeSeriesQuery;

                    /**
                     * Decodes a TimeSeriesQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeSeriesQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.TimeSeriesQuery;

                    /**
                     * Verifies a TimeSeriesQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeSeriesQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeSeriesQuery
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.TimeSeriesQuery;

                    /**
                     * Creates a plain object from a TimeSeriesQuery message. Also converts values to other types if specified.
                     * @param message TimeSeriesQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.TimeSeriesQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeSeriesQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TimeSeriesFilter. */
                interface ITimeSeriesFilter {

                    /** TimeSeriesFilter filter */
                    filter?: (string|null);

                    /** TimeSeriesFilter aggregation */
                    aggregation?: (google.monitoring.dashboard.v1.IAggregation|null);

                    /** TimeSeriesFilter secondaryAggregation */
                    secondaryAggregation?: (google.monitoring.dashboard.v1.IAggregation|null);

                    /** TimeSeriesFilter pickTimeSeriesFilter */
                    pickTimeSeriesFilter?: (google.monitoring.dashboard.v1.IPickTimeSeriesFilter|null);

                    /** TimeSeriesFilter statisticalTimeSeriesFilter */
                    statisticalTimeSeriesFilter?: (google.monitoring.dashboard.v1.IStatisticalTimeSeriesFilter|null);
                }

                /** Represents a TimeSeriesFilter. */
                class TimeSeriesFilter implements ITimeSeriesFilter {

                    /**
                     * Constructs a new TimeSeriesFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.ITimeSeriesFilter);

                    /** TimeSeriesFilter filter. */
                    public filter: string;

                    /** TimeSeriesFilter aggregation. */
                    public aggregation?: (google.monitoring.dashboard.v1.IAggregation|null);

                    /** TimeSeriesFilter secondaryAggregation. */
                    public secondaryAggregation?: (google.monitoring.dashboard.v1.IAggregation|null);

                    /** TimeSeriesFilter pickTimeSeriesFilter. */
                    public pickTimeSeriesFilter?: (google.monitoring.dashboard.v1.IPickTimeSeriesFilter|null);

                    /** TimeSeriesFilter statisticalTimeSeriesFilter. */
                    public statisticalTimeSeriesFilter?: (google.monitoring.dashboard.v1.IStatisticalTimeSeriesFilter|null);

                    /** TimeSeriesFilter outputFilter. */
                    public outputFilter?: ("pickTimeSeriesFilter"|"statisticalTimeSeriesFilter");

                    /**
                     * Creates a new TimeSeriesFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeSeriesFilter instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.ITimeSeriesFilter): google.monitoring.dashboard.v1.TimeSeriesFilter;

                    /**
                     * Encodes the specified TimeSeriesFilter message. Does not implicitly {@link google.monitoring.dashboard.v1.TimeSeriesFilter.verify|verify} messages.
                     * @param message TimeSeriesFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.ITimeSeriesFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeSeriesFilter message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.TimeSeriesFilter.verify|verify} messages.
                     * @param message TimeSeriesFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.ITimeSeriesFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeSeriesFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeSeriesFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.TimeSeriesFilter;

                    /**
                     * Decodes a TimeSeriesFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeSeriesFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.TimeSeriesFilter;

                    /**
                     * Verifies a TimeSeriesFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeSeriesFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeSeriesFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.TimeSeriesFilter;

                    /**
                     * Creates a plain object from a TimeSeriesFilter message. Also converts values to other types if specified.
                     * @param message TimeSeriesFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.TimeSeriesFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeSeriesFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TimeSeriesFilterRatio. */
                interface ITimeSeriesFilterRatio {

                    /** TimeSeriesFilterRatio numerator */
                    numerator?: (google.monitoring.dashboard.v1.TimeSeriesFilterRatio.IRatioPart|null);

                    /** TimeSeriesFilterRatio denominator */
                    denominator?: (google.monitoring.dashboard.v1.TimeSeriesFilterRatio.IRatioPart|null);

                    /** TimeSeriesFilterRatio secondaryAggregation */
                    secondaryAggregation?: (google.monitoring.dashboard.v1.IAggregation|null);

                    /** TimeSeriesFilterRatio pickTimeSeriesFilter */
                    pickTimeSeriesFilter?: (google.monitoring.dashboard.v1.IPickTimeSeriesFilter|null);

                    /** TimeSeriesFilterRatio statisticalTimeSeriesFilter */
                    statisticalTimeSeriesFilter?: (google.monitoring.dashboard.v1.IStatisticalTimeSeriesFilter|null);
                }

                /** Represents a TimeSeriesFilterRatio. */
                class TimeSeriesFilterRatio implements ITimeSeriesFilterRatio {

                    /**
                     * Constructs a new TimeSeriesFilterRatio.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.ITimeSeriesFilterRatio);

                    /** TimeSeriesFilterRatio numerator. */
                    public numerator?: (google.monitoring.dashboard.v1.TimeSeriesFilterRatio.IRatioPart|null);

                    /** TimeSeriesFilterRatio denominator. */
                    public denominator?: (google.monitoring.dashboard.v1.TimeSeriesFilterRatio.IRatioPart|null);

                    /** TimeSeriesFilterRatio secondaryAggregation. */
                    public secondaryAggregation?: (google.monitoring.dashboard.v1.IAggregation|null);

                    /** TimeSeriesFilterRatio pickTimeSeriesFilter. */
                    public pickTimeSeriesFilter?: (google.monitoring.dashboard.v1.IPickTimeSeriesFilter|null);

                    /** TimeSeriesFilterRatio statisticalTimeSeriesFilter. */
                    public statisticalTimeSeriesFilter?: (google.monitoring.dashboard.v1.IStatisticalTimeSeriesFilter|null);

                    /** TimeSeriesFilterRatio outputFilter. */
                    public outputFilter?: ("pickTimeSeriesFilter"|"statisticalTimeSeriesFilter");

                    /**
                     * Creates a new TimeSeriesFilterRatio instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeSeriesFilterRatio instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.ITimeSeriesFilterRatio): google.monitoring.dashboard.v1.TimeSeriesFilterRatio;

                    /**
                     * Encodes the specified TimeSeriesFilterRatio message. Does not implicitly {@link google.monitoring.dashboard.v1.TimeSeriesFilterRatio.verify|verify} messages.
                     * @param message TimeSeriesFilterRatio message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.ITimeSeriesFilterRatio, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeSeriesFilterRatio message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.TimeSeriesFilterRatio.verify|verify} messages.
                     * @param message TimeSeriesFilterRatio message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.ITimeSeriesFilterRatio, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeSeriesFilterRatio message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeSeriesFilterRatio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.TimeSeriesFilterRatio;

                    /**
                     * Decodes a TimeSeriesFilterRatio message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeSeriesFilterRatio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.TimeSeriesFilterRatio;

                    /**
                     * Verifies a TimeSeriesFilterRatio message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeSeriesFilterRatio message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeSeriesFilterRatio
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.TimeSeriesFilterRatio;

                    /**
                     * Creates a plain object from a TimeSeriesFilterRatio message. Also converts values to other types if specified.
                     * @param message TimeSeriesFilterRatio
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.TimeSeriesFilterRatio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeSeriesFilterRatio to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TimeSeriesFilterRatio {

                    /** Properties of a RatioPart. */
                    interface IRatioPart {

                        /** RatioPart filter */
                        filter?: (string|null);

                        /** RatioPart aggregation */
                        aggregation?: (google.monitoring.dashboard.v1.IAggregation|null);
                    }

                    /** Represents a RatioPart. */
                    class RatioPart implements IRatioPart {

                        /**
                         * Constructs a new RatioPart.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.dashboard.v1.TimeSeriesFilterRatio.IRatioPart);

                        /** RatioPart filter. */
                        public filter: string;

                        /** RatioPart aggregation. */
                        public aggregation?: (google.monitoring.dashboard.v1.IAggregation|null);

                        /**
                         * Creates a new RatioPart instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RatioPart instance
                         */
                        public static create(properties?: google.monitoring.dashboard.v1.TimeSeriesFilterRatio.IRatioPart): google.monitoring.dashboard.v1.TimeSeriesFilterRatio.RatioPart;

                        /**
                         * Encodes the specified RatioPart message. Does not implicitly {@link google.monitoring.dashboard.v1.TimeSeriesFilterRatio.RatioPart.verify|verify} messages.
                         * @param message RatioPart message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.dashboard.v1.TimeSeriesFilterRatio.IRatioPart, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RatioPart message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.TimeSeriesFilterRatio.RatioPart.verify|verify} messages.
                         * @param message RatioPart message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.dashboard.v1.TimeSeriesFilterRatio.IRatioPart, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RatioPart message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RatioPart
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.TimeSeriesFilterRatio.RatioPart;

                        /**
                         * Decodes a RatioPart message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RatioPart
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.TimeSeriesFilterRatio.RatioPart;

                        /**
                         * Verifies a RatioPart message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RatioPart message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RatioPart
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.TimeSeriesFilterRatio.RatioPart;

                        /**
                         * Creates a plain object from a RatioPart message. Also converts values to other types if specified.
                         * @param message RatioPart
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.dashboard.v1.TimeSeriesFilterRatio.RatioPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RatioPart to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Threshold. */
                interface IThreshold {

                    /** Threshold label */
                    label?: (string|null);

                    /** Threshold value */
                    value?: (number|null);

                    /** Threshold color */
                    color?: (google.monitoring.dashboard.v1.Threshold.Color|keyof typeof google.monitoring.dashboard.v1.Threshold.Color|null);

                    /** Threshold direction */
                    direction?: (google.monitoring.dashboard.v1.Threshold.Direction|keyof typeof google.monitoring.dashboard.v1.Threshold.Direction|null);
                }

                /** Represents a Threshold. */
                class Threshold implements IThreshold {

                    /**
                     * Constructs a new Threshold.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IThreshold);

                    /** Threshold label. */
                    public label: string;

                    /** Threshold value. */
                    public value: number;

                    /** Threshold color. */
                    public color: (google.monitoring.dashboard.v1.Threshold.Color|keyof typeof google.monitoring.dashboard.v1.Threshold.Color);

                    /** Threshold direction. */
                    public direction: (google.monitoring.dashboard.v1.Threshold.Direction|keyof typeof google.monitoring.dashboard.v1.Threshold.Direction);

                    /**
                     * Creates a new Threshold instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Threshold instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IThreshold): google.monitoring.dashboard.v1.Threshold;

                    /**
                     * Encodes the specified Threshold message. Does not implicitly {@link google.monitoring.dashboard.v1.Threshold.verify|verify} messages.
                     * @param message Threshold message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Threshold message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.Threshold.verify|verify} messages.
                     * @param message Threshold message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Threshold message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Threshold
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.Threshold;

                    /**
                     * Decodes a Threshold message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Threshold
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.Threshold;

                    /**
                     * Verifies a Threshold message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Threshold message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Threshold
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.Threshold;

                    /**
                     * Creates a plain object from a Threshold message. Also converts values to other types if specified.
                     * @param message Threshold
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.Threshold, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Threshold to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Threshold {

                    /** Color enum. */
                    enum Color {
                        COLOR_UNSPECIFIED = 0,
                        YELLOW = 4,
                        RED = 6
                    }

                    /** Direction enum. */
                    enum Direction {
                        DIRECTION_UNSPECIFIED = 0,
                        ABOVE = 1,
                        BELOW = 2
                    }
                }

                /** SparkChartType enum. */
                enum SparkChartType {
                    SPARK_CHART_TYPE_UNSPECIFIED = 0,
                    SPARK_LINE = 1,
                    SPARK_BAR = 2
                }

                /** Properties of a Text. */
                interface IText {

                    /** Text content */
                    content?: (string|null);

                    /** Text format */
                    format?: (google.monitoring.dashboard.v1.Text.Format|keyof typeof google.monitoring.dashboard.v1.Text.Format|null);
                }

                /** Represents a Text. */
                class Text implements IText {

                    /**
                     * Constructs a new Text.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IText);

                    /** Text content. */
                    public content: string;

                    /** Text format. */
                    public format: (google.monitoring.dashboard.v1.Text.Format|keyof typeof google.monitoring.dashboard.v1.Text.Format);

                    /**
                     * Creates a new Text instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Text instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IText): google.monitoring.dashboard.v1.Text;

                    /**
                     * Encodes the specified Text message. Does not implicitly {@link google.monitoring.dashboard.v1.Text.verify|verify} messages.
                     * @param message Text message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IText, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Text message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.Text.verify|verify} messages.
                     * @param message Text message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IText, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Text message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Text
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.Text;

                    /**
                     * Decodes a Text message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Text
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.Text;

                    /**
                     * Verifies a Text message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Text message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Text
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.Text;

                    /**
                     * Creates a plain object from a Text message. Also converts values to other types if specified.
                     * @param message Text
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.Text, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Text to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Text {

                    /** Format enum. */
                    enum Format {
                        FORMAT_UNSPECIFIED = 0,
                        MARKDOWN = 1,
                        RAW = 2
                    }
                }

                /** Properties of a XyChart. */
                interface IXyChart {

                    /** XyChart dataSets */
                    dataSets?: (google.monitoring.dashboard.v1.XyChart.IDataSet[]|null);

                    /** XyChart timeshiftDuration */
                    timeshiftDuration?: (google.protobuf.IDuration|null);

                    /** XyChart thresholds */
                    thresholds?: (google.monitoring.dashboard.v1.IThreshold[]|null);

                    /** XyChart xAxis */
                    xAxis?: (google.monitoring.dashboard.v1.XyChart.IAxis|null);

                    /** XyChart yAxis */
                    yAxis?: (google.monitoring.dashboard.v1.XyChart.IAxis|null);

                    /** XyChart chartOptions */
                    chartOptions?: (google.monitoring.dashboard.v1.IChartOptions|null);
                }

                /** Represents a XyChart. */
                class XyChart implements IXyChart {

                    /**
                     * Constructs a new XyChart.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IXyChart);

                    /** XyChart dataSets. */
                    public dataSets: google.monitoring.dashboard.v1.XyChart.IDataSet[];

                    /** XyChart timeshiftDuration. */
                    public timeshiftDuration?: (google.protobuf.IDuration|null);

                    /** XyChart thresholds. */
                    public thresholds: google.monitoring.dashboard.v1.IThreshold[];

                    /** XyChart xAxis. */
                    public xAxis?: (google.monitoring.dashboard.v1.XyChart.IAxis|null);

                    /** XyChart yAxis. */
                    public yAxis?: (google.monitoring.dashboard.v1.XyChart.IAxis|null);

                    /** XyChart chartOptions. */
                    public chartOptions?: (google.monitoring.dashboard.v1.IChartOptions|null);

                    /**
                     * Creates a new XyChart instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns XyChart instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IXyChart): google.monitoring.dashboard.v1.XyChart;

                    /**
                     * Encodes the specified XyChart message. Does not implicitly {@link google.monitoring.dashboard.v1.XyChart.verify|verify} messages.
                     * @param message XyChart message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IXyChart, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified XyChart message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.XyChart.verify|verify} messages.
                     * @param message XyChart message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IXyChart, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a XyChart message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns XyChart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.XyChart;

                    /**
                     * Decodes a XyChart message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns XyChart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.XyChart;

                    /**
                     * Verifies a XyChart message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a XyChart message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns XyChart
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.XyChart;

                    /**
                     * Creates a plain object from a XyChart message. Also converts values to other types if specified.
                     * @param message XyChart
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.XyChart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this XyChart to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace XyChart {

                    /** Properties of a DataSet. */
                    interface IDataSet {

                        /** DataSet timeSeriesQuery */
                        timeSeriesQuery?: (google.monitoring.dashboard.v1.ITimeSeriesQuery|null);

                        /** DataSet plotType */
                        plotType?: (google.monitoring.dashboard.v1.XyChart.DataSet.PlotType|keyof typeof google.monitoring.dashboard.v1.XyChart.DataSet.PlotType|null);

                        /** DataSet legendTemplate */
                        legendTemplate?: (string|null);

                        /** DataSet minAlignmentPeriod */
                        minAlignmentPeriod?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a DataSet. */
                    class DataSet implements IDataSet {

                        /**
                         * Constructs a new DataSet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.dashboard.v1.XyChart.IDataSet);

                        /** DataSet timeSeriesQuery. */
                        public timeSeriesQuery?: (google.monitoring.dashboard.v1.ITimeSeriesQuery|null);

                        /** DataSet plotType. */
                        public plotType: (google.monitoring.dashboard.v1.XyChart.DataSet.PlotType|keyof typeof google.monitoring.dashboard.v1.XyChart.DataSet.PlotType);

                        /** DataSet legendTemplate. */
                        public legendTemplate: string;

                        /** DataSet minAlignmentPeriod. */
                        public minAlignmentPeriod?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new DataSet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DataSet instance
                         */
                        public static create(properties?: google.monitoring.dashboard.v1.XyChart.IDataSet): google.monitoring.dashboard.v1.XyChart.DataSet;

                        /**
                         * Encodes the specified DataSet message. Does not implicitly {@link google.monitoring.dashboard.v1.XyChart.DataSet.verify|verify} messages.
                         * @param message DataSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.dashboard.v1.XyChart.IDataSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DataSet message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.XyChart.DataSet.verify|verify} messages.
                         * @param message DataSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.dashboard.v1.XyChart.IDataSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DataSet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DataSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.XyChart.DataSet;

                        /**
                         * Decodes a DataSet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DataSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.XyChart.DataSet;

                        /**
                         * Verifies a DataSet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DataSet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DataSet
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.XyChart.DataSet;

                        /**
                         * Creates a plain object from a DataSet message. Also converts values to other types if specified.
                         * @param message DataSet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.dashboard.v1.XyChart.DataSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DataSet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DataSet {

                        /** PlotType enum. */
                        enum PlotType {
                            PLOT_TYPE_UNSPECIFIED = 0,
                            LINE = 1,
                            STACKED_AREA = 2,
                            STACKED_BAR = 3,
                            HEATMAP = 4
                        }
                    }

                    /** Properties of an Axis. */
                    interface IAxis {

                        /** Axis label */
                        label?: (string|null);

                        /** Axis scale */
                        scale?: (google.monitoring.dashboard.v1.XyChart.Axis.Scale|keyof typeof google.monitoring.dashboard.v1.XyChart.Axis.Scale|null);
                    }

                    /** Represents an Axis. */
                    class Axis implements IAxis {

                        /**
                         * Constructs a new Axis.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.dashboard.v1.XyChart.IAxis);

                        /** Axis label. */
                        public label: string;

                        /** Axis scale. */
                        public scale: (google.monitoring.dashboard.v1.XyChart.Axis.Scale|keyof typeof google.monitoring.dashboard.v1.XyChart.Axis.Scale);

                        /**
                         * Creates a new Axis instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Axis instance
                         */
                        public static create(properties?: google.monitoring.dashboard.v1.XyChart.IAxis): google.monitoring.dashboard.v1.XyChart.Axis;

                        /**
                         * Encodes the specified Axis message. Does not implicitly {@link google.monitoring.dashboard.v1.XyChart.Axis.verify|verify} messages.
                         * @param message Axis message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.dashboard.v1.XyChart.IAxis, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Axis message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.XyChart.Axis.verify|verify} messages.
                         * @param message Axis message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.dashboard.v1.XyChart.IAxis, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Axis message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Axis
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.XyChart.Axis;

                        /**
                         * Decodes an Axis message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Axis
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.XyChart.Axis;

                        /**
                         * Verifies an Axis message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Axis message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Axis
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.XyChart.Axis;

                        /**
                         * Creates a plain object from an Axis message. Also converts values to other types if specified.
                         * @param message Axis
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.dashboard.v1.XyChart.Axis, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Axis to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Axis {

                        /** Scale enum. */
                        enum Scale {
                            SCALE_UNSPECIFIED = 0,
                            LINEAR = 1,
                            LOG10 = 2
                        }
                    }
                }

                /** Properties of a ChartOptions. */
                interface IChartOptions {

                    /** ChartOptions mode */
                    mode?: (google.monitoring.dashboard.v1.ChartOptions.Mode|keyof typeof google.monitoring.dashboard.v1.ChartOptions.Mode|null);
                }

                /** Represents a ChartOptions. */
                class ChartOptions implements IChartOptions {

                    /**
                     * Constructs a new ChartOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IChartOptions);

                    /** ChartOptions mode. */
                    public mode: (google.monitoring.dashboard.v1.ChartOptions.Mode|keyof typeof google.monitoring.dashboard.v1.ChartOptions.Mode);

                    /**
                     * Creates a new ChartOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChartOptions instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IChartOptions): google.monitoring.dashboard.v1.ChartOptions;

                    /**
                     * Encodes the specified ChartOptions message. Does not implicitly {@link google.monitoring.dashboard.v1.ChartOptions.verify|verify} messages.
                     * @param message ChartOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IChartOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChartOptions message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.ChartOptions.verify|verify} messages.
                     * @param message ChartOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IChartOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChartOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChartOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.ChartOptions;

                    /**
                     * Decodes a ChartOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChartOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.ChartOptions;

                    /**
                     * Verifies a ChartOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChartOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChartOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.ChartOptions;

                    /**
                     * Creates a plain object from a ChartOptions message. Also converts values to other types if specified.
                     * @param message ChartOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.ChartOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChartOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ChartOptions {

                    /** Mode enum. */
                    enum Mode {
                        MODE_UNSPECIFIED = 0,
                        COLOR = 1,
                        X_RAY = 2,
                        STATS = 3
                    }
                }

                /** Represents a DashboardsService */
                class DashboardsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DashboardsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DashboardsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DashboardsService;

                    /**
                     * Calls CreateDashboard.
                     * @param request CreateDashboardRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Dashboard
                     */
                    public createDashboard(request: google.monitoring.dashboard.v1.ICreateDashboardRequest, callback: google.monitoring.dashboard.v1.DashboardsService.CreateDashboardCallback): void;

                    /**
                     * Calls CreateDashboard.
                     * @param request CreateDashboardRequest message or plain object
                     * @returns Promise
                     */
                    public createDashboard(request: google.monitoring.dashboard.v1.ICreateDashboardRequest): Promise<google.monitoring.dashboard.v1.Dashboard>;

                    /**
                     * Calls ListDashboards.
                     * @param request ListDashboardsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDashboardsResponse
                     */
                    public listDashboards(request: google.monitoring.dashboard.v1.IListDashboardsRequest, callback: google.monitoring.dashboard.v1.DashboardsService.ListDashboardsCallback): void;

                    /**
                     * Calls ListDashboards.
                     * @param request ListDashboardsRequest message or plain object
                     * @returns Promise
                     */
                    public listDashboards(request: google.monitoring.dashboard.v1.IListDashboardsRequest): Promise<google.monitoring.dashboard.v1.ListDashboardsResponse>;

                    /**
                     * Calls GetDashboard.
                     * @param request GetDashboardRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Dashboard
                     */
                    public getDashboard(request: google.monitoring.dashboard.v1.IGetDashboardRequest, callback: google.monitoring.dashboard.v1.DashboardsService.GetDashboardCallback): void;

                    /**
                     * Calls GetDashboard.
                     * @param request GetDashboardRequest message or plain object
                     * @returns Promise
                     */
                    public getDashboard(request: google.monitoring.dashboard.v1.IGetDashboardRequest): Promise<google.monitoring.dashboard.v1.Dashboard>;

                    /**
                     * Calls DeleteDashboard.
                     * @param request DeleteDashboardRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteDashboard(request: google.monitoring.dashboard.v1.IDeleteDashboardRequest, callback: google.monitoring.dashboard.v1.DashboardsService.DeleteDashboardCallback): void;

                    /**
                     * Calls DeleteDashboard.
                     * @param request DeleteDashboardRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDashboard(request: google.monitoring.dashboard.v1.IDeleteDashboardRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdateDashboard.
                     * @param request UpdateDashboardRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Dashboard
                     */
                    public updateDashboard(request: google.monitoring.dashboard.v1.IUpdateDashboardRequest, callback: google.monitoring.dashboard.v1.DashboardsService.UpdateDashboardCallback): void;

                    /**
                     * Calls UpdateDashboard.
                     * @param request UpdateDashboardRequest message or plain object
                     * @returns Promise
                     */
                    public updateDashboard(request: google.monitoring.dashboard.v1.IUpdateDashboardRequest): Promise<google.monitoring.dashboard.v1.Dashboard>;
                }

                namespace DashboardsService {

                    /**
                     * Callback as used by {@link google.monitoring.dashboard.v1.DashboardsService#createDashboard}.
                     * @param error Error, if any
                     * @param [response] Dashboard
                     */
                    type CreateDashboardCallback = (error: (Error|null), response?: google.monitoring.dashboard.v1.Dashboard) => void;

                    /**
                     * Callback as used by {@link google.monitoring.dashboard.v1.DashboardsService#listDashboards}.
                     * @param error Error, if any
                     * @param [response] ListDashboardsResponse
                     */
                    type ListDashboardsCallback = (error: (Error|null), response?: google.monitoring.dashboard.v1.ListDashboardsResponse) => void;

                    /**
                     * Callback as used by {@link google.monitoring.dashboard.v1.DashboardsService#getDashboard}.
                     * @param error Error, if any
                     * @param [response] Dashboard
                     */
                    type GetDashboardCallback = (error: (Error|null), response?: google.monitoring.dashboard.v1.Dashboard) => void;

                    /**
                     * Callback as used by {@link google.monitoring.dashboard.v1.DashboardsService#deleteDashboard}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteDashboardCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.monitoring.dashboard.v1.DashboardsService#updateDashboard}.
                     * @param error Error, if any
                     * @param [response] Dashboard
                     */
                    type UpdateDashboardCallback = (error: (Error|null), response?: google.monitoring.dashboard.v1.Dashboard) => void;
                }

                /** Properties of a CreateDashboardRequest. */
                interface ICreateDashboardRequest {

                    /** CreateDashboardRequest parent */
                    parent?: (string|null);

                    /** CreateDashboardRequest dashboard */
                    dashboard?: (google.monitoring.dashboard.v1.IDashboard|null);

                    /** CreateDashboardRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateDashboardRequest. */
                class CreateDashboardRequest implements ICreateDashboardRequest {

                    /**
                     * Constructs a new CreateDashboardRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.ICreateDashboardRequest);

                    /** CreateDashboardRequest parent. */
                    public parent: string;

                    /** CreateDashboardRequest dashboard. */
                    public dashboard?: (google.monitoring.dashboard.v1.IDashboard|null);

                    /** CreateDashboardRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateDashboardRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDashboardRequest instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.ICreateDashboardRequest): google.monitoring.dashboard.v1.CreateDashboardRequest;

                    /**
                     * Encodes the specified CreateDashboardRequest message. Does not implicitly {@link google.monitoring.dashboard.v1.CreateDashboardRequest.verify|verify} messages.
                     * @param message CreateDashboardRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.ICreateDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDashboardRequest message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.CreateDashboardRequest.verify|verify} messages.
                     * @param message CreateDashboardRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.ICreateDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDashboardRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.CreateDashboardRequest;

                    /**
                     * Decodes a CreateDashboardRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.CreateDashboardRequest;

                    /**
                     * Verifies a CreateDashboardRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDashboardRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDashboardRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.CreateDashboardRequest;

                    /**
                     * Creates a plain object from a CreateDashboardRequest message. Also converts values to other types if specified.
                     * @param message CreateDashboardRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.CreateDashboardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDashboardRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDashboardsRequest. */
                interface IListDashboardsRequest {

                    /** ListDashboardsRequest parent */
                    parent?: (string|null);

                    /** ListDashboardsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDashboardsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDashboardsRequest. */
                class ListDashboardsRequest implements IListDashboardsRequest {

                    /**
                     * Constructs a new ListDashboardsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IListDashboardsRequest);

                    /** ListDashboardsRequest parent. */
                    public parent: string;

                    /** ListDashboardsRequest pageSize. */
                    public pageSize: number;

                    /** ListDashboardsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDashboardsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDashboardsRequest instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IListDashboardsRequest): google.monitoring.dashboard.v1.ListDashboardsRequest;

                    /**
                     * Encodes the specified ListDashboardsRequest message. Does not implicitly {@link google.monitoring.dashboard.v1.ListDashboardsRequest.verify|verify} messages.
                     * @param message ListDashboardsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IListDashboardsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDashboardsRequest message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.ListDashboardsRequest.verify|verify} messages.
                     * @param message ListDashboardsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IListDashboardsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDashboardsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDashboardsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.ListDashboardsRequest;

                    /**
                     * Decodes a ListDashboardsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDashboardsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.ListDashboardsRequest;

                    /**
                     * Verifies a ListDashboardsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDashboardsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDashboardsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.ListDashboardsRequest;

                    /**
                     * Creates a plain object from a ListDashboardsRequest message. Also converts values to other types if specified.
                     * @param message ListDashboardsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.ListDashboardsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDashboardsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDashboardsResponse. */
                interface IListDashboardsResponse {

                    /** ListDashboardsResponse dashboards */
                    dashboards?: (google.monitoring.dashboard.v1.IDashboard[]|null);

                    /** ListDashboardsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDashboardsResponse. */
                class ListDashboardsResponse implements IListDashboardsResponse {

                    /**
                     * Constructs a new ListDashboardsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IListDashboardsResponse);

                    /** ListDashboardsResponse dashboards. */
                    public dashboards: google.monitoring.dashboard.v1.IDashboard[];

                    /** ListDashboardsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDashboardsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDashboardsResponse instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IListDashboardsResponse): google.monitoring.dashboard.v1.ListDashboardsResponse;

                    /**
                     * Encodes the specified ListDashboardsResponse message. Does not implicitly {@link google.monitoring.dashboard.v1.ListDashboardsResponse.verify|verify} messages.
                     * @param message ListDashboardsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IListDashboardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDashboardsResponse message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.ListDashboardsResponse.verify|verify} messages.
                     * @param message ListDashboardsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IListDashboardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDashboardsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDashboardsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.ListDashboardsResponse;

                    /**
                     * Decodes a ListDashboardsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDashboardsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.ListDashboardsResponse;

                    /**
                     * Verifies a ListDashboardsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDashboardsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDashboardsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.ListDashboardsResponse;

                    /**
                     * Creates a plain object from a ListDashboardsResponse message. Also converts values to other types if specified.
                     * @param message ListDashboardsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.ListDashboardsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDashboardsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetDashboardRequest. */
                interface IGetDashboardRequest {

                    /** GetDashboardRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDashboardRequest. */
                class GetDashboardRequest implements IGetDashboardRequest {

                    /**
                     * Constructs a new GetDashboardRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IGetDashboardRequest);

                    /** GetDashboardRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDashboardRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDashboardRequest instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IGetDashboardRequest): google.monitoring.dashboard.v1.GetDashboardRequest;

                    /**
                     * Encodes the specified GetDashboardRequest message. Does not implicitly {@link google.monitoring.dashboard.v1.GetDashboardRequest.verify|verify} messages.
                     * @param message GetDashboardRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IGetDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDashboardRequest message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.GetDashboardRequest.verify|verify} messages.
                     * @param message GetDashboardRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IGetDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDashboardRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.GetDashboardRequest;

                    /**
                     * Decodes a GetDashboardRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.GetDashboardRequest;

                    /**
                     * Verifies a GetDashboardRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDashboardRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDashboardRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.GetDashboardRequest;

                    /**
                     * Creates a plain object from a GetDashboardRequest message. Also converts values to other types if specified.
                     * @param message GetDashboardRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.GetDashboardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDashboardRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteDashboardRequest. */
                interface IDeleteDashboardRequest {

                    /** DeleteDashboardRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteDashboardRequest. */
                class DeleteDashboardRequest implements IDeleteDashboardRequest {

                    /**
                     * Constructs a new DeleteDashboardRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IDeleteDashboardRequest);

                    /** DeleteDashboardRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteDashboardRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDashboardRequest instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IDeleteDashboardRequest): google.monitoring.dashboard.v1.DeleteDashboardRequest;

                    /**
                     * Encodes the specified DeleteDashboardRequest message. Does not implicitly {@link google.monitoring.dashboard.v1.DeleteDashboardRequest.verify|verify} messages.
                     * @param message DeleteDashboardRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IDeleteDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDashboardRequest message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.DeleteDashboardRequest.verify|verify} messages.
                     * @param message DeleteDashboardRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IDeleteDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDashboardRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.DeleteDashboardRequest;

                    /**
                     * Decodes a DeleteDashboardRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.DeleteDashboardRequest;

                    /**
                     * Verifies a DeleteDashboardRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDashboardRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDashboardRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.DeleteDashboardRequest;

                    /**
                     * Creates a plain object from a DeleteDashboardRequest message. Also converts values to other types if specified.
                     * @param message DeleteDashboardRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.DeleteDashboardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDashboardRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateDashboardRequest. */
                interface IUpdateDashboardRequest {

                    /** UpdateDashboardRequest dashboard */
                    dashboard?: (google.monitoring.dashboard.v1.IDashboard|null);

                    /** UpdateDashboardRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateDashboardRequest. */
                class UpdateDashboardRequest implements IUpdateDashboardRequest {

                    /**
                     * Constructs a new UpdateDashboardRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.dashboard.v1.IUpdateDashboardRequest);

                    /** UpdateDashboardRequest dashboard. */
                    public dashboard?: (google.monitoring.dashboard.v1.IDashboard|null);

                    /** UpdateDashboardRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateDashboardRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDashboardRequest instance
                     */
                    public static create(properties?: google.monitoring.dashboard.v1.IUpdateDashboardRequest): google.monitoring.dashboard.v1.UpdateDashboardRequest;

                    /**
                     * Encodes the specified UpdateDashboardRequest message. Does not implicitly {@link google.monitoring.dashboard.v1.UpdateDashboardRequest.verify|verify} messages.
                     * @param message UpdateDashboardRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.dashboard.v1.IUpdateDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDashboardRequest message, length delimited. Does not implicitly {@link google.monitoring.dashboard.v1.UpdateDashboardRequest.verify|verify} messages.
                     * @param message UpdateDashboardRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.dashboard.v1.IUpdateDashboardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDashboardRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.dashboard.v1.UpdateDashboardRequest;

                    /**
                     * Decodes an UpdateDashboardRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDashboardRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.dashboard.v1.UpdateDashboardRequest;

                    /**
                     * Verifies an UpdateDashboardRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDashboardRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDashboardRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.dashboard.v1.UpdateDashboardRequest;

                    /**
                     * Creates a plain object from an UpdateDashboardRequest message. Also converts values to other types if specified.
                     * @param message UpdateDashboardRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.dashboard.v1.UpdateDashboardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDashboardRequest to JSON.
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
            }
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
    }
}
