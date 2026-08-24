package main

import (
	"context"
	"crypto/tls"
	"fmt"
	"os"
	"sync/atomic"

	gapic "cloud.google.com/go/spanner/apiv1"
	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/option"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

const (
	spannerEndpoint = "spanner.googleapis.com:443"
	spannerDomain   = "spanner.googleapis.com"
	spannerScope    = "https://www.googleapis.com/auth/spanner.data"
)

func isDirectPathEnabled() bool {
	return os.Getenv("GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS") == "true" ||
		os.Getenv("GOOGLE_CLOUD_ENABLE_DIRECT_PATH") == "true"
}

// CoreClient manages multiplexed gRPC connections, authentication, and request routing.
type CoreClient struct {
	conns       []*grpc.ClientConn
	gapicClient *gapic.Client
	useGapic    bool
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
		fmt.Printf("  [Go Shared Core] Transport Config: DIRECTPATH ENABLED (ALTS gRPC, pool=%d)\n", limit)
		// Enable gRPC DirectPath via GAPIC client with connection pooling matching channelCount
		_ = os.Unsetenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH")
		_ = os.Unsetenv("DISABLE_DIRECT_PATH")

		dialOpts := []grpc.DialOption{
			grpc.WithInitialWindowSize(4 * 1024 * 1024),      // 4MB per stream window
			grpc.WithInitialConnWindowSize(16 * 1024 * 1024), // 16MB per connection window
			grpc.WithDefaultCallOptions(
				grpc.MaxCallRecvMsgSize(100 * 1024 * 1024),
				grpc.MaxCallSendMsgSize(100 * 1024 * 1024),
			),
		}

		clientOpts := []option.ClientOption{
			option.WithGRPCConnectionPool(limit),
		}
		for _, opt := range dialOpts {
			clientOpts = append(clientOpts, option.WithGRPCDialOption(opt))
		}

		gapicClient, err := gapic.NewClient(ctx, clientOpts...)
		if err != nil {
			cancel()
			return nil, fmt.Errorf("failed to initialize Spanner GAPIC client for DirectPath: %w", err)
		}

		return &CoreClient{
			gapicClient: gapicClient,
			useGapic:    true,
			reqCounter:  0,
			tokenSource: tokenSource,
			ctx:         ctx,
			cancel:      cancel,
		}, nil
	}

	// 2. Explicitly disable gRPC DirectPath in Go Spanner / gRPC client
	// to enforce standard Google Frontend (GFE) network routing.
	_ = os.Setenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH", "true")
	_ = os.Setenv("DISABLE_DIRECT_PATH", "true")

	// 3. Configure TLS matching standard GFE endpoint
	tlsConfig := &tls.Config{
		ServerName: spannerDomain,
	}
	creds := credentials.NewTLS(tlsConfig)

	dialOpts := []grpc.DialOption{
		grpc.WithTransportCredentials(creds),
		// Disable service config / DirectPath resolution to ensure standard routing
		grpc.WithDisableServiceConfig(),
		// HTTP/2 Flow Control Windows: increase from default 64KB to 4MB/16MB
		// to allow Spanner large result sets to stream at full line-rate without stalling
		grpc.WithInitialWindowSize(4 * 1024 * 1024),      // 4MB per stream window
		grpc.WithInitialConnWindowSize(16 * 1024 * 1024), // 16MB per connection window
		grpc.WithDefaultCallOptions(
			grpc.MaxCallRecvMsgSize(100 * 1024 * 1024), // 100MB
			grpc.MaxCallSendMsgSize(100 * 1024 * 1024),
		),
	}

	// 4. Create multiplexed gRPC connection pool matching the requested channelCount
	conns := make([]*grpc.ClientConn, limit)
	for i := 0; i < limit; i++ {
		conn, err := grpc.DialContext(ctx, spannerEndpoint, dialOpts...)
		if err != nil {
			cancel()
			return nil, fmt.Errorf("failed to connect to Spanner endpoint %s: %w", spannerEndpoint, err)
		}
		conns[i] = conn
	}

	return &CoreClient{
		conns:       conns,
		useGapic:    false,
		reqCounter:  0,
		tokenSource: tokenSource,
		ctx:         ctx,
		cancel:      cancel,
	}, nil
}

// ExecuteStreamingSql dispatches the streaming SQL call over DirectPath or the connection pool.
func (c *CoreClient) ExecuteStreamingSql(ctx context.Context, req *spannerpb.ExecuteSqlRequest) (spannerpb.Spanner_ExecuteStreamingSqlClient, error) {
	if c.useGapic && c.gapicClient != nil {
		return c.gapicClient.ExecuteStreamingSql(ctx, req)
	}
	conn := c.GetConn()
	if conn == nil {
		return nil, fmt.Errorf("no active gRPC connection available")
	}
	spannerClient := spannerpb.NewSpannerClient(conn)
	return spannerClient.ExecuteStreamingSql(ctx, req)
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
	if c.gapicClient != nil {
		_ = c.gapicClient.Close()
	}
	for _, conn := range c.conns {
		if conn != nil {
			_ = conn.Close()
		}
	}
}
