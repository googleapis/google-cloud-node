package main

import (
	"context"
	"crypto/tls"
	"fmt"
	"os"
	"sync/atomic"

	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

const (
	spannerEndpoint = "spanner.googleapis.com:443"
	spannerDomain   = "spanner.googleapis.com"
	spannerScope    = "https://www.googleapis.com/auth/spanner.data"
)

// CoreClient manages multiplexed gRPC connections, authentication, and request routing.
type CoreClient struct {
	conns       []*grpc.ClientConn
	reqCounter  uint64
	tokenSource oauth2.TokenSource
	ctx         context.Context
	cancel      context.CancelFunc
}

func init() {
	// Force-disable gRPC DirectPath at module initialization time
	_ = os.Setenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH", "true")
	_ = os.Setenv("DISABLE_DIRECT_PATH", "true")
}

// NewCoreClient initializes the Go Spanner Core client.
// It explicitly disables gRPC DirectPath to maintain an apples-to-apples network comparison
// with the Rust prototype and the Node.js baseline.
func NewCoreClient(channelCount int) (*CoreClient, error) {
	// 1. Explicitly disable gRPC DirectPath in Go Spanner / gRPC client
	// to enforce standard Google Frontend (GFE) network routing.
	_ = os.Setenv("GOOGLE_CLOUD_DISABLE_DIRECT_PATH", "true")
	_ = os.Setenv("DISABLE_DIRECT_PATH", "true")

	ctx, cancel := context.WithCancel(context.Background())

	// 2. Initialize GCP Application Default Credentials TokenSource (cached & thread-safe)
	tokenSource, err := google.DefaultTokenSource(ctx, spannerScope)
	if err != nil {
		// In mock/test environments without ADC, allow fallback
		tokenSource = oauth2.StaticTokenSource(&oauth2.Token{
			AccessToken: "mock-token",
			TokenType:   "Bearer",
		})
	}

	// 3. Configure TLS matching standard GFE endpoint
	tlsConfig := &tls.Config{
		ServerName: spannerDomain,
	}
	creds := credentials.NewTLS(tlsConfig)

	dialOpts := []grpc.DialOption{
		grpc.WithTransportCredentials(creds),
		// Disable service config / DirectPath resolution to ensure standard routing
		grpc.WithDisableServiceConfig(),
		grpc.WithDefaultCallOptions(
			grpc.MaxCallRecvMsgSize(100 * 1024 * 1024), // 100MB
			grpc.MaxCallSendMsgSize(100 * 1024 * 1024),
		),
	}

	// 4. Create multiplexed gRPC connection pool matching the requested channelCount
	limit := channelCount
	if limit <= 0 {
		limit = 1
	}

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
		reqCounter:  0,
		tokenSource: tokenSource,
		ctx:         ctx,
		cancel:      cancel,
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
