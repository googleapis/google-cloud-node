package main

import (
	"context"
	"crypto/tls"
	"fmt"
	"net"
	"os"
	"sync/atomic"

	gapic "cloud.google.com/go/spanner/apiv1"
	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/option"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/credentials/insecure"
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
		// Enable gRPC DirectPath via GAPIC client with connection pooling matching channelCount
		os.Unsetenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH")
		os.Unsetenv("DISABLE_DIRECT_PATH")

		gapicClient, err := gapic.NewClient(ctx, option.WithGRPCConnectionPool(limit))
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

	// 3. Resolve the target endpoint. Production (GFE + TLS) is the default;
	// SPANNER_EMULATOR_HOST selects a plaintext local emulator and
	// SPANNER_NATIVE_ENDPOINT overrides the host while keeping TLS. Neither is
	// set in benchmark runs, so the production path is byte-for-byte unchanged.
	endpoint := spannerEndpoint
	serverName := spannerDomain
	plaintext := false

	if h := os.Getenv("SPANNER_EMULATOR_HOST"); h != "" {
		endpoint = h
		plaintext = true
	} else if h := os.Getenv("SPANNER_NATIVE_ENDPOINT"); h != "" {
		endpoint = h
		if host, _, splitErr := net.SplitHostPort(h); splitErr == nil {
			serverName = host
		} else {
			serverName = h
		}
	}

	var creds credentials.TransportCredentials
	if plaintext {
		creds = insecure.NewCredentials()
	} else {
		creds = credentials.NewTLS(&tls.Config{ServerName: serverName})
	}

	if os.Getenv("SPANNER_NATIVE_DEBUG") != "" {
		fmt.Fprintf(os.Stderr,
			"[spanner-core] endpoint=%s plaintext=%v serverName=%s channels=%d\n",
			endpoint, plaintext, serverName, limit)
	}

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
		conn, err := grpc.DialContext(ctx, endpoint, dialOpts...)
		if err != nil {
			cancel()
			return nil, fmt.Errorf("failed to connect to Spanner endpoint %s: %w", endpoint, err)
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
