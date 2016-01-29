{
  "targets": [
    {
      "target_name": "cpu_profiler",
      "sources": [ "src/cpu-profiler.cc" ],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ]
    },
    {
      "target_name": "sampling_heap_profiler",
      "sources": [ "src/sampling-heap-profiler.cc" ],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ]
    },
    {
      "target_name": "statistics",
      "sources": [ "src/statistics.cc" ],
      "include_dirs": [ "<!(node -e \"require('nan')\")" ]
    },
  ]
}
