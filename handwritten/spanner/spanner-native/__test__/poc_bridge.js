const { promisify } = require('util');
// Require the parent Spanner package relatively since we are running inside the repository
const { Spanner } = require('../../');
const { GoogleAuth } = require('google-auth-library');

// Require the generated entry point of the napi-rs compiled extension
const spannerNative = require('../index.js');

class NativeSpannerDatabase {
  /**
   * Bridges the official @google-cloud/spanner library with our compiled Rust extension.
   * Retains standard session pool management and OAuth credentials from Node.js.
   */
  constructor(projectId, instanceId, databaseId) {
    this.spanner = new Spanner({ projectId });
    this.instance = this.spanner.instance(instanceId);
    this.database = this.instance.database(databaseId);
    this._cachedSessionName = null;
    this._authClient = null;

    // Build standard auth client with spanner scope
    this.auth = new GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spanner.data'],
    });
  }

  /**
   * Retrieves a valid, fresh OAuth access token.
   * Internally cached and automatically refreshed by the library.
   */
  async _getFreshToken() {
    if (!this._authClient) {
      this._authClient = await this.auth.getClient();
    }
    const tokenResponse = await this._authClient.getAccessToken();
    return tokenResponse.token;
  }

  /**
   * Acquires a session name dynamically. Supports both multiplexed sessions and standard pools.
   * Caches the session name if it is a multiplexed session to completely bypass V8 pool checkouts.
   */
  async _getSessionName() {
    // Return cached session name instantly if available (Multiplexed case)
    if (this._cachedSessionName) {
      return this._cachedSessionName;
    }

    const factory = this.database.sessionFactory_;
    // Promisify the unified factory getSession method
    const getSession = promisify(factory.getSession.bind(factory));
    let session;
    try {
      session = await getSession();
      const name = session.formattedName_;
      
      // Cache the session name string if multiplexed (safe to reuse indefinitely)
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
   * Executes SQL query natively via the Rust napi-rs extension (non-blocking on V8 event loop).
   * Route across dynamic channel_count connections.
   */
  async executeSqlNative(sql, channelCount = 1) {
    const sessionName = await this._getSessionName();
    const token = await this._getFreshToken();

    // Invoke Rust async napi binding
    return await spannerNative.executeSqlNative(sessionName, sql, token, channelCount);
  }

  /**
   * Baseline baseline execution path using official @google-cloud/spanner JS package.
   */
  async executeSqlJs(sql) {
    const [rows] = await this.database.run({ sql });
    // Map rows to simple arrays of stringified values to match Rust's output format
    return rows.map((row) => {
      const json = row.toJSON();
      return Object.values(json).map((v) => String(v ?? 'null'));
    });
  }
}

module.exports = { NativeSpannerDatabase };
