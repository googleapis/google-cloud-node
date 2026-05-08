/**
 * REPL-friendly benchmark script for DeviceRecentActivityLog table.insert()
 *
 * Dependencies (install with npm):
 * - @google-cloud/spanner
 * - @grpc/grpc-js
 *
 * Usage in k8s pod:
 * 1. kubectl exec -it <pod-name> -- node
 * 2. Paste this entire file
 * 3. await runBenchmark()
 */

/* eslint-disable no-console */
/* eslint-disable eslint-plugin-node/no-process-env */
/* eslint-disable no-await-in-loop */

// Disable multiplexed sessions to use traditional session pool
// This avoids "ReleaseError: Unable to release unknown resource" with SDK v8.7.1
// process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false'

// Benchmark configuration - can be overridden via environment variables
const SAMPLE_SIZE = parseInt(process.env.SAMPLE_SIZE || '10000', 10)
const INSERT_COUNT = parseInt(process.env.INSERT_COUNT || '1000', 10)
const INSERT_CONCURRENCY = parseInt(process.env.INSERT_CONCURRENCY || '110', 10)
const BATCH_COUNT = parseInt(process.env.BATCH_COUNT || '1', 10)
const DUPLICATE_INSERT = process.env.DUPLICATE_INSERT === 'true'

// Database configuration
const DB_PROJECT_ID = process.env.DB_PROJECT_ID || 'emulator'
const DB_INSTANCE = process.env.DB_INSTANCE || 'device-tracking'
const DB_DATABASE = process.env.DB_DATABASE || 'device-tracking'
const DB_SCHEMA = process.env.DB_SCHEMA || 'tracking'
const POOL_OPTIONS = process.env.POOL_OPTIONS
  ? JSON.parse(process.env.POOL_OPTIONS)
  : {
      max: 20,
      min: 1,
      incStep: 5,
      maxIdle: 1,
      idlesAfter: 1,
      keepAlive: 10,
      acquireTimeout: 10_000,
      fail: false,
    }

