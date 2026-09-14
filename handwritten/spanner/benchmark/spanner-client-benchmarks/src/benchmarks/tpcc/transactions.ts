import {Database, Spanner, MutationSet} from '@google-cloud/spanner';
const {v4: uuidv4} = require('uuid');

export async function executeNewOrder(
  database: Database,
  scaleFactor: number,
  totalItems: number,
  extended = false,
): Promise<void> {
  const warehouseId = Math.floor(Math.random() * scaleFactor) + 1;
  const districtId = Math.floor(Math.random() * 10) + 1;
  const customerId = Math.floor(Math.random() * 3000) + 1;
  const numItems = Math.floor(Math.random() * 11) + 5;

  const itemIds: number[] = [];
  const quantities: number[] = [];
  for (let i = 0; i < numItems; i++) {
    itemIds.push(Math.floor(Math.random() * totalItems) + 1);
    quantities.push(Math.floor(Math.random() * 10) + 1);
  }

  const transactionOptions = {requestOptions: {transactionTag: 'new_order'}};

  await database.runTransactionAsync(transactionOptions, async transaction => {
    const getDistrict = {
      sql: 'SELECT next_order_id FROM district WHERE warehouse_id = @w AND district_id = @d FOR UPDATE',
      params: {w: warehouseId, d: districtId},
      types: {w: 'int64', d: 'int64'},
      requestOptions: {requestTag: 'new_order_get_district'},
    };
    const [distRows] = await transaction.run(getDistrict);
    let nextOrderId = 1000;
    if (distRows.length > 0) {
      const dRow = distRows[0].toJSON();
      nextOrderId = Number(dRow.next_order_id);
    }

    const getCust = {
      sql: 'SELECT discount, last_name FROM customer WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
      params: {w: warehouseId, d: districtId, c: customerId},
      types: {w: 'int64', d: 'int64', c: 'int64'},
      requestOptions: {requestTag: 'new_order_get_customer'},
    };
    const [custRows] = await transaction.run(getCust);
    let discount = 0.0;
    let lastName = '';
    if (custRows.length > 0) {
      const cRow = custRows[0].toJSON();
      discount = Number(cRow.discount);
      lastName = String(cRow.last_name);
    }

    const now = new Date();
    const batchStatements: any[] = [
      {
        sql: 'UPDATE district SET next_order_id = @next WHERE warehouse_id = @w AND district_id = @d',
        params: {next: nextOrderId + 1, w: warehouseId, d: districtId},
        types: {next: 'int64', w: 'int64', d: 'int64'},
      },
      {
        sql: 'INSERT INTO orders (warehouse_id, district_id, order_id, customer_id, entry_date, item_count, all_local) VALUES (@w, @d, @o, @c, @dt, @cnt, 1)',
        params: {
          w: warehouseId,
          d: districtId,
          o: nextOrderId,
          c: customerId,
          dt: now,
          cnt: numItems,
        },
        types: {
          w: 'int64',
          d: 'int64',
          o: 'int64',
          c: 'int64',
          dt: 'timestamp',
          cnt: 'int64',
        },
      },
      {
        sql: 'INSERT INTO new_orders (warehouse_id, district_id, order_id, created_timestamp) VALUES (@w, @d, @o, @dt)',
        params: {w: warehouseId, d: districtId, o: nextOrderId, dt: now},
        types: {w: 'int64', d: 'int64', o: 'int64', dt: 'timestamp'},
      },
    ];

    for (let i = 0; i < numItems; i++) {
      batchStatements.push({
        sql: "INSERT INTO order_line (warehouse_id, district_id, order_id, order_line_id, item_id, quantity, amount, dist_info) VALUES (@w, @d, @o, @ol, @i, @qty, @amt, 'distinfo')",
        params: {
          w: warehouseId,
          d: districtId,
          o: nextOrderId,
          ol: i + 1,
          i: itemIds[i],
          qty: quantities[i],
          amt: Spanner.float(25.0),
        },
        types: {
          w: 'int64',
          d: 'int64',
          o: 'int64',
          ol: 'int64',
          i: 'int64',
          qty: 'int64',
          amt: 'float64',
        },
      });
      batchStatements.push({
        sql: 'UPDATE stock SET quantity = quantity - @qty, order_count = order_count + 1 WHERE warehouse_id = @w AND item_id = @i',
        params: {qty: quantities[i], w: warehouseId, i: itemIds[i]},
        types: {qty: 'int64', w: 'int64', i: 'int64'},
      });
    }

    const batchOptions = {requestOptions: {requestTag: 'new_order_batch_dml'}};

    if (batchStatements.length > 0) {
      await transaction.batchUpdate(batchStatements, batchOptions);
    }

    const commitOptions = {requestOptions: {requestTag: 'new_order_commit'}};
    await transaction.commit(commitOptions as any);
  });
}

