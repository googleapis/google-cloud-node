# benchwrapper

benchwrapper is a lightweight gRPC server that wraps the pubsub library for
bencharmking purposes.

## Running

```
cd nodejs-pubsub
npm install
export PUBSUB_EMULATOR_HOST=localhost:8080
npm run benchwrapper -- --port 50051
```
