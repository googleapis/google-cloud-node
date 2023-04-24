now=$(date -u -d "-2 min" +"%Y-%m-%dT%H:%M:%SZ")
gcloud builds list --format="value(id)" --filter="substitutions.REF_NAME="$REF_NAME" AND status="WORKING" AND create_time<"$now"" | while IFS= read -r line ; do
    echo "$now"
    echo "$line"
    echo "gcloud builds list --format="value(id)" --filter="substitutions.REF_NAME="$REF_NAME" AND status="WORKING" AND create_time<"$now"""
    # gcloud builds cancel "$line"
done