export async function executePayment(
  database: Database,
  scaleFactor: number,
  extended = false,
): Promise<void> {
  const warehouseId = Math.floor(Math.random() * scaleFactor) + 1;
  const districtId = Math.floor(Math.random() * 10) + 1;
  const customerId = Math.floor(Math.random() * 3000) + 1;
  const amount = Math.random() * 4999.0 + 1.0;

  const transactionOptions = {requestOptions: {transactionTag: 'payment'}};

  await database.runTransactionAsync(transactionOptions, async transaction => {
    const stmts = [
      {
        sql: 'UPDATE warehouse SET ytd = ytd + @amt WHERE warehouse_id = @w',
        params: {amt: Spanner.float(amount), w: warehouseId},
        types: {amt: 'float64', w: 'int64'},
      },
      {
        sql: 'UPDATE district SET ytd = ytd + @amt WHERE warehouse_id = @w AND district_id = @d',
        params: {amt: Spanner.float(amount), w: warehouseId, d: districtId},
        types: {amt: 'float64', w: 'int64', d: 'int64'},
      },
      {
        sql: 'UPDATE customer SET balance = balance - @amt, ytd_payment = ytd_payment + @amt, payment_count = payment_count + 1 WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
        params: {
          amt: Spanner.float(amount),
          w: warehouseId,
          d: districtId,
          c: customerId,
        },
        types: {amt: 'float64', w: 'int64', d: 'int64', c: 'int64'},
      },
      {
        sql: "INSERT INTO history (warehouse_id, district_id, history_id, customer_id, date, amount, data) VALUES (@w, @d, @h, @c, @dt, @amt, 'history')",
        params: {
          w: warehouseId,
          d: districtId,
          h: uuidv4(),
          c: customerId,
          dt: new Date(),
          amt: Spanner.float(amount),
        },
        types: {
          w: 'int64',
          d: 'int64',
          h: 'string',
          c: 'int64',
          dt: 'timestamp',
          amt: 'float64',
        },
      },
    ];

    const batchOptions = {requestOptions: {requestTag: 'payment_batch_dml'}};

    await transaction.batchUpdate(stmts, batchOptions);

    const commitOptions = {requestOptions: {requestTag: 'payment_commit'}};
    await transaction.commit(commitOptions as any);
  });
}

