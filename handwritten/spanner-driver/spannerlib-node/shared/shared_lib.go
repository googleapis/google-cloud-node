// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package main

import "C"
import (
	"context"
	"runtime"
	"sync"
	"sync/atomic"
	"time"
	"unsafe"

	"spannerlib/lib"
)

// An (empty) main function is required for C libraries.
func main() {}

var (
	pinners   = sync.Map{}
	pinnerIdx atomic.Int64
)

// Release releases (unpins) a previously pinned message. Pinners are created and
// returned for each function call in this library, and it is the responsibility of
// the caller to call Release when it is done with the data that was returned.
// Note that 'done' can also mean 'the data has been copied into memory that is
// managed by the caller'.
//
//export Release
func Release(pinnerId int64) int32 {
	if pinnerId <= 0 {
		return 0
	}
	val, ok := pinners.LoadAndDelete(pinnerId)
	if !ok {
		return 1
	}
	pinner := val.(*runtime.Pinner)
	pinner.Unpin()
	return 0
}

// pin pins the memory location pointed to by the result of the given message.
// This prevents the Go runtime from moving or garbage collecting this memory.
// The returned pinner ID must be used to call Release when the caller is done
// with the message.
func pin(msg *lib.Message) (int64, int32, int64, int32, unsafe.Pointer) {
	if msg.Length() == 0 {
		return 0, msg.Code, msg.ObjectId, 0, nil
	}
	pinner := &runtime.Pinner{}
	pinner.Pin(&(msg.Res[0]))
	idx := pinnerIdx.Add(1)
	pinners.Store(idx, pinner)
	return idx, msg.Code, msg.ObjectId, msg.Length(), msg.ResPointer()
}

// CreatePool creates a pool of database connections. A Pool is equivalent to a *sql.DB.
// All connections that are created from a pool share the same underlying Spanner client.
//
//export CreatePool
func CreatePool(userAgentSuffix, connectionString string) (int64, int32, int64, int32, unsafe.Pointer) {
	// TODO: Allow a user of the shared library to specify a custom context, for example with a custom timeout.
	ctx := context.Background()
	msg := lib.CreatePool(ctx, userAgentSuffix, connectionString)
	return pin(msg)
}

// ClosePool closes a previously opened Pool. All connections in the pool are also closed.
//
//export ClosePool
func ClosePool(id int64) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()
	msg := lib.ClosePool(ctx, id)
	return pin(msg)
}

// CreateConnection creates or borrows a connection from a previously created pool.
// Note that as Spanner does not really use a 'connection-based' API, creating a
// connection is a relatively cheap operation. It does not physically create a new
// gRPC channel or any other physical connection to Spanner, and it also does not
// create a server-side session. Instead, all session state is stored in the client.
//
//export CreateConnection
func CreateConnection(poolId int64) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.CreateConnection(ctx, poolId)
	return pin(msg)
}

// CloseConnection closes a previously opened connection and releases all resources
// associated with the connection.
//
//export CloseConnection
func CloseConnection(poolId, connId int64) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()
	msg := lib.CloseConnection(ctx, poolId, connId)
	return pin(msg)
}

// WriteMutations writes an array of mutations to Spanner. The mutations are buffered in
// the current read/write transaction if the connection currently has a read/write transaction.
// The mutations are applied to the database in a new read/write transaction that is automatically
// committed if the connection currently does not have a transaction.
//
// The function returns an error if the connection is currently in a read-only transaction.
//
// The mutationsBytes must be an encoded BatchWriteRequest_MutationGroup protobuf object.
//
//export WriteMutations
func WriteMutations(poolId, connectionId int64, mutationsBytes []byte) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.WriteMutations(ctx, poolId, connectionId, mutationsBytes)
	return pin(msg)
}

// Execute executes a SQL statement on the given connection.
// The return type is an identifier for a Rows object. This identifier can be used to
// call the functions Metadata and Next to get respectively the metadata of the result
// and the next row of results.
//
// TODO: This function should also be able to return a ResultSet containing the first N rows, the metadata, and the stats.
//
//export Execute
func Execute(poolId, connectionId int64, statement []byte) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.Execute(ctx, poolId, connectionId, statement)
	return pin(msg)
}

// ExecuteBatch executes a batch of statements on the given connection. The statements must all be either DML or DDL
// statements. Mixing DML and DDL in a batch is not supported. Executing queries in a batch is also not supported.
// The batch will use the current transaction on the given connection, or execute as a single auto-commit statement
// if the connection does not have a transaction.
//
//export ExecuteBatch
func ExecuteBatch(poolId, connectionId int64, statements []byte) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.ExecuteBatch(ctx, poolId, connectionId, statements)
	return pin(msg)
}

// Metadata returns the metadata of a Rows object.
//
//export Metadata
func Metadata(poolId, connId, rowsId int64) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.Metadata(ctx, poolId, connId, rowsId)
	return pin(msg)
}

// ResultSetStats returns the statistics for a statement that has been executed. This includes
// the number of rows affected in case of a DML statement.
// Statistics are only available once all rows have been consumed.
//
//export ResultSetStats
func ResultSetStats(poolId, connId, rowsId int64) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.ResultSetStats(ctx, poolId, connId, rowsId)
	return pin(msg)
}

// NextResultSet returns the metadata of the next result set of the given Rows object, or an empty message
// if the Rows object does not contain more result sets.
//
//export NextResultSet
func NextResultSet(poolId, connId, rowsId int64) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.NextResultSet(ctx, poolId, connId, rowsId)
	return pin(msg)
}

// Next returns the next row in a Rows object. The returned message contains a protobuf
// ListValue that contains all the columns of the row. The message is empty if there are
// no more rows in the Rows object.
//
//export Next
func Next(poolId, connId, rowsId int64, numRows int32, encodeRowOption int32) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	// TODO: Implement support for:
	//  1. Fetching more than one row at a time.
	//  2. Specifying the return type (e.g. proto, struct, ...)
	msg := lib.Next(ctx, poolId, connId, rowsId)
	return pin(msg)
}

// CloseRows closes and cleans up all memory held by a Rows object. This must be called
// when the application is done with the Rows object.
//
//export CloseRows
func CloseRows(poolId, connId, rowsId int64) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()
	msg := lib.CloseRows(ctx, poolId, connId, rowsId)
	return pin(msg)
}

// BeginTransaction begins a new transaction on the given connection.
// The txOpts byte slice contains a serialized protobuf TransactionOptions object.
//
//export BeginTransaction
func BeginTransaction(poolId, connectionId int64, txOpts []byte) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.BeginTransaction(ctx, poolId, connectionId, txOpts)
	return pin(msg)
}

// Commit commits the current transaction on a connection. All transactions must be
// either committed or rolled back, including read-only transactions. This to ensure
// that all resources that are held by a transaction are cleaned up.
//
//export Commit
func Commit(poolId, connectionId int64) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.Commit(ctx, poolId, connectionId)
	return pin(msg)
}

// Rollback rolls back a previously started transaction. All transactions must be either
// committed or rolled back, including read-only transactions. This to ensure that
// all resources that are held by a transaction are cleaned up.
//
// Spanner does not require read-only transactions to be committed or rolled back, but
// this library requires that all transactions are committed or rolled back to clean up
// all resources. Commit and Rollback are semantically the same for read-only transactions
// on Spanner, and both functions just close the transaction.
//
//export Rollback
func Rollback(poolId, connectionId int64) (int64, int32, int64, int32, unsafe.Pointer) {
	ctx := context.Background()
	msg := lib.Rollback(ctx, poolId, connectionId)
	return pin(msg)
}
