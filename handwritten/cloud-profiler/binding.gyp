{
  "targets": [
    {
      "target_name": "google_cloud_profiler",
      "sources": [ 
        "bindings/profiler.cc",
      ],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ],
      # TODO(#315): The following line suppresses compliation warnings
      # originating from v8 and node that appear when gcc 8 is used.
      # Once the warnings are fixed upstream, this line should be removed.
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
