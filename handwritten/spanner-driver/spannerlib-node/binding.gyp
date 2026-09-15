{
  'targets': [
    {
      'target_name': 'spanner_napi',
      'sources': [ 'src/cpp/addon.cc' ],
      'include_dirs': [
        '<!@(node -p "require(\'node-addon-api\').include")',
        './shared',
      ],
      'dependencies': [
        '<!(node -p "require(\'node-addon-api\').gyp")'
      ],
      'cflags!': [ '-fno-exceptions' ],
      'cflags_cc!': [ '-fno-exceptions' ],
      'xcode_settings': {
        'MACOSX_DEPLOYMENT_TARGET': '10.15',
        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
        'CLANG_CXX_LIBRARY': 'libc++',
      },
      'msvs_settings': {
        'VCCLCompilerTool': { 'ExceptionHandling': 1 },
      },
      'conditions': [
        ['OS=="mac"', {
            'libraries': [
                '<(module_root_dir)/./shared/libspanner.dylib'
            ],
            'xcode_settings': {
                'OTHER_LDFLAGS': [
                    '-Wl,-rpath,@loader_path'
                ]
            },
            'copies': [
                {
                    'destination': '<(PRODUCT_DIR)',
                    'files': [ '<(module_root_dir)/./shared/libspanner.dylib' ]
                }
            ]
        }],
        ['OS=="linux"', {
          'ldflags': [
            '-Wl,-rpath,$$ORIGIN'
          ],
          'libraries': [
            '<(module_root_dir)/./shared/libspanner.so'
          ],
          'copies': [
            {
                'destination': '<(PRODUCT_DIR)',
                'files': [ '<(module_root_dir)/./shared/libspanner.so' ]
            }
          ]
        }],
        ['OS=="win"', {
          'libraries': [
            '<(module_root_dir)/./shared/libspanner.dll'
          ],
          'copies': [
            {
                'destination': '<(PRODUCT_DIR)',
                'files': [ '<(module_root_dir)/./shared/libspanner.dll' ]
            }
          ]
        }]
      ]
    }
  ]
}
