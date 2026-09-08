package main

import (
	"bufio"
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"os"
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

type BenchmarkResult struct {
	TotalTimeMs float64 `json:"totalTimeMs"`
	QPS         float64 `json:"qps"`
	P50         float64 `json:"p50"`
	P90         float64 `json:"p90"`
	P95         float64 `json:"p95"`
	P99         float64 `json:"p99"`
	AvgDuration float64 `json:"avgDuration"`
	MinDuration float64 `json:"minDuration"`
	MaxDuration float64 `json:"maxDuration"`
	ErrorRate   float64 `json:"errorRate"`
	Total       int     `json:"total"`
	CPUUtil     float64 `json:"cpuUtil"`
}

func main() {
	project := flag.String("project", "span-cloud-testing", "Google Cloud Project ID")
	instance := flag.String("instance", "suvham-testing", "Cloud Spanner Instance ID")
	database := flag.String("database", "benchmark_db_async", "Cloud Spanner Database ID")
	sql := flag.String("sql", "SELECT 1 as col_int, 'CONSTANT' as col_const", "SQL Query")
	channels := flag.Int("channels", 4, "Number of gRPC channels (connection pool size)")
	concurrency := flag.Int("concurrency", 1, "Concurrency level (number of worker goroutines)")
	durationSec := flag.Int("duration", 10, "Benchmark duration in seconds")
	warmupSec := flag.Int("warmup", 2, "Warmup duration in seconds")
	jsonOutput := flag.Bool("json", true, "Output results in JSON format")

	flag.Parse()

	ctx := context.Background()
	dbPath := fmt.Sprintf("projects/%s/instances/%s/databases/%s", *project, *instance, *database)

	// Create official Go Spanner Client with configured gRPC connection pool
	client, err := spanner.NewClient(ctx, dbPath, option.WithGRPCConnectionPool(*channels))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error creating Spanner client: %v\n", err)
		os.Exit(1)
	}
	defer client.Close()

	stmt := spanner.NewStatement(*sql)

	// Warmup
	if *warmupSec > 0 {
		warmupCtx, cancel := context.WithTimeout(ctx, time.Duration(*warmupSec)*time.Second)
		var warmupWg sync.WaitGroup
		warmupWorkers := *concurrency
		if warmupWorkers > 4 {
			warmupWorkers = 4
		}
		for w := 0; w < warmupWorkers; w++ {
			warmupWg.Add(1)
			go func() {
				defer warmupWg.Done()
				for {
					select {
					case <-warmupCtx.Done():
						return
					default:
						iter := client.Single().Query(ctx, stmt)
						for {
							_, err := iter.Next()
							if err != nil {
								break
							}
						}
						iter.Stop()
					}
				}
			}()
		}
		warmupWg.Wait()
		cancel()
	}

	// Start CPU snapshot and benchmark timer
	startCPU, _ := readCPUSnapshot()
	startTime := time.Now()

	benchCtx, cancel := context.WithTimeout(ctx, time.Duration(*durationSec)*time.Second)
	defer cancel()

	var (
		wg          sync.WaitGroup
		latenciesMu sync.Mutex
		latencies   = make([]float64, 0, 100000)
		errorCount  uint64
	)

	for w := 0; w < *concurrency; w++ {
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
					iter := client.Single().Query(ctx, stmt)
					hasErr := false
					for {
						_, err := iter.Next()
						if err == iterator.Done {
							break
						}
						if err != nil {
							atomic.AddUint64(&errorCount, 1)
							hasErr = true
							break
						}
					}
					iter.Stop()

					if !hasErr {
						durMs := float64(time.Since(reqStart).Microseconds()) / 1000.0
						localLatencies = append(localLatencies, durMs)
					}
				}
			}
		}()
	}

	wg.Wait()

	totalTimeMs := float64(time.Since(startTime).Milliseconds())
	endCPU, _ := readCPUSnapshot()

	// Compute CPU %
	cpuPercent := 0.0
	totalDiff := endCPU.Total() - startCPU.Total()
	busyDiff := endCPU.Busy() - startCPU.Busy()
	if totalDiff > 0 {
		cpuPercent = (float64(busyDiff) / float64(totalDiff)) * 100.0
	}

	// Compute Latency Percentiles
	sort.Float64s(latencies)
	total := len(latencies)
	var p50, p90, p95, p99, minDur, maxDur, sumDur float64

	if total > 0 {
		p50 = latencies[int(float64(total)*0.50)]
		p90 = latencies[int(float64(total)*0.90)]
		p95 = latencies[int(float64(total)*0.95)]
		p99 = latencies[int(float64(total)*0.99)]
		minDur = latencies[0]
		maxDur = latencies[total-1]
		for _, l := range latencies {
			sumDur += l
		}
	}

	avgDur := 0.0
	if total > 0 {
		avgDur = sumDur / float64(total)
	}

	qps := 0.0
	if totalTimeMs > 0 {
		qps = (float64(total) / (totalTimeMs / 1000.0))
	}

	errRate := 0.0
	totalWithErr := uint64(total) + errorCount
	if totalWithErr > 0 {
		errRate = (float64(errorCount) / float64(totalWithErr)) * 100.0
	}

	res := BenchmarkResult{
		TotalTimeMs: totalTimeMs,
		QPS:         qps,
		P50:         p50,
		P90:         p90,
		P95:         p95,
		P99:         p99,
		AvgDuration: avgDur,
		MinDuration: minDur,
		MaxDuration: maxDur,
		ErrorRate:   errRate,
		Total:       total,
		CPUUtil:     cpuPercent,
	}

	if *jsonOutput {
		data, _ := json.Marshal(res)
		fmt.Println(string(data))
	} else {
		fmt.Printf("Total: %d reqs | QPS: %.1f | p50: %.2fms | p95: %.2fms | p99: %.2fms | CPU: %.1f%%\n",
			total, qps, p50, p95, p99, cpuPercent)
	}
}
