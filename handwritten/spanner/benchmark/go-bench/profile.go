package main

import (
	"bufio"
	"context"
	"flag"
	"fmt"
	"math/rand"
	"os"
	"path/filepath"
	"runtime"
	"runtime/pprof"
	"runtime/trace"
	"sort"
	"strconv"
	"strings"
	"sync"
	"sync/atomic"
	"time"

	"cloud.google.com/go/spanner"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
)

// CPUSnapshot captures CPU tick stats from /proc/stat
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
	return CPUSnapshot{}, fmt.Errorf("cpu line not found")
}

type ScenarioConfig struct {
	ID          int
	Name        string
	QueryType   string // "pointSelect" or "limit1000"
	Concurrency int
	BaseFile    string
}

type ScenarioResult struct {
	ID          int
	Name        string
	Concurrency int
	CPUProfile  string
	MemProfile  string
	TraceFile   string
	QPS         float64
	P50         float64
	P90         float64
	P95         float64
	P99         float64
	Avg         float64
	TotalReqs   int
	CPUUtil     float64
	FileSizeKB  float64
}

func executeQuery(ctx context.Context, client *spanner.Client, queryType string, table string) error {
	var stmt spanner.Statement
	if queryType == "pointSelect" {
		randomID := fmt.Sprintf("user-%d", rand.Intn(100000))
		stmt = spanner.Statement{
			SQL: fmt.Sprintf("SELECT id, field0, field1 FROM %s WHERE id = @id", table),
			Params: map[string]interface{}{
				"id": randomID,
			},
		}
	} else {
		stmt = spanner.NewStatement(fmt.Sprintf("SELECT * FROM %s LIMIT 1000", table))
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
		// Consume columns to simulate full row consumption
		if queryType == "limit1000" {
			var id string
			_ = row.ColumnByName("id", &id)
		}
	}
	return nil
}

func runLoad(
	ctx context.Context,
	client *spanner.Client,
	queryType string,
	table string,
	concurrency int,
	duration time.Duration,
) (latencies []float64, totalCount int, errorCount uint64, elapsed time.Duration, cpuPercent float64) {
	benchCtx, cancel := context.WithTimeout(ctx, duration)
	defer cancel()

	var (
		wg          sync.WaitGroup
		latenciesMu sync.Mutex
		errCount    uint64
	)
	latencies = make([]float64, 0, 100000)

	startCPU, _ := readCPUSnapshot()
	startTime := time.Now()

	for w := 0; w < concurrency; w++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			localLatencies := make([]float64, 0, 10000)

			for {
				select {
				case <-benchCtx.Done():
					latenciesMu.Lock()
					latencies = append(latencies, localLatencies...)
					latenciesMu.Unlock()
					return
				default:
					reqStart := time.Now()
					err := executeQuery(ctx, client, queryType, table)
					if err != nil {
						atomic.AddUint64(&errCount, 1)
					} else {
						durMs := float64(time.Since(reqStart).Microseconds()) / 1000.0
						localLatencies = append(localLatencies, durMs)
					}
				}
			}
		}()
	}

	wg.Wait()
	elapsed = time.Since(startTime)
	endCPU, _ := readCPUSnapshot()

	totalDiff := endCPU.Total() - startCPU.Total()
	busyDiff := endCPU.Busy() - startCPU.Busy()
	if totalDiff > 0 {
		cpuPercent = (float64(busyDiff) / float64(totalDiff)) * 100.0
	}

	totalCount = len(latencies)
	errorCount = errCount
	return
}

