const { promisify } = require('util');
const { Readable } = require('stream');
// Require the parent Spanner package relatively since we are running inside the repository
const { Spanner } = require('../../');

// The JS Binding Wrapper (supports both Rust & Go shared cores)
const { NativeBinding } = require('./native_binding.js');
// The generated protobuf JS types
const spannerProto = require('../../build/protos/protos.js').google.spanner.v1;
// Spanner codec for parameter encoding
const { codec } = require('../../build/src/codec.js');

// ==============================================================================
// LAYER 1: NODE LIBRARY LAYER (JavaScript/TypeScript)
// Simulates the handwritten client library structure and types.
// Supports:
// 1. Pure Node.js Baseline (@google-cloud/spanner)
// 2. Node.js + Rust Shared Core
// 3. Node.js + Go Shared Core
// ==============================================================================
class NativeSpannerDatabase {
  constructor(projectId, instanceId, databaseId, channelCount = 1, engine = 'rust') {
    this.projectId = projectId;
    this.instanceId = instanceId;
    this.databaseId = databaseId;
    this.channelCount = channelCount;
    this.engine = (engine || 'rust').toLowerCase();

    this.spanner = new Spanner({ projectId });
    this.instance = this.spanner.instance(instanceId);
    this.database = this.instance.database(databaseId);
    this._cachedSessionName = null;
    this._authClient = null;

    // LAYER 1.5: The binding wrapper is instantiated here
    this._nativeBinding = new NativeBinding(channelCount, this.engine);
  }

  async _getSessionName() {
    if (this._cachedSessionName) {
      return this._cachedSessionName;
    }

    if (process.env.LOCAL_MOCK_TEST) {
      this._cachedSessionName = `projects/${this.projectId}/instances/${this.instanceId}/databases/${this.databaseId}/sessions/mux-123`;
      return this._cachedSessionName;
    }

    const factory = this.database.sessionFactory_;
    const getSession = promisify(factory.getSession.bind(factory));
    let session;
    try {
      session = await getSession();
      const name = session.formattedName_;
      if (session.metadata?.multiplexed) {
        this._cachedSessionName = name;
      }
      return name;
    } finally {
      if (session) {
        factory.release(session);
      }
    }
  }

  /**
   * Exposes a runStream(query)-style entry point for native shared core execution.
   */
  async runStream(query) {
    const sessionName = await this._getSessionName();

    let sql;
    let params;
    let types;

    if (typeof query === 'string') {
      sql = query;
    } else {
      sql = query.sql;
      params = query.params;
      types = query.types;
    }

    // 1. Build the ExecuteSqlRequest payload
    const requestMsg = {
      session: sessionName,
      sql: sql,
    };

    // 2. Encode params using Spanner's codec (matching production logic)
    if (params) {
      const encodedParams = {};
      const paramTypes = {};
      for (const [key, value] of Object.entries(params)) {
        encodedParams[key] = codec.encode(value);
        if (types && types[key]) {
          const typeObj = codec.createTypeObject(types[key]);
          if (typeof typeObj.code === 'string') {
            typeObj.code = spannerProto.TypeCode[typeObj.code];
          }
          paramTypes[key] = typeObj;
        }
      }
      requestMsg.params = { fields: encodedParams };
      requestMsg.paramTypes = paramTypes;
    }

    // 3. Serialize request to protobuf wire bytes
    const requestProto = spannerProto.ExecuteSqlRequest.create(requestMsg);
    const requestBytes = spannerProto.ExecuteSqlRequest.encode(requestProto).finish();

    // 4. Build metadata headers (Auth is managed inside native shared core)
    const metadata = [
      ['x-goog-request-params', `session=${encodeURIComponent(sessionName)}`],
      ['x-goog-spanner-route-to-leader', 'true'],
      ['x-goog-user-project', this.projectId],
      ['x-goog-api-client', `spanner-node-poc-${this.engine}/1.0.0`]
    ];

    // 4.5 Define GAX Retry Options
    const gaxOptions = {
      retry: {
        retryCodes: [14, 13], // UNAVAILABLE, INTERNAL
        backoffSettings: {
          initialRetryDelayMillis: 100,
          maxRetryDelayMillis: 60000,
          retryDelayMultiplier: 1.3,
        }
      },
      timeoutMillis: 30000
    };

    // 5. Node Readable stream for receiving decoded rows back
    const partialResultStream = new Readable({
      objectMode: true,
      read() {
        // backpressure handled lazily
      }
    });

    // 6. Call the native binding layer
    this._nativeBinding.executeStreamingSql(
      sessionName,
      metadata,
      requestBytes,
      gaxOptions,
      (err, batch, telemetry) => {
        if (err) {
          partialResultStream.destroy(err);
          return;
        }
        if (batch === null) {
          partialResultStream.push(null);
        } else {
          if (telemetry) {
            partialResultStream.emit('telemetry', telemetry);
          }
          for (const row of batch) {
            partialResultStream.push(row);
          }
        }
      }
    );

    return partialResultStream;
  }

  /**
   * Benchmark wrapper: consumes the stream and returns a promise for all rows.
   */
  async executeSqlNative(sql) {
    const stream = await this.runStream(sql);
    return new Promise((resolve, reject) => {
      const rows = [];
      stream.on('data', row => rows.push(row));
      stream.on('error', err => reject(err));
      stream.on('end', () => resolve(rows));
    });
  }

  /**
   * Baseline execution path using official pure @google-cloud/spanner JS package.
   */
  async executeSqlJs(query) {
    if (process.env.LOCAL_MOCK_TEST) {
      return new Promise(resolve => {
        setTimeout(() => {
          const rows = [];
          for (let i = 0; i < 100; i++) rows.push([String(i), "mock_data", "3.14159"]);
          resolve(rows);
        }, 0);
      });
    }

    const spannerQuery = typeof query === 'string' ? { sql: query } : query;
    const [rows] = await this.database.run(spannerQuery);
    return rows.map((row) => {
      const json = row.toJSON();
      return Object.values(json).map((v) => String(v ?? 'null'));
    });
  }

  close() {
    if (this._nativeBinding) {
      this._nativeBinding.close();
    }
    if (this.database) {
      return this.database.close();
    }
  }
}

module.exports = { NativeSpannerDatabase };
