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
    },
    {
      "target_name": "spanner_ipc",
      "sources": [
        "spanner_ipc_napi.cc"
      ],
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      "cflags_cc": [ "-std=c++17", "-O3", "-pthread" ],
      "conditions": [
        ["OS=='win'", {
          "type": "none",
          "sources!": [ "spanner_ipc_napi.cc" ]
        }],
        ["OS=='linux'", {
          "libraries": [
            "-pthread",
            "-Wl,-z,nodelete"
          ]
        }],
        ["OS=='mac'", {
          "xcode_settings": {
            "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
            "CLANG_CXX_LANGUAGE_STANDARD": "c++17"
          }
        }]
      ]
    }
  ]
}
