{
  "targets": [
    {
      "target_name": "google_cloud_profiler",
      "sources": [ 
        "bindings/profiler.cc",
      ],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ],
      "cflags": [ "-Wno-cast-function-type" ]
    },
    {
      "target_name": "action_after_build",
      "type": "none",
      "dependencies": [ "<(module_name)" ],
      "copies": [
        {
          "files": [ "<(PRODUCT_DIR)/<(module_name).node" ],
          "destination": "<(module_path)"
        }
      ]
    },
  ]
}
