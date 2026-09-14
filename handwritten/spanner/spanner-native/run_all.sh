#!/usr/bin/env bash
#
# Runs all three workloads through both the stock pure-JS client and the Go
# shared core, against a real Spanner database, and writes one log per run.
#
# Usage:
#   bash handwritten/spanner/spanner-native/run_all.sh [workload ...]
#
#   With no arguments, runs all three workloads.
#   Examples:
#     bash run_all.sh                        # all three
#     bash run_all.sh point-select           # just point-select
#     bash run_all.sh read-narrow-result-set read-large-result-set
#
# Overridable via environment:
#   PROJECT INSTANCE DATABASE TABLE
#   DURATION           per-run duration              (default 180s)
#   THREADS            concurrency                   (default 1)
#   CHANNELS           SPANNER_NATIVE_CHANNELS       (default 4)
#   PS_TPS  PS_ROWS    point-select rate / key space (default 50 / 100000)
#   RN_TPS  RN_ROWS    read-narrow rate / rows       (default 2  / 200000)
#   RL_TPS  RL_ROWS    read-large  rate / rows       (default 2  / 100000)
#   OUTDIR             log directory                 (default ./benchmark-results)
#
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"

PROJECT="${PROJECT:-span-cloud-testing}"
INSTANCE="${INSTANCE:-suvham-testing}"
DATABASE="${DATABASE:-benchmark_db_async}"
TABLE="${TABLE:-AsyncBenchmarkTable}"

DURATION="${DURATION:-180s}"
THREADS="${THREADS:-1}"
CHANNELS="${CHANNELS:-4}"

PS_TPS="${PS_TPS:-50}"
PS_ROWS="${PS_ROWS:-100000}"   # AsyncBenchmarkTable holds user-0 .. user-99999
RN_TPS="${RN_TPS:-2}"
RN_ROWS="${RN_ROWS:-200000}"
RL_TPS="${RL_TPS:-2}"
RL_ROWS="${RL_ROWS:-100000}"

OUTDIR="${OUTDIR:-$REPO_ROOT/benchmark-results}"
mkdir -p "$OUTDIR"
STAMP="$(date +%Y%m%d-%H%M%S)"

WORKLOADS=("$@")
if [ ${#WORKLOADS[@]} -eq 0 ]; then
  WORKLOADS=(point-select read-narrow-result-set read-large-result-set)
fi

echo "target   : projects/$PROJECT/instances/$INSTANCE/databases/$DATABASE"
echo "table    : $TABLE"
echo "duration : $DURATION per run, threads=$THREADS, channels=$CHANNELS"
echo "output   : $OUTDIR"
echo

workload_args() {
  case "$1" in
    point-select)           echo "--tps $PS_TPS --num-rows $PS_ROWS" ;;
    read-narrow-result-set) echo "--tps $RN_TPS --num-rows $RN_ROWS" ;;
    read-large-result-set)  echo "--tps $RL_TPS --num-rows $RL_ROWS" ;;
    *)                      echo "" ;;
  esac
}

for workload in "${WORKLOADS[@]}"; do
  for path in stock core; do

    if [ "$path" = "core" ]; then
      export SPANNER_NATIVE_CORE=go
      export SPANNER_NATIVE_CHANNELS="$CHANNELS"
    else
      unset SPANNER_NATIVE_CORE
      unset SPANNER_NATIVE_CHANNELS
    fi

    log="$OUTDIR/${STAMP}_${workload}_${path}.log"
    echo "=== $workload / $path -> $(basename "$log")"

    BENCH_PROJECT="$PROJECT" \
    BENCH_INSTANCE="$INSTANCE" \
    BENCH_DATABASE="$DATABASE" \
    BENCH_TABLE="$TABLE" \
    BENCH_DURATION="$DURATION" \
    BENCH_THREADS="$THREADS" \
      node "$SCRIPT_DIR/run_benchmark.js" "$workload" $(workload_args "$workload") \
      >"$log" 2>&1

    # Surface the summary inline as well.
    sed -n '/BENCHMARK RESULTS/,/^=====/p' "$log" | sed 's/^/    /'
    echo
  done
done

echo "All runs complete. Logs in $OUTDIR"
echo
echo "Summary:"
for f in "$OUTDIR/${STAMP}"_*.log; do
  name="$(basename "$f" .log | sed "s/^${STAMP}_//")"
  lat=$(grep -A4 -E "latency" "$f" | grep -m1 "mean" | awk '{print $3, $4}')
  cnt=$(grep -A2 -E "latency" "$f" | grep -m1 "count" | awk '{print $3}')
  cpu=$(awk '/cpu_utilization/{f=1} f&&/sum/{print $3; exit}' "$f")
  n=$(awk '/cpu_utilization/{f=1} f&&/count/{print $3; exit}' "$f")
  if [ -n "${cpu:-}" ] && [ -n "${n:-}" ] && [ "${n:-0}" != "0" ]; then
    cpu_mean=$(awk -v s="$cpu" -v c="$n" 'BEGIN{printf "%.3f%%", (s/c)*100}')
  else
    cpu_mean="n/a"
  fi
  printf "  %-45s ops=%-6s mean=%-12s cpu=%s\n" "$name" "${cnt:-?}" "${lat:-?}" "$cpu_mean"
done
