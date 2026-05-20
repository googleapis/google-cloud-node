/**
 * REPL-friendly benchmark script for DeviceRecentActivityLog table point reads
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

export { };

// Benchmark configuration - can be overridden via environment variables
const SAMPLE_SIZE = parseInt(process.env.SAMPLE_SIZE || '10000', 10)
const READ_COUNT = parseInt(process.env.READ_COUNT || '10000', 10)
const READ_CONCURRENCY = parseInt(process.env.READ_CONCURRENCY || '110', 10)
const GRPC_GCP_CONFIG_PATH = process.env.GRPC_GCP_CONFIG_PATH || ''

// Database configuration
const DB_PROJECT_ID = process.env.DB_PROJECT_ID || 'emulator'
const DB_INSTANCE = process.env.DB_INSTANCE || 'device-tracking'
const DB_DATABASE = process.env.DB_DATABASE || 'device-tracking'
const DB_SCHEMA = process.env.DB_SCHEMA || 'tracking'
const POOL_OPTIONS = process.env.POOL_OPTIONS
  ? JSON.parse(process.env.POOL_OPTIONS)
  : {
    min: 100,
    max: 400,
  }

async function getActiveChannelCount(): Promise<number> {
  try {
    const fs = await import('node:fs')
    let content = ''
    try {
      content += fs.readFileSync('/proc/net/tcp', 'utf8')
    } catch (e) { }
    try {
      content += fs.readFileSync('/proc/net/tcp6', 'utf8')
    } catch (e) { }

    const lines = content.split('\n')
    let count = 0
    const foundPorts: string[] = []
    for (const line of lines) {
      const parts = line.trim().split(/\s+/)
      if (parts.length >= 4) {
        const remAddress = parts[2] // remote address:remote port in hex
        const state = parts[3] // connection state in hex
        const portIndex = remAddress.indexOf(':')
        if (portIndex !== -1) {
          const portHex = remAddress.substring(portIndex + 1)
          const portDec = parseInt(portHex, 16)
          if (!isNaN(portDec) && portDec > 0) {
            foundPorts.push(`${portDec}(state:${state})`)
            if (portHex.toUpperCase() === '01BB' && state === '01') {
              count++
            }
          }
        }
      }
    }
    if (count === 0 && foundPorts.length > 0) {
      // Only print occasionally to avoid log spamming
      if (Math.random() < 0.15) {
        console.log('  [TCP Monitor Debug] Active outbound ports found in container:', [...new Set(foundPorts)].slice(0, 5).join(', '))
      }
    }
    return count
  } catch (e: any) {
    console.error('  [TCP Monitor Error]: Failed to parse active channels:', e.stack || e.message || e)
    return 0
  }
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
    const createdAt = new Date(Date.now() - (opts.index * 1000)) // historical dates for reads
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
  const spannerOptions: any = {
    projectId: DB_PROJECT_ID,
  }

  let customConfig: any = null
  if (process.env.GRPC_GCP_CONFIG_JSON) {
    console.log('Loading custom gRPC GCP config inline from GRPC_GCP_CONFIG_JSON')
    customConfig = JSON.parse(process.env.GRPC_GCP_CONFIG_JSON)
  } else if (GRPC_GCP_CONFIG_PATH) {
    console.log(`Loading custom gRPC GCP config from: ${GRPC_GCP_CONFIG_PATH}`)
    const fs = await import('node:fs')
    const rawConfig = fs.readFileSync(GRPC_GCP_CONFIG_PATH, 'utf8')
    customConfig = JSON.parse(rawConfig)
  }

  if (customConfig) {
    const { createRequire } = await import('node:module')
    // @ts-ignore
    const require = createRequire(import.meta.url)

    const grpc = await import('@grpc/grpc-js')
    const grpcGcp = require('grpc-gcp')(grpc)

    // Load Spanner's default spanner_grpc_config.json
    let defaultConfig: any
    try {
      const defaultConfigPath = require.resolve('@google-cloud/spanner/build/src/spanner_grpc_config.json')
      defaultConfig = require(defaultConfigPath)
    } catch (e) {
      // Fallback for local/repo development environment
      defaultConfig = require('../../src/spanner_grpc_config.json')
    }

    // Merge custom channelPool parameters, leaving default Spanner RPC "method" config untouched
    const customChannelPool = customConfig.channelPool || customConfig
    const mergedConfig = {
      ...defaultConfig,
      channelPool: {
        ...defaultConfig.channelPool,
        ...customChannelPool,
      },
    }

    console.log('Merged gRPC GCP Config:', JSON.stringify(mergedConfig, null, 2))
    spannerOptions['grpc.gcpApiConfig'] = grpcGcp.createGcpApiConfig(mergedConfig)
  }

  const spanner = new Spanner(spannerOptions)

  const instance = spanner.instance(DB_INSTANCE)
  const poolOpts =
    process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS === 'false'
      ? POOL_OPTIONS
      : {}
  const database = instance.database(DB_DATABASE, poolOpts)

  let monitorInterval: NodeJS.Timeout | undefined
  try {
    const table = database.table(`${DB_SCHEMA}.DeviceRecentActivityLog`)

    console.log('Generating target read keys from sample space...')
    const targetKeys: string[] = []
    for (let i = 0; i < READ_COUNT; i++) {
      // Re-create the identical IDs using index space
      const record = await createBenchmarkRecord({
        index: i % SAMPLE_SIZE,
        numDevices: SAMPLE_SIZE,
        numDetails: SAMPLE_SIZE,
        numRequests: SAMPLE_SIZE,
        numLocations: SAMPLE_SIZE,
      })
      targetKeys.push(record.deviceRecentActivityLogId)
    }

    console.log(
      `Configuration: SAMPLE_SIZE=${SAMPLE_SIZE}, READ_COUNT=${READ_COUNT}, READ_CONCURRENCY=${READ_CONCURRENCY}`,
    )

    console.log(
      `\nStarting ${READ_COUNT} Point Reads with concurrency: ${READ_CONCURRENCY}...\n`,
    )

    const durations: number[] = []
    let successfulReads = 0
    let notFoundReads = 0
    const overallStartTime = performance.now()

    // Start background TCP connection monitor
    monitorInterval = setInterval(async () => {
      const count = await getActiveChannelCount()
      console.log(`  [TCP Monitor] Active Spanner gRPC Channels (TCP:443): ${count}`)
    }, 1000)

    await asyncMap(
      targetKeys,
      async (key, i) => {
        const label = `read-${i} (concurrency: ${READ_CONCURRENCY})`
        const startTime = performance.now()

        try {
          const [rows] = await table.read({
            keys: [key],
            columns: [
              'deviceRecentActivityLogId',
              'deviceRecordId',
              'deviceDetailsId',
              'userId',
              'createdAt',
            ],
          })

          if (rows.length > 0) {
            successfulReads++
          } else {
            notFoundReads++
          }
        } catch (e: any) {
          console.error(`Error executing point read for key ${key}:`, e.message)
        }

        const duration = performance.now() - startTime
        durations.push(duration)

        if ((i + 1) % 1000 === 0) {
          const avg = durations.slice(-1000).reduce((a, b) => a + b, 0) / 1000
          console.log(
            `  [${i + 1}/${READ_COUNT}] Last 1000 reads avg: ${avg.toFixed(2)}ms (${READ_CONCURRENCY} concurrent)\n`,
          )
        }
      },
      { concurrency: READ_CONCURRENCY },
    )

    const overallDuration = performance.now() - overallStartTime
    const readsPerSecond = (READ_COUNT / (overallDuration / 1000)).toFixed(2)

    const spannerVersion = (spanner as any).options?.libVersion || 'NA'

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('  Point Read Benchmark Summary')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`  Spanner SDK Version: ${spannerVersion}`)
    console.log(`  SPANNER_DISABLE_BUILTIN_METRICS: ${process.env.SPANNER_DISABLE_BUILTIN_METRICS}`)
    console.log(`  Total Point Reads:  ${READ_COUNT}`)
    console.log(`  Successful Reads:   ${successfulReads}`)
    console.log(`  Not Found/Empty:    ${notFoundReads}`)
    console.log(`  Concurrency:        ${READ_CONCURRENCY}`)
    console.log(`  Total Time:         ${overallDuration.toFixed(2)}ms`)
    console.log(`  Reads/Second:       ${readsPerSecond}`)
    console.log(
      `  Avg Read Duration:  ${(durations.reduce((a, b) => a + b, 0) / durations.length).toFixed(2)}ms`,
    )
    console.log(`  Min Read Duration:  ${Math.min(...durations).toFixed(2)}ms`)
    console.log(`  Max Read Duration:  ${Math.max(...durations).toFixed(2)}ms`)

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
    if (monitorInterval) {
      clearInterval(monitorInterval)
    }
    await database.close()
  }
}

// Export for REPL usage
; (globalThis as any).runBenchmark = runBenchmark
console.log('✓ Point Read Benchmark loaded. Run with: await runBenchmark()')

runBenchmark().catch((err) => {
  console.error("Unhandled fatal exception in main context:", err);
  process.exit(1);
});
