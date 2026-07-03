fn main() {
    tonic_build::configure()
        .build_server(false)
        .compile_protos(
            &[
                "../../node_modules/google-proto-files/google/rpc/status.proto",
                "../../node_modules/google-proto-files/google/spanner/v1/spanner.proto",
                "../../node_modules/google-proto-files/google/spanner/v1/transaction.proto",
                "../../node_modules/google-proto-files/google/spanner/v1/result_set.proto",
                "../../node_modules/google-proto-files/google/spanner/v1/type.proto",
            ],
            &["../../node_modules/google-proto-files"],
        )
        .expect("Failed to compile Spanner gRPC protobuf definitions");
}
