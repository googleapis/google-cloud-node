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
//

function main(parent, latitude, longitude, duration, date, amount, maxLoad) {
  // [START cloudoptimization_v1_generated_FleetRouting_BatchOptimizeTours_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Target project and location to make a call.
   *  Format: `projects/{project-id}/locations/{location-id}`.
   *  If no location is specified, a region will be chosen automatically.
   */
  // const parent = 'abc123'
  /**
   *  Required. Input/Output information each purchase model, such as file paths and data
   *  formats.
   */
  // const modelConfigs = 1234

  // Imports the Optimization library
  const {FleetRoutingClient} = require('@google-cloud/optimization').v1;

  // Instantiates a client
  const optimizationClient = new FleetRoutingClient();

  async function callBatchOptimizeTours() {
    // Construct request
    const request = {
      parent,
      timeout: {
        seconds: '1000',
      },
      model: {
        shipments: [
          {
            deliveries: [
              {
                arrivalLocation: {
                  latitude,
                  longitude,
                },
                duration: {
                  seconds: duration,
                },
                timeWindows: [
                  {
                    endTime: new Date(date),
                    startTime: new Date(date),
                  },
                ],
              },
            ],
            loadDemands: {
              weight: {
                amount,
              },
            },
            pickups: [
              {
                arrivalLocation: {
                  latitude,
                  longitude,
                },
                duration: {
                  seconds: duration,
                },
                timeWindows: [
                  {
                    endTime: new Date(date),
                    startTime: new Date(date),
                  },
                ],
              },
            ],
          },
          {
            deliveries: [
              {
                arrivalLocation: {
                  latitude,
                  longitude,
                },
                duration: {
                  seconds: duration,
                },
                timeWindows: [
                  {
                    endTime: new Date(date),
                    startTime: new Date(date),
                  },
                ],
              },
            ],
            loadDemands: {
              weight: {
                amount,
              },
            },
            pickups: [
              {
                arrivalLocation: {
                  latitude,
                  longitude,
                },
                duration: {
                  seconds: duration,
                },
                timeWindows: [
                  {
                    endTime: new Date(date),
                    startTime: new Date(date),
                  },
                ],
              },
            ],
          },
        ],
        vehicles: [
          {
            loadLimits: {
              weight: {
                maxLoad,
              },
            },
            endLocation: {
              latitude,
              longitude,
            },
            startLocation: {
              latitude,
              longitude,
            },
          },
          {
            loadLimits: {
              weight: {
                maxLoad,
              },
            },
            endLocation: {
              latitude,
              longitude,
            },
            startLocation: {
              latitude,
              longitude,
            },
          },
        ],
      },
    };

    // Run request
    const [operation] = await optimizationClient.optimizeTours(request);
    console.log(operation);
  }

  callBatchOptimizeTours();
  // [END cloudoptimization_v1_generated_FleetRouting_BatchOptimizeTours_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
