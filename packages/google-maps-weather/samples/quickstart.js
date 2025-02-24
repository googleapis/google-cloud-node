// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

{
    "clientLibrary": {
        "name": "nodejs-weather",
        "version": "0.0.0",
        "language": "TYPESCRIPT",
        "apis": [
            {
                "id": "google.maps.weather.v1",
                "version": "v1"
            }
        ]
    },
    "snippets": [
        {
            "regionTag": "weather_v1_generated_Weather_LookupCurrentConditions_async",
            "title": "Weather lookupCurrentConditions Sample",
            "origin": "API_DEFINITION",
            "description": " Returns the current weather conditions at a given location.",
            "canonical": true,
            "file": "weather.lookup_current_conditions.js",
            "language": "JAVASCRIPT",
            "segments": [
                {
                    "start": 25,
                    "end": 65,
                    "type": "FULL"
                }
            ],
            "clientMethod": {
                "shortName": "LookupCurrentConditions",
                "fullName": "google.maps.weather.v1.Weather.LookupCurrentConditions",
                "async": true,
                "parameters": [
                    {
                        "name": "location",
                        "type": ".google.type.LatLng"
                    },
                    {
                        "name": "units_system",
                        "type": ".google.maps.weather.v1.UnitsSystem"
                    },
                    {
                        "name": "language_code",
                        "type": "TYPE_STRING"
                    }
                ],
                "resultType": ".google.maps.weather.v1.LookupCurrentConditionsResponse",
                "client": {
                    "shortName": "WeatherClient",
                    "fullName": "google.maps.weather.v1.WeatherClient"
                },
                "method": {
                    "shortName": "LookupCurrentConditions",
                    "fullName": "google.maps.weather.v1.Weather.LookupCurrentConditions",
                    "service": {
                        "shortName": "Weather",
                        "fullName": "google.maps.weather.v1.Weather"
                    }
                }
            }
        },
        {
            "regionTag": "weather_v1_generated_Weather_LookupForecastHours_async",
            "title": "Weather lookupForecastHours Sample",
            "origin": "API_DEFINITION",
            "description": " Returns up to 240 hours of hourly forecasts at a given location, starting from the current hour.",
            "canonical": true,
            "file": "weather.lookup_forecast_hours.js",
            "language": "JAVASCRIPT",
            "segments": [
                {
                    "start": 25,
                    "end": 84,
                    "type": "FULL"
                }
            ],
            "clientMethod": {
                "shortName": "LookupForecastHours",
                "fullName": "google.maps.weather.v1.Weather.LookupForecastHours",
                "async": true,
                "parameters": [
                    {
                        "name": "location",
                        "type": ".google.type.LatLng"
                    },
                    {
                        "name": "hours",
                        "type": "TYPE_INT32"
                    },
                    {
                        "name": "units_system",
                        "type": ".google.maps.weather.v1.UnitsSystem"
                    },
                    {
                        "name": "language_code",
                        "type": "TYPE_STRING"
                    },
                    {
                        "name": "page_size",
                        "type": "TYPE_INT32"
                    },
                    {
                        "name": "page_token",
                        "type": "TYPE_STRING"
                    }
                ],
                "resultType": ".google.maps.weather.v1.LookupForecastHoursResponse",
                "client": {
                    "shortName": "WeatherClient",
                    "fullName": "google.maps.weather.v1.WeatherClient"
                },
                "method": {
                    "shortName": "LookupForecastHours",
                    "fullName": "google.maps.weather.v1.Weather.LookupForecastHours",
                    "service": {
                        "shortName": "Weather",
                        "fullName": "google.maps.weather.v1.Weather"
                    }
                }
            }
        },
        {
            "regionTag": "weather_v1_generated_Weather_LookupForecastDays_async",
            "title": "Weather lookupForecastDays Sample",
            "origin": "API_DEFINITION",
            "description": " Returns up to 10 days of daily forecasts at a given location, starting from the current day.",
            "canonical": true,
            "file": "weather.lookup_forecast_days.js",
            "language": "JAVASCRIPT",
            "segments": [
                {
                    "start": 25,
                    "end": 83,
                    "type": "FULL"
                }
            ],
            "clientMethod": {
                "shortName": "LookupForecastDays",
                "fullName": "google.maps.weather.v1.Weather.LookupForecastDays",
                "async": true,
                "parameters": [
                    {
                        "name": "location",
                        "type": ".google.type.LatLng"
                    },
                    {
                        "name": "days",
                        "type": "TYPE_INT32"
                    },
                    {
                        "name": "units_system",
                        "type": ".google.maps.weather.v1.UnitsSystem"
                    },
                    {
                        "name": "language_code",
                        "type": "TYPE_STRING"
                    },
                    {
                        "name": "page_size",
                        "type": "TYPE_INT32"
                    },
                    {
                        "name": "page_token",
                        "type": "TYPE_STRING"
                    }
                ],
                "resultType": ".google.maps.weather.v1.LookupForecastDaysResponse",
                "client": {
                    "shortName": "WeatherClient",
                    "fullName": "google.maps.weather.v1.WeatherClient"
                },
                "method": {
                    "shortName": "LookupForecastDays",
                    "fullName": "google.maps.weather.v1.Weather.LookupForecastDays",
                    "service": {
                        "shortName": "Weather",
                        "fullName": "google.maps.weather.v1.Weather"
                    }
                }
            }
        },
        {
            "regionTag": "weather_v1_generated_Weather_LookupHistoryHours_async",
            "title": "Weather lookupHistoryHours Sample",
            "origin": "API_DEFINITION",
            "description": " Returns up to 24 hours of hourly historical weather data at a given location, starting from the last hour.",
            "canonical": true,
            "file": "weather.lookup_history_hours.js",
            "language": "JAVASCRIPT",
            "segments": [
                {
                    "start": 25,
                    "end": 84,
                    "type": "FULL"
                }
            ],
            "clientMethod": {
                "shortName": "LookupHistoryHours",
                "fullName": "google.maps.weather.v1.Weather.LookupHistoryHours",
                "async": true,
                "parameters": [
                    {
                        "name": "location",
                        "type": ".google.type.LatLng"
                    },
                    {
                        "name": "hours",
                        "type": "TYPE_INT32"
                    },
                    {
                        "name": "units_system",
                        "type": ".google.maps.weather.v1.UnitsSystem"
                    },
                    {
                        "name": "language_code",
                        "type": "TYPE_STRING"
                    },
                    {
                        "name": "page_size",
                        "type": "TYPE_INT32"
                    },
                    {
                        "name": "page_token",
                        "type": "TYPE_STRING"
                    }
                ],
                "resultType": ".google.maps.weather.v1.LookupHistoryHoursResponse",
                "client": {
                    "shortName": "WeatherClient",
                    "fullName": "google.maps.weather.v1.WeatherClient"
                },
                "method": {
                    "shortName": "LookupHistoryHours",
                    "fullName": "google.maps.weather.v1.Weather.LookupHistoryHours",
                    "service": {
                        "shortName": "Weather",
                        "fullName": "google.maps.weather.v1.Weather"
                    }
                }
            }
        }
    ]
}
