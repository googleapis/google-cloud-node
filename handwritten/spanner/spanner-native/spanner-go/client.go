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
// When GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS=true, it uses gapic.NewClient with default options, enabling DirectPath on GCE VMs.
// Otherwise, it passes option.WithEndpoint(spannerEndpoint) which enforces standard CloudPath / GFE TLS routing matching cloud.google.com/go/spanner.
func NewCoreClient(channelCount int) (*CoreClient, error) {
	ctx, cancel := context.WithCancel(context.Background())

	limit := channelCount
	if limit <= 0 {
		limit = 1
	}

	tokenSource, err := google.DefaultTokenSource(ctx, spannerScope)
	if err != nil {
		tokenSource = oauth2.StaticTokenSource(&oauth2.Token{
			AccessToken: "mock-token",
			TokenType:   "Bearer",
		})
	}

	opts := []option.ClientOption{
		option.WithGRPCConnectionPool(limit),
	}

	if !isDirectPathEnabled() {
		// Passing an explicit endpoint disables DirectPath and routes through GFE
		opts = append(opts, option.WithEndpoint(spannerEndpoint))
	}

	gapicClient, err := gapic.NewClient(ctx, opts...)
	if err != nil {
		cancel()
		return nil, fmt.Errorf("failed to initialize Spanner GAPIC client: %w", err)
	}

	return &CoreClient{
		conns:       nil,
		gapicClient: gapicClient,
		useGapic:    true,
		reqCounter:  0,
		tokenSource: tokenSource,
		ctx:         ctx,
		cancel:      cancel,
	}, nil
}

// ExecuteStreamingSql dispatches the streaming SQL call.
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
