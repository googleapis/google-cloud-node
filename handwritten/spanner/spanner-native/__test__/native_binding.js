/**
 * ==============================================================================
 * LAYER 1.5: JS BINDING WRAPPER
 * This separates the C++ / N-API boundary loading from the core business logic.
 * It maps exactly to how production would isolate the `.node` import.
 * ==============================================================================
 */
const spannerNative = require('../index.js');

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