async function runBenchmark() {
  // Dynamic imports for REPL compatibility
  const { randomUUID, subtle } = await import('node:crypto')
  const { Spanner } = await import('@google-cloud/spanner')
  const { status: Status } = await import('@grpc/grpc-js')

  // ====== INLINE UTILITIES ======

  async function sha256Hash(str: string | undefined): Promise<string> {
    const encoder = new TextEncoder()
    return Array.from(
      new Uint8Array(await subtle.digest('SHA-256', encoder.encode(str))),
    )
      .map((b) => `00${b.toString(16)}`.slice(-2))
      .join('')
  }

  async function createDeviceRecentActivityLogId(opts: {
    deviceId: string
    deviceDetailsId: string
    httpRequestDetailsId: string
    createdAt: Date
    sessionId?: string | null | undefined
  }): Promise<string> {
    return sha256Hash(
      `${opts.deviceId}${opts.deviceDetailsId}${opts.httpRequestDetailsId}${opts.createdAt.getTime()}${opts.sessionId ?? ''}`,
    )
  }

  function ipToBytes(ipAddress: string): Buffer {
    const octets = ipAddress.split('.')
    if (octets.length === 4) {
      const bytes = Buffer.alloc(4)
      for (let i = 0; i < 4; i++) {
        bytes[i] = parseInt(octets[i], 10)
      }
      return bytes
    }
    throw new Error('Invalid IP address format')
  }

  async function asyncMap<T, R>(
    items: T[],
    mapperFn: (item: T, index: number) => Promise<R>,
    opts?: { concurrency: number },
  ): Promise<R[]> {
    const concurrency = opts?.concurrency ?? Infinity
    const results: R[] = new Array(items.length)
    let currentIndex = 0

    async function processNext(): Promise<void> {
      while (currentIndex < items.length) {
        const index = currentIndex++
        results[index] = await mapperFn(items[index], index)
      }
    }

    const workers = Array.from(
      { length: Math.min(concurrency, items.length) },
      () => processNext(),
    )
    await Promise.all(workers)
    return results
  }

  async function createBenchmarkRecord(opts: {
    index: number
    numDevices: number
    numDetails: number
    numRequests: number
    numLocations: number
  }) {
    // Generate IDs with controlled cardinality using modulo and SHA256
    const deviceRecordId = await sha256Hash(
      `device-${opts.index % opts.numDevices}`,
    )
    const deviceDetailsId = await sha256Hash(
      `detail-${opts.index % opts.numDetails}`,
    )
    const httpRequestDetailsId = await sha256Hash(
      `request-${opts.index % opts.numRequests}`,
    )
    const httpRequestLocationId =
      opts.numLocations > 0
        ? await sha256Hash(`location-${opts.index % opts.numLocations}`)
        : null

    const xRequestId = randomUUID()
    const createdAt = new Date(Date.now() + opts.index * 1000)
    const sessionId = randomUUID()

    const deviceRecentActivityLogId = await createDeviceRecentActivityLogId({
      deviceId: `benchmark-${opts.index}`,
      deviceDetailsId,
      httpRequestDetailsId,
      createdAt,
      sessionId,
    })

    return {
      deviceRecentActivityLogId,
      deviceRecordId,
      deviceDetailsId,
      httpRequestDetailsId,
      ipAddress: ipToBytes('192.168.1.100'),
      institutionId: 'benchmark-institution',
      userId: Math.random() > 0.5 ? 'user-123' : null,
      username: null,
      xRequestId,
      httpRequestLocationId,
      latency: Math.random() > 0.5 ? Math.floor(Math.random() * 100) : null,
      sessionId,
      createdAt,
    }
  }

  // ====== DATABASE CONNECTION ======

  console.log('Initializing database connection...')
  const spanner = new Spanner({
    projectId: DB_PROJECT_ID,
  })

  const instance = spanner.instance(DB_INSTANCE)
  const poolOpts =
    process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS === 'false'
      ? POOL_OPTIONS
      : {}
  const database = instance.database(DB_DATABASE, poolOpts)

  try {
    console.log('Generating benchmark data...')
    console.log(
      `Configuration: SAMPLE_SIZE=${SAMPLE_SIZE}, INSERT_COUNT=${INSERT_COUNT}, INSERT_CONCURRENCY=${INSERT_CONCURRENCY}, BATCH_COUNT=${BATCH_COUNT}, DUPLICATE_INSERT=${DUPLICATE_INSERT}`,
    )

    // Generate IDs instead of querying - use sampleSize to control cardinality
    const numDevices = SAMPLE_SIZE
    const numDetails = SAMPLE_SIZE
    const numRequests = SAMPLE_SIZE
    const numLocations = SAMPLE_SIZE

    console.log(`  Will generate IDs with cardinality: ${SAMPLE_SIZE}`)
    console.log(`  Devices: ${numDevices} unique`)
    console.log(`  Details: ${numDetails} unique`)
    console.log(`  Requests: ${numRequests} unique`)
    console.log(`  Locations: ${numLocations} unique`)

    const totalRecords = INSERT_COUNT * BATCH_COUNT
    const totalInserts = DUPLICATE_INSERT ? totalRecords * 2 : totalRecords
    console.log(
      `\nCreating ${totalRecords} records in ${INSERT_COUNT} batches of ${BATCH_COUNT}...\n`,
    )
    if (DUPLICATE_INSERT) {
      console.log(
        `Total insert operations: ${totalInserts} (${totalRecords} + ${totalRecords} duplicates)\n`,
      )
    } else {
      console.log(`Total insert operations: ${totalInserts} (no duplicates)\n`)
    }

    const batches = []
    for (let i = 0; i < INSERT_COUNT; i++) {
      const batch = []
      for (let j = 0; j < BATCH_COUNT; j++) {
        const record = await createBenchmarkRecord({
          index: i * BATCH_COUNT + j,
          numDevices,
          numDetails,
          numRequests,
          numLocations,
        })
        batch.push(record)
      }
      batches.push(batch)
    }

    console.log(
      `\nStarting ${INSERT_COUNT} batch inserts with concurrency: ${INSERT_CONCURRENCY}...\n`,
    )

    const durations: number[] = []
    let alreadyExistsCount = 0
    const overallStartTime = performance.now()

    await asyncMap(
      batches,
      async (batch, i) => {
        const table = database.table(`${DB_SCHEMA}.DeviceRecentActivityLog`)

        const label = `batch-${i} (${BATCH_COUNT} records, concurrency: ${INSERT_CONCURRENCY})`
        console.time(label)
        const startTime = performance.now()

        console.log(label)

        // First insert - should succeed
        try {
          await table.insert(batch)
        } catch (e: any) {
          if (e.code === Status.ALREADY_EXISTS) {
            alreadyExistsCount++
            console.log(`  ${label} - ALREADY_EXISTS (expected on retry)`)
          } else {
            throw e
          }
        }

        if (DUPLICATE_INSERT) {
          // Duplicate insert - should trigger ALREADY_EXISTS
          try {
            await table.insert(batch)
          } catch (e: any) {
            if (e.code === Status.ALREADY_EXISTS) {
              alreadyExistsCount++
              console.log(`  ${label} - ALREADY_EXISTS (expected on duplicate)`)
            } else {
              throw e
            }
          }
        }

        const duration = performance.now() - startTime
        console.timeEnd(label)
        durations.push(duration)

        if ((i + 1) % 10 === 0) {
          const avg = durations.slice(-10).reduce((a, b) => a + b, 0) / 10
          console.log(
            `  [${i + 1}/${INSERT_COUNT}] Last 10 batches avg: ${avg.toFixed(2)}ms (${BATCH_COUNT} records/batch, ${INSERT_CONCURRENCY} concurrent)\n`,
          )
        }
      },
      { concurrency: INSERT_CONCURRENCY },
    )

    const overallDuration = performance.now() - overallStartTime
    const insertsPerSecond = (totalInserts / (overallDuration / 1000)).toFixed(
      2,
    )

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('  Benchmark Summary')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`  Total Batches:      ${INSERT_COUNT}`)
    console.log(`  Batch Size:         ${BATCH_COUNT}`)
    console.log(`  Total Records:      ${totalRecords}`)
    console.log(
      `  Total Inserts:      ${totalInserts} (includes ${alreadyExistsCount} duplicates)`,
    )
    console.log(`  Concurrency:        ${INSERT_CONCURRENCY}`)
    console.log(`  Total Time:         ${overallDuration.toFixed(2)}ms`)
    console.log(`  Inserts/Second:     ${insertsPerSecond}`)
    console.log(
      `  Avg Batch Duration:  ${(durations.reduce((a, b) => a + b, 0) / durations.length).toFixed(2)}ms`,
    )
    console.log(`  Min Batch Duration:  ${Math.min(...durations).toFixed(2)}ms`)
    console.log(`  Max Batch Duration:  ${Math.max(...durations).toFixed(2)}ms`)

    durations.sort((a, b) => a - b)
    const p50 = durations[Math.floor(durations.length * 0.5)]
    const p90 = durations[Math.floor(durations.length * 0.9)]
    const p95 = durations[Math.floor(durations.length * 0.95)]
    const p99 = durations[Math.floor(durations.length * 0.99)]

    console.log(`  P50:                ${p50.toFixed(2)}ms`)
    console.log(`  P90:                ${p90.toFixed(2)}ms`)
    console.log(`  P95:                ${p95.toFixed(2)}ms`)
    console.log(`  P99:                ${p99.toFixed(2)}ms`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
  } finally {
    await database.close()
  }
}

// Export for REPL usage
;(globalThis as any).runBenchmark = runBenchmark
console.log('✓ Benchmark loaded. Run with: await runBenchmark()')

await runBenchmark()
