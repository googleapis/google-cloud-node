/**
 * ==============================================================================
 * LAYER 1.5: JS BINDING WRAPPER (RUST & GO SHARED CORES)
 * This separates the native boundary loading from the core business logic.
 * It maps exactly to how production isolates native shared core imports.
 * ==============================================================================
 */

// 1. Load Rust Shared Core Extension
let spannerRustNative;
try {
  spannerRustNative = require('../index.js');
} catch (err) {
  try {
    spannerRustNative = require('../spanner-native.node');
  } catch (err2) {
    if (process.env.LOCAL_MOCK_TEST) {
      console.warn("⚠️  LOCAL_MOCK_TEST: Using mock Rust Native Addon for local testing.");
      spannerRustNative = {
        CoreClientHandle: class { close() {} },
        executeStreamingSqlNative: (handle, sessionName, metadata, requestBytes, gaxOptions, callback) => {
          setImmediate(() => {
            const rows = [];
            for (let i = 0; i < 100; i++) {
              rows.push([String(i), `mock_data_${i}`, "3.14159"]);
            }
            callback(null, rows, { attemptCount: 1, serverTiming: "mock_rust" });
            callback(null, null, null); // EOF
          });
        }
      };
    } else {
      // In real benchmark mode, warn if not found
      console.warn("⚠️  Rust native extension not loaded:", err.message);
    }
  }
}

// 2. Load Go Shared Core Extension
let spannerGoNative;
try {
  spannerGoNative = require('../spanner_go.node');
} catch (err) {
  try {
    spannerGoNative = require('../spanner-go/spanner_go.node');
  } catch (err2) {
    if (process.env.LOCAL_MOCK_TEST) {
      console.warn("⚠️  LOCAL_MOCK_TEST: Using mock Go Native Addon for local testing.");
      spannerGoNative = {
        CoreClientHandle: class { close() {} },
        executeStreamingSqlNative: (handle, sessionName, metadata, requestBytes, gaxOptions, callback) => {
          setImmediate(() => {
            const rows = [];
            for (let i = 0; i < 100; i++) {
              rows.push([String(i), `mock_data_${i}`, "3.14159"]);
            }
            callback(null, rows, { attemptCount: 1, serverTiming: "mock_go" });
            callback(null, null, null); // EOF
          });
        }
      };
    } else {
      console.warn("⚠️  Go native extension not loaded:", err.message);
    }
  }
}

class NativeBinding {
  constructor(channelCount = 1, engine = 'rust') {
    this.engine = (engine || 'rust').toLowerCase();
    
    if (this.engine === 'go') {
      if (!spannerGoNative) {
        throw new Error('Spanner Go native extension is not loaded. Please build the Go core first.');
      }
      this._nativeModule = spannerGoNative;
    } else {
      if (!spannerRustNative) {
        // throw new Error('Spanner. Please build the Rust core first.');
      }
      this._nativeModule = spannerRustNative;
    }

    // Initializes the CoreClient handle
    this._coreClientHandle = new this._nativeModule.CoreClientHandle(channelCount);
  }

  executeStreamingSql(sessionName, metadata, requestBytes, gaxOptions, onBatchCallback) {
    this._nativeModule.executeStreamingSqlNative(
      this._coreClientHandle,
      sessionName,
      metadata,
      requestBytes,
      gaxOptions,
      onBatchCallback
    );
  }

  close() {
    if (this._coreClientHandle && typeof this._coreClientHandle.close === 'function') {
      this._coreClientHandle.close();
    }
  }
}

module.exports = { NativeBinding, spannerRustNative, spannerGoNative };
