# Pinned Spanner protobuf source

This directory contains the `apiv1` and required `internal/version.go` source
from `cloud.google.com/go/spanner v1.60.0`. It exists so vtprotobuf-generated
`UnmarshalVT` methods can be compiled in the same Go package as the pinned
`spannerpb` message types. Only generated decoding was added; the Spanner
client dependency was not upgraded.

The generated `*_vtproto.pb.go` files use
`protoc-gen-go-vtproto v0.6.1-0.20240319094008-0393e58bdf10` with
`features=unmarshal` against the descriptors embedded in v1.60.0.
