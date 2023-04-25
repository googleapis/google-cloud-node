now=$(date -u -d "-15 min" +"%Y-%m-%dT%H:%M:%SZ")
gcloud builds list --format="value(id)" --filter="substitutions.REF_NAME="$REF_NAME" AND status="WORKING" AND create_time<"$now"" | while IFS= read -r line ; do
    echo "gcloud builds list --format='value(id)' --filter=substitutions.REF_NAME="$REF_NAME" AND status="WORKING" AND create_time<"$now""
    gcloud builds cancel "$line"
done
