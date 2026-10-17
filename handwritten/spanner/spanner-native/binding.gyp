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
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      "cflags_cc": [ "-std=c++17", "-O3" ],
      "conditions": [
        ["OS=='linux'", {
          "libraries": [
            "-L<(module_root_dir)/spanner-go",
            "-lspanner_go",
            "-Wl,-rpath,'$$ORIGIN/../../spanner-go'",
            "-Wl,-z,nodelete"
          ]
        }],
        ["OS=='mac'", {
          "libraries": [
            "-L<(module_root_dir)/spanner-go",
            "-lspanner_go",
            "-Wl,-rpath,@loader_path/../../spanner-go"
          ]
        }]
      ]
    }
  ]
}
