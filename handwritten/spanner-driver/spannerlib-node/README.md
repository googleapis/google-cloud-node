# Node-API Wrapper for Spanner Shared Library

This package provides a high-performance Node-API (N-API) bridge to the Go-based Spanner shared library. It offers superior stability and performance compared to traditional FFI approaches.

## Prerequisites

- Node.js >= 20.0.0
- Go compiler (to build the underlying shared library, if not pre-built)
- C++ toolchain (GCC/Clang or MSVC)

## Installation & Building

To build the native addon and compile the driver for development, run:

```bash
npm install
```

For a comprehensive architectural breakdown of the 3-layer compilation pipeline (Go Link, C++ node-gyp bridge, and Dual-publishing ESM/CJS), refer to the [BUILD_AND_RELEASE.md](file:///Users/gargsurbhi/Work/Github/go-sql-spanner/spannerlib/wrappers/spannerlib-node/BUILD_AND_RELEASE.md) documentation.

## Usage

```javascript
const { Pool, Connection } = require('spannerlib-node');

async function run() {
    const pool = await Pool.create(connectionString);
    
    const conn = await pool.createConnection();
    const rows = await conn.executeSql('SELECT 1');
    
    while (await rows.next()) {
        // process rows
    }
    
    await rows.close();
    await conn.close();
    await pool.close();
}
```

## Architecture

The wrapper consists of:
1.  **`src/cpp/addon.cc`**: C++ Node-API bridge that handles thread boundaries and type conversions between V8 and C.
2.  **`src/ffi/utils.ts`**: Helper functions to invoke native methods asynchronously using Promises.
3.  **`src/lib/`**: JavaScript classes (`Pool`, `Connection`, `Rows`) that provide a clean object-oriented interface.

### Component Interaction

The wrapper operates by executing calls through the low-level native bridge (`addon.cc`). The user-facing classes (`Pool`, `Connection`, `Rows`) in the `lib` folder map execution requests into Protobuf payloads and pass them to the bridge via the asynchronous dispatcher in `utils.ts`. Each successful execution returns memory ID handles that are tracked inside the singleton state registry (`spannerlib.ts`) to link native garbage collection triggers.

### Component Interaction & Memory Management

When a JavaScript object (like a `Pool` or `Connection`) is created, it holds an ID referencing a pinned Go object in memory. The `spannerLib` singleton maintains a **`FinalizationRegistry`**. This registry allows Node.js to listen for when the JavaScript object is garbage collected. When GC occurs, the registry automatically triggers a cleanup call to the native layer to release the corresponding Go object, preventing native memory leaks even if the developer forgets to call `.close()` explicitly.
