fn main() {
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
