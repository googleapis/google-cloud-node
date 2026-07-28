#!/usr/bin/env bash
#
# cleanup_bigtable.sh - Find and delete old Bigtable resources (instances & backups) using gcloud
#
# Usage:
#   ./cleanup_bigtable.sh [OPTIONS]
#
# Options:
#   -d, --days DAYS        Delete instances older than N days (default: 7)
#   -H, --hours HOURS      Delete instances older than N hours (overrides --days)
#   -p, --prefix PREFIX    Filter instances starting with PREFIX (e.g. gt-, gcloud-tests-)
#   --project PROJECT_ID   GCP project ID (default: active gcloud configuration)
#   --dry-run              Preview matching resources without deleting
#   -f, --force            Skip confirmation prompt
#   -h, --help             Show help message

set -euo pipefail

# Default values
HOURS=168  # 7 days
PREFIX=""
PROJECT=""
DRY_RUN=false
FORCE=false

# Terminal colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Color

show_help() {
    cat <<EOF
Usage: $(basename "$0") [OPTIONS]

Identify and delete old Google Cloud Bigtable instances and associated backups in a project.

Options:
  -d, --days DAYS        Delete resources older than DAYS (default: 7)
  -H, --hours HOURS      Delete resources older than HOURS
  -p, --prefix PREFIX    Only target resources whose instance ID or display name starts with PREFIX
  --project PROJECT_ID   GCP Project ID (default: active gcloud project)
  --dry-run              Print matching resources without deleting them
  -f, --force            Skip interactive deletion confirmation
  -h, --help             Show this help menu and exit

Examples:
  # Dry-run: preview instances older than 7 days
  ./cleanup_bigtable.sh --dry-run

  # Delete instances older than 24 hours with prefix 'gt-'
  ./cleanup_bigtable.sh --hours 24 --prefix gt-

  # Delete instances older than 1 day in a specific project without prompt
  ./cleanup_bigtable.sh --days 1 --project my-project-id --force
EOF
    exit 0
}

# Parse options
while [[ $# -gt 0 ]]; do
    case "$1" in
        -d|--days)
            HOURS=$(($2 * 24))
            shift 2
            ;;
        -H|--hours)
            HOURS="$2"
            shift 2
            ;;
        -p|--prefix)
            PREFIX="$2"
            shift 2
            ;;
        --project)
            PROJECT="$2"
            shift 2
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        -f|--force)
            FORCE=true
            shift
            ;;
        -h|--help)
            show_help
            ;;
        *)
            echo -e "${RED}Error: Unknown option '$1'${NC}" >&2
            echo "Run '$(basename "$0") --help' for usage." >&2
            exit 1
            ;;
    esac
done

# Ensure python3 is available
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}Error: python3 is required for timestamp parsing.${NC}" >&2
    exit 1
fi

# Ensure gcloud is available
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}Error: gcloud CLI is not installed or not in PATH.${NC}" >&2
    exit 1
fi

# Resolve project ID if not provided
if [[ -z "$PROJECT" ]]; then
    PROJECT=$(gcloud config get-value project 2>/dev/null || true)
    if [[ -z "$PROJECT" || "$PROJECT" == "(unset)" ]]; then
        echo -e "${RED}Error: No GCP project specified and gcloud default project is unset.${NC}" >&2
        echo "Please specify --project PROJECT_ID or run 'gcloud config set project PROJECT_ID'." >&2
        exit 1
    fi
fi