export async function executeOrderStatus(
  database: Database,
  scaleFactor: number,
  extended = false,
): Promise<void> {
  const warehouseId = Math.floor(Math.random() * scaleFactor) + 1;
  const districtId = Math.floor(Math.random() * 10) + 1;
  const customerId = Math.floor(Math.random() * 3000) + 1;

  const snapshotOptions = extended ? {exactStaleness: 15000} : {};
  const [snapshot] = await database.getSnapshot(snapshotOptions);
  try {
    const custQuery = {
      sql: 'SELECT balance, first_name, last_name FROM customer WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
      params: {w: warehouseId, d: districtId, c: customerId},
      types: {w: 'int64', d: 'int64', c: 'int64'},
      requestOptions: {requestTag: 'order_status_customer'},
    };
    const [custRows] = await snapshot.run(custQuery);

    if (custRows.length > 0) {
      const cRow = custRows[0].toJSON();
      const balance = Number(cRow.balance);
      const firstName = String(cRow.first_name);
      const lastName = String(cRow.last_name);
    }

    const orderQuery = {
      sql: 'SELECT order_id FROM orders WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c ORDER BY order_id DESC LIMIT 1',
      params: {w: warehouseId, d: districtId, c: customerId},
      types: {w: 'int64', d: 'int64', c: 'int64'},
      requestOptions: {requestTag: 'order_status_order'},
    };
    const [ordRows] = await snapshot.run(orderQuery);

    if (ordRows.length > 0) {
      const oRow = ordRows[0].toJSON();
      const orderId = Number(oRow.order_id);
      const lineQuery = {
        sql: 'SELECT order_line_id, item_id, quantity, amount FROM order_line WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
        params: {w: warehouseId, d: districtId, o: orderId},
        types: {w: 'int64', d: 'int64', o: 'int64'},
        requestOptions: {requestTag: 'order_status_order_lines'},
      };
      const [lineRows] = await snapshot.run(lineQuery);
      for (const line of lineRows) {
        const lRow = line.toJSON();
        const olId = Number(lRow.order_line_id);
        const itemId = Number(lRow.item_id);
        const qty = Number(lRow.quantity);
        const amt = Number(lRow.amount);
      }
    }
  } finally {
    snapshot.end();
  }
}

export async function executeDelivery(
  database: Database,
  scaleFactor: number,
  extended = false,
): Promise<void> {
  const warehouseId = Math.floor(Math.random() * scaleFactor) + 1;
  const carrierId = Math.floor(Math.random() * 10) + 1;

  const transactionOptions = {requestOptions: {transactionTag: 'delivery'}};

  await database.runTransactionAsync(transactionOptions, async transaction => {
    const batchStatements: any[] = [];
    for (let districtId = 1; districtId <= 10; districtId++) {
      const query = {
        sql: 'SELECT order_id FROM new_orders WHERE warehouse_id = @w AND district_id = @d ORDER BY created_timestamp ASC LIMIT 1 FOR UPDATE',
        params: {w: warehouseId, d: districtId},
        types: {w: 'int64', d: 'int64'},
        requestOptions: {requestTag: 'delivery_oldest_new_order'},
      };
      const [ordRows] = await transaction.run(query);

      if (ordRows.length > 0) {
        const oRow = ordRows[0].toJSON();
        const orderId = Number(oRow.order_id);
        batchStatements.push({
          sql: 'DELETE FROM new_orders WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
          params: {w: warehouseId, d: districtId, o: orderId},
          types: {w: 'int64', d: 'int64', o: 'int64'},
        });
        batchStatements.push({
          sql: 'UPDATE orders SET carrier_id = @c WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
          params: {c: carrierId, w: warehouseId, d: districtId, o: orderId},
          types: {c: 'int64', w: 'int64', d: 'int64', o: 'int64'},
        });
        batchStatements.push({
          sql: 'UPDATE order_line SET delivery_date = @dt WHERE warehouse_id = @w AND district_id = @d AND order_id = @o',
          params: {dt: new Date(), w: warehouseId, d: districtId, o: orderId},
          types: {dt: 'timestamp', w: 'int64', d: 'int64', o: 'int64'},
        });
      }
    }

    const batchOptions = {requestOptions: {requestTag: 'delivery_batch_dml'}};

    if (batchStatements.length > 0) {
      await transaction.batchUpdate(batchStatements, batchOptions);
    }

    const commitOptions = {requestOptions: {requestTag: 'delivery_commit'}};
    await transaction.commit(commitOptions as any);
  });
}

