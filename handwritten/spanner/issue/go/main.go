package main

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"math"
	mathrand "math/rand"
	"net"
	"os"
	"sort"
	"strconv"
	"sync"
	"time"

	"cloud.google.com/go/spanner"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
	"google.golang.org/grpc/codes"
)

type BenchmarkRecord struct {
	DeviceRecentActivityLogID string
	DeviceRecordID            string
	DeviceDetailsID           string
	HTTPRequestDetailsID      string
	IPAddress                 []byte
	InstitutionID             string
	UserID                    *string
	Username                  *string
	XRequestID                string
	HTTPRequestLocationID     *string
	Latency                   *int64
	SessionID                 string
	CreatedAt                 time.Time
}

func main() {
	ctx := context.Background()

	// Benchmark configuration from environment variables
	sampleSize := getEnvInt("SAMPLE_SIZE", 10_000)
	insertCount := getEnvInt("INSERT_COUNT", 1_000)
	insertConcurrency := getEnvInt("INSERT_CONCURRENCY", 110)
	batchCount := getEnvInt("BATCH_COUNT", 1)

	// Database configuration from environment variables
	dbProjectID := getEnv("DB_PROJECT_ID", "emulator")
	dbInstance := getEnv("DB_INSTANCE", "device-tracking")
	dbDatabase := getEnv("DB_DATABASE", "device-tracking")
	dbSchema := getEnv("DB_SCHEMA", "tracking")
	duplicateInsert := getEnv("DUPLICATE_INSERT", "false") == "true"

	if err := runBenchmark(ctx, dbProjectID, dbInstance, dbDatabase, dbSchema, sampleSize, insertCount, insertConcurrency, batchCount, duplicateInsert); err != nil {
		fmt.Fprintf(os.Stderr, "Benchmark failed: %v\n", err)
		os.Exit(1)
	}
}

func getEnv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}

func getEnvInt(key string, fallback int) int {
	if value := os.Getenv(key); value != "" {
		if intValue, err := strconv.Atoi(value); err == nil {
			return intValue
		}
	}
	return fallback
}