func main() {
	project := flag.String("project", "span-cloud-testing", "Google Cloud Project ID")
	instance := flag.String("instance", "suvham-testing", "Cloud Spanner Instance ID")
	database := flag.String("database", "benchmark_db_async", "Cloud Spanner Database ID")
	table := flag.String("table", "AsyncBenchmarkTable", "Target Spanner Table Name")
	channels := flag.Int("channels", 0, "Number of gRPC channels (0 = default customer client pool)")
	scenarioArg := flag.String("scenario", "all", "Scenario to run: 1, 2, 3, or all")
	warmupSec := flag.Int("warmup", 5, "Warmup duration in seconds per scenario")
	durationSec := flag.Int("duration", 15, "Profiling duration in seconds per scenario")
	outputDir := flag.String("output-dir", "profiles", "Output directory to save .pprof profiles")
	enableTrace := flag.Bool("trace", true, "Collect runtime execution trace (.trace)")
	flag.Parse()

	dbPath := fmt.Sprintf("projects/%s/instances/%s/databases/%s", *project, *instance, *database)

	fmt.Println(strings.Repeat("=", 80))
	fmt.Println("GOOGLE CLOUD SPANNER: GO CLIENT CPU & HEAP PROFILING SUITE")
	fmt.Println(strings.Repeat("=", 80))
	fmt.Printf("Go Version        : %s (%s/%s)\n", runtime.Version(), runtime.GOOS, runtime.GOARCH)
	fmt.Printf("CPU Cores (vCPUs) : %d\n", runtime.NumCPU())
	fmt.Printf("Target Database   : %s\n", dbPath)
	fmt.Printf("Target Table      : %s\n", *table)
	fmt.Printf("Channel Pooling   : %s\n", func() string {
		if *channels > 0 {
			return fmt.Sprintf("%d static channels", *channels)
		}
		return "Default customer pool (4 channels)"
	}())
	fmt.Printf("Warmup Duration   : %ds per scenario\n", *warmupSec)
	fmt.Printf("Profile Duration  : %ds per scenario\n", *durationSec)
	fmt.Printf("Output Directory  : %s\n", *outputDir)
	fmt.Println(strings.Repeat("=", 80))

	_ = os.MkdirAll(*outputDir, 0755)

	ctx := context.Background()
	var (
		client *spanner.Client
		err    error
	)
	if *channels > 0 {
		client, err = spanner.NewClient(ctx, dbPath, option.WithGRPCConnectionPool(*channels))
	} else {
		client, err = spanner.NewClient(ctx, dbPath)
	}
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error creating Spanner client: %v\n", err)
		os.Exit(1)
	}
	defer client.Close()

	scenarios := []ScenarioConfig{
		{
			ID:          1,
			Name:        "Point select with single concurrency (c=1)",
			QueryType:   "pointSelect",
			Concurrency: 1,
			BaseFile:    "go_profile_point_select_c1",
		},
		{
			ID:          2,
			Name:        "Point select with 2 concurrency (c=2)",
			QueryType:   "pointSelect",
			Concurrency: 2,
			BaseFile:    "go_profile_point_select_c2",
		},
		{
			ID:          3,
			Name:        "Limit 1000 read for >10 column table (c=1)",
			QueryType:   "limit1000",
			Concurrency: 1,
			BaseFile:    "go_profile_limit_1000_read",
		},
	}

	var scenariosToRun []ScenarioConfig
	if *scenarioArg == "all" {
		scenariosToRun = scenarios
	} else {
		for _, s := range scenarios {
			if fmt.Sprintf("%d", s.ID) == *scenarioArg {
				scenariosToRun = append(scenariosToRun, s)
				break
			}
		}
	}

	if len(scenariosToRun) == 0 {
		fmt.Fprintf(os.Stderr, "Invalid scenario: %s. Use 1, 2, 3, or all.\n", *scenarioArg)
		os.Exit(1)
	}

	var results []ScenarioResult

	for _, sc := range scenariosToRun {
		fmt.Printf("\n%s\n", strings.Repeat("─", 80))
		fmt.Printf("[SCENARIO %d] %s\n", sc.ID, sc.Name)
		fmt.Printf("Concurrency: %d | Warmup: %ds | Profile Duration: %ds\n", sc.Concurrency, *warmupSec, *durationSec)
		fmt.Printf("%s\n", strings.Repeat("─", 80))

		// 1. WARMUP
		if *warmupSec > 0 {
			fmt.Printf("⏳ Step 1/3: Warming up connection and JIT for %ds...\n", *warmupSec)
			wLatencies, wCount, _, wElapsed, _ := runLoad(ctx, client, sc.QueryType, *table, sc.Concurrency, time.Duration(*warmupSec)*time.Second)
			wQPS := float64(wCount) / (float64(wElapsed.Milliseconds()) / 1000.0)
			fmt.Printf("   Warmup Done: %d reqs | %.1f QPS\n", len(wLatencies), wQPS)
		}

		// 2. CPU PROFILE & TRACE START
		cpuProfPath := filepath.Join(*outputDir, sc.BaseFile+".pprof")
		memProfPath := filepath.Join(*outputDir, sc.BaseFile+"_mem.pprof")
		tracePath := filepath.Join(*outputDir, sc.BaseFile+".trace")

		fmt.Printf("🔴 Step 2/3: Starting Go CPU Profiler & Runtime Trace for %ds...\n", *durationSec)

		cpuFile, err := os.Create(cpuProfPath)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Failed to create CPU profile file: %v\n", err)
			continue
		}
		if err := pprof.StartCPUProfile(cpuFile); err != nil {
			fmt.Fprintf(os.Stderr, "Failed to start CPU profile: %v\n", err)
		}

		var traceFile *os.File
		if *enableTrace {
			traceFile, err = os.Create(tracePath)
			if err == nil {
				_ = trace.Start(traceFile)
			}
		}

		// RUN BENCHMARK WORKLOAD
		latencies, count, errCount, elapsed, cpuPercent := runLoad(ctx, client, sc.QueryType, *table, sc.Concurrency, time.Duration(*durationSec)*time.Second)

		// STOP PROFILERS
		pprof.StopCPUProfile()
		cpuFile.Close()

		if *enableTrace && traceFile != nil {
			trace.Stop()
			traceFile.Close()
		}

		// WRITE HEAP PROFILE
		memFile, err := os.Create(memProfPath)
		if err == nil {
			runtime.GC()
			_ = pprof.WriteHeapProfile(memFile)
			memFile.Close()
		}

		fmt.Println("⏹️  Step 3/3: Stopped profiler and saved profile artifacts.")

		// COMPUTE STATS
		sort.Float64s(latencies)
		var p50, p90, p95, p99, sum float64
		if count > 0 {
			p50 = latencies[int(float64(count)*0.50)]
			p90 = latencies[int(float64(count)*0.90)]
			p95 = latencies[int(float64(count)*0.95)]
			p99 = latencies[int(float64(count)*0.99)]
			for _, l := range latencies {
				sum += l
			}
		}
		avg := 0.0
		if count > 0 {
			avg = sum / float64(count)
		}
		qps := 0.0
		if elapsed.Milliseconds() > 0 {
			qps = float64(count) / (float64(elapsed.Milliseconds()) / 1000.0)
		}

		fi, _ := os.Stat(cpuProfPath)
		fileSizeKB := 0.0
		if fi != nil {
			fileSizeKB = float64(fi.Size()) / 1024.0
		}

		fmt.Printf("\n  📊 Scenario %d Results:\n", sc.ID)
		fmt.Printf("     Total Requests     : %d (Errors: %d)\n", count, errCount)
		fmt.Printf("     Throughput         : %.1f QPS\n", qps)
		fmt.Printf("     Latency (p50 / p95): %.2fms / %.2fms (avg: %.2fms, p99: %.2fms)\n", p50, p95, avg, p99)
		fmt.Printf("     CPU Utilization    : %.1f%%\n", cpuPercent)
		fmt.Printf("     CPU Profile File   : %s (%.1f KB)\n", cpuProfPath, fileSizeKB)
		fmt.Printf("     Heap Profile File  : %s\n", memProfPath)
		if *enableTrace {
			fmt.Printf("     Execution Trace    : %s\n", tracePath)
		}

		results = append(results, ScenarioResult{
			ID:          sc.ID,
			Name:        sc.Name,
			Concurrency: sc.Concurrency,
			CPUProfile:  cpuProfPath,
			MemProfile:  memProfPath,
			TraceFile:   tracePath,
			QPS:         qps,
			P50:         p50,
			P90:         p90,
			P95:         p95,
			P99:         p99,
			Avg:         avg,
			TotalReqs:   count,
			CPUUtil:     cpuPercent,
			FileSizeKB:  fileSizeKB,
		})
	}

	// Print Summary Table
	fmt.Printf("\n%s\n", strings.Repeat("=", 110))
	fmt.Println("SUMMARY OF GENERATED GO CLIENT PROFILES")
	fmt.Println(strings.Repeat("=", 110))
	fmt.Printf("%-12s | %-40s | %-10s | %-10s | %-10s | %-10s | %-10s\n",
		"Scenario", "Description", "QPS", "p50 (ms)", "p95 (ms)", "CPU %", "Profile Size")
	fmt.Println(strings.Repeat("-", 110))
	for _, r := range results {
		fmt.Printf("%-12s | %-40s | %-10.1f | %-10.2f | %-10.2f | %-9.1f%% | %-6.1f KB\n",
			fmt.Sprintf("Scenario %d", r.ID), r.Name, r.QPS, r.P50, r.P95, r.CPUUtil, r.FileSizeKB)
	}
	fmt.Println(strings.Repeat("=", 110))

	fmt.Printf("\nAll profile files are located in: %s\n\n", *outputDir)
	fmt.Println("HOW TO VISUALIZE & ANALYZE GO FLAME GRAPHS:")
	fmt.Println("  1. Interactive Flame Graph in Web Browser (Recommended):")
	fmt.Println("     go tool pprof -http=:8080 profiles/go_profile_point_select_c1.pprof")
	fmt.Println("     (Then open http://localhost:8080/ui/flamegraph in your browser)")
	fmt.Println("")
	fmt.Println("  2. Drag & Drop into Speedscope:")
	fmt.Println("     Open https://speedscope.app and drag any .pprof file into it.")
	fmt.Println("")
	fmt.Println("  3. CLI Top CPU Consuming Functions:")
	fmt.Println("     go tool pprof -top profiles/go_profile_point_select_c1.pprof")
	fmt.Println("")
	if *enableTrace {
		fmt.Println("  4. View Go Runtime Execution & Goroutine Trace:")
		fmt.Println("     go tool trace profiles/go_profile_point_select_c1.trace")
		fmt.Println("")
	}
	fmt.Println(strings.Repeat("=", 110))
}
