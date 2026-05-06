FROM golang:1.25-bookworm AS build
WORKDIR /src
COPY issue/go/go.mod ./go.mod
COPY issue/go/go.sum ./go.sum
RUN go mod download
COPY issue/go/main.go ./main.go
RUN CGO_ENABLED=0 GOOS=linux go build -o /out/insert-benchmark ./main.go

FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=build /out/insert-benchmark /insert-benchmark
ENTRYPOINT ["/insert-benchmark"]