# Calculate ISO cutoff timestamp in UTC
CUTOFF_ISO=$(python3 -c "
import datetime
cutoff = datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(hours=$HOURS)
print(cutoff.strftime('%Y-%m-%dT%H:%M:%SZ'))
")

echo -e "${BOLD}============================================================${NC}"
echo -e "${BOLD}         Google Cloud Bigtable Resource Cleanup             ${NC}"
echo -e "${BOLD}============================================================${NC}"
echo -e " ${CYAN}Project:${NC}       $PROJECT"
echo -e " ${CYAN}Age Threshold:${NC} > $HOURS hours ($(($HOURS / 24)) days)"
echo -e " ${CYAN}Cutoff Date:${NC}   $CUTOFF_ISO (UTC)"
if [[ -n "$PREFIX" ]]; then
    echo -e " ${CYAN}Name Prefix:${NC}   '$PREFIX'"
fi
if $DRY_RUN; then
    echo -e " ${YELLOW}Mode:${NC}          ${BOLD}DRY RUN${NC} (Preview only, no resources will be deleted)"
else
    echo -e " ${RED}Mode:${NC}          ${BOLD}ACTIVE${NC} (Resources WILL be permanently deleted)"
fi
echo -e "${BOLD}============================================================${NC}"
echo ""

echo -e "Fetching Bigtable instances from project '${CYAN}$PROJECT${NC}'..."

# Retrieve instances as JSON from gcloud
INSTANCES_JSON=$(gcloud bigtable instances list --project="$PROJECT" --format="json" 2>/dev/null || echo "[]")

# Filter instances older than cutoff time and matching prefix
MATCHES_JSON=$(echo "$INSTANCES_JSON" | python3 -c "
import sys, json, datetime

cutoff_str = '$CUTOFF_ISO'
cutoff_dt = datetime.datetime.fromisoformat(cutoff_str.replace('Z', '+00:00'))
now_dt = datetime.datetime.now(datetime.timezone.utc)
prefix = '$PREFIX'

try:
    instances = json.load(sys.stdin)
except Exception:
    instances = []

matched = []
for inst in instances:
    name = inst.get('name', '')
    inst_id = name.split('/')[-1] if '/' in name else name
    display_name = inst.get('displayName', '')
    create_time_str = inst.get('createTime', '')

    if not create_time_str:
        continue

    try:
        create_dt = datetime.datetime.fromisoformat(create_time_str.replace('Z', '+00:00'))
    except Exception:
        continue

    if create_dt < cutoff_dt:
        if prefix:
            if not (inst_id.startswith(prefix) or display_name.startswith(prefix)):
                continue
        age_hours = round((now_dt - create_dt).total_seconds() / 3600, 1)
        matched.append({
            'id': inst_id,
            'displayName': display_name,
            'createTime': create_time_str,
            'ageHours': age_hours
        })

print(json.dumps(matched))
")

COUNT=$(echo "$MATCHES_JSON" | python3 -c "import sys, json; print(len(json.load(sys.stdin)))")

if [[ "$COUNT" -eq 0 ]]; then
    echo -e "${GREEN}No Bigtable instances found matching the specified criteria.${NC}"
    exit 0
fi

echo -e "Found ${YELLOW}$COUNT${NC} instance(s) older than threshold:"
echo "----------------------------------------------------------------------------------------------------"
printf "${BOLD}%-35s %-28s %-20s %-15s${NC}\n" "INSTANCE ID" "DISPLAY NAME" "CREATED AT (UTC)" "AGE (HOURS)"
echo "----------------------------------------------------------------------------------------------------"

echo "$MATCHES_JSON" | python3 -c "
import sys, json
for inst in json.load(sys.stdin):
    print(f\"{inst['id']:<35} {inst['displayName']:<28} {inst['createTime']:<20} {inst['ageHours']:<15}\")
"
echo "----------------------------------------------------------------------------------------------------"

# Handle DRY RUN exit
if $DRY_RUN; then
    echo ""
    echo -e "${YELLOW}[DRY RUN] Finished listing matching resources. No changes were made.${NC}"
    echo -e "To execute deletion, rerun this command without ${BOLD}--dry-run${NC}."
    exit 0
fi

# Confirmation Prompt
if ! $FORCE; then
    echo ""
    echo -e "${RED}${BOLD}WARNING: Deleting an instance will permanently remove all clusters, tables, and data within it.${NC}"
    read -p "Are you sure you want to delete these $COUNT instance(s)? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}Operation cancelled by user.${NC}"
        exit 0
    fi
fi

echo ""
echo -e "${BOLD}Starting deletion process...${NC}"

DELETED_COUNT=0
FAILED_COUNT=0

# Iterate over instance IDs
INSTANCES_LIST=$(echo "$MATCHES_JSON" | python3 -c "import sys, json; [print(i['id']) for i in json.load(sys.stdin)]")

for INSTANCE_ID in $INSTANCES_LIST; do
    echo ""
    echo -e "Processing instance: ${CYAN}$INSTANCE_ID${NC}"

    # Check for backups in instance clusters
    BACKUPS_JSON=$(gcloud bigtable backups list --instance="$INSTANCE_ID" --project="$PROJECT" --format="json" 2>/dev/null || echo "[]")
    echo "$BACKUPS_JSON" | python3 -c "
import sys, json
try:
    backups = json.load(sys.stdin)
    for b in backups:
        parts = b.get('name', '').split('/')
        if 'clusters' in parts and 'backups' in parts:
            cluster_id = parts[parts.index('clusters') + 1]
            backup_id = parts[parts.index('backups') + 1]
            print(f'{cluster_id} {backup_id}')
except Exception:
    pass
" | while read -r CLUSTER_ID BACKUP_ID; do
        if [[ -n "$CLUSTER_ID" && -n "$BACKUP_ID" ]]; then
            echo "  Found backup '$BACKUP_ID' in cluster '$CLUSTER_ID', removing first..."
            gcloud bigtable backups delete "$BACKUP_ID" --instance="$INSTANCE_ID" --cluster="$CLUSTER_ID" --project="$PROJECT" --quiet 2>/dev/null || true
        fi
    done

    echo "  Deleting instance '$INSTANCE_ID'..."
    if gcloud bigtable instances delete "$INSTANCE_ID" --project="$PROJECT" --quiet; then
        echo -e "  ${GREEN}✓ Successfully deleted instance '$INSTANCE_ID'${NC}"
        DELETED_COUNT=$((DELETED_COUNT + 1))
    else
        echo -e "  ${RED}✗ Failed to delete instance '$INSTANCE_ID'${NC}"
        FAILED_COUNT=$((FAILED_COUNT + 1))
    fi
done

echo ""
echo -e "${BOLD}============================================================${NC}"
echo -e "${BOLD}                  Cleanup Summary                           ${NC}"
echo -e "${BOLD}============================================================${NC}"
echo -e " Successfully deleted: ${GREEN}$DELETED_COUNT${NC}"
if [[ $FAILED_COUNT -gt 0 ]]; then
    echo -e " Failed deletions:    ${RED}$FAILED_COUNT${NC}"
fi
echo -e "${BOLD}============================================================${NC}"
