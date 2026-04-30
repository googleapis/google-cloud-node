// Copyright 2026 Google LLC
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

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"sort"
	"strconv"
	"strings"
	"sync"
	"syscall"
	"time"

	"cloud.google.com/go/spanner/admin/instance/apiv1/instancepb"
	"cloud.google.com/go/spanner/apiv1/spannerpb"
	"cloud.google.com/go/spanner/internal/testutil"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/peer"
	"google.golang.org/protobuf/types/known/structpb"
)

const (
	commitTransaction   = "/google.spanner.v1.Spanner/Commit"
	executeStreamingSQL = "/google.spanner.v1.Spanner/ExecuteStreamingSql"
)

func main() {
	addr := flag.String("addr", envString("SPANNER_MOCK_ADDR", ":9010"), "listen address")
	metricsAddr := flag.String("metrics_addr", envString("SPANNER_MOCK_METRICS_ADDR", ":9011"), "HTTP metrics/listen address")
	operation := flag.String("operation", envString("SPANNER_MOCK_OPERATION", "commit"), "target operation to delay and track: commit or query")
	queryLatencyMicros := flag.Int64("query_latency_micros", envInt64("SPANNER_MOCK_QUERY_LATENCY_MICROS", 0), "ExecuteStreamingSql latency in microseconds")
	commitLatencyMicros := flag.Int64("commit_latency_micros", envInt64("SPANNER_MOCK_COMMIT_LATENCY_MICROS", 50000), "Commit latency in microseconds")
	maxConcurrentStreams := flag.Uint("max_concurrent_streams", uint(envInt64("SPANNER_MOCK_MAX_CONCURRENT_STREAMS", 100)), "gRPC max concurrent streams per connection")
	flag.Parse()

	spannerServer := testutil.NewInMemSpannerServer()
	instanceAdminServer := testutil.NewInMemInstanceAdminServer()
	if err := spannerServer.PutStatementResult("SELECT 1", selectOneResult()); err != nil {
		log.Fatalf("PutStatementResult: %v", err)
	}
	if *queryLatencyMicros > 0 {
		spannerServer.PutExecutionTime(testutil.MethodExecuteStreamingSql, testutil.SimulatedExecutionTime{
			MinimumExecutionTime: time.Duration(*queryLatencyMicros) * time.Microsecond,
		})
	}
	if *commitLatencyMicros > 0 {
		spannerServer.PutExecutionTime(testutil.MethodCommitTransaction, testutil.SimulatedExecutionTime{
			MinimumExecutionTime: time.Duration(*commitLatencyMicros) * time.Microsecond,
		})
	}
	go drainReceivedRequests(spannerServer.ReceivedRequests())

	targetMethod := commitTransaction
	if strings.EqualFold(*operation, "query") || strings.EqualFold(*operation, "executeStreamingSql") {
		targetMethod = executeStreamingSQL
	}
	stats := newServerStats(targetMethod)
	grpcServer := grpc.NewServer(
		grpc.MaxConcurrentStreams(uint32(*maxConcurrentStreams)),
		grpc.UnaryInterceptor(stats.unaryInterceptor),
		grpc.StreamInterceptor(stats.streamInterceptor),
	)
	spannerpb.RegisterSpannerServer(grpcServer, spannerServer)
	instancepb.RegisterInstanceAdminServer(grpcServer, instanceAdminServer)

	lis, err := net.Listen("tcp", *addr)
	if err != nil {
		log.Fatalf("listen %s: %v", *addr, err)
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, _ *http.Request) {
		_, _ = w.Write([]byte("ok\n"))
	})
	mux.HandleFunc("/stats", func(w http.ResponseWriter, _ *http.Request) {
		fmt.Fprintf(w, "totalSessionsCreated=%d\ntotalSessionsDeleted=%d\noperation=%s\ntargetMethod=%s\nqueryLatencyMicros=%d\ncommitLatencyMicros=%d\n", spannerServer.TotalSessionsCreated(), spannerServer.TotalSessionsDeleted(), *operation, targetMethod, *queryLatencyMicros, *commitLatencyMicros)
	})
	mux.HandleFunc("/reset", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "POST required", http.StatusMethodNotAllowed)
			return
		}
		stats.reset()
		_, _ = w.Write([]byte("ok\n"))
	})
	mux.HandleFunc("/snapshot", func(w http.ResponseWriter, _ *http.Request) {
		_, _ = w.Write([]byte(stats.snapshotWire()))
	})
	httpServer := &http.Server{Addr: *metricsAddr, Handler: mux}

	go func() {
		if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Printf("metrics server failed: %v", err)
		}
	}()
	go func() {
		log.Printf("SpannerMockServer{addr=%s,metricsAddr=%s,operation=%s,queryLatencyMicros=%d,commitLatencyMicros=%d,maxConcurrentStreams=%d}", lis.Addr().String(), *metricsAddr, *operation, *queryLatencyMicros, *commitLatencyMicros, *maxConcurrentStreams)
		if err := grpcServer.Serve(lis); err != nil {
			log.Printf("grpc server failed: %v", err)
		}
	}()

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)
	<-stop
	log.Printf("SpannerMockServerStopping")
	grpcServer.GracefulStop()
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	_ = httpServer.Shutdown(ctx)
	spannerServer.Stop()
	instanceAdminServer.Stop()
}