export async function executeStockLevel(
  database: Database,
  scaleFactor: number,
  extended = false,
): Promise<void> {
  const warehouseId = Math.floor(Math.random() * scaleFactor) + 1;
  const districtId = Math.floor(Math.random() * 10) + 1;
  const threshold = Math.floor(Math.random() * 6) + 15;

  const [snapshot] = await database.getSnapshot();
  try {
    const distQuery = {
      sql: 'SELECT next_order_id FROM district WHERE warehouse_id = @w AND district_id = @d',
      params: {w: warehouseId, d: districtId},
      types: {w: 'int64', d: 'int64'},
      requestOptions: {requestTag: 'stock_level_district'},
    };
    const [distRows] = await snapshot.run(distQuery);

    if (distRows.length > 0) {
      const dRow = distRows[0].toJSON();
      const nextOrderId = Number(dRow.next_order_id);
      const minOrderId = Math.max(1, nextOrderId - 20);

      const stockQuery = {
        sql: 'SELECT COUNT(DISTINCT s.item_id) FROM order_line ol JOIN stock s ON s.warehouse_id = ol.warehouse_id AND s.item_id = ol.item_id WHERE ol.warehouse_id = @w AND ol.district_id = @d AND ol.order_id >= @minOrderId AND ol.order_id < @nextOrderId AND s.quantity < @threshold',
        params: {
          w: warehouseId,
          d: districtId,
          minOrderId,
          nextOrderId,
          threshold,
        },
        types: {
          w: 'int64',
          d: 'int64',
          minOrderId: 'int64',
          nextOrderId: 'int64',
          threshold: 'int64',
        },
        requestOptions: {requestTag: 'stock_level_stock'},
      };
      await snapshot.run(stockQuery);
    }
  } finally {
    snapshot.end();
  }
}

export async function executeNewOrderMutations(
  database: Database,
  scaleFactor: number,
  totalItems: number,
  extended = false,
): Promise<void> {
  const warehouseId = Math.floor(Math.random() * scaleFactor) + 1;
  const districtId = Math.floor(Math.random() * 10) + 1;
  const customerId = Math.floor(Math.random() * 3000) + 1;
  const numItems = Math.floor(Math.random() * 11) + 5;

  const itemIds: number[] = [];
  const quantities: number[] = [];
  for (let i = 0; i < numItems; i++) {
    itemIds.push(Math.floor(Math.random() * totalItems) + 1);
    quantities.push(Math.floor(Math.random() * 10) + 1);
  }

  const transactionOptions = {
    requestOptions: {transactionTag: 'new_order_mutations'},
  };

  await database.runTransactionAsync(transactionOptions, async transaction => {
    const getDistrict = {
      sql: 'SELECT next_order_id FROM district WHERE warehouse_id = @w AND district_id = @d',
      params: {w: warehouseId, d: districtId},
      types: {w: 'int64', d: 'int64'},
      requestOptions: {requestTag: 'new_order_mutations_get_district'},
    };
    const [distRows] = await transaction.run(getDistrict);
    let nextOrderId = 1000;
    if (distRows.length > 0) {
      const dRow = distRows[0].toJSON();
      nextOrderId = Number(dRow.next_order_id);
    }

    const getCust = {
      sql: 'SELECT discount, last_name FROM customer WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
      params: {w: warehouseId, d: districtId, c: customerId},
      types: {w: 'int64', d: 'int64', c: 'int64'},
      requestOptions: {requestTag: 'new_order_mutations_get_customer'},
    };
    const [custRows] = await transaction.run(getCust);

    // Get stock levels
    const getStock = {
      sql: 'SELECT item_id, quantity FROM stock WHERE warehouse_id = @w AND item_id IN UNNEST(@items)',
      params: {w: warehouseId, items: itemIds},
      types: {w: 'int64', items: {type: 'array', child: 'int64'}},
      requestOptions: {requestTag: 'new_order_mutations_get_stock'},
    };
    const [stockRows] = await transaction.run(getStock);
    const stockMap = new Map<number, number>();
    for (const row of stockRows) {
      const r = row.toJSON();
      stockMap.set(Number(r.item_id), Number(r.quantity));
    }

    const now = new Date();

    // 1. Update next_order_id in district
    transaction.update('district', {
      warehouse_id: warehouseId,
      district_id: districtId,
      next_order_id: nextOrderId + 1,
    });

    // 2. Insert orders
    transaction.insert('orders', {
      warehouse_id: warehouseId,
      district_id: districtId,
      order_id: nextOrderId,
      customer_id: customerId,
      entry_date: now,
      item_count: numItems,
      all_local: 1,
    });

    // 3. Insert new_orders
    transaction.insert('new_orders', {
      warehouse_id: warehouseId,
      district_id: districtId,
      order_id: nextOrderId,
      created_timestamp: now,
    });

    // 4. Update stocks & insert order lines
    for (let i = 0; i < numItems; i++) {
      const itemId = itemIds[i];
      const qty = quantities[i];
      const currentQty = stockMap.get(itemId) || 10;
      let newQty = currentQty - qty;
      if (newQty < 10) {
        newQty += 91;
      }

      transaction.insert('order_line', {
        warehouse_id: warehouseId,
        district_id: districtId,
        order_id: nextOrderId,
        order_line_id: i + 1,
        item_id: itemId,
        quantity: qty,
        amount: Spanner.float(25.0),
        dist_info: 'distinfo',
      });

      transaction.update('stock', {
        warehouse_id: warehouseId,
        item_id: itemId,
        quantity: newQty,
      });
    }

    const commitOptions = {
      requestOptions: {requestTag: 'new_order_mutations_commit'},
    };
    await transaction.commit(commitOptions as any);
  });
}

