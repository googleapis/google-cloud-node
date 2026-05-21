fn main() {
    // 1. Setup napi-rs build flags (must be called first)
    napi_build::setup();

    // 2. Compile Cloud Spanner client protos directly from cloned googleapis
    tonic_build::configure()
        .build_server(false)
        .compile_protos(
            &[
                "/tmp/googleapis/google/spanner/v1/spanner.proto",
                "/tmp/googleapis/google/spanner/v1/transaction.proto",
                "/tmp/googleapis/google/spanner/v1/result_set.proto",
            ],
            &["/tmp/googleapis"],
        )
        .expect("Failed to compile Spanner gRPC protobuf definitions");
}
