package main

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"log"
	"math"
	mathrand "math/rand"
	"os"
	"sort"
	"strconv"
	"sync"
	"time"

	gapic "cloud.google.com/go/spanner/apiv1"
	"google.golang.org/api/option"
	spannerpb "google.golang.org/genproto/googleapis/spanner/v1"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	structpb "google.golang.org/protobuf/types/known/structpb"
)

func main() {
	ctx := context.Background()

	// Read benchmark configuration
	projectId := getEnv("DB_PROJECT_ID", "emulator")
	instanceId := getEnv("DB_INSTANCE", "device-tracking")
	databaseId := getEnv("DB_DATABASE", "device-tracking")
	tableName := getEnv("TABLE_NAME", "tracking.DeviceRecentActivityLog")
	readCount := getEnvInt("READ_COUNT", 1000)
	concurrency := getEnvInt("CONCURRENCY", 10)

	// Write benchmark configuration
	sampleSize := getEnvInt("SAMPLE_SIZE", 10000)
	insertCount := getEnvInt("INSERT_COUNT", 1000)
	insertConcurrency := getEnvInt("INSERT_CONCURRENCY", 110)
	batchCount := getEnvInt("BATCH_COUNT", 1)
	duplicateInsert := getEnv("DUPLICATE_INSERT", "false") == "true"

	databasePath := fmt.Sprintf("projects/%s/instances/%s/databases/%s", projectId, instanceId, databaseId)

	fmt.Printf("Target Database: %s\n", databasePath)
	fmt.Printf("Target Table: %s\n", tableName)
	fmt.Printf("Read Config: READ_COUNT=%d, CONCURRENCY=%d\n", readCount, concurrency)
	fmt.Printf("Write Config: SAMPLE_SIZE=%d, INSERT_COUNT=%d, INSERT_CONCURRENCY=%d, BATCH_COUNT=%d, DUPLICATE_INSERT=%t\n", sampleSize, insertCount, insertConcurrency, batchCount, duplicateInsert)
	fmt.Println("gRPC Connection Pool Size: 1")

	// Initialize the generated client with a single connection to match Node.js default behavior
	client, err := gapic.NewClient(ctx, option.WithGRPCConnectionPool(4))
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}
	defer client.Close()

	fmt.Println("\nCreating multiplexed session via raw gRPC...")
	session, err := client.CreateSession(ctx, &spannerpb.CreateSessionRequest{
		Database: databasePath,
		Session: &spannerpb.Session{
			Multiplexed: true,
		},
	})
	if err != nil {
		log.Fatalf("Failed to create session: %v", err)
	}
	fmt.Printf("Multiplexed Session created: %s\n", session.Name)

	defer func() {
		fmt.Println("\nBenchmark finished. Multiplexed session is left to be managed by server.")
	}()

	// ==========================================
	// 1. READ BENCHMARK
	// ==========================================
	fmt.Printf("\nStarting READ benchmark with concurrency %d...\n", concurrency)

	readDurations := make([]time.Duration, readCount)
	readSem := make(chan struct{}, concurrency)
	var readWg sync.WaitGroup

	readOverallStart := time.Now()

	for i := 0; i < readCount; i++ {
		readWg.Add(1)
		readSem <- struct{}{} // Acquire

		go func(index int) {
			defer readWg.Done()
			defer func() { <-readSem }() // Release

			randomId := mathrand.Intn(1000000) + 1

			req := &spannerpb.ExecuteSqlRequest{
				Session: session.Name,
				Sql:     fmt.Sprintf("SELECT * FROM %s WHERE deviceRecentActivityLogId = @id", tableName),
				Params: &structpb.Struct{
					Fields: map[string]*structpb.Value{
						"id": {
							Kind: &structpb.Value_StringValue{
								StringValue: fmt.Sprintf("%d", randomId),
							},
						},
					},
				},
				ParamTypes: map[string]*spannerpb.Type{
					"id": {
						Code: spannerpb.TypeCode_STRING,
					},
				},
			}

			startTime := time.Now()
			_, err := client.ExecuteSql(ctx, req)
			duration := time.Since(startTime)

			if err != nil {
				log.Printf("Read failed at index %d: %v", index, err)
			} else {
				readDurations[index] = duration
			}
		}(i)
	}

	readWg.Wait()
	readOverallDuration := time.Since(readOverallStart)
	readOpsPerSecond := float64(readCount) / readOverallDuration.Seconds()

	var readSum time.Duration
	validReadDurations := make([]time.Duration, 0, readCount)
	for _, d := range readDurations {
		if d > 0 {
			readSum += d
			validReadDurations = append(validReadDurations, d)
		}
	}

	var readAvg time.Duration
	if len(validReadDurations) > 0 {
		readAvg = readSum / time.Duration(len(validReadDurations))
	}

	sort.Slice(validReadDurations, func(i, j int) bool {
		return validReadDurations[i] < validReadDurations[j]
	})

	rp50 := percentile(validReadDurations, 0.5)
	rp90 := percentile(validReadDurations, 0.9)
	rp95 := percentile(validReadDurations, 0.95)
	rp99 := percentile(validReadDurations, 0.99)

	fmt.Println("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	fmt.Println("  Raw gRPC Benchmark Summary (Go - READ)")
	fmt.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	fmt.Printf("  Total Reads:        %d\n", readCount)
	fmt.Printf("  Concurrency:        %d\n", concurrency)
	fmt.Printf("  Total Time:         %v\n", readOverallDuration)
	fmt.Printf("  Reads/Second:       %.2f\n", readOpsPerSecond)
	fmt.Printf("  Avg Latency:        %v\n", readAvg)
	fmt.Printf("  P50 Latency:        %v\n", rp50)
	fmt.Printf("  P90 Latency:        %v\n", rp90)
	fmt.Printf("  P95 Latency:        %v\n", rp95)
	fmt.Printf("  P99 Latency:        %v\n", rp99)
	fmt.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")

	// ==========================================
	// 2. SLEEP 5 SECONDS
	// ==========================================
	fmt.Println("Sleeping for 5 seconds before starting writes...")
	time.Sleep(5 * time.Second)

	// ==========================================
	// 3. WRITE BENCHMARK
	// ==========================================
	fmt.Printf("\nStarting WRITE benchmark with concurrency %d...\n", insertConcurrency)

	totalRecords := insertCount * batchCount
	totalInserts := totalRecords
	if duplicateInsert {
		totalInserts = totalRecords * 2
	}

	// Pre-generate batches
	type Record struct {
		deviceRecentActivityLogId string
		deviceRecordId            string
		deviceDetailsId           string
		httpRequestDetailsId      string
		ipAddress                 string
		institutionId             string
		userId                    *string
		username                  *string
		xRequestId                string
		httpRequestLocationId     *string
		latency                   *int64
		sessionId                 string
		createdAt                 time.Time
	}

	batches := make([][]*Record, insertCount)
	for i := 0; i < insertCount; i++ {
		batch := make([]*Record, batchCount)
		for j := 0; j < batchCount; j++ {
			idx := i*batchCount + j
			deviceRecordId := sha256Hash(fmt.Sprintf("device-%d", idx%sampleSize))
			deviceDetailsId := sha256Hash(fmt.Sprintf("detail-%d", idx%sampleSize))
			httpRequestDetailsId := sha256Hash(fmt.Sprintf("request-%d", idx%sampleSize))
			httpRequestLocationIdStr := sha256Hash(fmt.Sprintf("location-%d", idx%sampleSize))
			var httpRequestLocationId *string = &httpRequestLocationIdStr

			xRequestId := generateUUID()
			sessionId := generateUUID()
			createdAt := time.Now().Add(time.Duration(idx) * time.Second)

			idInput := fmt.Sprintf("benchmark-%d%s%s%d%s", idx, deviceDetailsId, httpRequestDetailsId, createdAt.UnixMilli(), sessionId)
			deviceRecentActivityLogId := sha256Hash(idInput)

			var userId *string
			if mathrand.Float64() > 0.5 {
				uid := "user-123"
				userId = &uid
			}

			var latency *int64
			if mathrand.Float64() > 0.5 {
				lat := int64(mathrand.Intn(100))
				latency = &lat
			}

			batch[j] = &Record{
				deviceRecentActivityLogId: deviceRecentActivityLogId,
				deviceRecordId:            deviceRecordId,
				deviceDetailsId:           deviceDetailsId,
				httpRequestDetailsId:      httpRequestDetailsId,
				ipAddress:                 base64.StdEncoding.EncodeToString([]byte{192, 168, 1, 100}),
				institutionId:             "benchmark-institution",
				userId:                    userId,
				username:                  nil,
				xRequestId:                xRequestId,
				httpRequestLocationId:     httpRequestLocationId,
				latency:                   latency,
				sessionId:                 sessionId,
				createdAt:                 createdAt,
			}
		}
		batches[i] = batch
	}

	writeDurations := make([]float64, insertCount)
	var alreadyExistsCount int64
	var writeMu sync.Mutex

	writeSem := make(chan struct{}, insertConcurrency)
	var writeWg sync.WaitGroup
	writeOverallStart := time.Now()

	for i, batch := range batches {
		writeWg.Add(1)
		writeSem <- struct{}{}

		go func(index int, records []*Record) {
			defer writeWg.Done()
			defer func() { <-writeSem }()

			start := time.Now()

			mutations := make([]*spannerpb.Mutation, len(records))
			for j, rec := range records {
				values := []*structpb.Value{
					protoValue(rec.deviceRecentActivityLogId),
					protoValue(rec.deviceRecordId),
					protoValue(rec.deviceDetailsId),
					protoValue(rec.httpRequestDetailsId),
					protoValue(rec.ipAddress),
					protoValue(rec.institutionId),
					protoValue(rec.userId),
					protoValue(rec.username),
					protoValue(rec.xRequestId),
					protoValue(rec.httpRequestLocationId),
					protoValue(rec.latency),
					protoValue(rec.sessionId),
					protoValue(rec.createdAt.UTC().Format(time.RFC3339Nano)),
				}

				mutations[j] = &spannerpb.Mutation{
					Operation: &spannerpb.Mutation_Insert{
						Insert: &spannerpb.Mutation_Write{
							Table: tableName,
							Columns: []string{
								"deviceRecentActivityLogId",
								"deviceRecordId",
								"deviceDetailsId",
								"httpRequestDetailsId",
								"ipAddress",
								"institutionId",
								"userId",
								"username",
								"xRequestId",
								"httpRequestLocationId",
								"latency",
								"sessionId",
								"createdAt",
							},
							Values: []*structpb.ListValue{
								{Values: values},
							},
						},
					},
				}
			}

			commitReq := &spannerpb.CommitRequest{
				Session: session.Name,
				Transaction: &spannerpb.CommitRequest_SingleUseTransaction{
					SingleUseTransaction: &spannerpb.TransactionOptions{
						Mode: &spannerpb.TransactionOptions_ReadWrite_{
							ReadWrite: &spannerpb.TransactionOptions_ReadWrite{},
						},
					},
				},
				Mutations: mutations,
			}

			_, err := client.Commit(ctx, commitReq)
			if err != nil {
				if st, ok := status.FromError(err); ok && st.Code() == codes.AlreadyExists {
					writeMu.Lock()
					alreadyExistsCount++
					writeMu.Unlock()
				} else {
					log.Printf("Commit failed at batch %d: %v", index, err)
				}
			}

			if duplicateInsert {
				_, err = client.Commit(ctx, commitReq)
				if err != nil {
					if st, ok := status.FromError(err); ok && st.Code() == codes.AlreadyExists {
						writeMu.Lock()
						alreadyExistsCount++
						writeMu.Unlock()
					} else {
						log.Printf("Duplicate commit failed at batch %d: %v", index, err)
					}
				}
			}

			duration := time.Since(start).Milliseconds()
			writeMu.Lock()
			writeDurations[index] = float64(duration)
			writeMu.Unlock()

			if (index+1)%100 == 0 || (index+1) == insertCount {
				writeMu.Lock()
				windowStart := index - 99
				if windowStart < 0 {
					windowStart = 0
				}
				var sum float64
				count := 0
				for k := windowStart; k <= index; k++ {
					sum += writeDurations[k]
					count++
				}
				avg := sum / float64(count)
				writeMu.Unlock()
				fmt.Printf("  [%d/%d] Last batches avg: %.2fms (%d records/batch)\n", index+1, insertCount, avg, batchCount)
			}
		}(i, batch)
	}

	writeWg.Wait()
	writeOverallDuration := time.Since(writeOverallStart).Milliseconds()
	writeInsertsPerSecond := float64(totalInserts) / (float64(writeOverallDuration) / 1000.0)

	var writeSum float64
	writeMin := writeDurations[0]
	writeMax := writeDurations[0]
	for _, d := range writeDurations {
		writeSum += d
		if d < writeMin {
			writeMin = d
		}
		if d > writeMax {
			writeMax = d
		}
	}
	writeAvg := writeSum / float64(len(writeDurations))

	sortedWrite := make([]float64, len(writeDurations))
	copy(sortedWrite, writeDurations)
	sort.Float64s(sortedWrite)

	wp50 := sortedWrite[int(float64(len(sortedWrite))*0.5)]
	wp90 := sortedWrite[int(float64(len(sortedWrite))*0.9)]
	wp95 := sortedWrite[int(float64(len(sortedWrite))*0.95)]
	wp99 := sortedWrite[int(math.Min(float64(len(sortedWrite))*0.99, float64(len(sortedWrite)-1)))]

	fmt.Println("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	fmt.Println("  Raw gRPC Benchmark Summary (Go - WRITE)")
	fmt.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	fmt.Printf("  Total Batches:      %d\n", insertCount)
	fmt.Printf("  Batch Size:         %d\n", batchCount)
	fmt.Printf("  Total Records:      %d\n", totalRecords)
	fmt.Printf("  Total Inserts:      %d (includes %d duplicates)\n", totalInserts, alreadyExistsCount)
	fmt.Printf("  Concurrency:        %d\n", insertConcurrency)
	fmt.Printf("  Total Time:         %.2fms\n", float64(writeOverallDuration))
	fmt.Printf("  Inserts/Second:     %.2f\n", writeInsertsPerSecond)
	fmt.Printf("  Avg Batch Duration: %.2fms\n", writeAvg)
	fmt.Printf("  Min Batch Duration: %.2fms\n", writeMin)
	fmt.Printf("  Max Batch Duration: %.2fms\n", writeMax)
	fmt.Printf("  P50:                %.2fms\n", wp50)
	fmt.Printf("  P90:                %.2fms\n", wp90)
	fmt.Printf("  P95:                %.2fms\n", wp95)
	fmt.Printf("  P99:                %.2fms\n", wp99)
	fmt.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")
}

func protoValue(val interface{}) *structpb.Value {
	if val == nil {
		return &structpb.Value{Kind: &structpb.Value_NullValue{NullValue: structpb.NullValue_NULL_VALUE}}
	}
	switch v := val.(type) {
	case string:
		return &structpb.Value{Kind: &structpb.Value_StringValue{StringValue: v}}
	case *string:
		if v == nil {
			return &structpb.Value{Kind: &structpb.Value_NullValue{NullValue: structpb.NullValue_NULL_VALUE}}
		}
		return &structpb.Value{Kind: &structpb.Value_StringValue{StringValue: *v}}
	case int64:
		return &structpb.Value{Kind: &structpb.Value_StringValue{StringValue: strconv.FormatInt(v, 10)}}
	case *int64:
		if v == nil {
			return &structpb.Value{Kind: &structpb.Value_NullValue{NullValue: structpb.NullValue_NULL_VALUE}}
		}
		return &structpb.Value{Kind: &structpb.Value_StringValue{StringValue: strconv.FormatInt(*v, 10)}}
	default:
		return &structpb.Value{Kind: &structpb.Value_StringValue{StringValue: fmt.Sprintf("%v", v)}}
	}
}

func sha256Hash(str string) string {
	hash := sha256.Sum256([]byte(str))
	return hex.EncodeToString(hash[:])
}

func generateUUID() string {
	b := make([]byte, 16)
	rand.Read(b)
	b[6] = (b[6] & 0x0f) | 0x40
	b[8] = (b[8] & 0x3f) | 0x80
	return fmt.Sprintf("%x-%x-%x-%x-%x", b[0:4], b[4:6], b[6:8], b[8:10], b[10:])
}

func percentile(sorted []time.Duration, fraction float64) time.Duration {
	if len(sorted) == 0 {
		return 0
	}
	index := int(float64(len(sorted)) * fraction)
	if index >= len(sorted) {
		index = len(sorted) - 1
	}
	return sorted[index]
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