export async function executePaymentMutationsDirect(
  database: Database,
  scaleFactor: number,
  extended = false,
): Promise<void> {
  const warehouseId = Math.floor(Math.random() * scaleFactor) + 1;
  const districtId = Math.floor(Math.random() * 10) + 1;
  const customerId = Math.floor(Math.random() * 3000) + 1;
  const amount = Math.random() * 4999.0 + 1.0;

  const transactionOptions = {
    requestOptions: {transactionTag: 'payment_mutations_direct'},
  };

  await database.runTransactionAsync(transactionOptions, async transaction => {
    const stmts = [
      {
        sql: 'UPDATE warehouse SET ytd = ytd + @amt WHERE warehouse_id = @w',
        params: {amt: Spanner.float(amount), w: warehouseId},
        types: {amt: 'float64', w: 'int64'},
      },
      {
        sql: 'UPDATE district SET ytd = ytd + @amt WHERE warehouse_id = @w AND district_id = @d',
        params: {amt: Spanner.float(amount), w: warehouseId, d: districtId},
        types: {amt: 'float64', w: 'int64', d: 'int64'},
      },
      {
        sql: 'UPDATE customer SET balance = balance - @amt, ytd_payment = ytd_payment + @amt, payment_count = payment_count + 1 WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c',
        params: {
          amt: Spanner.float(amount),
          w: warehouseId,
          d: districtId,
          c: customerId,
        },
        types: {amt: 'float64', w: 'int64', d: 'int64', c: 'int64'},
      },
    ];
    const batchOptions = {
      requestOptions: {requestTag: 'payment_mutations_direct_batch_dml'},
    };
    await transaction.batchUpdate(stmts, batchOptions);

    const commitOptions = {
      requestOptions: {requestTag: 'payment_mutations_direct_commit'},
    };
    await transaction.commit(commitOptions as any);
  });

  const mutations = new MutationSet();
  mutations.insert('history', {
    warehouse_id: warehouseId,
    district_id: districtId,
    history_id: uuidv4(),
    customer_id: customerId,
    date: new Date(),
    amount: Spanner.float(amount),
    data: 'history',
  });
  const writeOptions = {
    requestOptions: {requestTag: 'payment_mutations_direct_write'},
  };
  await database.writeAtLeastOnce(mutations, writeOptions as any);
}

