package main

import (
	"context"
	"fmt"
	"net"

	sppb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

type mockSpannerServer struct {
	sppb.UnimplementedSpannerServer
}

func (s *mockSpannerServer) CreateSession(ctx context.Context, req *sppb.CreateSessionRequest) (*sppb.Session, error) {
	md, _ := metadata.FromIncomingContext(ctx)
	fmt.Printf("[Mock Server] CreateSession incoming headers:\n")
	for k, v := range md {
		fmt.Printf("  %s: %v\n", k, v)
	}
	fmt.Printf("[Mock Server] Database in request: %q\n", req.Database)
	return &sppb.Session{Name: "dummy-session-name"}, nil
}

func main() {
	lis, err := net.Listen("tcp", "127.0.0.1:50051")
	if err != nil {
		panic(err)
	}
	s := grpc.NewServer()
	sppb.RegisterSpannerServer(s, &mockSpannerServer{})
	fmt.Println("[Mock Server] Listening on 127.0.0.1:50051...")
	if err := s.Serve(lis); err != nil {
		panic(err)
	}
}
