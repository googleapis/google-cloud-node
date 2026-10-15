{
  "targets": [
    {
      "target_name": "spanner_go",
      "sources": [
        "spanner_go_napi.cc"
      ],
      "include_dirs": [
        "spanner-go"
      ],
      "libraries": [
        "-L<(module_root_dir)/spanner-go",
        "-lspanner_go",
        "-Wl,-rpath,<(module_root_dir)/spanner-go"
      ],
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      "cflags_cc": [ "-std=c++17", "-O3" ]
    }
  ]
}