export async function executeOrderStatusReads(
  database: Database,
  scaleFactor: number,
  extended = false,
): Promise<void> {
  const warehouseId = Math.floor(Math.random() * scaleFactor) + 1;
  const districtId = Math.floor(Math.random() * 10) + 1;
  const customerId = Math.floor(Math.random() * 3000) + 1;

  const snapshotOptions = extended ? {exactStaleness: 15000} : {};
  const [snapshot] = await database.getSnapshot(snapshotOptions);
  try {
    const [custRows] = await snapshot.read('customer', {
      keys: [[warehouseId, districtId, customerId]] as any,
      columns: ['balance', 'first_name', 'last_name'],
      requestOptions: {requestTag: 'order_status_reads_customer'},
    });

    if (custRows.length > 0) {
      const cRow = custRows[0].toJSON();
      const balance = Number(cRow.balance);
      const firstName = String(cRow.first_name);
      const lastName = String(cRow.last_name);
    }

    const orderQuery = {
      sql: 'SELECT order_id FROM orders WHERE warehouse_id = @w AND district_id = @d AND customer_id = @c ORDER BY order_id DESC LIMIT 1',
      params: {w: warehouseId, d: districtId, c: customerId},
      types: {w: 'int64', d: 'int64', c: 'int64'},
      requestOptions: {requestTag: 'order_status_reads_order'},
    };
    const [ordRows] = await snapshot.run(orderQuery);

    if (ordRows.length > 0) {
      const oRow = ordRows[0].toJSON();
      const orderId = Number(oRow.order_id);
      const [lineRows] = await snapshot.read('order_line', {
        keys: [[warehouseId, districtId, orderId]] as any,
        columns: ['order_line_id', 'item_id', 'quantity', 'amount'],
        requestOptions: {requestTag: 'order_status_reads_order_lines'},
      });
      for (const line of lineRows) {
        const lRow = line.toJSON();
        const olId = Number(lRow.order_line_id);
        const itemId = Number(lRow.item_id);
        const qty = Number(lRow.quantity);
        const amt = Number(lRow.amount);
      }
    }
  } finally {
    snapshot.end();
  }
}

export async function executeStockLevelPartitioned(
  database: Database,
  scaleFactor: number,
  extended = false,
): Promise<void> {
  const warehouseId = Math.floor(Math.random() * scaleFactor) + 1;
  const districtId = Math.floor(Math.random() * 10) + 1;
  const threshold = Math.floor(Math.random() * 6) + 15;

  const [batchTransaction] = await database.createBatchTransaction({
    exactStaleness: 15000,
  });

  try {
    const distQuery = {
      sql: 'SELECT next_order_id FROM district WHERE warehouse_id = @w AND district_id = @d',
      params: {w: warehouseId, d: districtId},
      types: {w: 'int64', d: 'int64'},
      requestOptions: {requestTag: 'stock_level_partitioned_district'},
    };
    const [distRows] = await batchTransaction.run(distQuery);

    if (distRows.length > 0) {
      const dRow = distRows[0].toJSON();
      const nextOrderId = Number(dRow.next_order_id);
      const minOrderId = Math.max(1, nextOrderId - 20);

      const stockQuery = {
        sql: 'SELECT DISTINCT s.item_id FROM order_line ol JOIN stock s ON s.warehouse_id = ol.warehouse_id AND s.item_id = ol.item_id WHERE ol.warehouse_id = @w AND ol.district_id = @d AND ol.order_id >= @minOrderId AND ol.order_id < @nextOrderId AND s.quantity < @threshold',
        params: {
          w: warehouseId,
          d: districtId,
          minOrderId,
          nextOrderId,
          threshold,
        },
        types: {
          w: 'int64',
          d: 'int64',
          minOrderId: 'int64',
          nextOrderId: 'int64',
          threshold: 'int64',
        },
        requestOptions: {requestTag: 'stock_level_partitioned_stock'},
      };

      const [partitions] =
        await batchTransaction.createQueryPartitions(stockQuery);

      const results = await Promise.all(
        partitions.map(async partition => {
          const [rows] = await batchTransaction.execute(partition);
          return rows;
        }),
      );

      const itemIdsSet = new Set<number>();
      for (const rows of results) {
        for (const row of rows) {
          const r = row.toJSON();
          itemIdsSet.add(Number(r.item_id));
        }
      }
      const distinctCount = itemIdsSet.size;
    }
  } finally {
    await batchTransaction.close();
  }
}
