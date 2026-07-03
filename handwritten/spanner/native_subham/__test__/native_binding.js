/**
 * ==============================================================================
 * LAYER 1.5: JS BINDING WRAPPER
 * This separates the C++ / N-API boundary loading from the core business logic.
 * It maps exactly to how production would isolate the `.node` import.
 * ==============================================================================
 */
let spannerNative;
try {
  spannerNative = require('../index.js');
} catch (err) {
  if (process.env.LOCAL_MOCK_TEST) {
    console.warn("⚠️  LOCAL_MOCK_TEST is enabled: using dummy Native Addon for local testing.");
    spannerNative = {
      CoreClientHandle: class { close() {} },
      executeStreamingSqlNative: (handle, sessionName, metadata, requestBytes, gaxOptions, callback) => {
        // Mock processing 100 rows
        setImmediate(() => {
          const rows = [];
          for (let i = 0; i < 100; i++) {
            rows.push([i, `mock_data_${i}`, 3.14159]);
          }
          callback(null, rows, { attemptCount: 1, serverTiming: "mock" });
          callback(null, null, null); // end of stream
        });
      }
    };
  } else {
    throw err;
  }
}

class NativeBinding {
  constructor(channelCount = 1) {
    // Initializes the Rust CoreClient handle exactly once.
    this._coreClientHandle = new spannerNative.CoreClientHandle(channelCount);
  }

  executeStreamingSql(sessionName, metadata, requestBytes, gaxOptions, onBatchCallback) {
    spannerNative.executeStreamingSqlNative(
      this._coreClientHandle,
      sessionName,
      metadata,
      requestBytes,
      gaxOptions,
      onBatchCallback
    );
  }

  close() {
    this._coreClientHandle.close();
  }
}

module.exports = { NativeBinding };