func runBenchmark(ctx context.Context, projectID, instance, database, schema string, sampleSize, insertCount, insertConcurrency, batchCount int, duplicateInsert bool) error {
	fmt.Println("Initializing database connection...")
	fmt.Printf("Configuration: SAMPLE_SIZE=%d, INSERT_COUNT=%d, INSERT_CONCURRENCY=%d, BATCH_COUNT=%d, DUPLICATE_INSERT=%t\n", sampleSize, insertCount, insertConcurrency, batchCount, duplicateInsert)

	dbPath := fmt.Sprintf("projects/%s/instances/%s/databases/%s", projectID, instance, database)
	client, err := spanner.NewClient(ctx, dbPath, option.WithGRPCConnectionPool(1))
	if err != nil {
		return fmt.Errorf("failed to create client: %w", err)
	}
	defer client.Close()

	// Fetch reference data samples
	fmt.Println("Fetching reference data samples...")
	deviceRecordIDs, err := fetchStringColumn(ctx, client, fmt.Sprintf("SELECT deviceRecordId FROM %s.Devices LIMIT %d", schema, sampleSize))
	if err != nil {
		return fmt.Errorf("failed to fetch deviceRecordIds: %w", err)
	}

	deviceDetailsIDs, err := fetchStringColumn(ctx, client, fmt.Sprintf("SELECT deviceDetailsId FROM %s.DeviceDetails LIMIT %d", schema, sampleSize))
	if err != nil {
		return fmt.Errorf("failed to fetch deviceDetailsIds: %w", err)
	}

	httpRequestDetailsIDs, err := fetchStringColumn(ctx, client, fmt.Sprintf("SELECT httpRequestDetailsId FROM %s.HttpRequestDetails LIMIT %d", schema, sampleSize))
	if err != nil {
		return fmt.Errorf("failed to fetch httpRequestDetailsIds: %w", err)
	}

	httpRequestLocationIDs, err := fetchStringColumn(ctx, client, fmt.Sprintf("SELECT httpRequestLocationId FROM %s.HttpRequestLocations LIMIT %d", schema, sampleSize))
	if err != nil {
		return fmt.Errorf("failed to fetch httpRequestLocationIds: %w", err)
	}

	fmt.Printf("  Sampled %d httpRequestLocationIds\n", len(httpRequestLocationIDs))

	if len(deviceRecordIDs) == 0 || len(deviceDetailsIDs) == 0 || len(httpRequestDetailsIDs) == 0 {
		return fmt.Errorf("error: No reference data found. Cannot proceed with benchmark")
	}

	totalRecords := insertCount * batchCount
	totalInserts := totalRecords
	if duplicateInsert {
		totalInserts = totalRecords * 2 // Each batch: 1 original + 1 duplicate
	}
	fmt.Printf("\nCreating %d records in %d batches of %d...\n", totalRecords, insertCount, batchCount)
	if duplicateInsert {
		fmt.Printf("Total insert operations: %d (%d + %d duplicates)\n\n", totalInserts, totalRecords, totalRecords)
	} else {
		fmt.Printf("Total insert operations: %d (no duplicates)\n\n", totalInserts)
	}

	// Pre-generate all batches
	batches := make([][]*BenchmarkRecord, insertCount)
	for i := 0; i < insertCount; i++ {
		batch := make([]*BenchmarkRecord, batchCount)
		for j := 0; j < batchCount; j++ {
			record, err := createBenchmarkRecord(
				i*batchCount+j,
				deviceRecordIDs,
				deviceDetailsIDs,
				httpRequestDetailsIDs,
				httpRequestLocationIDs,
			)
			if err != nil {
				return fmt.Errorf("failed to create record: %w", err)
			}
			batch[j] = record
		}
		batches[i] = batch
	}

	fmt.Printf("\nStarting %d batch inserts with concurrency: %d...\n\n", insertCount, insertConcurrency)

	durations := make([]float64, insertCount)
	var alreadyExistsCount int64
	var mu sync.Mutex

	overallStart := time.Now()

	// Process batches with concurrency control
	sem := make(chan struct{}, insertConcurrency)
	var wg sync.WaitGroup

	for i, batch := range batches {
		wg.Add(1)
		sem <- struct{}{} // Acquire semaphore

		go func(index int, records []*BenchmarkRecord) {
			defer wg.Done()
			defer func() { <-sem }() // Release semaphore

			label := fmt.Sprintf("batch-%d (%d records, concurrency: %d)", index, batchCount, insertConcurrency)
			fmt.Println(label)

			start := time.Now()

			// Build mutations for this batch
			mutations := make([]*spanner.Mutation, len(records))
			for j, rec := range records {
				mutations[j] = spanner.Insert(
					schema+".DeviceRecentActivityLog",
					[]string{
						"deviceRecentActivityLogId",
						"deviceRecordId",
						"deviceDetailsId",
						"httpRequestDetailsId",
						"ipAddress",
						"xRequestId",
						"institutionId",
						"userId",
						"username",
						"httpRequestLocationId",
						"latency",
						"sessionId",
						"createdAt",
					},
					[]interface{}{
						rec.DeviceRecentActivityLogID,
						rec.DeviceRecordID,
						rec.DeviceDetailsID,
						rec.HTTPRequestDetailsID,
						rec.IPAddress,
						rec.XRequestID,
						rec.InstitutionID,
						rec.UserID,
						rec.Username,
						rec.HTTPRequestLocationID,
						rec.Latency,
						rec.SessionID,
						rec.CreatedAt,
					},
				)
			}

			// First insert - should succeed
			_, err := client.Apply(ctx, mutations)
			if err != nil {
				if spanner.ErrCode(err) == codes.AlreadyExists {
					mu.Lock()
					alreadyExistsCount++
					mu.Unlock()
					fmt.Printf("  %s - ALREADY_EXISTS (expected on retry)\n", label)
				} else {
					fmt.Fprintf(os.Stderr, "Error on first insert: %v\n", err)
				}
			}

			if (duplicateInsert) {
  			// Duplicate insert - should trigger ALREADY_EXISTS
  			_, err = client.Apply(ctx, mutations)
  			if err != nil {
  				if spanner.ErrCode(err) == codes.AlreadyExists {
  					mu.Lock()
  					alreadyExistsCount++
  					mu.Unlock()
  					fmt.Printf("  %s - ALREADY_EXISTS (expected on duplicate)\n", label)
  				} else {
  					fmt.Fprintf(os.Stderr, "Error on duplicate insert: %v\n", err)
  				}
  			}
			}

			duration := time.Since(start).Milliseconds()
			mu.Lock()
			durations[index] = float64(duration)
			mu.Unlock()

			if (index+1)%10 == 0 {
				mu.Lock()
				// Calculate average of last 10 batches
				windowStart := index - 9
				if windowStart < 0 {
					windowStart = 0
				}
				var sum float64
				count := 0
				for k := windowStart; k <= index; k++ {
					sum += durations[k]
					count++
				}
				avg := sum / float64(count)
				mu.Unlock()
				fmt.Printf("  [%d/%d] Last %d batches avg: %.2fms (%d records/batch, %d concurrent)\n\n",
					index+1, insertCount, count, avg, batchCount, insertConcurrency)
			}
		}(i, batch)
	}

	wg.Wait()

	overallDuration := time.Since(overallStart).Milliseconds()
	insertsPerSecond := float64(totalInserts) / (float64(overallDuration) / 1000.0)

	// Calculate statistics
	var sum float64
	min := durations[0]
	max := durations[0]
	for _, d := range durations {
		sum += d
		if d < min {
			min = d
		}
		if d > max {
			max = d
		}
	}
	avg := sum / float64(len(durations))

	// Calculate percentiles
	sorted := make([]float64, len(durations))
	copy(sorted, durations)
	sort.Float64s(sorted)

	p50 := sorted[int(float64(len(sorted))*0.5)]
	p90 := sorted[int(float64(len(sorted))*0.9)]
	p95 := sorted[int(float64(len(sorted))*0.95)]
	p99 := sorted[int(math.Min(float64(len(sorted))*0.99, float64(len(sorted)-1)))]

	// Print summary
	fmt.Println("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	fmt.Println("  Benchmark Summary")
	fmt.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	fmt.Printf("  Total Batches:      %d\n", insertCount)
	fmt.Printf("  Batch Size:         %d\n", batchCount)
	fmt.Printf("  Total Records:      %d\n", totalRecords)
	fmt.Printf("  Total Inserts:      %d (includes %d duplicates)\n", totalInserts, alreadyExistsCount)
	fmt.Printf("  Concurrency:        %d\n", insertConcurrency)
	fmt.Printf("  Total Time:         %.2fms\n", float64(overallDuration))
	fmt.Printf("  Inserts/Second:     %.2f\n", insertsPerSecond)
	fmt.Printf("  Avg Batch Duration:  %.2fms\n", avg)
	fmt.Printf("  Min Batch Duration:  %.2fms\n", min)
	fmt.Printf("  Max Batch Duration:  %.2fms\n", max)
	fmt.Printf("  P50:                %.2fms\n", p50)
	fmt.Printf("  P90:                %.2fms\n", p90)
	fmt.Printf("  P95:                %.2fms\n", p95)
	fmt.Printf("  P99:                %.2fms\n", p99)
	fmt.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")

	return nil
}

func fetchStringColumn(ctx context.Context, client *spanner.Client, query string) ([]string, error) {
	var results []string
	stmt := spanner.Statement{SQL: query}
	iter := client.Single().Query(ctx, stmt)
	defer iter.Stop()

	for {
		row, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, err
		}

		var value string
		if err := row.Columns(&value); err != nil {
			return nil, err
		}
		results = append(results, value)
	}

	return results, nil
}

