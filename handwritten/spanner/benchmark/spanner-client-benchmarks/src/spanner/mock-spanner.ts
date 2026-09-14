import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as fs from 'fs';
import * as path from 'path';

export class MockSpannerServer {
  private server: grpc.Server;
  private port = 0;
  private requests: any[] = [];
  private results: Map<string, any> = new Map();
  private sessionCounter = 0;
  private transactionCounter = 0;

  constructor() {
    this.server = new grpc.Server();
  }

  private getProtoConfig(): {protoPath: string; includeDirs: string[]} {
    const candidateBaseDirs = [
      path.resolve(__dirname, '../../node_modules'),
      path.resolve(__dirname, '../../../node_modules'),
      path.resolve(process.cwd(), 'node_modules'),
      path.resolve(process.cwd(), 'node/node_modules'),
    ];

    const protoSubPaths = [
      '@google-cloud/spanner-api/build/protos/google/spanner/v1/spanner.proto',
      '@google-cloud/spanner/build/protos/google/spanner/v1/spanner.proto',
    ];

    let protoPath: string | null = null;
    const includeDirs = new Set<string>();

    for (const base of candidateBaseDirs) {
      if (!fs.existsSync(base)) {
        continue;
      }

      for (const sub of protoSubPaths) {
        const full = path.join(base, sub);
        if (!protoPath && fs.existsSync(full)) {
          protoPath = full;
        }
      }

      const spannerApiProtos = path.join(
        base,
        '@google-cloud/spanner-api/build/protos',
      );
      if (fs.existsSync(spannerApiProtos)) {
        includeDirs.add(spannerApiProtos);
      }

      const spannerProtos = path.join(
        base,
        '@google-cloud/spanner/build/protos',
      );
      if (fs.existsSync(spannerProtos)) {
        includeDirs.add(spannerProtos);
      }

      const gaxProtos = path.join(base, 'google-gax/build/protos');
      if (fs.existsSync(gaxProtos)) {
        includeDirs.add(gaxProtos);
      }
    }

    if (!protoPath) {
      throw new Error(
        'Could not locate spanner.proto in @google-cloud/spanner-api or @google-cloud/spanner node_modules.',
      );
    }

    return {protoPath, includeDirs: Array.from(includeDirs)};
  }

  public start(): Promise<number> {
    const {protoPath, includeDirs} = this.getProtoConfig();
    const packageDefinition = protoLoader.loadSync(protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs,
    });
    const spannerProto = (grpc.loadPackageDefinition(packageDefinition) as any)
      .google.spanner.v1;

