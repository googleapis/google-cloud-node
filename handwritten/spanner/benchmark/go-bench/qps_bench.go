package main

import (
	"bufio"
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"math"
	"math/rand"
	"os"
	"runtime"
	"sort"
	"strconv"
	"strings"
	"sync"
	"sync/atomic"
	"syscall"
	"time"

	"cloud.google.com/go/spanner"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
)

// CPUSnapshot captures system-wide CPU tick stats from /proc/stat
type CPUSnapshot struct {
	User    uint64
	Nice    uint64
	System  uint64
	Idle    uint64
	IOWait  uint64
	IRQ     uint64
	SoftIRQ uint64
	Steal   uint64
}

func (s CPUSnapshot) Total() uint64 {
	return s.User + s.Nice + s.System + s.Idle + s.IOWait + s.IRQ + s.SoftIRQ + s.Steal
}

func (s CPUSnapshot) Busy() uint64 {
	return s.Total() - s.Idle - s.IOWait
}

func readCPUSnapshot() (CPUSnapshot, error) {
	file, err := os.Open("/proc/stat")
	if err != nil {
		return CPUSnapshot{}, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if strings.HasPrefix(line, "cpu ") {
			fields := strings.Fields(line)
			if len(fields) < 8 {
				return CPUSnapshot{}, fmt.Errorf("invalid cpu line in /proc/stat")
			}
			u, _ := strconv.ParseUint(fields[1], 10, 64)
			n, _ := strconv.ParseUint(fields[2], 10, 64)
			s, _ := strconv.ParseUint(fields[3], 10, 64)
			i, _ := strconv.ParseUint(fields[4], 10, 64)
			io, _ := strconv.ParseUint(fields[5], 10, 64)
			ir, _ := strconv.ParseUint(fields[6], 10, 64)
			sir, _ := strconv.ParseUint(fields[7], 10, 64)
			st := uint64(0)
			if len(fields) >= 9 {
				st, _ = strconv.ParseUint(fields[8], 10, 64)
			}
			return CPUSnapshot{
				User:    u,
				Nice:    n,
				System:  s,
				Idle:    i,
				IOWait:  io,
				IRQ:     ir,
				SoftIRQ: sir,
				Steal:   st,
			}, nil
		}
	}
	return CPUSnapshot{}, fmt.Errorf("cpu line not found in /proc/stat")
}

func getProcessCPUTimeMs() float64 {
	var ru syscall.Rusage
	if err := syscall.Getrusage(syscall.RUSAGE_SELF, &ru); err != nil {
		return 0
	}
	userMs := float64(ru.Utime.Sec)*1000.0 + float64(ru.Utime.Usec)/1000.0
	sysMs := float64(ru.Stime.Sec)*1000.0 + float64(ru.Stime.Usec)/1000.0
	return userMs + sysMs
}

type QPSBenchmarkResult struct {
	Client          string  `json:"client"`
	ChannelConfig   string  `json:"channelConfig"`
	TargetQPS       int     `json:"targetQps"`
	AchievedQPS     float64 `json:"achievedQps"`
	TotalTimeMs     float64 `json:"totalTimeMs"`
	TotalReqs       int     `json:"total"`
	ErrorCount      uint64  `json:"errors"`
	ErrorRate       float64 `json:"errorRate"`
	AvgLatencyMs    float64 `json:"avg"`
	MinLatencyMs    float64 `json:"min"`
	MaxLatencyMs    float64 `json:"max"`
	P50             float64 `json:"p50"`
	P90             float64 `json:"p90"`
	P95             float64 `json:"p95"`
	P99             float64 `json:"p99"`
	VMCPUUtil       float64 `json:"vmCpuUtil"`
	ProcCPUUtil     float64 `json:"procCpuUtil"`
	CPUUtil         float64 `json:"cpuUtil"`
	CPUMsPerReq     float64 `json:"cpuMsPerReq"`
	WorkersUsed     int     `json:"workersUsed"`
}

