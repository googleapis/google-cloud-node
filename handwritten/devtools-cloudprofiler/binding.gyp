{
  "targets": [
    {
      "target_name": "cpu_profiler",
      "sources": [ "bindings/cpu-profiler.cc" ],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ]
    },
    {
      "target_name": "sampling_heap_profiler",
      "sources": [ "bindings/sampling-heap-profiler.cc" ],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ]
    },
    {
      "target_name": "statistics",
      "sources": [ "bindings/statistics.cc" ],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ]
    },
  ]
}
