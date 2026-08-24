package main

import (
	"context"
	"crypto/tls"
	"fmt"
	"os"
	"sync"
	"sync/atomic"

	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
)

var transportDiagnosticOnce sync.Once

const (
	spannerEndpoint = "spanner.googleapis.com:443"
	spannerDomain   = "spanner.googleapis.com"
	spannerScope    = "https://www.googleapis.com/auth/spanner.data"
)

func isDirectPathEnabled() bool {
	return os.Getenv("GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS") == "true" ||
		os.Getenv("GOOGLE_CLOUD_ENABLE_DIRECT_PATH") == "true"
}

func init() {
	if !isDirectPathEnabled() {
		// Force-disable gRPC DirectPath at module initialization time unless explicitly enabled
		_ = os.Setenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH", "true")
		_ = os.Setenv("DISABLE_DIRECT_PATH", "true")
	}
}

// CoreClient manages multiplexed gRPC connections, authentication, and request routing.
type CoreClient struct {
	conns       []*grpc.ClientConn
	reqCounter  uint64
	tokenSource oauth2.TokenSource
	ctx         context.Context
	cancel      context.CancelFunc
}

// NewCoreClient initializes the Go Spanner Core client.
// When GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS=true, it uses gapic.NewClient with a gRPC connection pool to enable DirectPath.
// Otherwise, it explicitly disables gRPC DirectPath to maintain an apples-to-apples network comparison with the Rust prototype and Node.js baseline.
func NewCoreClient(channelCount int) (*CoreClient, error) {
	ctx, cancel := context.WithCancel(context.Background())

	limit := channelCount
	if limit <= 0 {
		limit = 1
	}

	// 1. Initialize GCP Application Default Credentials TokenSource (cached & thread-safe)
	tokenSource, err := google.DefaultTokenSource(ctx, spannerScope)
	if err != nil {
		// In mock/test environments without ADC, allow fallback
		tokenSource = oauth2.StaticTokenSource(&oauth2.Token{
			AccessToken: "mock-token",
			TokenType:   "Bearer",
		})
	}

	if isDirectPathEnabled() {
		_ = os.Unsetenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH")
		_ = os.Unsetenv("DISABLE_DIRECT_PATH")
	} else {
		_ = os.Setenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH", "true")
		_ = os.Setenv("DISABLE_DIRECT_PATH", "true")
	}

	// 2. Configure TLS matching standard Spanner endpoint
	tlsConfig := &tls.Config{
		ServerName: spannerDomain,
	}
	creds := credentials.NewTLS(tlsConfig)

	dialOpts := []grpc.DialOption{
		grpc.WithTransportCredentials(creds),
		// HTTP/2 Flow Control Windows: increase from default 64KB to 4MB/16MB
		// to allow Spanner large result sets to stream at full line-rate without stalling
		grpc.WithInitialWindowSize(4 * 1024 * 1024),      // 4MB per stream window
		grpc.WithInitialConnWindowSize(16 * 1024 * 1024), // 16MB per connection window
		grpc.WithDefaultCallOptions(
			grpc.MaxCallRecvMsgSize(100 * 1024 * 1024), // 100MB
			grpc.MaxCallSendMsgSize(100 * 1024 * 1024),
		),
	}

	if !isDirectPathEnabled() {
		// Disable service config / DirectPath resolution to enforce standard GFE routing
		dialOpts = append(dialOpts, grpc.WithDisableServiceConfig())
	}

	// 3. Create multiplexed gRPC connection pool matching the requested channelCount
	conns := make([]*grpc.ClientConn, limit)
	for i := 0; i < limit; i++ {
		conn, err := grpc.DialContext(ctx, spannerEndpoint, dialOpts...)
		if err != nil {
			cancel()
			return nil, fmt.Errorf("failed to connect to Spanner endpoint %s: %w", spannerEndpoint, err)
		}
		conns[i] = conn
	}

	transportDiagnosticOnce.Do(func() {
		fmt.Fprintf(os.Stderr,
			"SPANNER_GO_RUNTIME transport=%s direct_path=%t endpoint=%s codec=vtprotobuf-raw-values\n",
			map[bool]string{true: "directpath", false: "gfe"}[isDirectPathEnabled()],
			isDirectPathEnabled(),
			spannerEndpoint)
	})

	return &CoreClient{
		conns:       conns,
		reqCounter:  0,
		tokenSource: tokenSource,
		ctx:         ctx,
		cancel:      cancel,
	}, nil
}

// ExecuteStreamingSql dispatches the streaming SQL call over the connection pool.
func (c *CoreClient) ExecuteStreamingSql(ctx context.Context, req *spannerpb.ExecuteSqlRequest) (spannerpb.Spanner_ExecuteStreamingSqlClient, error) {
	conn := c.GetConn()
	if conn == nil {
		return nil, fmt.Errorf("no active gRPC connection available")
	}
	spannerClient := spannerpb.NewSpannerClient(conn)
	return spannerClient.ExecuteStreamingSql(ctx, req, grpc.ForceCodecV2(vtSafeCodec{}))
}

type rawExecuteStreamingSQLClient interface {
	Header() (metadata.MD, error)
	Trailer() metadata.MD
	RecvRaw() (rawPartialResultSet, error)
}

type rawExecuteStreamingSQLReceiver struct {
	spannerpb.Spanner_ExecuteStreamingSqlClient
	codec *rawVTCodec
}

func (r *rawExecuteStreamingSQLReceiver) RecvRaw() (rawPartialResultSet, error) {
	if _, err := r.Spanner_ExecuteStreamingSqlClient.Recv(); err != nil {
		_, _ = r.codec.take()
		return rawPartialResultSet{}, err
	}
	raw, ok := r.codec.take()
	if !ok {
		return rawPartialResultSet{}, fmt.Errorf("raw PartialResultSet missing after successful gRPC receive")
	}
	return raw, nil
}

// ExecuteStreamingSqlRaw installs one raw codec per stream over the connection pool.
func (c *CoreClient) ExecuteStreamingSqlRaw(ctx context.Context, req *spannerpb.ExecuteSqlRequest) (rawExecuteStreamingSQLClient, error) {
	conn := c.GetConn()
	if conn == nil {
		return nil, fmt.Errorf("no active gRPC connection available")
	}
	codec := new(rawVTCodec)
	stream, err := spannerpb.NewSpannerClient(conn).ExecuteStreamingSql(ctx, req, grpc.ForceCodecV2(codec))
	if err != nil {
		return nil, err
	}
	return &rawExecuteStreamingSQLReceiver{
		Spanner_ExecuteStreamingSqlClient: stream,
		codec:                             codec,
	}, nil
}

// GetConn returns a connection from the pool via round-robin distribution.
func (c *CoreClient) GetConn() *grpc.ClientConn {
	count := uint64(len(c.conns))
	if count == 0 {
		return nil
	}
	idx := atomic.AddUint64(&c.reqCounter, 1) % count
	return c.conns[idx]
}

// GetToken retrieves the cached OAuth2 bearer token.
func (c *CoreClient) GetToken() (*oauth2.Token, error) {
	if c.tokenSource == nil {
		return nil, fmt.Errorf("token source is not configured")
	}
	return c.tokenSource.Token()
}

// Close terminates all gRPC connections and cancels the background context.
func (c *CoreClient) Close() {
	if c.cancel != nil {
		c.cancel()
	}
	for _, conn := range c.conns {
		if conn != nil {
			_ = conn.Close()
		}
	}
}