func executeGoQuery(ctx context.Context, client *spanner.Client, workload string, customSQL string, table string) error {
	var stmt spanner.Statement
	if customSQL != "" {
		if strings.Contains(customSQL, "@id") {
			randomID := fmt.Sprintf("user-%d", rand.Intn(100000))
			stmt = spanner.Statement{
				SQL: customSQL,
				Params: map[string]interface{}{
					"id": randomID,
				},
			}
		} else {
			stmt = spanner.NewStatement(customSQL)
		}
	} else if workload == "pointSelect" {
		randomID := fmt.Sprintf("user-%d", rand.Intn(100000))
		stmt = spanner.Statement{
			SQL: fmt.Sprintf("SELECT * FROM %s WHERE id = @id", table),
			Params: map[string]interface{}{
				"id": randomID,
			},
		}
	} else if workload == "limit1000" {
		stmt = spanner.NewStatement(fmt.Sprintf("SELECT * FROM %s LIMIT 1000", table))
	} else {
		stmt = spanner.NewStatement("SELECT 1 as col_int, 'CONSTANT' as col_const")
	}

	iter := client.Single().Query(ctx, stmt)
	defer iter.Stop()

	for {
		row, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return err
		}
		if workload == "pointSelect" || workload == "limit1000" || strings.Contains(stmt.SQL, "SELECT *") {
			var id, f0, f1, f2, f3, f4, f5, f6, f7, f8, f9 string
			if err := row.Columns(&id, &f0, &f1, &f2, &f3, &f4, &f5, &f6, &f7, &f8, &f9); err != nil {
				for i := 0; i < row.Size(); i++ {
					var genericVal spanner.GenericColumnValue
					_ = row.Column(i, &genericVal)
				}
			}
		} else {
			for i := 0; i < row.Size(); i++ {
				var genericVal spanner.GenericColumnValue
				_ = row.Column(i, &genericVal)
			}
		}
	}
	return nil
}

func runPacedLoad(
	ctx context.Context,
	client *spanner.Client,
	workload string,
	customSQL string,
	table string,
	targetQPS int,
	duration time.Duration,
) (latencies []float64, errCount uint64, elapsed time.Duration, vmCPUPercent float64, procCPUPercent float64, procCPUMs float64, workers int) {
	// Size worker pool to comfortably sustain targetQPS even at ~50ms tail latencies
	workers = int(math.Ceil(float64(targetQPS) * 0.05))
	if workers < 4 {
		workers = 4
	}
	if workers > 256 {
		workers = 256
	}

	intervalNs := int64(1e9 / float64(targetQPS))
	if intervalNs < 1 {
		intervalNs = 1
	}

	benchCtx, cancel := context.WithTimeout(ctx, duration)
	defer cancel()

	var (
		wg          sync.WaitGroup
		latenciesMu sync.Mutex
		nextSlotNs  int64
	)
	latencies = make([]float64, 0, targetQPS*int(duration.Seconds())+1000)

	startVMCPU, _ := readCPUSnapshot()
	startProcMs := getProcessCPUTimeMs()
	startTime := time.Now()
	atomic.StoreInt64(&nextSlotNs, startTime.UnixNano())

	for w := 0; w < workers; w++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			localLats := make([]float64, 0, (targetQPS*int(duration.Seconds()))/workers+64)

			for {
				select {
				case <-benchCtx.Done():
					latenciesMu.Lock()
					latencies = append(latencies, localLats...)
					latenciesMu.Unlock()
					return
				default:
				}

				slotNs := atomic.AddInt64(&nextSlotNs, intervalNs) - intervalNs
				nowNs := time.Now().UnixNano()
				waitNs := slotNs - nowNs

				if waitNs > 0 {
					select {
					case <-benchCtx.Done():
						latenciesMu.Lock()
						latencies = append(latencies, localLats...)
						latenciesMu.Unlock()
						return
					case <-time.After(time.Duration(waitNs)):
					}
				} else if -waitNs > int64(100*time.Millisecond) {
					// Client is saturated and falling behind schedule; catch up slot pointer
					// so we measure steady saturation without unbounded backlog.
					atomic.CompareAndSwapInt64(&nextSlotNs, slotNs+intervalNs, nowNs)
				}

				reqStart := time.Now()
				err := executeGoQuery(ctx, client, workload, customSQL, table)
				if err != nil {
					atomic.AddUint64(&errCount, 1)
				} else {
					durMs := float64(time.Since(reqStart).Microseconds()) / 1000.0
					localLats = append(localLats, durMs)
				}
			}
		}()
	}

	wg.Wait()
	elapsed = time.Since(startTime)
	endProcMs := getProcessCPUTimeMs()
	endVMCPU, _ := readCPUSnapshot()

	procCPUMs = endProcMs - startProcMs
	numCores := float64(runtime.NumCPU())
	if elapsed.Milliseconds() > 0 {
		procCPUPercent = (procCPUMs / (float64(elapsed.Microseconds()) / 1000.0 * numCores)) * 100.0
	}

	totalDiff := endVMCPU.Total() - startVMCPU.Total()
	busyDiff := endVMCPU.Busy() - startVMCPU.Busy()
	if totalDiff > 0 {
		vmCPUPercent = (float64(busyDiff) / float64(totalDiff)) * 100.0
	} else {
		vmCPUPercent = procCPUPercent
	}

	return
}

