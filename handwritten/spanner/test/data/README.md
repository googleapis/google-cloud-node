#### To generate singer.js and singer.d.ts file from singer.proto
```shell
npm install -g protobufjs-cli
cd test/data
pbjs -t static-module  -w commonjs -o singer.js singer.proto
pbts -o singer.d.ts singer.js
protoc --proto_path=. --include_imports --descriptor_set_out=descriptors.pb singer.proto
```
