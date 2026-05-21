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
    const client = await this.auth.getClient();
    const tokenResponse = await client.getAccessToken();
    return tokenResponse.token;
  }

  /**
   * Acquires a session from the internal pool, extracts the formatted session name,
   * and releases it back to the pool immediately using a try/finally block to prevent leaks.
   */
  async _getSessionName() {
    const pool = this.database.pool_;
    // Explicitly open the regular pool if it was not opened automatically (e.g., when multiplexed sessions are enabled by default)
    if (!pool.isOpen) {
      pool.open();
    }
    // Promisify the callback-based pool getSession method
    const getSession = promisify(pool.getSession.bind(pool));
    let session;
    try {
      session = await getSession();
      return session.formattedName_;
    } finally {
      if (session) {
        pool.release(session);
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