func main() {
	project := flag.String("project", "span-cloud-testing", "Google Cloud Project ID")
	instance := flag.String("instance", "suvham-testing", "Cloud Spanner Instance ID")
	database := flag.String("database", "benchmark_db_async", "Cloud Spanner Database ID")
	table := flag.String("table", "AsyncBenchmarkTable", "Target Spanner Table Name")
	workload := flag.String("workload", "pointSelect", "Workload type: pointSelect, select1, limit1000")
	sql := flag.String("sql", "", "Optional custom SQL override")
	channels := flag.Int("channels", 0, "Number of gRPC channels (0 = default DCP customer pool)")
	targetQPS := flag.Int("target-qps", 100, "Target throughput in QPS")
	durationSec := flag.Int("duration", 10, "Benchmark duration in seconds")
	warmupSec := flag.Int("warmup", 3, "Warmup duration in seconds")
	jsonOut := flag.Bool("json", true, "Emit JSON output")
	flag.Parse()

	// Disable DirectPath unless explicitly enabled so network path matches Node & Shared Core
	if os.Getenv("GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS") != "true" &&
		os.Getenv("GOOGLE_CLOUD_ENABLE_DIRECT_PATH") != "true" {
		_ = os.Setenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH", "true")
		_ = os.Setenv("DISABLE_DIRECT_PATH", "true")
	}

	ctx := context.Background()
	dbPath := fmt.Sprintf("projects/%s/instances/%s/databases/%s", *project, *instance, *database)

	var (
		client *spanner.Client
		err    error
	)
	channelDesc := "DCP (Default)"
	if *channels > 0 {
		client, err = spanner.NewClient(ctx, dbPath, option.WithGRPCConnectionPool(*channels))
		channelDesc = fmt.Sprintf("Static (%d ch)", *channels)
	} else {
		client, err = spanner.NewClient(ctx, dbPath)
	}
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to create Spanner client: %v\n", err)
		os.Exit(1)
	}
	defer client.Close()

	// 0. Initial connection & session handshake pre-warm
	_ = executeGoQuery(ctx, client, *workload, *sql, *table)

	// 1. Warmup
	if *warmupSec > 0 {
		warmupQPS := *targetQPS
		if warmupQPS > 500 {
			warmupQPS = 500
		}
		_, _, _, _, _, _, _ = runPacedLoad(ctx, client, *workload, *sql, *table, warmupQPS, time.Duration(*warmupSec)*time.Second)
	}

	// 2. Measured Run
	lats, errs, elapsed, vmCPU, procCPU, procCPUMs, workers := runPacedLoad(
		ctx, client, *workload, *sql, *table, *targetQPS, time.Duration(*durationSec)*time.Second,
	)

	sort.Float64s(lats)
	count := len(lats)
	var p50, p90, p95, p99, sum, minLat, maxLat float64
	if count > 0 {
		minLat = lats[0]
		maxLat = lats[count-1]
		p50 = lats[int(float64(count)*0.50)]
		p90 = lats[int(float64(count)*0.90)]
		p95 = lats[int(float64(count)*0.95)]
		p99 = lats[int(float64(count)*0.99)]
		for _, v := range lats {
			sum += v
		}
	}
	avg := 0.0
	if count > 0 {
		avg = sum / float64(count)
	}
	elapsedMs := float64(elapsed.Microseconds()) / 1000.0
	achievedQPS := 0.0
	if elapsedMs > 0 {
		achievedQPS = float64(count) / (elapsedMs / 1000.0)
	}
	errRate := 0.0
	if count+int(errs) > 0 {
		errRate = (float64(errs) / float64(count+int(errs))) * 100.0
	}
	cpuMsPerReq := 0.0
	if count > 0 {
		cpuMsPerReq = procCPUMs / float64(count)
	}

	// Primary CPU metric uses Process CPU (all client + runtime threads normalized by vCPU count)
	primaryCPU := procCPU
	if primaryCPU <= 0 {
		primaryCPU = vmCPU
	}

	res := QPSBenchmarkResult{
		Client:        "Pure Go",
		ChannelConfig: channelDesc,
		TargetQPS:     *targetQPS,
		AchievedQPS:   achievedQPS,
		TotalTimeMs:   elapsedMs,
		TotalReqs:     count,
		ErrorCount:    errs,
		ErrorRate:     errRate,
		AvgLatencyMs:  avg,
		MinLatencyMs:  minLat,
		MaxLatencyMs:  maxLat,
		P50:           p50,
		P90:           p90,
		P95:           p95,
		P99:           p99,
		VMCPUUtil:     vmCPU,
		ProcCPUUtil:   procCPU,
		CPUUtil:       primaryCPU,
		CPUMsPerReq:   cpuMsPerReq,
		WorkersUsed:   workers,
	}

	if *jsonOut {
		b, _ := json.Marshal(res)
		fmt.Println(string(b))
	} else {
		fmt.Printf("%+v\n", res)
	}
}