type serverStats struct {
	mu                      sync.Mutex
	targetMethod            string
	activeByTransport       map[string]int
	maxActiveByTransport    map[string]int
	callsByTransport        map[string]int
	callsByMethod           map[string]int
	callsByRequestIDChannel map[string]int
}

func newServerStats(targetMethod string) *serverStats {
	stats := &serverStats{targetMethod: targetMethod}
	stats.reset()
	return stats
}

func (s *serverStats) reset() {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.activeByTransport = map[string]int{}
	s.maxActiveByTransport = map[string]int{}
	s.callsByTransport = map[string]int{}
	s.callsByMethod = map[string]int{}
	s.callsByRequestIDChannel = map[string]int{}
}

func (s *serverStats) unaryInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	s.recordMethod(info.FullMethod)
	if info.FullMethod != s.targetMethod {
		return handler(ctx, req)
	}
	transport := transportKey(ctx)
	requestIDChannel := requestIDChannel(ctx)
	s.startTargetRPC(transport, requestIDChannel)
	defer s.finishTargetRPC(transport)
	return handler(ctx, req)
}

func (s *serverStats) streamInterceptor(srv interface{}, stream grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
	s.recordMethod(info.FullMethod)
	if info.FullMethod != s.targetMethod {
		return handler(srv, stream)
	}
	transport := transportKey(stream.Context())
	requestIDChannel := requestIDChannel(stream.Context())
	s.startTargetRPC(transport, requestIDChannel)
	defer s.finishTargetRPC(transport)
	return handler(srv, stream)
}

func (s *serverStats) recordMethod(method string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.callsByMethod[strings.TrimPrefix(method, "/")]++
}

func (s *serverStats) startTargetRPC(transport, requestIDChannel string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.callsByTransport[transport]++
	s.callsByRequestIDChannel[requestIDChannel]++
	s.activeByTransport[transport]++
	if s.activeByTransport[transport] > s.maxActiveByTransport[transport] {
		s.maxActiveByTransport[transport] = s.activeByTransport[transport]
	}
}

func (s *serverStats) finishTargetRPC(transport string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.activeByTransport[transport]--
}

func (s *serverStats) snapshotWire() string {
	s.mu.Lock()
	defer s.mu.Unlock()
	return "callsByTransport=" + wireMap(s.callsByTransport) +
		";maxActiveByTransport=" + wireMap(s.maxActiveByTransport) +
		";callsByMethod=" + wireMap(s.callsByMethod) +
		";callsByRequestIdChannel=" + wireMap(s.callsByRequestIDChannel)
}

func transportKey(ctx context.Context) string {
	p, ok := peer.FromContext(ctx)
	if !ok || p.Addr == nil {
		return "unknown"
	}
	return p.Addr.String()
}

func requestIDChannel(ctx context.Context) string {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return "none"
	}
	values := md.Get("x-goog-spanner-request-id")
	if len(values) == 0 {
		return "none"
	}
	parts := strings.Split(values[0], ".")
	if len(parts) < 4 {
		return "malformed"
	}
	return parts[3]
}

func wireMap(values map[string]int) string {
	if len(values) == 0 {
		return "-"
	}
	keys := make([]string, 0, len(values))
	for key := range values {
		keys = append(keys, key)
	}
	sort.Strings(keys)
	parts := make([]string, 0, len(keys))
	for _, key := range keys {
		parts = append(parts, fmt.Sprintf("%s=%d", key, values[key]))
	}
	return strings.Join(parts, ",")
}

func selectOneResult() *testutil.StatementResult {
	return &testutil.StatementResult{
		Type: testutil.StatementResultResultSet,
		ResultSet: &spannerpb.ResultSet{
			Metadata: &spannerpb.ResultSetMetadata{
				RowType: &spannerpb.StructType{
					Fields: []*spannerpb.StructType_Field{
						{Name: "c", Type: &spannerpb.Type{Code: spannerpb.TypeCode_INT64}},
					},
				},
			},
			Rows: []*structpb.ListValue{
				{Values: []*structpb.Value{{Kind: &structpb.Value_StringValue{StringValue: "1"}}}},
			},
		},
		SetLastFlag: true,
	}
}

func drainReceivedRequests(requests chan interface{}) {
	for range requests {
	}
}

func envString(name, fallback string) string {
	if value := os.Getenv(name); value != "" {
		return value
	}
	return fallback
}

func envInt64(name string, fallback int64) int64 {
	value := os.Getenv(name)
	if value == "" {
		return fallback
	}
	parsed, err := strconv.ParseInt(value, 10, 64)
	if err != nil {
		log.Fatalf("invalid %s=%q: %v", name, value, err)
	}
	return parsed
}
