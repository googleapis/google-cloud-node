# benchwrapper

benchwrapper is a lightweight gRPC server that wraps the Spanner library for
benchmarking purposes.

## Running

```
cd nodejs-spanner
npm install
export SPANNER_EMULATOR_HOST=localhost:8080
npm run benchwrapper -- --port 8081
```