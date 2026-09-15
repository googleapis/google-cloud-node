package main

import (
	"context"
	"crypto/tls"
	"fmt"
	"net"
	"os"
	"runtime/pprof"
	"strconv"
	"sync"
	"sync/atomic"
	"time"

	gapic "cloud.google.com/go/spanner/apiv1"
	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/option"
	"google.golang.org/grpc"
	"google.golang.org/grpc/connectivity"
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
	maybeStartCPUProfile()
}

// maybeStartCPUProfile writes a Go CPU profile to the path in
// SPANNER_GO_CPUPROFILE, covering SPANNER_GO_CPUPROFILE_SECONDS (default 30)
// from library load. The V8 profiler cannot see Go runtime threads, so this is
// the only way to attribute the Go half of per-request CPU.
//
// Entirely inert unless the variable is set.
func maybeStartCPUProfile() {
	path := os.Getenv("SPANNER_GO_CPUPROFILE")
	if path == "" {
		return
	}
	seconds := 30
	if s := os.Getenv("SPANNER_GO_CPUPROFILE_SECONDS"); s != "" {
		if n, err := strconv.Atoi(s); err == nil && n > 0 {
			seconds = n
		}
	}
	f, err := os.Create(path)
	if err != nil {
		fmt.Fprintf(os.Stderr, "[spanner-core] cpuprofile: %v\n", err)
		return
	}
	if err := pprof.StartCPUProfile(f); err != nil {
		fmt.Fprintf(os.Stderr, "[spanner-core] cpuprofile: %v\n", err)
		_ = f.Close()
		return
	}
	fmt.Fprintf(os.Stderr, "[spanner-core] CPU profile -> %s (%ds)\n", path, seconds)
	go func() {
		time.Sleep(time.Duration(seconds) * time.Second)
		pprof.StopCPUProfile()
		_ = f.Close()
		fmt.Fprintf(os.Stderr, "[spanner-core] CPU profile written to %s\n", path)
	}()
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

		if os.Getenv("SPANNER_NATIVE_DEBUG") != "" {
			fmt.Fprintf(os.Stderr,
				"[spanner-core] transport=GAPIC/DirectPath-eligible pool=%d "+
					"(custom window sizes and channel pre-warm do NOT apply on this path)\n",
				limit)
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

	// 5. Pre-warm the pool.
	//
	// grpc.DialContext is lazy: the TCP connect and TLS handshake happen on the
	// channel's first RPC. With a pool of N channels and round-robin dispatch,
	// the first N requests each pay that cost (measured at several seconds per
	// channel), which badly skews short benchmark runs and any latency
	// percentile computed over them.
	//
	// Drive every channel to READY and prime the OAuth token here, in parallel,
	// so the cost lands at construction instead of in the measured workload.
	// Steady-state behaviour is unchanged. Set SPANNER_NATIVE_NO_PREWARM=1 to
	// restore the old lazy behaviour.
	if os.Getenv("SPANNER_NATIVE_NO_PREWARM") == "" && !plaintext {
		warmStart := time.Now()
		var wg sync.WaitGroup

		for _, c := range conns {
			wg.Add(1)
			go func(cc *grpc.ClientConn) {
				defer wg.Done()
				wctx, wcancel := context.WithTimeout(ctx, 5*time.Second)
				defer wcancel()
				cc.Connect()
				for {
					s := cc.GetState()
					if s == connectivity.Ready {
						return
					}
					// Returns false on timeout/cancellation; give up quietly and
					// let the first real RPC retry.
					if !cc.WaitForStateChange(wctx, s) {
						return
					}
				}
			}(c)
		}

		// The first token fetch hits the metadata server or reads ADC from disk.
		wg.Add(1)
		go func() {
			defer wg.Done()
			_, _ = tokenSource.Token()
		}()

		wg.Wait()

		if os.Getenv("SPANNER_NATIVE_DEBUG") != "" {
			fmt.Fprintf(os.Stderr, "[spanner-core] pre-warmed %d channel(s) in %v\n",
				limit, time.Since(warmStart).Round(time.Millisecond))
		}
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