    this.server.addService(spannerProto.Spanner.service, {
      CreateSession: this.createSession.bind(this),
      BatchCreateSessions: this.batchCreateSessions.bind(this),
      GetSession: this.getSession.bind(this),
      DeleteSession: this.deleteSession.bind(this),
      ExecuteSql: this.executeSql.bind(this),
      ExecuteStreamingSql: this.executeStreamingSql.bind(this),
      ExecuteBatchDml: this.executeBatchDml.bind(this),
      BeginTransaction: this.beginTransaction.bind(this),
      Commit: this.commit.bind(this),
      Rollback: this.rollback.bind(this),
    });

    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        '127.0.0.1:0',
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
          if (err) {
            reject(err);
          } else {
            this.port = port;
            this.server.start();
            resolve(port);
          }
        },
      );
    });
  }

  public stop(): Promise<void> {
    return new Promise(resolve => {
      try {
        this.server.forceShutdown();
      } catch (err) {
        console.error('Error during forceShutdown:', err);
      }
      resolve();
    });
  }

  public addResult(sql: string, resultSet: any) {
    this.results.set(sql.toLowerCase().trim(), resultSet);
  }

  public clearResults() {
    this.results.clear();
  }

  public clearRequests() {
    this.requests.length = 0;
  }

  public getRequests(): any[] {
    return this.requests;
  }

  public getPort(): number {
    return this.port;
  }

  private createSession(call: any, callback: any) {
    this.requests.push(call.request);
    this.sessionCounter++;
    const name = `${call.request.database}/sessions/session-${this.sessionCounter}`;
    const session: any = {name};
    if (call.request.session?.multiplexed) {
      session.multiplexed = true;
    }
    callback(null, session);
  }

  private batchCreateSessions(call: any, callback: any) {
    this.requests.push(call.request);
    const sessions: any[] = [];
    for (let i = 0; i < call.request.session_count; i++) {
      this.sessionCounter++;
      const session: any = {
        name: `${call.request.database}/sessions/session-${this.sessionCounter}`,
      };
      if (
        call.request.sessionTemplate?.multiplexed ||
        call.request.session_template?.multiplexed
      ) {
        session.multiplexed = true;
      }
      sessions.push(session);
    }
    callback(null, {session: sessions});
  }

  private getSession(call: any, callback: any) {
    this.requests.push(call.request);
    callback(null, {name: call.request.name});
  }

  private deleteSession(call: any, callback: any) {
    this.requests.push(call.request);
    callback(null, {});
  }

  private beginTransaction(call: any, callback: any) {
    this.requests.push(call.request);
    this.transactionCounter++;
    const id = Buffer.from(`tx-${this.transactionCounter}`).toString('base64');
    callback(null, {id});
  }

  private getResultForSql(sql: string): any | undefined {
    const normalized = sql.toLowerCase().trim();
    const exact = this.results.get(normalized);
    if (exact) {
      return exact;
    }
    for (const [key, res] of this.results.entries()) {
      if (normalized.includes(key) || key.includes(normalized)) {
        return res;
      }
    }
    return undefined;
  }

  private executeSql(call: any, callback: any) {
    this.requests.push(call.request);
    const sql = call.request.sql;
    const result = this.getResultForSql(sql);
    if (!result) {
      callback({
        code: grpc.status.NOT_FOUND,
        message: `No result found for SQL: ${sql}`,
      });
      return;
    }

    // Clone result to avoid mutating registered mocks
    const response = JSON.parse(JSON.stringify(result));
    if (call.request.transaction?.begin) {
      this.transactionCounter++;
      const txId = Buffer.from(`tx-${this.transactionCounter}`).toString(
        'base64',
      );
      response.metadata = response.metadata || {};
      response.metadata.transaction = {id: txId};
    }
    callback(null, response);
  }

  private executeStreamingSql(call: any) {
    this.requests.push(call.request);
    const sql = call.request.sql;
    const result = this.getResultForSql(sql);
    if (!result) {
      call.emit('error', {
        code: grpc.status.NOT_FOUND,
        message: `No result found for SQL: ${sql}`,
      });
      call.end();
      return;
    }

    const fields = result.metadata?.row_type?.fields || [];
    const firstPart: any = {
      metadata: {
        row_type: {fields},
      },
    };

    if (call.request.transaction?.begin) {
      this.transactionCounter++;
      const txId = Buffer.from(`tx-${this.transactionCounter}`).toString(
        'base64',
      );
      firstPart.metadata.transaction = {id: txId};
    }

    call.write(firstPart);

    if (result.rows && result.rows.length > 0) {
      for (const row of result.rows) {
        call.write({
          values: row,
        });
      }
    }

    if (result.stats) {
      call.write({
        stats: result.stats,
      });
    }

    call.end();
  }

  private executeBatchDml(call: any, callback: any) {
    this.requests.push(call.request);
    const resultSets: any[] = [];
    let txId: string | undefined;

    if (call.request.transaction?.begin) {
      this.transactionCounter++;
      txId = Buffer.from(`tx-${this.transactionCounter}`).toString('base64');
    }

    for (const stmt of call.request.statements) {
      const result = this.getResultForSql(stmt.sql);
      if (!result) {
        callback({
          code: grpc.status.NOT_FOUND,
          message: `No result found for SQL: ${stmt.sql}`,
        });
        return;
      }
      const response = JSON.parse(JSON.stringify(result));
      if (txId) {
        response.metadata = response.metadata || {};
        response.metadata.transaction = {id: txId};
      }
      resultSets.push(response);
    }

    callback(null, {
      result_sets: resultSets,
      status: {code: 0, message: 'OK'},
    });
  }

  private commit(call: any, callback: any) {
    this.requests.push(call.request);
    callback(null, {
      commit_timestamp: {seconds: Math.floor(Date.now() / 1000), nanos: 0},
    });
  }

  private rollback(call: any, callback: any) {
    this.requests.push(call.request);
    callback(null, {});
  }

  private makeRow(rowValues: any[]): any[] {
    return rowValues.map(val => {
      if (val === null || val === undefined) {
        return {nullValue: 0};
      } else if (typeof val === 'boolean') {
        return {boolValue: val};
      } else if (typeof val === 'number') {
        return {numberValue: val};
      } else if (typeof val === 'string') {
        return {stringValue: val};
      } else if (typeof val === 'object' && val.seconds !== undefined) {
        return {stringValue: new Date(val.seconds * 1000).toISOString()};
      }
      return {stringValue: String(val)};
    });
  }

  public registerAllMockResults(tableName: string) {
    if (!tableName) {
      tableName = 'my_table';
    }

    // Point Select
    this.addResult(`SELECT * FROM ${tableName} WHERE id = @id`, {
      metadata: {
        row_type: {
          fields: [
            {name: 'id', type: {code: 'INT64'}},
            {name: 'value', type: {code: 'STRING'}},
          ],
        },
      },
      rows: [this.makeRow(['1', 'value1'])],
    });

    // Select and Update
    this.addResult(`SELECT id FROM ${tableName} WHERE id = @id`, {
      metadata: {
        row_type: {
          fields: [{name: 'id', type: {code: 'INT64'}}],
        },
      },
      rows: [this.makeRow(['1'])],
    });
    this.addResult(`UPDATE ${tableName} SET value = @value WHERE id = @id`, {
      stats: {row_count_exact: '1'},
    });
    this.addResult(
      `INSERT INTO ${tableName} (id, value) VALUES (@id, @value)`,
      {
        stats: {row_count_exact: '1'},
      },
    );

    // Read Large Result Set
    const LARGE_RESULT_SET_SQL = `SELECT
  MOD(FARM_FINGERPRINT(GENERATE_UUID()), 2) = 0 AS random_bool,
  CAST(GENERATE_UUID() AS BYTES) AS random_bytes,
  DATE_FROM_UNIX_DATE(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 2932896))) AS random_date,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS FLOAT32) AS random_float32,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS FLOAT64) AS random_float64,
  MAKE_INTERVAL(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 10)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 12)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 28)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 24)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 60)), ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 60))) AS random_interval,
  TO_JSON('{"key": "' || GENERATE_UUID() || '"}') AS random_json,
  FARM_FINGERPRINT(GENERATE_UUID()) AS random_int64,
  CAST(FARM_FINGERPRINT(GENERATE_UUID()) / FARM_FINGERPRINT(GENERATE_UUID()) AS NUMERIC) AS random_numeric,
  GENERATE_UUID() AS random_string,
  TIMESTAMP_MICROS(ABS(MOD(FARM_FINGERPRINT(GENERATE_UUID()), 1230219000000000))) AS random_timestamp,
  NEW_UUID() AS random_uuid
FROM UNNEST(GENERATE_ARRAY(1, @num_rows)) AS n`;

    this.addResult(LARGE_RESULT_SET_SQL, {
      metadata: {
        row_type: {
          fields: [
            {name: 'random_bool', type: {code: 'BOOL'}},
            {name: 'random_bytes', type: {code: 'BYTES'}},
            {name: 'random_date', type: {code: 'DATE'}},
            {name: 'random_float32', type: {code: 'FLOAT64'}},
            {name: 'random_float64', type: {code: 'FLOAT64'}},
            {name: 'random_interval', type: {code: 'STRING'}},
            {name: 'random_json', type: {code: 'JSON'}},
            {name: 'random_int64', type: {code: 'INT64'}},
            {name: 'random_numeric', type: {code: 'NUMERIC'}},
            {name: 'random_string', type: {code: 'STRING'}},
            {name: 'random_timestamp', type: {code: 'TIMESTAMP'}},
            {name: 'random_uuid', type: {code: 'STRING'}},
          ],
        },
      },
      rows: [
        this.makeRow([
          true,
          'Ynl0ZXM=',
          '2026-06-02',
          1.0,
          2.0,
          '10s',
          '{"key":"val"}',
          '42',
          '10.5',
          'string',
          {seconds: 1772532000},
          'uuid',
        ]),
      ],
    });

    // TPC-C
    this.addResult('SELECT COUNT(*) AS cnt FROM warehouse', {
      metadata: {
        row_type: {
          fields: [{name: 'cnt', type: {code: 'INT64'}}],
        },
      },
      rows: [this.makeRow(['1'])],
    });
    this.addResult(
      'SELECT next_order_id FROM district WHERE warehouse_id = @w AND district_id = @d',
      {
        metadata: {
          row_type: {
            fields: [{name: 'next_order_id', type: {code: 'INT64'}}],
          },
        },
        rows: [this.makeRow(['1000'])],
      },
    );
    this.addResult(
      'SELECT discount, last_name FROM customer WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
      {
        metadata: {
          row_type: {
            fields: [
              {name: 'discount', type: {code: 'FLOAT64'}},
              {name: 'last_name', type: {code: 'STRING'}},
            ],
          },
        },
        rows: [this.makeRow([0.1, 'last'])],
      },
    );
    this.addResult(
      'SELECT balance, first_name, last_name FROM customer WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
      {
        metadata: {
          row_type: {
            fields: [
              {name: 'balance', type: {code: 'FLOAT64'}},
              {name: 'first_name', type: {code: 'STRING'}},
              {name: 'last_name', type: {code: 'STRING'}},
            ],
          },
        },
        rows: [this.makeRow([100.0, 'first', 'last'])],
      },
    );
    this.addResult(
      'SELECT order_id FROM orders WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c ORDER BY order_id DESC LIMIT 1',
      {
        metadata: {
          row_type: {
            fields: [{name: 'order_id', type: {code: 'INT64'}}],
          },
        },
        rows: [this.makeRow(['1000'])],
      },
    );
    this.addResult(
      'SELECT order_line_id, item_id, quantity, amount FROM order_line WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
      {
        metadata: {
          row_type: {
            fields: [
              {name: 'order_line_id', type: {code: 'INT64'}},
              {name: 'item_id', type: {code: 'INT64'}},
              {name: 'quantity', type: {code: 'INT64'}},
              {name: 'amount', type: {code: 'FLOAT64'}},
            ],
          },
        },
        rows: [this.makeRow(['1', '100', '5', 25.0])],
      },
    );
    this.addResult(
      'SELECT order_id FROM new_orders WHERE warehouse_id = @w AND district_id = @d ORDER BY created_timestamp ASC LIMIT 1',
      {
        metadata: {
          row_type: {
            fields: [{name: 'order_id', type: {code: 'INT64'}}],
          },
        },
        rows: [this.makeRow(['1000'])],
      },
    );
    this.addResult(
      'UPDATE district SET next_order_id = @next WHERE warehouse_id = @w AND district_id = @d',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'INSERT INTO orders (warehouse_id, district_id, order_id, customer_id, entry_date, item_count, all_local) VALUES (@w, @d, @o, @c, @dt, @cnt, 1)',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'INSERT INTO new_orders (warehouse_id, district_id, order_id, created_timestamp) VALUES (@w, @d, @o, @dt)',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      "INSERT INTO order_line (warehouse_id, district_id, order_id, order_line_id, item_id, quantity, amount, dist_info) VALUES (@w, @d, @o, @ol, @i, @qty, @amt, 'distinfo')",
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'UPDATE stock SET quantity = quantity - @qty, order_count = order_count + 1 WHERE warehouse_id = @w AND item_id = @i',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'UPDATE warehouse SET ytd = ytd + @amt WHERE warehouse_id = @w',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'UPDATE district SET ytd = ytd + @amt WHERE warehouse_id = @w AND district_id = @d',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'UPDATE customer SET balance = balance - @amt, ytd_payment = ytd_payment + @amt, payment_count = payment_count + 1 WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      "INSERT INTO history (warehouse_id, district_id, history_id, customer_id, date, amount, data) VALUES (@w, @d, @h, @c, @dt, @amt, 'history')",
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'DELETE FROM new_orders WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'UPDATE orders SET carrier_id = @c WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'UPDATE order_line SET delivery_date = @dt WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
      {stats: {row_count_exact: '1'}},
    );
    this.addResult(
      'SELECT COUNT(DISTINCT s.item_id) FROM order_line ol JOIN stock s ON s.warehouse_id = ol.warehouse_id AND s.item_id = ol.item_id WHERE ol.warehouse_id = @w AND ol.district_id = @d AND ol.order_id >= @minOrderId AND ol.order_id < @nextOrderId AND s.quantity < @threshold',
      {
        metadata: {
          row_type: {
            fields: [{name: 'count', type: {code: 'INT64'}}],
          },
        },
        rows: [this.makeRow(['0'])],
      },
    );
  }
}
