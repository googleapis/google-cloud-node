# benchwrapper

benchwrapper is a lightweight gRPC server that wraps the storage library for
bencharmking purposes.

## Running

```
cd nodejs-storage
npm install
export STORAGE_EMULATOR_HOST=localhost:8080
npm run benchwrapper -- --port 8081
```