func createBenchmarkRecord(
	index int,
	deviceRecordIDs, deviceDetailsIDs, httpRequestDetailsIDs, httpRequestLocationIDs []string,
) (*BenchmarkRecord, error) {
	deviceRecordID := selectRandom(deviceRecordIDs)
	deviceDetailsID := selectRandom(deviceDetailsIDs)
	httpRequestDetailsID := selectRandom(httpRequestDetailsIDs)

	var httpRequestLocationID *string
	if len(httpRequestLocationIDs) > 0 {
		id := selectRandom(httpRequestLocationIDs)
		httpRequestLocationID = &id
	}

	xRequestID := generateUUID()
	sessionID := generateUUID()
	createdAt := time.Now().Add(time.Duration(index) * time.Second)

	deviceID := fmt.Sprintf("benchmark-%d", index)
	deviceRecentActivityLogID, err := createDeviceRecentActivityLogID(
		deviceID,
		deviceDetailsID,
		httpRequestDetailsID,
		createdAt,
		sessionID,
	)
	if err != nil {
		return nil, err
	}

	var userID *string
	if mathrand.Float64() > 0.5 {
		uid := "user-123"
		userID = &uid
	}

	var latency *int64
	if mathrand.Float64() > 0.5 {
		lat := int64(mathrand.Intn(100))
		latency = &lat
	}

	return &BenchmarkRecord{
		DeviceRecentActivityLogID: deviceRecentActivityLogID,
		DeviceRecordID:            deviceRecordID,
		DeviceDetailsID:           deviceDetailsID,
		HTTPRequestDetailsID:      httpRequestDetailsID,
		IPAddress:                 ipToBytes("192.168.1.100"),
		InstitutionID:             "benchmark-institution",
		UserID:                    userID,
		Username:                  nil,
		XRequestID:                xRequestID,
		HTTPRequestLocationID:     httpRequestLocationID,
		Latency:                   latency,
		SessionID:                 sessionID,
		CreatedAt:                 createdAt,
	}, nil
}

func createDeviceRecentActivityLogID(deviceID, deviceDetailsID, httpRequestDetailsID string, createdAt time.Time, sessionID string) (string, error) {
	input := fmt.Sprintf("%s%s%s%d%s", deviceID, deviceDetailsID, httpRequestDetailsID, createdAt.UnixMilli(), sessionID)
	hash := sha256.Sum256([]byte(input))
	return hex.EncodeToString(hash[:]), nil
}

func ipToBytes(ipAddress string) []byte {
	ip := net.ParseIP(ipAddress)
	if ip == nil {
		return nil
	}
	// Return IPv4 as 4 bytes
	if ip4 := ip.To4(); ip4 != nil {
		return ip4
	}
	// Return IPv6 as 16 bytes
	return ip.To16()
}

func selectRandom(items []string) string {
	return items[mathrand.Intn(len(items))]
}

func generateUUID() string {
	b := make([]byte, 16)
	if _, err := rand.Read(b); err != nil {
		panic(fmt.Sprintf("failed to generate UUID: %v", err))
	}
	b[6] = (b[6] & 0x0f) | 0x40 // Version 4
	b[8] = (b[8] & 0x3f) | 0x80 // Variant is 10
	return fmt.Sprintf("%x-%x-%x-%x-%x", b[0:4], b[4:6], b[6:8], b[8:10], b[10:])
}
